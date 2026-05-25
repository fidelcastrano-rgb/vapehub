import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';

async function processImages() {
  const dir = './src/assets/images';
  const files = fs.readdirSync(dir).filter(f => f.includes('vape'));
  for (const f of files) {
    const input = path.join(dir, f);
    const newName = f.replace(/_\d+\.png$/, '.jpg');
    const output = `./public/images/${newName}`;
    const outBuffer = await sharp(input)
      .resize(600)
      .jpeg({ quality: 60 })
      .toBuffer();
    
    fs.writeFileSync(output, outBuffer);
    const size = Math.round(outBuffer.length / 1024);
    console.log(`Processed ${f} to ${newName}, new size: ${size} KB`);
  }
}
processImages();
