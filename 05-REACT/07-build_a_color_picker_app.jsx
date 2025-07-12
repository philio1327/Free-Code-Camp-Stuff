const { useState } = React;

export const ColorPicker = () => {
    const [color, setColor] = useState("#ffffff");

    const handleChange = (e) => {
        setColor(e.target.value);
    };

    return (
        <div id="color-picker-container" style={{ backgroundColor: color }}>
            <p style={{ marginBottom: "30px", fontSize: "1.2rem" }}>
        Please click below and choose a color
      </p>
            <input
                id="color-input"
                type="color"
                value={color}
                onChange={handleChange}
            />
        </div>
    );
};