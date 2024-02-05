import React from "react";
import Room from "@/app/components/Room";
import {loadBearingWallThickness, wallThickness} from "@/app/Token";
import pointsToString, { Point } from "@/app/helpers/pointsToString";
import RoomSVG from "@/app/components/RoomSVG";
import RoomNameText from "@/app/components/RoomNameText";
import calculatePolygonArea from "@/app/helpers/calculateArea";

const storageHeight = 2100

const Bedroom2 = ({scale}: {scale: number}) => {
    const pointsArray: Point[] = [
        [0, 0],
        [2700, 0],
        [2700, 6850],
        [0, 6850],
    ];
  const area = calculatePolygonArea(pointsArray);


    return (
        <Room offsetX={4550 + wallThickness + 1050 + wallThickness + 1400 + loadBearingWallThickness} offsetY={1950 + wallThickness + storageHeight + wallThickness}>
            <RoomSVG
              scale={scale}
              name="Bedroom 3"
              points={pointsToString(pointsArray)}
              color="lightcyan"
            />
            <RoomNameText name="Bedroom 3" scale={scale} area={area}/>
        </Room>
    )
};

export default Bedroom2;
