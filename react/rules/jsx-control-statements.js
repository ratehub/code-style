module.exports = {
  "plugins": [
    "jsx-control-statements"
  ],
  "extends": [
    "plugin:jsx-control-statements/recommended"
  ],
  // If these are not added, react/jsx-no-undef will find these are undefined.
  // Ideally this block can be removed if a cleaner solution is found.
  "globals": {
    "If": false,
    "Else": false,

    "For": false,

    "Choose": false,
    "When": false,
    "Otherwise": false,

    "With": false
  },
  "rules": {
    // Required for 7.0.0+ to avoid errors for If/Choose/etc.
    "react/jsx-no-undef": ["error", { "allowGlobals": true }],

    // We do not want to enforce this rule.
    "jsx-control-statements/jsx-for-require-body": "off",
  }
}