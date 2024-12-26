const Width = ({ strokeWidth, setStrokeWidth }) => {
    const handleStrokeChange = (e) => {
        const value = parseInt(e.target.value); // Convert slider value to an integer
        setStrokeWidth(value); // Update the parent state
    };

    return (
        <div className=" mt-[10px] flex flex-col w-100">
            <label  className="font-semibold">Stroke Width: </label>
            <input 
                type="range" 
                id="strokeWidth" 
                value={strokeWidth} 
                min="1" 
                max="10" 
                onChange={handleStrokeChange}
                className="w-[200px] h-[2px] bg-gray-300"
            />
            <span>{strokeWidth}</span> {/* Display the current stroke width */}
        </div>
    );
};


export default Width