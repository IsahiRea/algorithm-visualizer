const canvas = document.getElementById('visualizerCanvas');
const ctx = canvas.getContext('2d');

const BUCKET_WIDTH = 150;
const BUCKET_HEIGHT = 50;
const HORIZONTAL_SPACING = 20;
const VERTICAL_SPACING = 20;
const START_X = 50;
const START_Y = 50;

// Hash Table ---------------------------------------------------------------
export function drawHashTable(HT) {

    ctx.clearRect(0, 0, canvas.width, canvas.height);  // Clear the canvas

    let x = START_X;
    let y = START_Y;
    let index = 0;  // To count the number of buckets and layout them in rows

    // Loop through the Hash Table (Map) and draw each key-value pair
    for (let [key, value] of HT) {
        // Draw the bucket (rectangle)
        ctx.fillStyle = '#007bff';
        ctx.fillRect(x, y, BUCKET_WIDTH, BUCKET_HEIGHT);

        // Draw the outline of the bucket
        ctx.strokeStyle = '#000';
        ctx.strokeRect(x, y, BUCKET_WIDTH, BUCKET_HEIGHT);

        // Display the key-value pair inside the bucket
        ctx.fillStyle = '#fff';
        ctx.font = '16px Arial';
        ctx.textAlign = 'left';

        // Draw the key and value in the center of the bucket
        ctx.fillText(`Key: ${key}`, x + 10, y + 20);     // Draw key
        ctx.fillText(`Value: ${value}`, x + 10, y + 40); // Draw value

        // Move to the next position
        x += BUCKET_WIDTH + HORIZONTAL_SPACING;
        index++;

        // If the row is full, move to the next row
        if (x + BUCKET_WIDTH > canvas.width) {
            x = START_X;  // Reset to the start of the new row
            y += BUCKET_HEIGHT + VERTICAL_SPACING;  // Move down
        }
    }
}