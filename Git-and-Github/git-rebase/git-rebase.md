In Git, there are two main ways to integrate changes from one branch into another: the merge and the rebase.

#### Rebasing is often used as an alternative to merging. Rebasing a branch updates one branch with another by applying the commits of one branch on top of the commits of another branch. For example, if working on a `feature` branch that is out of date with a `dev` branch, rebasing the `feature` branch onto `dev` will allow all the new commits from `dev` to be included in `feature`.

Git’s rebase command reapplies your changes onto another branch. As opposed to merging, which pulls the differences from the other branch into yours, rebasing switches your branch’s base to the other branch’s position and walks through your commits one by one to apply them again.

First checkout a branch and then run the rebase command with the name of the branch you wish to rebase on to:

```
git checkout feature
git rebase dev
```

**In most regular day-to-day cases (i.e. when I am rebasing on top of master), the commands will be**

`git checkout dev`
`git rebase master`

As most of the cases on a regular day, I would have to rebase on top of master branch.

#### And then after rebasing, if you DON'T get any conflict, and `git status` shows `nothing to commit, working tree clean` - then just do a forced push of your branch

`git push origin dev --force`

**Let’s look at an example. While working on a branch named login, based on the master branch, one of your team members pushed some changes to master. You need these changes to finish the login feature in your branch.**

**Merging the master branch back into yours would result in a merge commit, which includes the changes between both branches and exists to show where a merge occurred. We won’t need to know when we merged the master into the login branch in the future. Instead, we’d like to pretend that all commits on the login branch happened based on the new state of the master branch.**

<img src="git-rebase.png">

**Git’s rebase command temporarily rewinds the commits on your current branch, pulls in the commits from the other branch and reapplies the rewinded commits back on top. By switching the current, this bases the current branch onto the other branch.**

### `$ git rebase master`

```

First, rewinding head to replay your work on top of it...
Fast-forwarded login to master.

```

**It’s as if you didn’t start working in the login branch before the commits you pulled in were made. You can also pull with rebase so you don’t have to switch out of your current branch.**

## [More Explanation](https://git-scm.com/book/en/v2/Git-Branching-Rebasing)

How the `git merge` works - It performs a three-way merge between the two latest branch snapshots (C3 and C4) and the most recent common ancestor of the two (C2), creating a new snapshot (and commit).

<img src="git-merge.png">

However in `git rebase` you can take the patch of the change that was introduced in C4 and reapply it on top of C3. In Git, this is called rebasing. With the rebase command, you can take all the changes that were committed on one branch and replay them on another one.

#### For this example, you would check out the experiment branch, and then rebase it onto the master branch as follows:

```js
$ git checkout experiment
$ git rebase master
First, rewinding head to replay your work on top of it...
Applying: added staged command
```

### It works by going to the common ancestor of the two branches (the one you’re on and the one you’re rebasing onto), getting the diff introduced by each commit of the branch you’re on, saving those diffs to temporary files, resetting the current branch to the same commit as the branch you are rebasing onto, and finally applying each change in turn.

<img src="git-rebase-2.png">

At this point, you can go back to the master branch and do a fast-forward merge.

```js
$ git checkout master
$ git merge experiment
```

<img src="git-rebase-2.png">

## rebase vs merge - how they are different

#### Now, the snapshot pointed to by C4' is exactly the same as the one that was pointed to by C5 in the merge example. There is no difference in the end product of the integration, but rebasing makes for a cleaner history. If you examine the log of a rebased branch, it looks like a linear history: it appears that all the work happened in series, even when it originally happened in parallel.

Often, you’ll do this to make sure your commits apply cleanly on a remote branch — perhaps in a project to which you’re trying to contribute but that you don’t maintain. In this case, you’d do your work in a branch and then rebase your work onto origin/master when you were ready to submit your patches to the main project. That way, the maintainer doesn’t have to do any integration work — just a fast-forward or a clean apply.

#### Note that the snapshot pointed to by the final commit you end up with, whether it’s the last of the rebased commits for a rebase or the final merge commit after a merge, is the same snapshot – it’s only the history that is different. Rebasing replays changes from one line of work onto another in the order they were introduced, whereas merging takes the endpoints and merges them together.

Rebasing a branch in Git is a way to move the entirety of a branch to another point in the tree. The simplest example is moving a branch further up in the tree. Say we have a branch that diverged from the master branch at point A:

<img src="./git-rebase-4.png>">

Use `git rebase --abort` to completely cancel a rebase, and other useful commands to abort or to continue

```
git rebase --continue | --skip | --abort | --edit-todo
```

### Additional Resources

[https://jeffkreeftmeijer.com/git-rebase/](https://jeffkreeftmeijer.com/git-rebase/)

[https://medium.com/osedea/git-rebase-powerful-command-507bbac4a234](https://medium.com/osedea/git-rebase-powerful-command-507bbac4a234)

[https://git-scm.com/book/en/v2/Git-Branching-Rebasing](https://git-scm.com/book/en/v2/Git-Branching-Rebasing)

[https://blog.algolia.com/master-git-rebase/](https://blog.algolia.com/master-git-rebase/)
