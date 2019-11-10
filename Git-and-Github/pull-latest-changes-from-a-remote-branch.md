### Pulling the latest update from a specific branch

**The “pull”** command is used to download and integrate remote changes.

**The target** (to which branch the data should be integrated into) is always the currently checked out HEAD branch.

**The source** (from which branch the data should be downloaded from) can be specified in the command’s options.

Before using **git pull**, make sure the correct local branch is checked out. Then, to perform the pull, simply specify which remote branch you want to integrate. Assuming I am in ‘master’ branch in my local machine, and I want to incorporate changes from a remote repository’s ‘dev’ branch into the local machine’s branch.

```
git checkout dev
git pull origin dev
```

The branch-name option can be omitted, however, if a tracking relationship with a remote branch is set up. In most cases, however, your local branch will already have a proper tracking connection with a remote branch set up. This configuration provides default values so that the pull command already knows where to pull from without any additional options:

`git pull`

It’s often clearer to separate the two actions git pull does. The first thing it does is update the local tracking branch that corresponds to the remote branch. This can be done with git fetch.

The second is that it then merges in changes, so in its default mode, git pull is shorthand for git fetch followed by git merge FETCH_HEAD.

More precisely, git pull runs git fetch with the given parameters and calls git merge to merge the retrieved branch heads into the current branch. With — rebase, it runs git rebase instead of git merge.
