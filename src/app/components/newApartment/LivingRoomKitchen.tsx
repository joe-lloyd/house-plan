import React from "react";
import Room from "@/app/components/Room";
import {wallThickness} from "@/app/Token";
import RoomSVG from "@/app/components/RoomSVG";
import pointsToString, { Point } from "@/app/helpers/pointsToString";
import RoomNameText from "@/app/components/RoomNameText";
import calculatePolygonArea from "@/app/helpers/calculateArea";

const LivingRoomKitchen = ({scale}: {scale: number}) => {
    const pointsArray: Point[] = [
        [0, 2530 - 1930],
        [2600 + wallThickness, 2530 - 1930],
        [2600 + wallThickness, 0],
        [5700, 0],
        [5700, 2530 - 1930],
        [7200, 2530 - 1930],
        [7200, 5295 + 2530 - 1930],
        [0, 5295 + 2530 - 1930],
    ];
    const area = calculatePolygonArea(pointsArray);

    return (
        <Room offsetX={0} offsetY={3075 + wallThickness + 1930 + wallThickness}>
            <RoomSVG
              scale={scale}
              name="Livingroom/Kitchen"
              points={pointsToString(pointsArray)}
              color="lightsalmon"
            />
            <RoomNameText name="Livingroom/Kitchen" scale={scale} area={area}/>
        </Room>
    )
};

export default LivingRoomKitchen;
