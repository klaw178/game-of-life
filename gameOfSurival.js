const unitLength = 10;
const strokeColor = 50;
const colorBtn = document.querySelector('.colorBtn');
const sliderContainer = document.querySelector('.sliderBar');

// patterns //
const gliderGunCoordinates = [
    [
        '0', '0', '0', '0', '0', '0',
        '0', '0', '0', '0', '0', '0',
        '0', '0', '0', '0', '0', '0',
        '0', '0', '0', '0', '0', '0',
        '1'
    ],
    [
        '0', '0', '0', '0', '0', '0',
        '0', '0', '0', '0', '0', '0',
        '0', '0', '0', '0', '0', '0',
        '0', '0', '0', '0', '1', '0',
        '1'
    ],
    [
        '0', '0', '0', '0', '0', '0', '0',
        '0', '0', '0', '0', '0', '1', '1',
        '0', '0', '0', '0', '0', '0', '1',
        '1', '0', '0', '0', '0', '0', '0',
        '0', '0', '0', '0', '0', '0', '1',
        '1'
    ],
    [
        '0', '0', '0', '0', '0', '0', '0',
        '0', '0', '0', '0', '1', '0', '0',
        '0', '1', '0', '0', '0', '0', '1',
        '1', '0', '0', '0', '0', '0', '0',
        '0', '0', '0', '0', '0', '0', '1',
        '1'
    ],
    [
        '1', '1', '0', '0', '0',
        '0', '0', '0', '0', '0',
        '1', '0', '0', '0', '0',
        '0', '1', '0', '0', '0',
        '1', '1'
    ],
    [
        '1', '1', '0', '0', '0', '0',
        '0', '0', '0', '0', '1', '0',
        '0', '0', '1', '0', '1', '1',
        '0', '0', '0', '0', '1', '0',
        '1'
    ],
    [
        '0', '0', '0', '0', '0', '0',
        '0', '0', '0', '0', '1', '0',
        '0', '0', '0', '0', '1', '0',
        '0', '0', '0', '0', '0', '0',
        '1'
    ],
    [
        '0', '0', '0', '0',
        '0', '0', '0', '0',
        '0', '0', '0', '1',
        '0', '0', '0', '1'
    ],
    [
        '0', '0', '0', '0',
        '0', '0', '0', '0',
        '0', '0', '0', '0',
        '1', '1'
    ]
]

const gunCoor2 = [
    [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    ],
    [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    ],
    [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 1, 1, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    ],
    [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 1, 0, 0, 0,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0
    ],
    [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        1, 1, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 1, 0, 0, 0, 0,
        0, 1, 0, 0, 0, 1, 1, 0, 0, 0
    ],
    [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        1, 1, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 1, 0, 0, 0, 1,
        0, 1, 1, 0, 0, 1, 1, 0, 0, 0
    ],
    [
        0, 1, 1, 0, 0, 0, 1, 0, 0, 0,
        0, 0, 0, 1, 1, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 1, 0, 0, 0, 0,
        0, 1, 0, 0, 0, 0, 0, 0, 0, 0
    ],
    [
        0, 1, 0, 1, 0, 0, 0, 1, 0, 0,
        0, 0, 0, 1, 1, 1, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 1, 0, 0, 0,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0
    ],
    [
        0, 0, 1, 1, 1, 1, 1, 0, 0, 0,
        0, 0, 0, 1, 1, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 1, 1, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    ],
    [
        0, 0, 0, 1, 1, 1, 0, 0, 0, 0,
        1, 1, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 1, 0, 1, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    ],
    [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        1, 1, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 1, 1, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    ],
    [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 1, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    ],
    [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    ],
    [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    ],
    [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    ],
    [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    ],
    [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    ],
    [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        1, 1, 0, 0, 0, 0, 0, 0, 0, 0
    ],
    [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0
    ]
]

let checkGenGrid;
document.querySelector('.gen').addEventListener('click', function () {
    genGrid();
    checkGenGrid = true;
    // console.log(checkGenGrid, checkLoop)
})

let checkLoop;
document.querySelector('.startBtn').addEventListener('click', function () {
    if (checkGenGrid == true) {
        loop();
        checkLoop = true;
        // console.log(checkGenGrid, checkLoop)
    }
});

document.querySelector('.stopBtn').addEventListener('click', function () {
    noLoop();
    checkLoop = false;
    // console.log(checkGenGrid, checkLoop)
});

document.querySelector('.reset-gameBtn').addEventListener('click', function () {
    loop();
    init();
    noLoop();
    x = 0, w = 1, z = 18, y = 19;
    checkLoop = false;
    checkGenGrid = false;
    // console.log(checkGenGrid, checkLoop)
});

let slider // To allow users to manipulate the framerate //
let columns; // To be determined by window width //
let rows; // To be determined by window height //
let currentBoard;
let nextBoard;

function setup() {
    // Set the canvas to be under the element #canvas //
    const canvas = createCanvas(windowWidth, windowHeight - 100);
    canvas.parent(document.querySelector('#canvas'));

    // Calculate the number of columns and rows //
    columns = floor(width / unitLength);
    rows = floor(height / unitLength);

    // Making both currentBoard and nextBoard 2-dimensional matrix that has (columns * rows) boxes //
    currentBoard = [];
    nextBoard = [];
    for (let i = 0; i < columns; i++) {
        currentBoard[i] = [];
        nextBoard[i] = []
    }
    // Now both currentBoard and nextBoard are array of array of undefined values //

    // set slider //
    slider = createSlider(1, 30, 15)
    slider.parent(sliderContainer)

    // Set the initial values of the currentBoard and nextBoard //
    init();
    noLoop();
}

function init() {
    for (let i = 0; i < columns; i++) {
        for (let j = 0; j < rows; j++) {
            currentBoard[i][j] = 0
            nextBoard[i][j] = 0;
        }
    }
    for (let i = 0; i < gunCoor2.length; i++) {
        for (let j = 0; j < gunCoor2[i].length; j++) {
            currentBoard[j][i] = parseInt(gunCoor2[i][j]);
        }
    }
}

function draw() {
    let sliderValue = slider.value();
    background(255);
    generate();
    frameRate(sliderValue);
    fillBoardColor();

    // Swap the nextBoard to be the current Board //
    [currentBoard, nextBoard] = [nextBoard, currentBoard];
    checkGameOver();
}

function generate() {
    // Loop over every single box on the board //
    for (let x = 0; x < columns; x++) {
        for (let y = 0; y < rows; y++) {
            // Count all living members in the Moore neighborhood(8 boxes surrounding) //
            let neighbors = 0;
            for (let i of [-1, 0, 1]) {
                for (let j of [-1, 0, 1]) {
                    if (i === 0 && j === 0) {
                        // the cell itself is not its own neighbor //
                        continue;
                    }
                    // The modulo operator is crucial for wrapping on the edge //
                    neighbors += currentBoard[(x + i + columns) % columns][(y + j + rows) % rows];
                }
            }

            // Rules of Life //
            if (currentBoard[x][y] == 1 && neighbors < 2) {
                // Die of Loneliness //
                nextBoard[x][y] = 0;
            } else if (currentBoard[x][y] == 1 && neighbors > 3) {
                // Die of Overpopulation //
                nextBoard[x][y] = 0;
            } else if (currentBoard[x][y] == 0 && neighbors == 3) {
                // New life due to Reproduction //
                nextBoard[x][y] = 1;
            } else {
                // Stasis //
                nextBoard[x][y] = currentBoard[x][y];
            }
        }
    }
}

function hexToRGB(hex) {
    let r = 0, g = 0, b = 0;

    // 3 digits //
    if (hex.length == 4) {
        r = "0x" + hex[1] + hex[1];
        g = "0x" + hex[2] + hex[2];
        b = "0x" + hex[3] + hex[3];

        // 6 digits //
    } else if (hex.length == 7) {
        r = "0x" + hex[1] + hex[2];
        g = "0x" + hex[3] + hex[4];
        b = "0x" + hex[5] + hex[6];
    }
    r = parseInt(r)
    g = parseInt(g)
    b = parseInt(b)
    return [r, g, b];
}

function rgba([r, g, b], a) {
    return `rgba(${r},${g},${b},${a})`
}

function fillBoardColor() {
    for (let i = 0; i < columns; i++) {
        for (let j = 0; j < rows; j++) {
            if (currentBoard[i][j] == 1 && nextBoard[i][j] == 0) {
                fill(rgba(hexToRGB(colorBtn.value),0.75));
            } else if (currentBoard[i][j] == 0 && nextBoard[i][j] == 1) {
                fill(rgba(hexToRGB(colorBtn.value),0.5));
            } else if (currentBoard[i][j] == 1 && nextBoard[i][j] == 1) {
                fill(rgba(hexToRGB(colorBtn.value),1));
            } else {
                fill(rgba(hexToRGB(colorBtn.value),0.25));
            }
            stroke(strokeColor);
            rect(i * unitLength, j * unitLength, unitLength, unitLength);
        }
    }
}

// set coordinates first //
let x = 0, w = 1, z = 18, y = 19;

// genGrid will always overlap with keyPress and ensure the grid coor is always the same
function genGrid() {
    currentBoard[x][z] = 1;
    currentBoard[w][z] = 1;
    currentBoard[w][y] = 1;
    currentBoard[x][y] = 1;
    fill(0)
    rect(x * unitLength, z * unitLength, unitLength, unitLength);
    rect(w * unitLength, z * unitLength, unitLength, unitLength);
    rect(w * unitLength, y * unitLength, unitLength, unitLength);
    rect(x * unitLength, y * unitLength, unitLength, unitLength);
}

function keyPressed() {
    if (checkLoop == true) {
        if (x >= 0 && w <= (columns - 1) && z >= 0 && y <= (rows - 1)) {
            if (keyCode === UP_ARROW) {
                if (z != 0) {
                    z -= 1;
                    y -= 1
                    currentBoard[x][z] = 1;
                    currentBoard[w][z] = 1;
                    currentBoard[w][y] = 1;
                    currentBoard[x][y] = 1;

                    currentBoard[x][y + 1] = 0;
                    currentBoard[w][y + 1] = 0;
                }

            } else if (keyCode === DOWN_ARROW) {
                if (y < (rows - 1)) {
                    z += 1;
                    y += 1;
                    currentBoard[x][z] = 1;
                    currentBoard[w][z] = 1;
                    currentBoard[w][y] = 1;
                    currentBoard[x][y] = 1;

                    currentBoard[x][z - 1] = 0;
                    currentBoard[w][z - 1] = 0;
                }

            } else if (keyCode === LEFT_ARROW) {
                if (x != 0) {
                    x -= 1;
                    w -= 1;
                    currentBoard[x][z] = 1;
                    currentBoard[w][z] = 1;
                    currentBoard[w][y] = 1;
                    currentBoard[x][y] = 1;

                    currentBoard[w + 1][z] = 0;
                    currentBoard[w + 1][y] = 0;
                }
            } else if (keyCode === RIGHT_ARROW) {
                if (w < (columns - 1)) {
                    x += 1;
                    w += 1;
                    currentBoard[x][z] = 1;
                    currentBoard[w][z] = 1;
                    currentBoard[w][y] = 1;
                    currentBoard[x][y] = 1;

                    currentBoard[x - 1][z] = 0;
                    currentBoard[x - 1][y] = 0;
                }
            }
        }
    }
}

let checkGameOverDelayFunction;
//problems to solve framerate //
function checkGameOver() {
    if (checkLoop == true && checkGenGrid == true) {
        if ((currentBoard[x][z] != 1) || (currentBoard[w][z] != 1) || (currentBoard[w][y] != 1) || (currentBoard[x][y] != 1)) {
            console.log('lose');
            clearTimeout(checkGameOverDelayFunction)
            checkGameOverDelayFunction = setTimeout(() => {
                init();
                noLoop();
                alert("Try Harder!");
            }, 100);
            x = 0, w = 1, z = 18, y = 19;
            checkLoop = false;
            checkGenGrid = false;
        } else if ((w == (columns - 1)) && (y == (rows - 1))) {
            console.log('win');
            setTimeout(function () {
                init();
                noLoop();
                alert("Congrats!")
            }, 100);
            x = 0, w = 1, z = 18, y = 19;
            checkLoop = false;
            checkGenGrid = false;
        }
    }
}


// When mouse is dragged //
// function mouseDragged() {

//     // If the mouse coordinate is outside the board // 
//     if (mouseX > unitLength * columns || mouseY > unitLength * rows) {
//         return;
//     }
//     const x = Math.floor(mouseX / unitLength);
//     const y = Math.floor(mouseY / unitLength);
//     currentBoard[x][y] = 1;

//     fill(colorBtn.value);
//     stroke(strokeColor);
//     rect(x * unitLength, y * unitLength, unitLength, unitLength);
// }

// When mouse is pressed //
// function mousePressed() {
//     if (mouseX < unitLength * columns && mouseY < unitLength * rows) {
//         noLoop();
//         mouseDragged();
//     } else return
// }

// When mouse is released // 
// function mouseReleased() {
//     if (mouseX < unitLength * columns && mouseY < unitLength * rows) {
//         loop();
//     } else return
// }


