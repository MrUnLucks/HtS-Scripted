# Scripted HtS on WebSockets implementation

This project aims to script the popular tabletop game Here To Slay into an approachable scripted webapp. This monorepo is using Websocket and Nodejs for the connections and Game Logic and Vue for the FE layer

## How to start the project

- Install dependencies on the Websocket server:

  `pnpm i`

  and start the server with:

  `pnpm run dev`

- On a different terminal install dependencies on the frontend layer:

  `cd frontend`

  `pnpm i`

  and start the Vue App:

  `pnpm run dev`

## Branches

The naming conventions of the branches are as follows:

- Prefix if the branch is either a fix, feat or test followed by double -
- Whitespaces replaced by -
- Name based on the subject targeted by the branch

#### Structure

`prefix--the-subject-of-branch`

#### Examples

`feat--draw-function`  
`fix--cain-cards`  
`test--observer-object`

## Commits

The naming conventions of the commits are as follows:

##### Prefix

- `feat`: new functionalities added
- `fix`: fix pre-existent functionalities
- `refactor`: refactored some code
- `chore`: miscellaneous actions like merge conflicts, cleaned code etc...

##### Body

> After the prefix the branch name is put inside parenthesis, this ease the readability from Git Blame and Git History in general and followed by `:`
>
> > If the branch is 'main' the parenthesis are not necessaries
> > For the commit body is recommended to put a short description of what has been done with these simple rules in mind:

- Is a mandatory part of the format
- Use the imperative, present tense: "change" not "changed" nor "changes" (Think of 'this commit will -change-')
- Don't capitalize the first letter
- No dot (.) at the end
- **Breaking Changes** body should start with the word BREAKING CHANGES: followed by space. The rest of the commit message is then used for this.

###### Is recommended to **NOT** comply with the 50 characters rule enforced by the Git standard as this can hinder the a good descriptive message of the commit

#### Structure

`prefix(branch-name): short description of changes`

#### Examples

- `feat(cain-card): add cain card script and UI trigger`
- `fix(start-button): move start btn from global to own file`
- `refactor(players-object): changed players reference from index based to id based`
- `chore(start-button): clean roll functions code`
- `chore: merge conflicts `

## Flow

Main -> Different Branch -> Add/Fix Functionality -> Request PR(while pulling main to fix conflicts beforehand) -> Merge into main

## Pull Requests

The naming conventions for pull requests are the same as the [conventions for commits](##Commits)  
While opening a PR its recommended to assign yourself as the assignee and nominate some Code Reviewers if necessary

###### The PRs can be useful to track whenever complex functionalities are merged into the main and eventually request the CR/Tests from other contributors

###### In the future it might be useful to create some labels to better categorize the PRs
