module.exports = {
  "parser": "babel-eslint",
  "extends": [
    "airbnb",
  ],
  "env": {
    "browser": true,
    "node": true,
    "jasmine": true,
    "es6": true,
  },
  "globals": {
    "separateSPAName": false, // means it is not writeable
    "LOOKUP": false,
  },
  "plugins": [
    "react-hooks",
  ],
  "rules": {
    "indent": ["error", 2, {
      "SwitchCase": 1,
      "ignoredNodes": ["TemplateLiteral"]
    }
    ],
    "template-curly-spacing": ["off"],
    "react/jsx-props-no-spreading": [0],
    "react/destructuring-assignment": [1],
    'react/react-in-jsx-scope': 'off',
    "import/no-unresolved": [0],
    // TODO: use this _ eslint config in each package instead of circular deps
    // 'import/no-extraneous-dependencies': [
    //   'error',
    //   { packageDir: ['./', '../../'] }
    // ],

    "prefer-destructuring": [0],
    "import/extensions": [0],
    "react/no-danger": [0],
    "jsx-a11y/no-static-element-interactions": [0],
    "linebreak-style": [0],
    "react/jsx-filename-extension": [1, { "extensions": [".js"] }],
    "import/prefer-default-export": [0],

    "jsx-a11y/click-events-have-key-events": [1],
    "jsx-a11y/anchor-is-valid": [1],
    "jsx-a11y/label-has-associated-control": [0],
    "jsx-a11y/label-has-for": [0],
    "max-len": [2, { "code": 120, "ignoreTemplateLiterals": true, "ignoreStrings": true }],
    "react/jsx-one-expression-per-line": [2],
    "semi": [2, "never"],
    "react/jsx-max-props-per-line": [2, {
      "maximum": 1, "when": "always"
    }],
    "no-empty-pattern": [0],
    "no-implicit-globals": [2],
    "react/prop-types": [1],
    "arrow-parens": [2, "as-needed", { "requireForBlockBody": true }],
    "import/no-webpack-loader-syntax": [0],
    "no-magic-numbers": [2, { ignore: [-1, 0, 1, 2, 1000, 60, 24]}],
    "no-multiple-empty-lines": [2, {"max": 1, "maxEOF": 0}],
    "react-hooks/rules-of-hooks": [2], // Checks rules of Hooks
    "react-hooks/exhaustive-deps": 'warn',
    "max-lines": [2, {"max": 200, "skipBlankLines": true, "skipComments": true}],

  }
}
