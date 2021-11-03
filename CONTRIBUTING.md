# Contributing

As a contributor, here are the guidelines we would like you to follow:

- [Question or Problem?](#question)
- [Issues and Bugs](#issue)
- [Submission Guidelines](#submit)
- [Coding Rules](#rules)
- [Commit Message Guidelines](#commit)


## <a name="question"></a> Got a Question or Problem?

Ask in `#dev-chat` in slack or post in `#its-not-working`.


## <a name="issue"></a> Found a Bug?

File an issue in JIRA under the appropriate project and send a message in `#dev-chat` on slack.

Optionally you could just send a message in slack and an issue will hopefully be created for you.


## <a name="submit"></a> Submission Guidelines


### <a name="submit-issue"></a> Submitting an Issue

Before you submit an issue, please search the `#its-not-working` channel as well as JIRA issues, maybe an issue for your
problem already exists and the discussion might inform you of workarounds readily available.

We want to fix all the issues as soon as possible, but before fixing a bug we need to reproduce and confirm it.
In order to reproduce bugs, we require that you provide a minimal reproduction.
Having a minimal reproducible scenario gives us a wealth of important information without going back and forth to you
with additional questions.

A minimal reproduction allows us to quickly confirm a bug (or point out a coding problem) as well as confirm that we
are fixing the right problem.

We require a minimal reproduction to save maintainers' time and ultimately be able to fix more bugs.
Often, developers find coding problems themselves while preparing a minimal reproduction.

Unfortunately, we are not able to investigate / fix bugs without a minimal reproduction, so if we don't hear back from
you, we are going to close an issue that doesn't have enough info to be reproduced.

### <a name="submit-pr"></a> Submitting a Pull Request (PR)

Before you submit your Pull Request (PR) consider the following guidelines:

1. Search github for an open or closed PR that relates to your submission.
   You don't want to duplicate existing efforts.

2. Be sure that an issue describes the problem you're fixing, or documents the design for the feature you'd like to add.
   Discussing the design upfront helps to ensure that we're ready to accept your work.

3. Create your branch `plat-1234-short-description` where `plat-1234` is your jira issue reference.

4. Create your patch, **including appropriate test cases**.

5. Follow our [Coding Rules](#rules).

6. Commit your changes using a descriptive commit message that follows our [commit message conventions](#commit).
   Adherence to these conventions is necessary because release notes are automatically generated from these messages.

     ```shell
     git commit --all
     ```
   Note: the optional commit `-a` command line option will automatically "add" and "rm" edited files.

7. Push your branch to GitHub:

   ```shell
   git push origin my-fix-branch
   ```

8. In GitHub, send a pull request to the main branch.

#### Addressing review feedback

If we ask for changes via code reviews then:

1. Make the required updates to the code.

2. Re-run the any test suites to ensure tests are still passing.

3. Create a fixup commit and push to your branch (this will update your Pull Request):

    ```shell
    git commit --all
    git push
    ```


##### Updating the commit message

A reviewer might often suggest changes to a commit message (for example, to add more context for a change or adhere to
our [commit message guidelines](#commit)). In order to update the commit message of the last commit on your branch:

1. Check out your branch:

    ```shell
    git checkout my-fix-branch
    ```

2. Amend the last commit and modify the commit message:

    ```shell
    git commit --amend
    ```

3. Push to your GitHub repository:

    ```shell
    git push --force-with-lease
    ```

> NOTE:<br />
> If you need to update the commit message of an earlier commit, you can use `git rebase` in interactive mode.
> See the [git docs](https://git-scm.com/docs/git-rebase#_interactive_mode) for more details.


#### After your pull request is merged

After your pull request is merged, you can safely delete your branch and pull the changes from the main (upstream) repository:

* Delete the remote branch on GitHub either through the GitHub web UI or your local shell as follows:

    ```shell
    git push origin --delete my-fix-branch
    ```

* Check out the master branch:

    ```shell
    git checkout master -f
    ```

* Delete the local branch:

    ```shell
    git branch -D my-fix-branch
    ```

* Update your master with the latest upstream version:

    ```shell
    git pull --ff origin master
    ```


## <a name="rules"></a> Coding Rules
To ensure consistency throughout the source code, keep these rules in mind as you are working:

* All features or bug fixes **must be tested**.
* All lists must be alphabetically ordered.
* Write & format your code as though only one developer wrote the entire codebase.

## <a name="commit"></a> Commit Message Format

*This specification is inspired by and supersedes the [angular commit message format][commit-message-format].*

We have very precise rules over how our Git commit messages must be formatted.
This format leads to **easier to read commit history**.

Each commit message consists of a **header**, a **body**, and a **footer**.


```
<header>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

The `header` is mandatory and must conform to the [Commit Message Header](#commit-header) format.

The `body` is mandatory for all commits except for those of type "docs" and "deploy".
When the body is present it must be at least 20 characters long and must conform to the [Commit Message Body](#commit-body) format.

The `footer` is optional. The [Commit Message Footer](#commit-footer) format describes what the footer is used for and the structure it must have.

Any line of the commit message cannot be longer than 100 characters.


#### <a name="commit-header"></a>Commit Message Header

```
<type>(<scope>): <short summary>
  │       │             │
  │       │             └─⫸ Summary in present tense. Not capitalized. No period at the end.
  │       │
  │       └─⫸ Commit Scope: <defined-by-repo>
  │
  └─⫸ Commit Type: build|ci|deploy|docs|feat|fix|perf|refactor|test
```

The `<type>` and `<summary>` fields are mandatory, the `(<scope>)` field is optional.

##### Type

Must be one of the following:

* **build**: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
* **ci**: Changes to our CI configuration files and scripts (example scopes: Circle, BrowserStack, SauceLabs)
* **deploy**: Anything causing as deployment of a service
* **docs**: Documentation only changes
* **feat**: A new feature
* **fix**: A bug fix
* **perf**: A code change that improves performance
* **refactor**: A code change that neither fixes a bug nor adds a feature
* **test**: Adding missing tests or correcting existing tests


##### Scope
The scope is defined by the repo you're committing to. Please see their
scope section to understand what they expect in the scope field.

##### Summary

Use the summary field to provide a succinct description of the change:

* use the imperative, present tense: "change" not "changed" nor "changes"
* don't capitalize the first letter
* no dot (.) at the end
* If including a JIRA ticket reference, place it at the end of the summary


#### <a name="commit-body"></a>Commit Message Body

Just as in the summary, use the imperative, present tense: "fix" not "fixed" nor "fixes".

Explain the motivation for the change in the commit message body. This commit message should explain _why_ you are making the change.
You can include a comparison of the previous behavior with the new behavior in order to illustrate the impact of the change.


#### <a name="commit-footer"></a>Commit Message Footer

The footer can contain information about breaking changes and is also the place to reference GitHub issues, Jira tickets,
and other PRs that this commit closes or is related to.

```
BREAKING CHANGE: <breaking change summary>
<BLANK LINE>
<breaking change description + migration instructions>
<BLANK LINE>
<BLANK LINE>
Fixes #<issue number>
refs: PLAT-1234
```

Breaking Change section should start with the phrase "BREAKING CHANGE: " followed by a summary of the breaking change,
a blank line, and a detailed description of the breaking change that also includes migration instructions.


### Revert commits

If the commit reverts a previous commit, it should begin with `revert: `, followed by the header of the reverted commit.

The content of the commit message body should contain:

- information about the SHA of the commit being reverted in the following format: `This reverts commit <SHA>`,
- a clear description of the reason for reverting the commit message.


[commit-message-format]: https://github.com/ratehub/code-style/blob/master/ratehub/CONTRIBUTING.md#commit