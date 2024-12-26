import { GridFsStorage } from 'multer-gridfs-storage'
import crypto from 'crypto'
import path from 'path'
import multer from 'multer'

const MONGO_URI  = 'mongodb://localhost:27017/techLinage'
let storage = new GridFsStorage({
  url:MONGO_URI,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = file.originalname;
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
