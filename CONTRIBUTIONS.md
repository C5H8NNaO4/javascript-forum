# Contributions

### Getting Started

- #### 1 - fork the repo in GitHub so you have your own copy.

- #### 2 - clone the repository from the fork to your local machine, like this:

`git clone https://github.com/<YOUR_GIT_USERNAME_HERE>/javascript-forum.git`

- #### 3 - switch to the master branch.
- #### 4 - `git pull` the latest changes
- #### 5 - create a new branch and switch to it, like this:
`git checkout -b [branch name]`

When naming your branches, **use the following format:**  
When adding a feature: _feature/my-feature_
When fixing a bug: _fix/my-fix_

- #### 6 - change some stuff! Add a feature, fix a bug, work your magic.

- #### 7 - add and commit your changes to GitHub, like this:

`git add -u`  
`git commit -m "feat: your change"`

When making commits, please use [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/). 

**e.g.**  
for feature additions: _feat: add feature_  
for bug fixes: _fix: fix specific bug_  
for changes regarding things like code cleanup, adding/removing comments, etc: _chore: cleanup_  

Please keep your commits small and commit each change individually. Keep in mind that people use *blame annotations* in IDEs which show the commit message besides the line of code. Please consider that your message makes sense when viewn in blame annotations.

- #### 6 - push your changes to your repository, like this:

`git push origin [branch name]`

- #### 7 - now, go to GitHub and make a pull request! Make sure to provide details on what you added/removed/fixed, and why.

### Maintainers 
Please read these additional contribution guidelines for maintaines

- #### Branching models
  As soon as we have a rough baseline we should avoid commiting to master directly. 
  We will have a *release/version* branch which receives all PRs up to the next version increase.
  The versioning will be guided by our [Trello Board's Backlog](https://trello.com/w/reactserver)  
  <sub>Note: please send a PM to request access</sub>
  ##### Feature branch (/feature/5-mark-as-solved)
  Feature branches should contain the Trello cards ID in their title so we can correlate branches to cards. Feature branches should contain all code that is required for a given feature. After successful code review the feature branch will be merged to the release branch
  ##### Release branch (/release/v0.0.1)
  The release branch gathers all work until the next version release. All features will be merged into release and when we increment the version it will be merged into master and tagged
  ##### Master branch (/master --> v0.0.1)
  The master branch should always point to the latest tagged version of the forum. It should never contain *wip* code. This is the branch you base off new feature branches.
- #### Code Review: In case you have been added as maintainer, plese make sure to review PRs thorougly-  

  Please take a look at our [coding conventions]() and make sure that code which doesn't adhere to the guidelines will be refactored before being merged into the release branch. 