import React, { useRef, useState } from 'react';
import Pencil from '../components/tools/Pencil'; 
import Menu from '../components/Menu';

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

  
    const startTheDrawing = (e) => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        ctx.beginPath();
        const rect = canvas.getBoundingClientRect();
        ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
        setDrawing(true);
    };

    // Draw the lines as the mouse moves
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

    // Stop drawing
    const stopTheDraw = () => {
        if (items === "Pencil") {
            setDrawing(false);
        }
    };

    return (
        <>
            <div className="toolbar w-[300px] h-[50px] flex justify-center items-center bg-gray-50 gap-[10px] mt-[50px] border rounded-[10px] ml-[500px]">
                <Pencil onClick={() => handleToolChange('Pencil')} />
            </div>

            
            <Menu strokeColor={strokeColor} handleStrokeColorChange={handleStrokeColorChange} />

            <div className="canvas-container flex justify-center mt-[30px]">
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
        </>
    );
};

export default Home;
