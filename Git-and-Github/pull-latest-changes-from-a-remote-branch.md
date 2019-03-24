Let two people have below branches on which they work.

master
dev
person A
person B

We both keep working on our branches i.e. person A or person B (working on same project). 

#### How B can take the latest changes which A has done, from dev to his branch person B

```
git checkout dev

git pull dev
```

### What's the difference between git fetch and git pull?

Before we talk about the differences between these two commands, let's stress their similarities: both are used to download new data from a remote repository.

**git fetch** really only downloads new data from a remote repository - but it doesn't integrate any of this new data into your working files. 

`git pull origin master`

git pull, in contrast, is used with a different goal in mind: to update your current HEAD branch with the latest changes from the remote server. This means that pull not only downloads new data; it also directly integrates it into your current working copy files. This has a couple of consequences:

Since "git pull" tries to merge remote changes with your local ones, a so-called "merge conflict" can occur. Check out our in-depth tutorial on How to deal with merge conflicts for more information.
Like for many other actions, it's highly recommended to start a "git pull" only with a clean working copy. This means that you should not have any uncommitted local changes before you pull. Use Git's Stash feature to save your local changes temporarily.