
## Code Smells & Common Errors
These rules look for anti-patterns and common implementation errors.  When detected, these often indicate a design in need of refactoring, or an improper/accidental use of a function.

### Errors:
* [[jsx-control-statements/jsx-choose-not-empty]](https://github.com/vkbansal/eslint-plugin-jsx-control-statements/blob/master/docs/rules/jsx-choose-not-empty.md): an empty choose statement has no purpose, and was likely not intended by the author.
* [[jsx-control-statements/jsx-for-require-each]](https://github.com/vkbansal/eslint-plugin-jsx-control-statements/blob/master/docs/rules/jsx-for-require-each.md): when `each` is missing, the statement has no purpose and was likely an unintended omission.
* [["jsx-control-statements/jsx-for-require-of"]](https://github.com/vkbansal/eslint-plugin-jsx-control-statements/blob/master/docs/rules/jsx-for-require-of.md): when `of` is missing, the statement has no purpose and was likely an unintended omission.
* [[jsx-control-statements/jsx-if-require-condition]](https://github.com/vkbansal/eslint-plugin-jsx-control-statements/blob/master/docs/rules/jsx-if-require-condition.md): when `condition`is missing the statement has no purpose, and was likely an unintended omission.
* [[jsx-control-statements/jsx-otherwise-once-last]](https://github.com/vkbansal/eslint-plugin-jsx-control-statements/blob/master/docs/rules/jsx-otherwise-once-last.md): enforce proper usage of `Otherwise`.  Improper use was likely not intended by the author.
* [[jsx-control-statements/jsx-when-require-condition]](https://github.com/vkbansal/eslint-plugin-jsx-control-statements/blob/master/docs/rules/jsx-when-require-condition.md): when `condition` is missing, the statement has no purpose and was likely and unintended omission.
* [[jsx-control-statements/jsx-jcs-no-undef]](https://github.com/vkbansal/eslint-plugin-jsx-control-statements/blob/master/docs/rules/jsx-jcs-no-undef.md): drop-in replacement for the [eslint rule](http://eslint.org/docs/rules/no-undef) of similar name.  This version is compatable with <For> and <With> statements.


## Cognitive Load & Maintainability Concerns
These rules look for maintainability issues, particularly over-complicated designs and insuffient documentation or excess mental energy required to understand the behaviour/intent of a Component.

### Errors:
* [[jsx-control-statements/jsx-use-if-tag]](https://github.com/vkbansal/eslint-plugin-jsx-control-statements/blob/master/docs/rules/jsx-use-if-tag.md): prefer JSX flow-control.  Components should NOT be having complex decision logic; this should be refactored out into a business object or handled within a state store.