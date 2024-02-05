import React from "react";
import {wallThickness} from "@/app/Token";
import Room from "@/app/components/Room";
import pointsToString, { Point } from "@/app/helpers/pointsToString";
import RoomSVG from "@/app/components/RoomSVG";
import RoomNameText from "@/app/components/RoomNameText";
import calculatePolygonArea from "@/app/helpers/calculateArea";

const Toilet = ({scale}: {scale: number}) => {
    const pointsArray: Point[] = [
        [0, 0],
        [1050, 0],
        [1050, 1200],
        [0, 1200],
    ];
  const area = calculatePolygonArea(pointsArray);


    return (
        <Room offsetX={4550 + wallThickness} offsetY={0}>
            <RoomSVG
              scale={scale}
              name="Toilet"
              points={pointsToString(pointsArray)}
              color="lightpink"
            />
            <RoomNameText name="Toilet" scale={scale} area={area}/>
        </Room>
    )
};

export default Toilet;
