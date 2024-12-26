import { GridFsStorage } from 'multer-gridfs-storage'
import crypto from 'crypto'
import path from 'path'
import multer from 'multer'

const GridFsStorager: any = GridFsStorage

let storage = new GridFsStorager({
  url: process.env.MONGO_URI,
  file: (req: any, file: any) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = buf.toString('hex') + path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
          bucketName: 'courses'
        };
        resolve(fileInfo);
      });
    });
  }
});
const upload = multer({ storage });

export default upload;
