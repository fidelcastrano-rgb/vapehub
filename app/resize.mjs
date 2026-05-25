import sharp from 'sharp';
import fs from 'node:fs';

async function processImages() {
  const files = fs.readdirSync('./public/images').filter(f => f.includes('17797176'));
  for (const f of files) {
    const input = `./public/images/${f}`;
    const newName = f.replace(/_17797176\d+\.png$/, '.jpg');
    const output = `./public/images/${newName}`;
    const outBuffer = await sharp(input)
      .resize(600)
      .jpeg({ quality: 60 })
      .toBuffer();
    
    fs.writeFileSync(output, outBuffer);
    console.log(`Processed ${f} to ${newName}, new size: ${Math.round(outBuffer.length / 1024)} KB`);
  }
}
processImages();
