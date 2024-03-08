
## Configuration Selected
We have selected the [recommended](https://eslint.org/docs/rules/) rule set.  Deviations from the rule set will be discussed below.

## Rule Deviations
* [[no-console]](https://eslint.org/docs/rules/no-console): this has been downgraded to `warn`, as `console` statements are used frequently during development and validation, with full intention to be removed prior to production deployment.  An often-used work-around is to just add ESLint ignore to the console statements, but that makes it much more difficult to later identify the console statements for later removal.  By keeping them as warnings, it will not fail testing, but can be easily recognized as needing to be fixed prior to final deployment.
* [[no-unused-vars#ignorerestsiblings]](https://eslint.org/docs/latest/rules/no-unused-vars#ignorerestsiblings): Allows no unused variable lint rule to be ignored when using rest spread (`...foo`). This mainly is for cases where we omit some properties from an object when destructuring it.
* [[max-params]](https://eslint.org/docs/latest/rules/max-params): Enforce a maximum number of parameters in function definitions. This is to prevent having to memorize and potential bugs when passing params.
* [[no-shadow]](https://eslint.org/docs/latest/rules/no-shadow): Disallow variable declarations from shadowing variables declared in the outer scope. Prevent bugs where references might be to a differently scoped variable with the same name; 


<!-- 
| Rule Name | Class | Discussion |
| --- | :---: | --- |
| [[for-direction]](https://eslint.org/docs/rules/for-direction) | OFF | While it is suggested that any non-forward iteration require a comment pointing out the deviation to the developer, there are many cases where backward iteration is desired and a clearer way of implementation a solution |
| [[getter-return]](https://eslint.org/docs/rules/getter-return) | ERROR | Every `get` can reasonably be expected to return a value.  No return is likely an unintended omission |
| [[no-await-in-loop]](https://eslint.org/docs/rules/no-await-in-loop) | WARN | Synchronously looping over a set with an await on each operation likely not the original intention of the author; they likely wanted to `await` completion of a set of operations.  This may be upgraded to an `error` at a later point.
| [[no-compare-neg-zero]](https://eslint.org/docs/rules/no-compare-neg-zero) | ERROR | this makes code more confusing to read with no benefit |
| [[no-cond-assign]](https://eslint.org/docs/rules/no-cond-assign) | ERROR | this is likely not intended, and caught as a likely typo |



| [[accessor-pairs]](https://eslint.org/docs/rules/accessor-pairs) | ERROR | Providing a `set` without a `get` is very unintuitive.  In any case where this type of behaviour is desired, use a `function` instead. | -->
