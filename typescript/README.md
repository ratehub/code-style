# Ratehub TypeScript Style Guide
We have a [#typescript Slack channel](https://ratehub.slack.com/archives/C04BZ8W3BPT) dedicated to TypeScript best practices. Below here is a record of some discussions had there.

## Statement of Purpose
Plugins and rules have been selected with the assumption that the code will be used for both server and client-side usage.  It is possible that the future may diverge these two cases enough to require seperate configurations.  The severity/classification of each rule is driver by 3 primary drivers:
* catching mistakes
* preventing bad design (easier to change/maintain)
* minimizing code complexity (easier to read)

## Rule Package Choices
* [[eslint (base)]](https://eslint.org/docs/rules/): base included rule set.
* [[typescript-eslint-plugin]](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin): provides linting rules for TypeScript code.

## Rule Discussion
A discussion of the applicability and classification of each rule is available for each plugin.
* [eslint (base)](https://github.com/ratehub/code-style/tree/master/javascript/rules/base.md)
* [typescript-eslint-plugin](https://github.com/ratehub/code-style/tree/master/typescript/rules/base.md)

## Naming
* all `interface` should begin with I, and use PascalCasing (example: `IEventEmitter`)
* all `class` should follow PascalCasing (example: `EventEmitterKafka`) 

## FAQ

### “When should I use `type` vs `interface`?”
this came from a [Slack Thread](https://ratehub.slack.com/archives/C04BZ8W3BPT/p1669388572909509) 

Use `interface`:
* when you would use `abstract` in other languages (there will be an explicit `implements` of this `interface` elsewhere)
* `interface` suggests to the reader that there are multiple (different) implementations which need a common signature

Use `type`:
* when you are defining typing information for things like local state, parameters, custom return types
* `type` suggests this is just providing typing information for TS, and I don't need to worry about many different implementers of the same signature.

## Suggesting Changes
If disagreement with a rule's classification or changes to the plugins chosen are desired, please open a [ticket](https://github.com/ratehub/code-style/issues).  Pull requests against this repository require changes to the associated markup document so the rationale and rule configuration will stay in-sync.
