import { defineConfig } from "@farmfe/core";
import vue from "unplugin-vue/vite";
import router from "unplugin-vue-router/vite";
import path from "node:path";

export default defineConfig({
	vitePlugins: [
		vue(),
		router({
			routesFolder: "src/views",
			importMode: "sync",
		}),
	],
	compilation: {
		resolve: {
			alias: {
				"@": path.resolve(__dirname, "src"),
			},
		},
	},
});
