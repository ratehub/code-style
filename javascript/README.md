# RateHub React Style guide
*Javascript coding style focusing on readability and maintainability*

## Rule Selection and Classification
Plugins and rules have been selected with the assumption that the code will be used for both server and client-side usage.  It is possible that the future may diverge these two cases enough to require seperate configurations.  The severity/classification of each rule is driver by 3 primary drivers:
* catching mistakes
* preventing bad design (easier to change/maintain)
* minimizing code complexity (easier to read)

# Rule Package Choices
* [[eslint (base)]](https://eslint.org/docs/rules/): base included rule set.
* [[eslint-plugin-import]](https://www.npmjs.com/package/eslint-plugin-import): provides linting rules for import/export statements.

## Rule Discussion
A discussion of the applicability and classification of each rule is available for each plugin.
* [eslint (base)](https://github.com/ratehub/code-style/tree/master/javascript/rules/base.md)
* [eslint-plugin-import](https://github.com/ratehub/code-style/tree/master/javascript/rules/import.md)