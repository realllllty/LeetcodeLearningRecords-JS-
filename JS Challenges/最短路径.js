function shortestPath(coordinates) {
    let totalDistance = 0;
    let currentPoint = [0, 0];  // Start from origin
    let unvisited = [...coordinates];

    while (unvisited.length > 0) {
        let nearestPoint = null;
        let minDistance = Infinity;

        // Find the nearest unvisited point
        for (let point of unvisited) {
        let distance = calculateDistance(currentPoint, point);
        if (distance < minDistance) {
            minDistance = distance;
            nearestPoint = point;
        }
        }

        // Move to the nearest point
        totalDistance += minDistance;
        currentPoint = nearestPoint;
        unvisited = unvisited.filter(p => p !== nearestPoint);
    }

    // Return to origin
    totalDistance += calculateDistance(currentPoint, [0, 0]);

    return totalDistance;
}


function calculateDistance(point1, point2) {
    return Math.sqrt(
        Math.pow(point2[0] - point1[0], 2) + 
        Math.pow(point2[1] - point1[1], 2)
    );
}

// Example usage
let coordinates = [[1, 1], [-1, -1], [2, 2], [-2, 2]];
console.log(shortestPath(coordinates));