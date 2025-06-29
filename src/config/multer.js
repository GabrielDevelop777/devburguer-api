import multer from "multer";
import { extname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { v4 } from "uuid";

// Obter o diretório atual
const __filename = fileURLToPath(import.meta.url);
const __dirname = resolve(__filename, "..", "..");

export default {
	storage: multer.diskStorage({
		destination: resolve(__dirname, "uploads"),
		filename: (request, file, callback) => {
			return callback(null, v4() + extname(file.originalname));
		},
	}),
};
