import React from "react";

interface RoomTextProps {
  name: string;
  scale: number;
  area: number;
}

const RoomNameText: React.FC<RoomTextProps> = ({ name, scale , area}) => {

  const textStyle: React.CSSProperties = {
    textAlign: "center",
    transform: `scale(${1 / scale})`, // Inverse the scale to keep text size consistent
    fontSize: "16px", // Set a fixed font size for the text
    textShadow: "2px 2px 4px #000", // Text shadow with horizontal and vertical offsets and a blur radius
    pointerEvents: "auto",
  };

  return (
    <div
      style={{
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        position: "absolute",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        pointerEvents: "none",
      }}
    >
      <div style={textStyle}>
        <p>

        {name}
        </p>
        <p>{area}m2</p>
      </div>
    </div>
  );
};

export default RoomNameText;
