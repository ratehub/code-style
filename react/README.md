# RateHub React Style guide
*Company-wide coding style checker for working with React*

## Packages included:
* [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react): 7.7.0


## Code Smells & Common Errors
These rules look for anti-patterns and common implementation errors.  When detected, these often indicate a design in need of refactoring, or an improper/accidental use of a function.

### Errors:
* [react/button-has-type](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/button-has-type.md): within React, button is often used for behaviours other than submit.  If the intended behaviour of the button is submit, require it to be explicitly stated.
* [react/no-children-prop](https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/no-children-prop.md): passing children as props is confusing and likely unintended by the developer.  Use the built-in method of specifying children.
* [react/default-props-match-prop-types](https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/default-props-match-prop-types.md): if a default prop value is listed, but the value is required, what was the original intent?  This often indicates unclear requirements or a missed line in a refactor.
* [react/no-access-state-in-setstate](https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/no-access-state-in-setstate.md): using this.state within setState can result in undefined behaviour, as setState is asynchronous.
* [react/no-array-index-key](https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/no-array-index-key.md): array indicies make weak keys; key should refer to the object/value rather than their location within their containing array, as their location can change if the array is modified.
* [react/no-did-update-set-state](https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/no-did-update-set-state.md): use of setState could trigger an infite loop of refreshes.  Even when only a single Signals a poorly thought-out data flow.
* [react/no-direct-mutation-state](https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/no-direct-mutation-state.md): directly mutating state goes against the core philosophy of React
* [react/no-redundant-should-component-update](https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/no-redundant-should-component-update.md): pure components should not implement this, as it clashes with the concept of a pure function.
* [react/no-render-return-value](https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/no-render-return-value.md): the output of a Component render should never be of concern to a consumer, as it requires inapropriate familiary with the implementation of a Component.
* [react/no-typos](https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/no-typos.md): find common casing mistakes.  Even when intended, it needlessly increases the chance a reader may misunderstand the purpose of a declaration.
* [react/no-this-in-sfc](https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/no-this-in-sfc.md): meaning of *this* within a SFC can be different than a developer expects.  Use of *this* often indicates a missed line when converting from a state-based Component.
* [react/no-unescaped-entities](https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/no-unescaped-entities.md): often indicates a mistake with properly escaping JSX.  Even when intended, can be very confusing to understand.  If absolutely necessary and intended, use an HTML escape code.
* [react/no-unknown-property](https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/no-unknown-property.md): likely a typo or unintended use of HTML property when React-DOM property was intended.
* [react/no-will-update-set-state](https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/no-will-update-set-state.md): setState should not be used in componentWillUpdate; causes undefined behaviour.
* [react/react-in-jsx-scope](https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/react-in-jsx-scope.md): catch missing/typoed React definition.
* [react/require-render-return](https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/require-render-return.md): render is expected to have a return.
* [react/void-dom-elements-no-children](): 


### Warnings:
* [react/no-deprecated](https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/no-deprecated.md): generally, behaviours are depreciated for a reason.  In order to keep current with a framework, any code using depreciated functionality should be refactored to no longer require it.
* [react/no-did-mount-set-state](https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/no-did-mount-set-state.md): use of setState will trigger additional refreshes, and generally signals a poorly thought-out data flow.
* [react/no-find-dom-node](https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/no-find-dom-node.md): external users of a Component should never be concerned with the DOM implementation.  When this functionality is desired internally within a Component, there are better systems (ref) to refer to a DOM node previously produced.


### Parking Lot/Future Roadmap:




## Cognitive Load & Maintainability Concerns

### Errors:
* [react/no-danger](https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/no-danger.md): users of a Component should not use intimate knowledge of the inner-working of the Component to achieve a behaviour.
* [react/no-multi-comp](https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/no-multi-comp.md): following one Component per file makes it easier to locate Components in a directory structure, and reduces time to read and understand contents of a file.
* [react/no-unused-prop-types](https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/no-unused-prop-types.md): if a prop type is defined, it should appear within the expected props.  Adds unnecessary confusion.
* [react/no-unused-state](https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/no-unused-state.md): if a value is defined in state, it should be used.  Adds unnecessary confusion.
* [react/prefer-es6-class](https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/prefer-es6-class.md): stateful Components should prefer ES6 definitions as they are easier to read.
* [react/prop-types](https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/prop-types.md): defining the expected types of props makes a Component easier to reason about.
* [react/require-default-props](https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/require-default-props.md): this makes the design easier to reason about by making the default values explicit, and can force the developer to think about edge cases like null handling.
* [react/self-closing-comp](https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/self-closing-comp.md): when no children are needed, use a self-closing Component definition.  Reduces code length, making it easier to reason about a file.
* [react/sort-comp](https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/sort-comp.md): having a consistent Component layout makes it easier to reason about them.


### Warnings:
* [react/boolean-prop-naming](https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/boolean-prop-naming.md): prefer a consistent naming convention, making it easier to reason about type of props.


### Parking Lot/Future Roadmap:
* [react/no-set-state](https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/no-set-state.md): all state should be managed by a state-management library (i.e. MobX).  When transient information is needed, it should be managed by a view-store.
* [react/prefer-stateless-function](https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/prefer-stateless-function.md): stateless functional Components are easier to reason about.  All state should be held within a view-store.
