module.exports = {
  "plugins": [
    "jsx-control-statements"
  ],
  "extends": [
    "plugin:jsx-control-statements/recommended"
  ],
  "rules": {
    // Required for 7.0.0+ to avoid errors for If/Choose/etc.
    "react/jsx-no-undef": ["error", { "allowGlobals": true }]
  }
}