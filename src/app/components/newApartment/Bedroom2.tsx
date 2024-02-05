import React from "react";
import Room from "@/app/components/Room";
import {wallThickness} from "@/app/Token";
import pointsToString, { Point } from "@/app/helpers/pointsToString";
import RoomSVG from "@/app/components/RoomSVG";
import RoomNameText from "@/app/components/RoomNameText";
import calculatePolygonArea from "@/app/helpers/calculateArea";

const Bedroom2 = ({scale}: {scale: number}) => {
    const pointsArray: Point[] = [
        [0, 0],
        [5700, 0],
        [5700, 1930],
        [2600, 1930],
        [2600, 2530],
        [0, 2530]
    ];
  const area = calculatePolygonArea(pointsArray);

    return (
        <Room offsetX={0} offsetY={3075 + wallThickness}>
            <RoomSVG
              scale={scale}
              name="Bedroom 2"
              points={pointsToString(pointsArray)}
              color="lightcyan"
            />
            <RoomNameText name="Bedroom 2" scale={scale} area={area}/>
        </Room>
    )
};

export default Bedroom2;
