## Staging Area - Explanation-1
### Most basic explanation of staging concept is that I can only push those files to the remote repo which has been staged. And the way a file is staged is when I do ``git add fileName``

## Use case - Say I only want to push the changes in file named ``../Git-and-Github/git-staging-area.md``

### 1> So from project root of this project I do

``git add Git-and-Github/git-staging-area.md``

### 2> Then only that file will be staged and NO OTHER FILE

### 3> Then I run the regular commands of git pushing

``git commit -m 'some message'``

``git push``

And I can check in the remote repo, my other modified files have not been pushed from the local machine to remote repo.

With most other version control systems, there’s 2 places to store data: your working copy (the folders/files that you’re currently using) and the datastore (where the version control decides how to pack and store your changes). In Git there’s a third option: the staging area (or index). It’s basically a loading dock where you get to determine what changes get shipped away.

If we do ``git add .``, that will add everything that has been changed or any new files that have not been tracked yet. The add command doesn’t store the data yet, it simply places it on the loading dock, ready for the next git commit truck to ship it away.

## Staging Area - More Explanation

To stage a file is simply to prepare it finely for a commit. Git, with its index allows you to commit only certain parts of the changes you've done since the last commit. Say you're working on two features - one is finished, and one still needs some work done. You'd like to make a commit and go home (5 o'clock, finally!) but wouldn't like to commit the parts of the second feature, which is not done yet. You stage the parts you know belong to the first feature, and commit. Now your commit is your project with the first feature done, while the second is still in work-in-progress in your working directory.

So the staging area is like a cache of files that you want to commit

## Staging Area - Even More Explanation

[https://softwareengineering.stackexchange.com/questions/119782/what-does-stage-mean-in-git](https://softwareengineering.stackexchange.com/questions/119782/what-does-stage-mean-in-git)

Staging is a step before the commit process in git. That is, a commit in git is performed in two steps: staging and actual commit.

As long as a changeset is in the staging area, git allows you to edit it as you like (replace staged files with other versions of staged files, remove changes from staging, etc.).

Consider a scenario where you call the movers to get your stuff from your old appartment to your new appartment. Before you do that, you will go through your stuff, decide what you take with you and what you throw away, pack it in bags and leave it in the main hallway. The movers simply come, get the (already packed) bags from the hallway and transport them. In this example, everything until the movers get your stuff, is staging: you decide what goes where, how to pack it and so on (e.g. you may decide that half your stuff will be thrown away before the movers even get there - that's part of staging).

From a technical point of view, staging also supports transactional commits, by splitting all operations into what can fail (staging) and what cannot fail (commit):

The commit in git is implemented transactionally, after the staging is sucessfull. Several steps in the staging can fail (for example, you need to commit, but your HDD is 99.9999% full, and git has no space to perform a commit). This will fail in staging (your repository will not be corrupted by a partial commit) and the staging process doesn't affect your commit history (it doesn't corrupt your repository in case of an error).