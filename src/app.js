import cors from "cors";
import express from "express";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import routes from "./routes.js";

import "./database/index.js";

const __dirname = dirname(fileURLToPath(import.meta.url));

class App {
	constructor() {
		this.app = express();

		this.app.use(cors());
		this.middlewares();
		this.routes();
	}

	middlewares() {
		this.app.use(express.json());
		this.app.use(
			"/product-file",
			express.static(resolve(__dirname, "..", "uploads")),
		);
		this.app.use(
			"/category-file",
			express.static(resolve(__dirname, "..", "uploads")),
		);
	}

	routes() {
		this.app.use(routes);
	}
}

export default new App().app;
