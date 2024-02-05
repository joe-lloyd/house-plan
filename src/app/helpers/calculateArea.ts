const calculatePolygonArea = (points: [number, number][]): number => {
  const area = points.reduce((acc, [x, y], i, arr) => {
    const [nextX, nextY] = arr[(i + 1) % arr.length];
    // Convert coordinates to meters before calculation
    return acc + (x / 1000) * (nextY / 1000) - (nextX / 1000) * (y / 1000);
  }, 0);

  return Math.abs(area / 2).toFixed(3);
}

export default calculatePolygonArea;
