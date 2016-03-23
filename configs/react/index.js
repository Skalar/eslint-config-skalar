module.exports = {
  "extends": "skalar/configs/es",
  "plugins": ["react"],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "rules": {
    "react/jsx-uses-react": 1,
    "react/prop-types": 2,
    "react/jsx-equals-spacing": [2, "never"],
    "react/jsx-key": 2,
    "react/jsx-no-duplicate-props": [1],
    "react/no-unknown-property": [2],
    "react/no-did-update-set-state": 2,
    "react/jsx-uses-vars": 2,
    "react/jsx-no-bind": 2,
  }
}
