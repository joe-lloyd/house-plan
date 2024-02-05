import React from "react";
import Room from "@/app/components/Room";
import { wallThickness } from "@/app/Token";
import RoomSVG from "@/app/components/RoomSVG";
import RoomNameText from "@/app/components/RoomNameText";
import pointsToString, { Point } from "@/app/helpers/pointsToString";
import calculatePolygonArea from "@/app/helpers/calculateArea";

const OldBedroom1 = ({ scale }: { scale: number }) => {
  const pointsArray: Point[] = [
    [0, 0],
    [2850, 0],
    [2850, 4000],
    [0, 4000],
  ];
  const area = calculatePolygonArea(pointsArray);

  return (
    <Room offsetX={4150 + wallThickness + 1200 + wallThickness} offsetY={4300 + wallThickness + 1800 + wallThickness}>
      <RoomSVG
        scale={scale}
        name="Bedroom1"
        points={pointsToString(pointsArray)}
        color="lightblue"
      />
      <RoomNameText name="Bedroom1" scale={scale} area={area} />
    </Room>
  );
};

export default OldBedroom1;
