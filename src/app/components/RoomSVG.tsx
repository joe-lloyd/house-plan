import React from "react";
import MeasurementText from "@/app/components/MeasurementText";

interface RoomSVGProps {
  name: string;
  points: string;
  color: string;
  scale: number;
}

// Function to calculate distance between two points
const calculateDistance = ([startPointX, startPointY]: [number, number], [endPointX, endPointY]: [number, number]) => {
  return Math.sqrt(Math.pow(endPointX - startPointX, 2) + Math.pow(endPointY - startPointY, 2));
};

// Function to calculate the midpoint for label positioning
const calculateMidpoint = ([startPointX, startPointY]: [number, number], [endPointX, endPointY]: [number, number]): [number, number] => {
  return [(endPointX + startPointX) / 2, (endPointY + startPointY) / 2];
};

const RoomSVG: React.FC<RoomSVGProps> = ({ name, points, color, scale }) => {
  const pointsArray: [number, number][] = points.split(" ").map(point => {
    const [x, y] = point.split(",").map(Number);
    return [x, y] as [number, number];
  });

  // Find min and max x and y to calculate width and height
  const minX = Math.min(...pointsArray.map(point => point[0]));
  const maxX = Math.max(...pointsArray.map(point => point[0]));
  const minY = Math.min(...pointsArray.map(point => point[1]));
  const maxY = Math.max(...pointsArray.map(point => point[1]));

  // Calculate width and height in pixels
  const widthPixels = maxX - minX;
  const heightPixels = maxY - minY;

  // Convert pixels to meters assuming 1px = 1mm
  const widthMeters = widthPixels / 1000;
  const heightMeters = heightPixels / 1000;

  const sides = pointsArray.map((point, index, array) => {
    const nextPoint = array[(index + 1) % array.length]; // Ensures the last point connects to the first
    const distance = (calculateDistance(point, nextPoint) / 1000).toFixed(2); // Distance between points
    const midpoint = calculateMidpoint(point, nextPoint); // Midpoint for text label
    return { distance, midpoint };
  });

  return (
    <svg
      width={`${widthMeters * 1000}px`} height={`${heightMeters * 1000}px`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon points={points} fill={color} />
      {sides.map((side, index) => index < 20 ?
        <MeasurementText
          key={index}
          index={index}
          side={side}
          scale={scale}
          pointsArray={pointsArray}
        />
        : null,
      )}
    </svg>
  );
};

export default RoomSVG;
