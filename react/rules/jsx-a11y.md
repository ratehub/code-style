## Chosen Rule Set
For this languge, we have chosen the ['strict'](https://github.com/evcohen/eslint-plugin-jsx-a11y#difference-between-recommended-and-strict-mode) rule set because accessibility is a first-class citizen in our designs.  If deviations from the rule set are made, they will be listed and discussed here.

## Deviations
* [[label-has-for]](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-for.md): this rule has been depreciated and seems to trigger false-positives when using computed ids.  Changed to "off".
* [[no-onchange]](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-onchange.md): this rule has been deprecated and does not apply to Ratehub as we do not support the older browsers that would require it.  Changed to "off".
