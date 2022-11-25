# General Style Standards
We have a [#typescript Slack channel](https://ratehub.slack.com/archives/C04BZ8W3BPT) dedicated to TypeScript best practices. Below here is a record of some discussions had there.

## Naming
* all `interface` should begin with I, and use PascalCasing (example: `IEventEmitter`)
* all `class` should follow PascalCasing (example: `EventEmitterKafka`) 

## FAQ

### “When should I use type vs interface?”
this came from a [Slack Thread](https://ratehub.slack.com/archives/C04BZ8W3BPT/p1669388572909509) 

Use `interface`:
* when you would use `abstract` in other languages (there will be an explicit `implements` of this `interface` elsewhere)
* `interface` suggests to the reader that there are multiple (different) implementations which need a common signature

Use `type`:
* when you are defining typing information for things like local state, parameters, custom return types
* `type` suggests this is just providing typing information for TS, and I don't need to worry about many different implementers of the same signature.
* 
