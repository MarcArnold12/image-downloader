const axios = require('axios');
const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');
const { URL } = require('url');
const os = require('os');
const crypto = require('crypto');

// Function to generate a random string
function generateRandomString(length = 5) {
    return crypto.randomBytes(length).toString('hex').substring(0, length);
}

// Function to generate a random directory path
function generateRandomDirectory() {
    const randomDir = path.join(os.tmpdir(), generateRandomString(10));
    if (!fs.existsSync(randomDir)) {
        fs.mkdirSync(randomDir, { recursive: true });
    }
    return randomDir;
}

// Function to download an image
async function downloadImage(url, filename) {
    try {
        const response = await axios.get(url, { responseType: 'stream' });
        response.data.pipe(fs.createWriteStream(filename));
        console.log(`Downloaded: ${filename}`);
    } catch (error) {
        console.error(`Failed to download ${url}: ${error}`);
    }
}

// Main function to process CSV and download images
async function main() {
    const csvPath = 'path/to/your/image_data.csv';  // Update with your actual path
    const scriptDir = generateRandomDirectory();    // Create a random directory
    
    fs.createReadStream(csvPath)
        .pipe(csv())
        .on('data', async (row) => {
            const { random_string, src, alt } = row;
            const cleanAlt = (alt || 'no_alt').replace(/[\s,]/g, '_');  // Replace spaces and commas in alt text
            
            // Create filename
            const filename = path.join(scriptDir, `${random_string}-${cleanAlt}.jpg`);  // Adjust extension if necessary
            
            // Download image
            await downloadImage(src, filename);
        })
        .on('end', () => {
            console.log('CSV file successfully processed.');
        });
}

main();
