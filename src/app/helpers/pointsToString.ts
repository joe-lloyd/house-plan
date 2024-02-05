type Point = [number, number];


// This function takes a 2D array of points and converts it to a string format required for the SVG polygon
const pointsToString = (pointsArray: Point[]) => {
    return pointsArray.map(point => point.join(',')).join(' ');
};

export type { Point };
export default pointsToString;