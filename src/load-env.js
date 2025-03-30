const fs = require('fs');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

// Convert environment variables to a TypeScript export
const environmentContent = `export const environment = ${JSON.stringify(process.env, null, 2)};`;

// Ensure the environments directory exists
if (!fs.existsSync('./src/environments')) {
  fs.mkdirSync('./src/environments', { recursive: true });
}

// Write environment variables to environment.ts
fs.writeFileSync('./src/environments/environment.ts', environmentContent);