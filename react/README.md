# RateHub React Style guide
*React coding style focusing on readability and maintainability*

## Statement of Purpose
Plugins and rules have been selected with the assumption that the code will be used for both server and client-side usage.  It is possible that the future may diverge these two cases enough to require seperate configurations.  The severity/classification of each rule is driver by 3 primary drivers:
* catching mistakes
* preventing bad design (easier to change/maintain)
* minimizing code complexity (easier to read)
* be as compliant as practical with [WAI-ARIA](https://www.w3.org/TR/wai-aria-practices/) best-practices

## Linting Package Choices
* [[eslint-plugin-react]](https://www.npmjs.com/package/eslint-plugin-react): industry-standard collection of linting rules for React.  We are explicitly choosing the severity of each rule, discussed below.
* [[eslint-plugin-jsx-a11y]](https://www.npmjs.com/package/eslint-plugin-jsx-a11y): accessibility (a11y) is a first-class principle in our designs.  This is an industry-standard accessibility checker when using React.
* [[eslint-plugin-jsx-control-statements]](https://www.npmjs.com/package/eslint-plugin-jsx-control-statements): view components should be devoid of complex or business-related logic.  When simple evaluation of logic is used to control output, JSX control statements to make the code easier to read.  In cases where complex logic or flow-control is needed, it should be refactored out into a JavaScript object which can be consulted to perform the evaluation.

## Rule Discussion
A discussion of the applicability and classification of each rule is available for each plugin.
* [[eslint-plugin-react]](https://github.com/ratehub/code-style/tree/master/react/rules/react.md)
* [[eslint-plugin-jsx-a11y]](https://github.com/ratehub/code-style/tree/master/react/rules/jsx-control-statements.md)
* [[eslint-plugin-jsx-control-statements]](https://github.com/ratehub/code-style/tree/master/react/rules/jsx-a11y.md)

## Suggesting Changes
If disagreement with a rule's classification or changes to the plugins chosen are desired, please open a [ticket](https://github.com/ratehub/code-style/issues).  Pull requests against this repository require changes to the associated markup document so the rationale and rule configuration will stay in-sync.
