# RateHub CSS/Styled Components Style guide
*CSS coding style focusing on readability and maintainability*

## Statement of Purpose
Plugins and rules have been selected with the assumption that the code will be used with the styled-components library. These rules are driven by the following:
* catching mistakes
* preventing bad design (easier to change/maintain)
* minimizing code complexity (easier to read)

## Linting Package Choices
* [[stylelint (base)]](https://github.com/stylelint/stylelint): Base linter used for CSS
* [[stylelint-config-standard]](https://github.com/stylelint/stylelint-config-standard): Industry-standard collection of linting rules for CSS - this plugin extends off of [[stylelint-config-recommended]](https://github.com/stylelint/stylelint-config-recommended)
* [[stylelint-config-styled-components]](https://github.com/styled-components/stylelint-config-styled-components): This disables stylelint rules that conflict with using the styled-components library.
* [[stylelint-config-rational-order]](https://github.com/constverum/stylelint-config-rational-order): This package was chosen over discussion with the Front-end team. We believe this ordering to be intuitive, and would like to try it out before adding customizations to the order.

## Rule Discussion
A discussion of the applicability and classification of each rule is available for each explicitly set rule:

### Potential errors
These rules could cause errors while parsing our CSS. Any rule that was selected for reasons outside of just causing errors will have an explanation below:
* [[color-no-invalid-hex]](https://stylelint.io/user-guide/rules/color-no-invalid-hex/)
* [[font-family-no-duplicate-names]](https://stylelint.io/user-guide/rules/font-family-no-duplicate-names/)
* [[font-family-no-missing-generic-family-keyword]](https://stylelint.io/user-guide/rules/font-family-no-missing-generic-family-keyword/): This rule was selected for browser accessibilty reasons, as having the generic family keyword defined will ensure our site has a semi-consistent look in all situations.
* [[function-calc-no-invalid]](https://stylelint.io/user-guide/rules/function-calc-no-invalid/)
* [[function-linear-gradient-no-nonstandard-direction]](https://stylelint.io/user-guide/rules/function-linear-gradient-no-nonstandard-direction/)
* [[string-no-newline]](https://stylelint.io/user-guide/rules/string-no-newline/)
* [[unit-no-unknown]](https://stylelint.io/user-guide/rules/unit-no-unknown/)
* [[property-no-unknown]](https://stylelint.io/user-guide/rules/property-no-unknown/)
* [[ignore-consecutive-duplicates]](https://stylelint.io/user-guide/rules/ignore-consecutive-duplicates/): Cases where duplicates are needed for overrides (eg. `display: -ms-grid; display: grid`) will be ignored
* [[declaration-block-no-shorthand-property-overrides]](https://stylelint.io/user-guide/rules/declaration-block-no-shorthand-property-overrides/): This rule was selected for better readability of our CSS
* [[block-no-empty]](https://stylelint.io/user-guide/rules/block-no-empty/)
* [[selector-pseudo-class-no-unknown]](https://stylelint.io/user-guide/rules/selector-pseudo-class-no-unknown/)
* [[selector-pseudo-element-no-unknown]](https://stylelint.io/user-guide/rules/selector-pseudo-element-no-unknown/)
* [[selector-type-no-unknown]](https://stylelint.io/user-guide/rules/selector-type-no-unknown/)
* [[media-feature-name-no-unknown]](https://stylelint.io/user-guide/rules/media-feature-name-no-unknown/)
* [[no-duplicate-at-import-rules]](https://stylelint.io/user-guide/rules/no-duplicate-at-import-rules/)
* [[no-duplicate-selectors]](https://stylelint.io/user-guide/rules/no-duplicate-selectors/): This rule was selected for better readability of our CSS
* [[no-extra-semicolons]](https://stylelint.io/user-guide/rules/no-extra-semicolons/)

### Code style
* [[color-named]](https://stylelint.io/user-guide/rules/color-named/): Colours should not be using named colours - preference would be to use defined consts that use hex, rgb, rgba, etc.
* [[color-hex-case]](https://stylelint.io/user-guide/rules/color-hex-case/): Front-end team was consulted and `lower` was the decided option.
* [[color-hex-length]](https://stylelint.io/user-guide/rules/color-hex-length/): Front-end team was consulted and `long` was the decided option.
* [[font-weight-notation]](https://stylelint.io/user-guide/rules/font-weight-notation/): Front-end team was consulted and `numeric` was the decided option, with a preference of using defined consts that will be checked with code review.
* [[indentation]](https://stylelint.io/user-guide/rules/indentation/): Since we're using the [styled-components](https://www.styled-components.com/) library, our indentation rules match those in our React config.
* [[max-empty-lines]](https://stylelint.io/user-guide/rules/max-empty-lines/): The [[stylelint-config-standard]](https://github.com/stylelint/stylelint-config-standard) plugin changes this value to 1, where the `stylelint` default is 2. To provide more flexibility in clearly separating our CSS, the value was increased to 2. 
* [[selector-pseudo-element-colon-notation]](https://stylelint.io/user-guide/rules/selector-pseudo-element-colon-notation/): Front-end team was consulted and `double` was the decided option.


## Suggesting Changes
If disagreement with a rule's classification or changes to the plugins chosen are desired, please open a [ticket](https://github.com/ratehub/code-style/issues).  Pull requests against this repository require changes to the associated markup document so the rationale and rule configuration will stay in-sync.
