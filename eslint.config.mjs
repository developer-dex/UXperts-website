import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// Disable all rules by using an empty configuration
const eslintConfig = [
  {
    ignores: [
      ".next/**",
      "next-env.d.ts",
      "node_modules/**",
      "yarn.lock",
      "package-lock.json",
      "public/**",
      "tailwind.config.js",
      "dist/**",
      "test-config/**"
    ]
  }
];

export default eslintConfig;
