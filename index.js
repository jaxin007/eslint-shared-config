module.exports = {
    env: {
        node: true,
        es6: true
    },
    root: true,
    parser: "@typescript-eslint/parser",
    plugins: [
        "@typescript-eslint/eslint-plugin",
        "import",
        "prettier"
    ],
    extends: [
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:prettier/recommended",
        "plugin:@typescript-eslint/recommended",
        "airbnb-typescript/base",
    ],
    rules: {
        "prettier/prettier": "error",
        "@typescript-eslint/no-unused-vars": ["error", {
            "argsIgnorePattern": "^_",
            "varsIgnorePattern": "^_",
        }],
        "@typescript-eslint/no-explicit-any": "warn",
        "@typescript-eslint/camelcase": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/no-parameter-properties": "off",
        "@typescript-eslint/no-object-literal-type-assertion": "off",
        // Rule is completely broken: https://github.com/typescript-eslint/typescript-eslint/issues/1824
        '@typescript-eslint/indent': ['off'],
        "import/no-cycle": "off",
        '@typescript-eslint/ban-ts-comment': [
            'error',
            {'ts-ignore': 'allow-with-description'},
        ],
        "import/prefer-default-export": "off",
        "no-continue": "off",
        "no-plusplus": "off",
        "no-await-in-loop": "off",
        "no-underscore-dangle": ["error", {"allowAfterThis": true}],
        "class-methods-use-this": "off",
        "no-dupe-class-members": "off",
        "import/order": ["error", {
            "groups": [
                ["builtin", "external"],
                ["parent", "sibling", "index"],
                "object"
            ],
            "newlines-between": "always"
        }],
        "@typescript-eslint/consistent-type-imports": "error",
        "@typescript-eslint/consistent-type-exports": "error"
    },
    parserOptions: {
        "project": "./tsconfig.json"
    }
}
