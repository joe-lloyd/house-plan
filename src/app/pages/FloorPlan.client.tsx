import React, { useState } from "react";
import Bedroom1 from "@/app/components/newApartment/Bedroom1";
import Hall from "@/app/components/newApartment/Hall";
import Toilet from "@/app/components/newApartment/Toilet";
import Bathroom from "@/app/components/newApartment/Bathroom";
import Bedroom2 from "../components/newApartment/Bedroom2";
import LivingRoomKitchen from "@/app/components/newApartment/LivingRoomKitchen";
import Bedroom3 from "@/app/components/newApartment/Bedroom3";
import Storage from "@/app/components/newApartment/Storage";
import { useApartmentToggle } from "@/app/providers/ApartmentToggleProvider";
import ApartmentToggle from "@/app/components/ApartmentToggle";
import OldLivingRoomKitchen from "@/app/components/oldApartment/OldLivingRoomKitchen";
import OldBedroom2 from "@/app/components/oldApartment/Bedroom2";
import OldOffice from "@/app/components/oldApartment/Office";
import OldHall from "@/app/components/oldApartment/Hall";
import Shower from "@/app/components/oldApartment/Shower";
import OldBedroom1 from "@/app/components/oldApartment/Bedroom1";
import OldToilet from "@/app/components/oldApartment/Toilet";

const FloorPlanClient: React.FC = () => {
  const [scale, setScale] = useState(0.05);
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);

  const handleWheel = (e) => {
    const scaleChangeFactor = e.deltaY < 0 ? 1.05 : 0.95;

    const newScale = scale * scaleChangeFactor;

    const minScale = 0.05;
    const maxScale = 1;
    const clampedScale = Math.min(Math.max(newScale, minScale), maxScale);

    setScale(clampedScale);
  };

  const { showApartment } = useApartmentToggle();


  const handleMouseDown = (e) => {
    const startX = e.pageX;
    const startY = e.pageY;
    const startOffsetX = offsetX;
    const startOffsetY = offsetY;


    const handleMouseMove = (e) => {
      const newOffsetX = (e.pageX - startX) / scale + startOffsetX;
      const newOffsetY = (e.pageY - startY) / scale + startOffsetY;

      setOffsetX(newOffsetX);
      setOffsetY(newOffsetY);
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  return (
    <>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          overflow: "hidden",
          position: "relative",
          transformOrigin: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onWheel={handleWheel}
      >
        <div
          style={{
            transform: `scale(${scale}) translate(${offsetX}px, ${offsetY}px)`,
            position: "absolute",
            width: "10100px",
            height: "11100px",
            opacity: showApartment ? 1 : 0,
          }}
          onMouseDown={handleMouseDown}
        >
          <Bedroom1 scale={scale} />
          <Toilet scale={scale} />
          <Bedroom2 scale={scale} />
          <Hall scale={scale} />
          <Bathroom scale={scale} />
          <Storage scale={scale} />
          <LivingRoomKitchen scale={scale} />
          <Bedroom3 scale={scale} />
        </div>
        <div
          style={{
            transform: `scale(${scale}) translate(${offsetX}px, ${offsetY}px)`,
            position: "absolute",
            width: "10100px",
            height: "11100px",
            opacity: showApartment ? 0 : 1,
          }}
          onMouseDown={handleMouseDown}
        >
          <OldLivingRoomKitchen scale={scale} />
          <OldBedroom2 scale={scale} />
          <OldOffice scale={scale} />
          <OldHall scale={scale} />
          <Shower scale={scale} />
          <OldBedroom1 scale={scale} />
          <OldToilet scale={scale} />
        </div>
      </div>
      <ApartmentToggle />
    </>
  );
};

export default FloorPlanClient;
