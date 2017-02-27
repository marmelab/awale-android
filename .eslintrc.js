module.exports = {
    "extends": "airbnb",
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "rules": {
        "indent": ["error", 4],
        "max-len": ["error", { "code": 120, "tabWidth": 4, "ignoreUrls": true }],
        "no-underscore-dangle": ["error", { "allow": ["_id"] }],
        "react/jsx-filename-extension": ["warn", { "extensions": [".js", ".jsx"] }],
        "react/jsx-indent": ["error", 4],
        "react/jsx-indent-props": ["error", 4],
        "import/no-extraneous-dependencies": "off"
    }
};
