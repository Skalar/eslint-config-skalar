module.exports = {
  "extends": [
    "skalar/configs/es/possibleErrors",
    "skalar/configs/es/bestPractices",
    "skalar/configs/es/strict",
    "skalar/configs/es/variables",
    "skalar/configs/es/nodeCommon",
    "skalar/configs/es/stylistic",
    "skalar/configs/es/es6",
  ],

  "root": true,
  "parser": "babel-eslint",
  "env": {
    "es6": true,
    "node": true,
    "browser": true
  },
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
    }
  }
}
