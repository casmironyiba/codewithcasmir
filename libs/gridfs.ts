
import multer from 'multer';

// Multer configuration
const storage = multer.memoryStorage(); // Store file in memory

const upload = multer({ storage });

export default upload;
