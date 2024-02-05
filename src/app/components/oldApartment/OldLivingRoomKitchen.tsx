import React from "react";
import Room from "@/app/components/Room";
import { wallThickness } from "@/app/Token";
import RoomSVG from "@/app/components/RoomSVG";
import RoomNameText from "@/app/components/RoomNameText";
import pointsToString, { Point } from "@/app/helpers/pointsToString";
import calculatePolygonArea from "@/app/helpers/calculateArea";

const Bedroom1 = ({ scale }: { scale: number }) => {
  const pointsArray: Point[] = [
    [0, 0],
    [4150, 0],
    [4150, 4300 + wallThickness + 1800 + wallThickness + 4000],
    [0, 4300 + wallThickness + 1800 + wallThickness + 4000],
  ];
  const area = calculatePolygonArea(pointsArray);

  return (
    <Room offsetX={0} offsetY={0}>
      <RoomSVG
        scale={scale}
        name="LivingRoom Kitchen"
        points={pointsToString(pointsArray)}
        color="lightblue"
      />
      <RoomNameText name="LivingRoom Kitchen" scale={scale} area={area} />
    </Room>
  );
};

export default Bedroom1;
