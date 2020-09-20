module.exports = {
    env: {
        es6: true,
    },
    extends: [
        "plugin:react/recommended",
        "airbnb",
        "plugin:@typescript-eslint/recommended",
        "prettier/@typescript-eslint",
        "prettier/react",
        "universe/native"
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    plugins: [
        "react",
        "@typescript-eslint",
        "prettier"
    ],
    rules: {
        "react/jsx-filename-extension": ["error", { "extensions": [".js", ".jsx", ".ts", ".tsx"] }],
        "prettier/prettier": "error",
        "react/prop-types": "off",
        "import/no-unresolved": "off",
        "import/extensions": "off",
        "react/jsx-props-no-spreading": "off",
        "object-curly-newline": "off",
        "arrow-parens": "off",
        "operator-linebreak": "off",
        "implicit-arrow-linebreak": "off",
        "comma-dangle": "off"
    }
};
