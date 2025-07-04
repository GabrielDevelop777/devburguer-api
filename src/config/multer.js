import multer from 'multer';
import { dirname, extname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { v4 } from 'uuid';

// Simula o __dirname em ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
  storage: multer.diskStorage({
    destination: resolve(__dirname, '..', '..', 'uploads'),
    filename: (request, file, callback) =>
      callback(null, v4() + extname(file.originalname)),
  }),
};
