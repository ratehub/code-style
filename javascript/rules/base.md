
## Configuration Selected
We have selected the [recommended](https://eslint.org/docs/rules/) rule set.  Deviations from the rule set will be discussed below.

## Rule Deviations
* [[indent]](https://eslint.org/docs/rules/indent): an internal vote was held, and the winner was `4 spaces` (5 votes).  2nd place was 3 spaces (4 votes).  Tabs & 2 spaces each received 2 votes.


<!-- 
| Rule Name | Class | Discussion |
| --- | :---: | --- |
| [[for-direction]](https://eslint.org/docs/rules/for-direction) | OFF | While it is suggested that any non-forward iteration require a comment pointing out the deviation to the developer, there are many cases where backward iteration is desired and a clearer way of implementation a solution |
| [[getter-return]](https://eslint.org/docs/rules/getter-return) | ERROR | Every `get` can reasonabily be expected to return a value.  No return is likely an unintended omission |
| [[no-await-in-loop]](https://eslint.org/docs/rules/no-await-in-loop) | WARN | Syncronously looping over a set with an await on each operation likely not the original intention of the author; they likely wanted to `await` completion of a set of operations.  This may be upgraded to an `error` at a later point.
| [[no-compare-neg-zero]](https://eslint.org/docs/rules/no-compare-neg-zero) | ERROR | this makes code more confusing to read with no benefit |
| [[no-cond-assign]](https://eslint.org/docs/rules/no-cond-assign) | ERROR | this is likely not indended, and caught as a likely typo |



| [[accessor-pairs]](https://eslint.org/docs/rules/accessor-pairs) | ERROR | Providing a `set` without a `get` is very unintuative.  In any case where this type of behaviour is desired, use a `function` instead. | -->
