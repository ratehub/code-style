
## Configuration Selected
We have selected the [default](https://eslint.style/packages/js) rule set.  Deviations from the rule set will be discussed below.

## Rule Deviations
* [[indent]](https://eslint.style/rules/js/indent): an internal vote was held, and the winner was `4 spaces` (5 votes).  2nd place was 3 spaces (4 votes).  Tabs & 2 spaces each received 2 votes. [SwitchCase](https://eslint.style/rules/js/indent#switchcase) has also been set to 1 to be more idiomatic with most programming languages.
* [[keyword-spacing]](https://eslint.style/rules/js/keyword-spacing): ERROR | All Javascript keywords must be preceded and followed by exactly one space character. This rule was enabled mainly to prevent developers from excluding the space between the keyword and the parenthesized condition in an `if` statement. However, it provides consistent spacing around all keywords. Keywords not surrounded by spaces can easily be misinterpreted (`if(condition)` looks somewhat like a function call to some).
* [[array-bracket-spacing]](https://eslint.style/rules/js/array-bracket-spacing) | ERROR | Provides consistent spacing around array members in array literals and destructured arrays. This received 100% consensus from the front-end team at the time of addition and is the array equivalent of our rule for `object-curly-spacing`.
* [[object-curly-spacing]](https://eslint.style/rules/js/object-curly-spacing) | ERROR | Provides consistent spacing around object properties in object literals and destructured objects. This received 100% consensus from the front-end team at the time of addition and especially helps us in JSX as we commonly destructure component props.
* [[comma-dangle]](https://eslint.style/rules/js/comma-dangle) | WARN | Prefer trailing commas when array / object elements are on multiple lines to improve clarity of diffs, prefer no trailing commas when everything is on one line.
* [[brace-style]](https://eslint.org/docs/latest/rules/brace-style): The "one true brace style" is the agreed upon brace style for consistency and should always be adjusted in accordance to the bracing style.
* [[semi]](https://eslint.org/docs/latest/rules/semi): The heavily contested semi-colon rule, decided by voting to pick always use semi-colon for consistency.
* [[quotes]](https://eslint.style/rules/js/quotes) | ERROR | Prefer to use single quotes in strings except where interpolating with backticks.
* [[no-multi-spaces]](https://eslint.style/rules/js/no-multi-spaces) | ERROR | Multiple spaces when not used as indentation are almost always typos and should be avoided.
* [[space-in-parens]](https://eslint.style/rules/js/space-in-parens) | ERROR | Parentheses should never have spaces inside, this way it ensures consistency and avoids typo of only 1 space e.g. `( a + b)`.
* [[space-before-function-paren]](https://eslint.style/rules/js/space-before-function-paren) | ERROR | The parentheses for function params should never have spaces before it.
* [[multiline-ternary]](https://eslint.org/docs/latest/rules/multiline-ternary) | ERROR | Ternaries are easier to read when the "?"/":" are on separate lines.
* [[operator-linebreak]](https://eslint.org/docs/latest/rules/operator-linebreak#before) | WARN | When doing operations across multiple lines, it's important to understand the operator which connects the line with the previous ones. When left at the end of the previous line, this is easy to miss and not available at a glance.

## Rule Notes
* [[max-len]](https://eslint.style/rules/js/max-len) | We had this warn on 120, however there are common cases (especially within JSX) where there is significant indenting, leading to the author having to format their code in a hard-to-read manner just to satisfy this rule. It was decided that this is best done by governance during code reviews, rather than an automated rule.