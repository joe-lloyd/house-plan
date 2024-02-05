import React from "react";
import {wallThickness} from "@/app/Token";
import Room from "@/app/components/Room";
import RoomSVG from "@/app/components/RoomSVG";
import RoomNameText from "@/app/components/RoomNameText";
import calculatePolygonArea from "@/app/helpers/calculateArea";
import pointsToString, { Point } from "@/app/helpers/pointsToString";

const Hall = ({scale}: {scale: number}) => {
  const pointsArray: Point[] = [
    [0, 0],
    [1400, 0],
    [1400, 5705],
    [0, 5705],
  ];

  const area = calculatePolygonArea(pointsArray);

    return (
        <Room offsetX={4550 + 1050 + wallThickness + wallThickness} offsetY={0}>
            <RoomSVG
                scale={scale}
                name="Bedroom 1"
                points={pointsToString(pointsArray)}
                color="lightgreen"
            />
            <RoomNameText name="Hall" scale={scale} area={area} />
        </Room>
    )
};

export default Hall;
