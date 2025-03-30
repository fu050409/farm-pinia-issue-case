import { defineConfig } from "@farmfe/core";
import vue from "unplugin-vue/vite";
import path from "node:path";

export default defineConfig({
	vitePlugins: [vue()],
	compilation: {
		resolve: {
			alias: {
				"@": path.resolve(__dirname, "src"),
			},
		},
		// treeShaking: false, // temporary disable tree shaking will fix this issue
	},
});
