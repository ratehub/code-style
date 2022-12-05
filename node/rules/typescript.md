
## Configuration Selected
We have extended the default [Ratehub](https://github.com/ratehub/code-style/tree/master/typescript/rules) rule set. Deviations from the rule set will be discussed below.

## Rule Deviations
* [[max-len]](https://eslint.org/docs/rules/max-len) | ERROR | Limit line length to promote code readability and maintainability among various screen sizes.
* [[semi]](https://eslint.org/docs/rules/semi) | OFF | Base rule disabled as it can report incorrect errors with the `@typescript-eslint/semi` rule enabled.
* [[@typescript-eslint/semi]](https://typescript-eslint.io/rules/semi) | ERROR | Enforce semicolon usage to clearly delineate statements for code readability and consistency across packages.
