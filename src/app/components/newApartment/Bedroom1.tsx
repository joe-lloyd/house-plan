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
    [4550, 0],
    [4550, 3075 - 1190],
    [4550 + 1050 + wallThickness, 3075 - 1190],
    [4550 + 1050 + wallThickness, 3075],
    [0, 3075],
  ];
  const area = calculatePolygonArea(pointsArray);

  return (
    <Room offsetX={0} offsetY={0}>
      <RoomSVG
        scale={scale}
        name="Bedroom 1"
        points={pointsToString(pointsArray)}
        color="lightblue"
      />
      <RoomNameText name="Bedroom 1" scale={scale} area={area} />
    </Room>
  );
};

export default Bedroom1;
