
## Configuration Selected
We have selected the [recommended](https://eslint.org/docs/rules/) rule set.  Deviations from the rule set will be discussed below.

## Rule Deviations
* [[indent]](https://eslint.org/docs/rules/indent): an internal vote was held, and the winner was `4 spaces` (5 votes).  2nd place was 3 spaces (4 votes).  Tabs & 2 spaces each received 2 votes. [SwitchCase](https://eslint.org/docs/rules/indent#switchcase) has also been set to 1 to be more idiomatic with most programming languages.
* [[no-console]](https://eslint.org/docs/rules/no-console): this has been downgraded to `warn`, as `console` statements are used frequently during development and validation, with full intention to be removed prior to production deployment.  An often-used work-around is to just add ESLint ignore to the console statements, but that makes it much more difficult to later identify the console statements for later removal.  By keeping them as warnings, it will not fail testing, but can be easily recognized as needing to be fixed prior to final deployment.
* [[keyword-spacing]](https://eslint.org/docs/rules/keyword-spacing): ERROR | All Javascript keywords must be preceded and followed by exactly one space character. This rule was enabled mainly to prevent developers from excluding the space between the keyword and the parenthesized condition in an `if` statement. However, it provides consistent spacing around all keywords. Keywords not surrounded by spaces can easily be misinterpreted (`if(condition)` looks somewhat like a function call to some).
* [[array-bracket-spacing]](https://eslint.org/docs/rules/array-bracket-spacing) | ERROR | Provides consistent spacing around array members in array literals and destructured arrays. This received 100% consensus from the front-end team at the time of addition and is the array equivalent of our rule for `object-curly-spacing`.
* [[object-curly-spacing]](https://eslint.org/docs/rules/object-curly-spacing) | ERROR | Provides consistent spacing around object properties in object literals and destructured objects. This received 100% consensus from the front-end team at the time of addition and especially helps us in JSX as we commonly destructure component props.
* [[quotes]](https://eslint.org/docs/rules/quotes) | ERROR | Prefer to use single quotes in strings except where interpolating with backticks.
* [[comma-dangle]](https://eslint.org/docs/rules/comma-dangle) | WARN | Prefer trailing commas when array / object elements are on multiple lines to improve clarity of diffs, prefer no trailing commas when everything is on one line.
* [[no-multi-spaces]](https://eslint.org/docs/rules/no-multi-spaces) | ERROR | Multiple spaces when not used as indentation are almost always typos and should be avoided.
* [[multiline-ternary]](https://eslint.org/docs/latest/rules/multiline-ternary) | ERROR | Ternaries are easier to read when the "?"/":" are on separate lines.
* [[operator-linebreak]](https://eslint.org/docs/latest/rules/operator-linebreak#before) | WARN | When doing operations across multiple lines, it's important to understand the operator which connects the line with the previous ones. When left at the end of the previous line, this is easy to miss and not available at a glance.

## Rule Notes
* [[max-len]](https://eslint.org/docs/rules/max-len) | We had this warn on 120, however there are common cases (especially within JSX) where there is significant indenting, leading to the author having to format their code in a hard-to-read manner just to satisfy this rule. It was decided that this is best done by governance during code reviews, rather than an automated rule.


<!-- 
| Rule Name | Class | Discussion |
| --- | :---: | --- |
| [[for-direction]](https://eslint.org/docs/rules/for-direction) | OFF | While it is suggested that any non-forward iteration require a comment pointing out the deviation to the developer, there are many cases where backward iteration is desired and a clearer way of implementation a solution |
| [[getter-return]](https://eslint.org/docs/rules/getter-return) | ERROR | Every `get` can reasonably be expected to return a value.  No return is likely an unintended omission |
| [[no-await-in-loop]](https://eslint.org/docs/rules/no-await-in-loop) | WARN | Synchronously looping over a set with an await on each operation likely not the original intention of the author; they likely wanted to `await` completion of a set of operations.  This may be upgraded to an `error` at a later point.
| [[no-compare-neg-zero]](https://eslint.org/docs/rules/no-compare-neg-zero) | ERROR | this makes code more confusing to read with no benefit |
| [[no-cond-assign]](https://eslint.org/docs/rules/no-cond-assign) | ERROR | this is likely not intended, and caught as a likely typo |



| [[accessor-pairs]](https://eslint.org/docs/rules/accessor-pairs) | ERROR | Providing a `set` without a `get` is very unintuitive.  In any case where this type of behaviour is desired, use a `function` instead. | -->
