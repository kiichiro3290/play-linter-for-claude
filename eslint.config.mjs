import { FlatCompat } from "@eslint/eslintrc";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
	baseDirectory: __dirname,
	extends: ["@feature-sliced"],
});

const ignoreConfig = {
	ignores: [".next/**", "node_modules/**"],
};

const eslintConfig = [
	...compat.extends("next/core-web-vitals", "next/typescript"),
	ignoreConfig,
];

export default eslintConfig;
