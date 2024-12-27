import React, { useRef, useState } from 'react';
import Pencil from '../components/tools/Pencil';
import Menu from '../components/Menu';
import Width from '../components/Width';
import Text from '../components/tools/Text';
import Circle from '../components/tools/Circle';
import Rectangle from '../components/tools/Rectangle';

const Home = () => {
    const canvasRef = useRef(null);
    const [clicked, setClicked] = useState(false);
    const [items, setItems] = useState(""); 
    const [drawing, setDrawing] = useState(false);
    const [strokeWidth, setStrokeWidth] = useState(0)
    const [strokeColor, setStrokeColor] = useState("black");
    const [text, setText] = useState({ active: false, x: 0, y: 0, text: "" });
    const [startPos, setStartPos] = useState(null); 
    const handleToolChange = (selectedTool) => {
        setItems(selectedTool);
    };

    const handleStrokeColorChange = (color) => {
        setStrokeColor(color);
    };

    const handleStrokeWidthChange = (width) => {
        setStrokeWidth(width);
    };

    const startTheDrawing = (e) => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        if (items === "Pencil") {
            ctx.beginPath();
            ctx.moveTo(x, y);
            setDrawing(true);
        } else if (items === "Circle" || items === "Rectangle") {
            setStartPos({ x, y }); // Store the starting position for the shape
        }
    };

    const setlinePoints = (e) => {
        if (!drawing && !startPos) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // For drawing pencil
        if (items === "Pencil" && drawing) {
            ctx.lineTo(x, y);
            ctx.strokeStyle = strokeColor;
            ctx.lineWidth = strokeWidth;
            ctx.stroke();
        }

        // For drawing circle
        if (items === "Circle" && startPos) {
            const dx = x - startPos.x;
            const dy = y - startPos.y;
            const radius = Math.sqrt(dx * dx + dy * dy); // Calculate radius
            ctx.beginPath();
            ctx.arc(startPos.x, startPos.y, radius, 0, 2 * Math.PI);
            ctx.fillStyle = strokeColor;
            ctx.lineWidth = strokeWidth;
            ctx.fill();
            ctx.stroke();
        }

        // For drawing rectangle
        if (items === "Rectangle" && startPos) {
            const width = x - startPos.x; // Calculate width based on x-coordinates
            const height = y - startPos.y; // Calculate height based on y-coordinates
            ctx.beginPath();
            ctx.rect(startPos.x, startPos.y, width, height); // Draw rectangle
            ctx.fillStyle = strokeColor;
            ctx.fill();
            ctx.lineWidth = strokeWidth; // Correct strokeWidth
            ctx.stroke();
        }
    };

    const stopTheDraw = () => {
        if (items === "Pencil" || items === "Circle" || items === "Rectangle") {
            setDrawing(false);
        }
        if (items === "Circle" || items === "Rectangle") {
            setStartPos(null); // Reset start position after drawing is complete
        }
    };

    const handleText = (e) => {
        if (items === "Text") {
            const canvas = canvasRef.current;
            const ctx = canvas.getContext("2d");
            const rect = canvas.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            setText({ active: true, x, y, text: "" });
        }
    };

    const handleTextChange = (e) => {
        setText((prev) => ({ ...prev, text: e.target.value }));
    };

    const handleTextSubmit = (e) => {
        if (e.key === "Enter") {
            const canvas = canvasRef.current;
            const ctx = canvas.getContext("2d");
            ctx.fillStyle = strokeColor;
            ctx.font = `${strokeWidth * 5}px Arial`;
            ctx.fillText(text.text, text.x, text.y);
            setText({ active: false, x: 0, y: 0, text: "" });
        }
    };

    const handleOnclick = () => {
        setClicked((prev) => !prev);
    };

    return (
        <div className="relative">
            <div
                className="toolbar w-[300px] h-[50px] flex justify-center items-center bg-gray-50 gap-[10px] mt-[20px] border rounded-[10px] fixed top-4 left-1/2 transform -translate-x-1/2 z-10"
                onClick={handleOnclick}
                style={{
                    background: clicked ? "white" : "gray-50",
                }}
            >
                <Pencil onClick={() => handleToolChange("Pencil")} />
                <Text onClick={() => handleToolChange("Text")} />
                <Circle onClick={() => handleToolChange("Circle")} />
                <Rectangle onClick={() => handleToolChange("Rectangle")} /> {/* Corrected component name */}
            </div>

            {(items === "Rectangle" || items === "Pencil" || items === "Text" || items === "Circle") && (
                <div className="fixed top-20 left-4 flex flex-col gap-4 p-4 bg-gray-100 border rounded-md">
                    <Menu strokeColor={strokeColor} handleStrokeColorChange={handleStrokeColorChange} />
                    <Width strokeWidth={strokeWidth} setStrokeWidth={setStrokeWidth} />
                </div>
            )}

            <div className="canvas-container flex justify-center mt-[120px]">
                <canvas
                    className="border rounded-[10px] bg-white"
                    ref={canvasRef}
                    width="900"
                    height="600"
                    style={{
                        border: "1px solid black",
                        cursor: items === "Pencil" ? "crosshair" : "default",
                    }}
                    onMouseDown={startTheDrawing}
                    onMouseMove={setlinePoints}
                    onMouseLeave={stopTheDraw}
                    onMouseUp={stopTheDraw}
                    onClick={handleText}
                ></canvas>
            </div>

            {text.active && (
                <input
                    type="text"
                    value={text.text}
                    onChange={handleTextChange}
                    onKeyDown={handleTextSubmit}
                    style={{
                        position: "absolute",
                        left: `${text.x}px`,
                        top: `${text.y}px`,
                        border: "1px solid gray",
                        padding: "4px",
                        fontSize: `${strokeWidth * 2}px`,
                    }}
                    autoFocus
                />
            )}
        </div>
    );
};

export default Home;
