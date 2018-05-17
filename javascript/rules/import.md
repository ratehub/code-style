## Code Smells & Common Errors
These rules look for anti-patterns and common implementation errors.  When detected, these often indicate a design in need of refactoring, or an improper/accidental use of a function.

### Errors:
* [[import/no-unresolved]](https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-unresolved.md): all import statements need to be resolvable.  Failure of this rule is likely not intended by the author.
* [[import/named]](https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/named.md): if an imported symbol name cannot be resolved, it likely was an unintended error by the author.
* [[import/default]](https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/default.md): attempting to import a default export where none exists was likely not the original intent of the author.
* [[import/namespace]](https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/namespace.md): using a symbol of an imported namespace which does not exist was likely not intended by the author.
* [[import/no-absolute-path]](https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-absolute-path.md): an application should not be coupled to the directory structure of the host.  If resources outside of the application are required, take the file paths as parameters.
* [[import/no-dynamic-require]](https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-dynamic-require.md): in nearly all cases, importing can be done statically.  In cases where dynamic includes are absolutely necessary, a manual linting exclude should be required along with a reason why it is the only solution available.
* [[import/no-webpack-loader-syntax]](https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-webpack-loader-syntax.md): the syntax is non-standard, and couples the solution directly to webpack.  Webpack should not be a file-level concern; rather an application-level detail.
* [[import/no-self-import]](https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-self-import.md): this is likely not intended.  If it is intended, it could lead to very difficult to understand code and are likely better ways to accomplish the same effect.
* [[import/no-cycle]](https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-cycle.md): cyclical dependencies are likely the result of a poorly implemented dependency graph or an oversight when refactoring.
* [[import/no-named-as-default]](https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-named-as-default.md): likely indicates an error, as the author assumed the default was one of the named exports.  In cases where it was intended, it is confusing and should likely not use that name.
* [[import/no-named-as-default-member]](https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-named-as-default-member.md): likely indicates an unintentional use of default exported property; it is likely they meant to use a named export.  In cases where it is intentional, it is confusing and (where possible) the module should be refactored to not do this.
* [[import/no-extraneous-dependencies]](https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-extraneous-dependencies.md): if a module is imported which is not in `package.json`, it is likely an oversight when refactoring.  Failure to add it can introduce breaking changes once commited to source control.
* [[import/no-mutable-exports]](https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-mutable-exports.md): exports are likely not intended to be declared as `var`.  In cases where it is intententional, a simpler, easier to understand design is likely possible.
* [[import/no-namespace]](https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-namespace.md): if a namespace is imported, it should be used.  Failures of this rule likely indicated an imcomplete refactor, or a possible typo.



### Warnings:
* [[import/no-internal-modules]](https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-internal-modules.md): ideally sub-modules should provide indexes, which should be the point where includes are made against.

### Parking Lot/Future: 
* [[import/no-restricted-paths]](https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-restricted-paths.md): if a consistent folder layout is developed, this is an interesting way to enforce separation between server/client files.
* [[import/no-deprecated]](https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-deprecated.md): this will be moved into warning (code is depreciated for a reason; we should upgrade code to not rely on it).  As of 2018-05-16 this rule is marked as Stage 0, and could have breaking changes introduced.  Left here for now.
* [[import/unambiguous]](https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/unambiguous.md): if the rules are split into modules vs. script, this should be implemented.



## Cognitive Load & Maintainability Concerns
These rules look for maintainability issues, particularly over-complicated designs and insuffient documentation or excess mental energy required to understand the behaviour/intent of a Component.

### Errors:
* [[import/export]](https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/export.md): multiple names for the same export are confusing to reason about.
* [[import/no-commonjs]](https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-commonjs.md): prefer [import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import).  Use of a single, consistent method of requiring modules is easier to understand.
* [[import/no-amd]](https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-amd.md): prefer [import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import).  Use of a single, consistent method of requiring modules is easier to understand.
* [[import/no-nodejs-modules]](https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-nodejs-modules.md): prefer [import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import).  Use of a single, consistent method of requiring modules is easier to understand.
* [[import/first]](https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/first.md): having a single location for imports in each file lowers cognitive load.  Requiring them to be at the start of the file allows the reader to easily understand the dependencies of this code, and follows the idomatic practices.
* [[import/exports-last]](https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/exports-last.md): having a single location for all exports of each file lowers cognitive load.  Requiring them to be at the end of the file allows the reader to focus on what the code does before worrying about what it exports.  When the exports are finally read, the readers mental model will understand the intended usage of the code they have just processed.
* [[import/order]](https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/order.md): having a consistent ordering to imports makes dependencies easier to reason about.  This is classified as an error because it can be auto-fixed.
* [[import/newline-after-import]](https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/newline-after-import.md): having a forced break between imports and the body of the code makes it easier to reason about the structure of the code, as dependency aliasing is understood differently than functionality declaration.  This is classified as an error because it can be auto-fixed.
* [[import-no-unassigned-import]](https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-unassigned-import.md): performing imports without assignment to value can lead to confusing behaviour and does not follow idomatic practices.
* [[import/no-named-default]](https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-named-default.md): this clashes against idomatic practices and does not aid readability in any way.
* [[import/group-exports]](https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/group-exports.md): forcing use of a single export statement makes it easier to reason about exactly what is being exported, instead of having to scan the entire file to locate each export.

### Warnings:
* [[import/prefer-default-export]](https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/prefer-default-export.md): it is generally convention that modules provide default exports.  Where possible, they should be provided.
