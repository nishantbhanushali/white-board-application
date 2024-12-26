import React, { useRef, useState } from 'react';
import Pencil from '../components/tools/Pencil'; 
import Menu from '../components/Menu';
import Width from '../components/Width';

const Home = () => {
    const canvasRef = useRef(null);
    const [items, setItems] = useState("");
    const [drawing, setDrawing] = useState(false);
    const [strokeWidth, setStrokeWidth] = useState(2);
    const [strokeColor, setStrokeColor] = useState("black");

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
        if (items === "Pencil") {
            const canvas = canvasRef.current;
            const ctx = canvas.getContext("2d");
            ctx.beginPath();
            const rect = canvas.getBoundingClientRect();
            ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
            setDrawing(true);
        }
    };

    const setlinePoints = (e) => {
        if (!drawing) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        const rect = canvas.getBoundingClientRect();
        ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
        ctx.strokeStyle = strokeColor;
        ctx.lineWidth = strokeWidth;
        ctx.stroke();
    };

    const stopTheDraw = () => {
        if (items === "Pencil") {
            setDrawing(false);
        }
    };

    return (
        <div className="relative">
            {/* Toolbar */}
            <div className="toolbar w-[300px] h-[50px] flex justify-center items-center bg-gray-50 gap-[10px] mt-[20px] border rounded-[10px] fixed top-4 left-1/2 transform -translate-x-1/2 z-10">
                <Pencil onClick={() => handleToolChange('Pencil')} />
            </div>

            {/* Menu and Width (conditionally rendered) */}
            {items === "Pencil" && (
                <div className="fixed  top-20   flex flex-col gap-4 p-4 bg-gray-100 border rounded-md">
                    <Menu strokeColor={strokeColor} handleStrokeColorChange={handleStrokeColorChange} />
                    <Width strokeWidth={strokeWidth} setStrokeWidth={setStrokeWidth} />
                </div>
            )}

            {/* Canvas */}
            <div className="canvas-container flex justify-center mt-[120px]">
                <canvas
                    className="border rounded-[10px] bg-white"
                    ref={canvasRef}
                    width="900"
                    height="600"
                    style={{
                        border: '1px solid black',
                        cursor: items === 'Pencil' ? 'crosshair' : 'default',
                    }}
                    onMouseDown={startTheDrawing}
                    onMouseMove={setlinePoints}
                    onMouseLeave={stopTheDraw}
                    onMouseUp={stopTheDraw}
                ></canvas>
            </div>
        </div>
    );
};

export default Home;
