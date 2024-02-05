import React from "react";
import Room from "@/app/components/Room";
import { wallThickness } from "@/app/Token";
import RoomSVG from "@/app/components/RoomSVG";
import RoomNameText from "@/app/components/RoomNameText";
import pointsToString, { Point } from "@/app/helpers/pointsToString";
import calculatePolygonArea from "@/app/helpers/calculateArea";

const OldOffice = ({ scale }: { scale: number }) => {
  const pointsArray: Point[] = [
    [0, 0],
    [1900, 0],
    [1900, 4300],
    [0, 4300],
  ];
  const area = calculatePolygonArea(pointsArray);

  return (
    <Room offsetX={4150 + wallThickness + 2150 + wallThickness} offsetY={0}>
      <RoomSVG
        scale={scale}
        name="Office"
        points={pointsToString(pointsArray)}
        color="lightblue"
      />
      <RoomNameText name="Office" scale={scale} area={area} />
    </Room>
  );
};

export default OldOffice;
