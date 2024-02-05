import React from "react";

interface MeasurementTextProps {
  index: number;
  side: {
    distance: string;
    midpoint: [number, number];
  };
  pointsArray: [number, number][];
  scale: number;
}

// Function to calculate the midpoint for label positioning
const calculateChange = ([startPointX, startPointY]: [number, number], [endPointX, endPointY]: [number, number]) => {
  let dx = endPointX - startPointX;
  let dy = endPointY - startPointY;
  return [dx, dy];
};

const calculateAngle = (dy: number, dx: number): number => {
  let angle = Math.atan2(dy, dx) * 180 / Math.PI;

  // Adjust angle to avoid upside-down text
  if (angle > 90) {
    angle -= 180;
  } else if (angle < -90) {
    angle += 180;
  }

  return angle;
};


const calculatePos = (dx: number, dy: number, midpointX: number, midpointY: number) => {
  const offsetDistance = -200;
  let perpDx = dy;
  let perpDy = -dx;

  let mag = Math.sqrt(perpDx * perpDx + perpDy * perpDy);
  perpDx /= mag;
  perpDy /= mag;

  // Offset the midpoint inside the polygon
  const posX = midpointX + perpDx * offsetDistance;

  const posY = midpointY + perpDy * offsetDistance;

  return [posX, posY];
};
const MeasurementText: React.FC<MeasurementTextProps> = ({ side, pointsArray, scale, index }) => {
  const originalFontSize = 16; // Set this to your original font size
  const adjustedFontSize = originalFontSize / scale; // Adjust font size based on scale
  const [midpointX, midpointY] = side.midpoint;

  const [dx, dy] = calculateChange(pointsArray[index], pointsArray[(index + 1) % pointsArray.length]);
  const angle = calculateAngle(dy, dx);
  const [posX, posY] = calculatePos(dx, dy, midpointX, midpointY);

  return (
    <g>
      <defs>
        <filter id="f1" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx={2/scale} dy={2/scale} stdDeviation={2/scale} floodColor="black" />
        </filter>
      </defs>
      <text
        x={posX}
        y={posY}
        fill="white"
        fontSize={adjustedFontSize}
        fontFamily="Arial"
        textAnchor="middle"
        dominantBaseline="middle"
        transform={`rotate(${angle}, ${posX}, ${posY})`}
        filter="url(#f1)"
      >
        {`${side.distance}m`}
      </text>
    </g>
  );
};

export default MeasurementText;
