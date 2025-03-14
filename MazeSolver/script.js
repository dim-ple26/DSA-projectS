// const canvas = document.getElementById("mazeCanvas");
// const ctx = canvas.getContext("2d");
// const rows = 5, cols = 5; // Define the size of the maze

// // Maze: 1 = Wall, 0 = Open path, 'S' = Start, 'E' = End
// let maze = [
//     ['S', 0,  1, 0,  0 ],
//     [ 1,  0,  1, 1,  0 ],
//     [ 0,  0,  0, 1,  0 ],
//     [ 1,  1,  0, 1,  0 ],
//     [ 0,  0,  0, 0, 'E']
// ];

// let path = [];

// // Draw the maze
// function drawMaze() {
//     const cellSize = canvas.width / cols;
    
//     for (let i = 0; i < rows; i++) {
//         for (let j = 0; j < cols; j++) {
//             if (maze[i][j] === 1) {
//                 ctx.fillStyle = "black"; // Walls
//             } else if (maze[i][j] === 'S') {
//                 ctx.fillStyle = "green"; // Start
//             } else if (maze[i][j] === 'E') {
//                 ctx.fillStyle = "red"; // End
//             } else {
//                 ctx.fillStyle = "white"; // Open path
//             }
//             ctx.fillRect(j * cellSize, i * cellSize, cellSize, cellSize);
//             ctx.strokeRect(j * cellSize, i * cellSize, cellSize, cellSize);
//         }
//     }
// }

// // Recursive function to solve the maze
// function solveMaze(x, y) {
//     if (x < 0 || y < 0 || x >= rows || y >= cols || maze[x][y] === 1) {
//         return false; // Out of bounds or hit a wall
//     }

//     if (maze[x][y] === 'E') {
//         path.push([x, y]);
//         return true; // Found the exit
//     }

//     if (maze[x][y] === 'V') {
//         return false; // Already visited this path
//     }

//     maze[x][y] = 'V'; // Mark cell as visited
//     path.push([x, y]);

//     // Try moving in all 4 directions (backtracking)
//     if (solveMaze(x + 1, y) || solveMaze(x, y + 1) || solveMaze(x - 1, y) || solveMaze(x, y - 1)) {
//         return true;
//     }

//     path.pop(); // ⏪ Backtrack if no valid path
//     return false;
// }

// function findStart() {
//     for (let i = 0; i < rows; i++) {
//         for (let j = 0; j < cols; j++) {
//             if (maze[i][j] === 'S') {
//                 return [i, j]; // Return start position
//             }
//         }
//     }
// }

// function startSolving() {
//     let [startX, startY] = findStart();
//     path = []; // Reset path

//     if (solveMaze(startX, startY)) {
//         document.getElementById("result").innerText = "✅ Path Found!";
//     } else {
//         document.getElementById("result").innerText = "❌ No Path Found!";
//     }

//     drawPath();
// }

// // Draw the solved path
// function drawPath() {
//     const cellSize = canvas.width / cols;
//     ctx.fillStyle = "blue";
    
//     for (let [x, y] of path) {
//         ctx.fillRect(y * cellSize, x * cellSize, cellSize, cellSize);
//     }
// }

// // Button Click Event
// document.getElementById("solveMaze").addEventListener("click", startSolving);

// // Initial draw
// drawMaze();


const canvas = document.getElementById("mazeCanvas");
const ctx = canvas.getContext("2d");
const rows = 5, cols = 5; // Maze size

// Maze: 1 = Wall, 0 = Open path, 'S' = Start, 'E' = End
let maze = [
    ['S', 0,  1, 0,  0 ],
    [ 1,  0,  1, 1,  0 ],
    [ 0,  0,  0, 1,  0 ],
    [ 1,  1,  0, 1,  0 ],
    [ 0,  0,  0, 0, 'E']
];

let path = [];

// Draw the maze with smooth visuals
function drawMaze() {
    const cellSize = canvas.width / cols;
    
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (maze[i][j] === 1) {
                ctx.fillStyle = "#333"; // Walls (Dark Gray)
            } else if (maze[i][j] === 'S') {
                ctx.fillStyle = "#2ECC71"; // Start (Green)
            } else if (maze[i][j] === 'E') {
                ctx.fillStyle = "#E74C3C"; // End (Red)
            } else {
                ctx.fillStyle = "#ECF0F1"; // Open path (Light Gray)
            }
            ctx.fillRect(j * cellSize, i * cellSize, cellSize, cellSize);
            ctx.strokeStyle = "#333"; // Grid border
            ctx.strokeRect(j * cellSize, i * cellSize, cellSize, cellSize);
        }
    }
}

// Recursive function to solve the maze (Backtracking)
function solveMaze(x, y) {
    if (x < 0 || y < 0 || x >= rows || y >= cols || maze[x][y] === 1) {
        return false; // Out of bounds or hit a wall
    }

    if (maze[x][y] === 'E') {
        path.push([x, y]);
        return true; // ✅ Found the exit
    }

    if (maze[x][y] === 'V') {
        return false; // Already visited
    }

    maze[x][y] = 'V'; // Mark cell as visited
    path.push([x, y]);

    // Move in all 4 directions (Backtracking)
    if (solveMaze(x + 1, y) || solveMaze(x, y + 1) || solveMaze(x - 1, y) || solveMaze(x, y - 1)) {
        return true;
    }

    path.pop(); // ⏪ Backtrack if no valid path
    return false;
}

// Find the starting position
function findStart() {
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (maze[i][j] === 'S') {
                return [i, j];
            }
        }
    }
}

// Function to solve the maze with animation
function startSolving() {
    let [startX, startY] = findStart();
    path = []; // Reset path

    if (solveMaze(startX, startY)) {
        document.getElementById("result").innerText = "✅ Path Found!";
        animatePath();
    } else {
        document.getElementById("result").innerText = "❌ No Path Found!";
    }
}

// Draw the solved path with smooth animation
function animatePath() {
    const cellSize = canvas.width / cols;
    let i = 0;

    function drawStep() {
        if (i < path.length) {
            let [x, y] = path[i];
            ctx.fillStyle = "#3498DB"; // Blue for the path
            ctx.fillRect(y * cellSize, x * cellSize, cellSize, cellSize);
            i++;
            setTimeout(drawStep, 200); // Delay for animation
        }
    }

    drawStep();
}

// Button Click Event
document.getElementById("solveMaze").addEventListener("click", startSolving);

// Initial draw
drawMaze();
