import { FlatCompat } from "@eslint/eslintrc";
import oxlint from "eslint-plugin-oxlint";
import unicorn from "eslint-plugin-unicorn";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
	baseDirectory: __dirname,
	extends: ["@feature-sliced"],
});

const ignoreConfig = {
	ignores: [".next/**", "node_modules/**", "dist/**", "biome.json"],
};

const eslintConfig = [
	ignoreConfig,
	...oxlint.buildFromOxlintConfigFile(".oxlintrc.json"),
	...compat.extends("next/core-web-vitals", "next/typescript"),
	{
		plugins: {
			unicorn,
		},
		rules: {
			"unicorn/filename-case": "error",
			"unicorn/no-null": "off",
			"unicorn/no-useless-undefined": "off",
			"unicorn/prefer-node-protocol": "error",
			"unicorn/prefer-module": "error",
			"unicorn/prefer-top-level-await": "error",
		},
	},
];

export default eslintConfig;
