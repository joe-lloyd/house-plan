// Room.tsx
import React, {ReactNode} from 'react';

// Define a type for the individual sections of a room
type Room = {
    offsetX: number; // Offset from the left of the container div
    offsetY: number; // Offset from the top of the container div
    children: ReactNode;
};

const Room: React.FC<Room> = ({offsetX, offsetY, children}) => {
    return (
        <div
            style={{
                position: 'absolute',
                top: `${offsetY}px`,
                left: `${offsetX}px`,
            }}
        >{children}</div>
    );
};

export default Room;
