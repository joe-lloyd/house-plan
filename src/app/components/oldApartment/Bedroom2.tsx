import React from "react";
import Room from "@/app/components/Room";
import { wallThickness } from "@/app/Token";
import RoomSVG from "@/app/components/RoomSVG";
import RoomNameText from "@/app/components/RoomNameText";
import pointsToString, { Point } from "@/app/helpers/pointsToString";
import calculatePolygonArea from "@/app/helpers/calculateArea";

const OldBedroom2 = ({ scale }: { scale: number }) => {
  const pointsArray: Point[] = [
    [0, 0],
    [2150, 0],
    [2150, 4300],
    [0, 4300],
  ];
  const area = calculatePolygonArea(pointsArray);

  return (
    <Room offsetX={4150 + wallThickness} offsetY={0}>
      <RoomSVG
        scale={scale}
        name="Bedroom 2"
        points={pointsToString(pointsArray)}
        color="lightblue"
      />
      <RoomNameText name="Bedroom 2" scale={scale} area={area} />
    </Room>
  );
};

export default OldBedroom2;
