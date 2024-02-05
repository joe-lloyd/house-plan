import React from "react";
import {loadBearingWallThickness, wallThickness} from "@/app/Token";
import Room from "@/app/components/Room";
import pointsToString, { Point } from "@/app/helpers/pointsToString";
import RoomSVG from "@/app/components/RoomSVG";
import RoomNameText from "@/app/components/RoomNameText";
import calculatePolygonArea from "@/app/helpers/calculateArea";

const Bathroom = ({scale}: {scale: number}) => {
    const pointsArray: Point[] = [
        [0, 0],
        [2700, 0],
        [2700, 1950],
        [0, 1950],
    ];

    const area = calculatePolygonArea(pointsArray);

    return (
        <Room offsetX={4550 + wallThickness + 1050 + wallThickness + 1400 + loadBearingWallThickness} offsetY={0}>
            <RoomSVG
              scale={scale}
              name="Bathroom"
              points={pointsToString(pointsArray)}
              color="lightcoral"
            />
            <RoomNameText name="Bathroom" scale={scale} area={area}/>
        </Room>
    )
};

export default Bathroom;
