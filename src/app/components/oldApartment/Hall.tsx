import React from "react";
import Room from "@/app/components/Room";
import { wallThickness } from "@/app/Token";
import RoomSVG from "@/app/components/RoomSVG";
import RoomNameText from "@/app/components/RoomNameText";
import pointsToString, { Point } from "@/app/helpers/pointsToString";
import calculatePolygonArea from "@/app/helpers/calculateArea";

const OldHall = ({ scale }: { scale: number }) => {
  const pointsArray: Point[] = [
    [0, 0],
    [1200 + 2850 + wallThickness, 0],
    [1200 + 2850 + wallThickness, 1800],
    [0, 1800],
  ];
  const area = calculatePolygonArea(pointsArray);

  return (
    <Room offsetX={4150 + wallThickness} offsetY={4300 + wallThickness}>
      <RoomSVG
        scale={scale}
        name="Hall"
        points={pointsToString(pointsArray)}
        color="lightblue"
      />
      <RoomNameText name="Hall" scale={scale} area={area} />
    </Room>
  );
};

export default OldHall;
