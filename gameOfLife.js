let unitLength = 20;
const strokeColor = 50;
const colorBtn = document.querySelector('.colorBtn');
const lonelyDieRuleBtn = document.querySelector('.lonelyDieRuleBtn');
const overcrowdRuleBtn = document.querySelector('.overcrowdRuleBtn');
const bornRuleBtn = document.querySelector('.bornRuleBtn');
const sliderContainer = document.querySelector('.sliderBar');

let start = document.querySelector('.startBtn').addEventListener('click', function () {
    loop();
});
let stop = document.querySelector('.stopBtn').addEventListener('click', function () {
    noLoop();
});
let reset = document.querySelector('.reset-gameBtn').addEventListener('click', function () {
    init();
    loop()
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
    columns = floor(windowWidth / unitLength);
    rows = floor((windowHeight - 100) / unitLength);

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
}

function init() {
    for (let i = 0; i < columns; i++) {
        for (let j = 0; j < rows; j++) {
            currentBoard[i][j] = Math.round(Math.random()); // Initial a random state //
            nextBoard[i][j] = 0;
        }
    }
}

function hexToRGB(h) {
    let r = 0, g = 0, b = 0;

    // 3 digits //
    if (h.length == 4) {
        r = "0x" + h[1] + h[1];
        g = "0x" + h[2] + h[2];
        b = "0x" + h[3] + h[3];

        // 6 digits //
    } else if (h.length == 7) {
        r = "0x" + h[1] + h[2];
        g = "0x" + h[3] + h[4];
        b = "0x" + h[5] + h[6];
    }
    r = parseInt(r)
    g = parseInt(g)
    b = parseInt(b)
    return [r, g, b];
}

function draw() {
    let [r, g, b] = hexToRGB(colorBtn.value)
    let sliderValue = slider.value();

    background(255);
    generate();
    frameRate(sliderValue);

    for (let i = 0; i < columns; i++) {
        for (let j = 0; j < rows; j++) {
            if (currentBoard[i][j] == 1 && nextBoard[i][j] == 0) {
                fill(`rgba(${r},${g},${b},0.75)`);
            } else if (currentBoard[i][j] == 0 && nextBoard[i][j] == 1) {
                fill(`rgba(${r},${g},${b},0.5)`);
            } else if (currentBoard[i][j] == 1 && nextBoard[i][j] == 1) {
                fill(`rgba(${r},${g},${b},1)`);
            } else {
                fill(`rgba(${r},${g},${b},0.25)`)
            }
            stroke(strokeColor);
            rect(i * unitLength, j * unitLength, unitLength, unitLength);
        }
    }
    // Swap the nextBoard to be the current Board //
    [currentBoard, nextBoard] = [nextBoard, currentBoard];
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
            if (currentBoard[x][y] == 1 && neighbors < parseInt(lonelyDieRuleBtn.value)) {
                // Die of Loneliness //
                nextBoard[x][y] = 0;
            } else if (currentBoard[x][y] == 1 && neighbors > parseInt(overcrowdRuleBtn.value)) {
                // Die of Overpopulation //
                nextBoard[x][y] = 0;
            } else if (currentBoard[x][y] == 0 && neighbors == parseInt(bornRuleBtn.value)) {
                // New life due to Reproduction //
                nextBoard[x][y] = 1;
            } else {
                // Stasis //
                nextBoard[x][y] = currentBoard[x][y];
            }
        }
    }
}

// When mouse is dragged //
function mouseDragged() {

    // If the mouse coordinate is outside the board // 
    if (mouseX > unitLength * columns || mouseY > unitLength * rows) {
        return;
    }
    const x = Math.floor(mouseX / unitLength);
    const y = Math.floor(mouseY / unitLength);
    currentBoard[x][y] = 1;

    fill(colorBtn.value);
    stroke(strokeColor);
    rect(x * unitLength, y * unitLength, unitLength, unitLength);
}

// When mouse is pressed //
function mousePressed() {
    if (mouseX < unitLength * columns && mouseY < unitLength * rows) {
        noLoop();
        mouseDragged();
    } 
}

// When mouse is released // 
function mouseReleased() {
    if (mouseX < unitLength * columns && mouseY < unitLength * rows) {
        loop();
    } else return
}

function windowResized() {
    unitLength = (windowWidth/columns);
    resizeCanvas(windowWidth, (rows * unitLength + 10))
}


    // v Control speed of the Game of Life (Checkout framerate, you can use slider to control the framerate )
    // v Allow users to change the rules of survival
    // v Allow users to change the rules of reproduction
    // v Start/Stop the Game of life
    // v Multiple colors of life on the same board
    // v Darken colors for stable life
    // v Random initial states
    // Well-known patterns of Game of Life to select from(Examples:Gosper Glider Gun, Glider, Lightweight train)
    // Use Keyboard to control the cursor to place the life
    // v Resize board on windows resize(Check out windowsResized)
    // v Switching between different styles