import fs from 'fs'

export function readTextFileToBuffer(filePath: string): Buffer{
    const buffer = fs.readFileSync(filePath);
    return buffer;
}