# Ratehub React Style Guide
*Javascript coding style focusing on readability and maintainability*

## Statement of Purpose
Plugins and rules have been selected with the assumption that the code will be used for both server and client-side usage.  It is possible that the future may diverge these two cases enough to require seperate configurations.  The severity/classification of each rule is driver by 3 primary drivers:
* catching mistakes
* preventing bad design (easier to change/maintain)
* minimizing code complexity (easier to read)

## Rule Package Choices
* [[eslint (base)]](https://eslint.org/docs/rules/): base included rule set.
* [[eslint-plugin-import]](https://www.npmjs.com/package/eslint-plugin-import): provides linting rules for import/export statements.

## Rule Discussion
A discussion of the applicability and classification of each rule is available for each plugin.
* [eslint (base)](https://github.com/ratehub/code-style/tree/master/javascript/rules/base.md)
* [eslint-plugin-import](https://github.com/ratehub/code-style/tree/master/javascript/rules/import.md)

## Suggesting Changes
If disagreement with a rule's classification or changes to the plugins chosen are desired, please open a [ticket](https://github.com/ratehub/code-style/issues).  Pull requests against this repository require changes to the associated markup document so the rationale and rule configuration will stay in-sync.
