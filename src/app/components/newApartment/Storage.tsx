import React from "react";
import { loadBearingWallThickness, wallThickness } from "@/app/Token";
import Room from "@/app/components/Room";
import pointsToString, { Point } from "@/app/helpers/pointsToString";
import RoomSVG from "@/app/components/RoomSVG";
import RoomNameText from "@/app/components/RoomNameText";
import calculatePolygonArea from "@/app/helpers/calculateArea";

const Storage = ({ scale }: { scale: number }) => {
  const pointsArray: Point[] = [
    [0, 0],
    [2700, 0],
    [2700, 2100],
    [0, 2100],
  ];
  const area = calculatePolygonArea(pointsArray);

  return (
    <Room
      offsetX={4550 + wallThickness + 1050 + wallThickness + 1400 + loadBearingWallThickness}
      offsetY={1950 + wallThickness}
    >
      <RoomSVG
        scale={scale}
        name="Storage"
        points={pointsToString(pointsArray)}
        color="lightslategray"
      />
      <RoomNameText name="Storage" scale={scale} area={area} />
    </Room>
  );
};

export default Storage;
