module.exports = {
  "rules": {
    "array-bracket-spacing": [2, "never"],
    "block-spacing": [2, "always"],
    "comma-spacing": [2, {"before": false, "after": true}],
    "computed-property-spacing": [2, "never"],
    "eol-last": 2,
    "func-names": 0,
    "indent": [2, 2, {"SwitchCase": 1}],
    "jsx-quotes": [1, "prefer-double"],
    // key-spacing: [2, {"beforeColon": false, "afterColon": true}],
    "keyword-spacing": 2,
    "linebreak-style": 2,
    "new-cap": [0, {
      "capIsNewExceptions": [
        "Array",
        "Boolean",
        "Date",
        "Error",
        "Function",
        "Number",
        "Object",
        "RegExp",
        "String",
        "Symbol"
      ]
    }],
    "new-parens": 2,
    "no-array-constructor": 2,
    "no-lonely-if": 2,
    "no-mixed-spaces-and-tabs": 2,
    "no-nested-ternary": 1,
    "no-new-object": 1,
    "no-spaced-func": 2,
    "no-trailing-spaces": 2,
    "no-underscore-dangle": 0,
    "no-unneeded-ternary": 2,
    "no-whitespace-before-property": 2,
    "one-var": [2, {
      "uninitialized": "always",
      "initialized": "never"
    }],
    "padded-blocks": [2, "never"],
    "quote-props": [1, "as-needed"],
    "quotes": [1, "single"],
    "semi": [1, "never"],
    "space-before-blocks": 2,
    "space-before-function-paren": [2, "never"],
    "space-in-parens": [2, "never"],
    "space-infix-ops": 2,
    "space-unary-ops": [1, { "words": true, "nonwords": false }],
    "spaced-comment": [2, "always"],
  }
}
