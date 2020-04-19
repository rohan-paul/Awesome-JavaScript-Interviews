### What’s the difference between git fetch and git pull?

Before we talk about the differences between these two commands, lets stress their similarities: both are used to download new data from a remote repository.

**git fetch** really only downloads new data from a remote repository — but it doesn’t integrate any of this new data into your working files. It fetches all of the branches from the repository. This also downloads all of the required commits and files from the other repository.

`git pull origin master`

**git fetch** doesn’t integrate any of this new data into your working files. Fetch is great for getting a fresh view on all the things that happened in a remote repository. Due to its “harmless” nature, fetch will never destroy or manipulate anything in your local machine.

**git pull**, in contrast, is used with a different goal in mind: to update our current HEAD branch with the latest changes from the remote server. This means that pull not only downloads new data; it also directly integrates it into our current working copy files. This has a couple of consequences:

Since **git pull** tries to merge remote changes with your local ones, a so-called “merge conflict” can occur. Check out our in-depth tutorial on How to deal with merge conflicts for more information.

Like for many other actions, it’s highly recommended to start a **git pull** only with a clean working copy. This means that you should not have any uncommitted local changes before you pull. Use Git’s Stash feature to save your local changes temporarily.

So when you are working on Forked Repo, after fetching from the remote branch, you would still have to merge the commits. So you can actually replace

`$ git fetch upstream`

with

`$ git pull upstream master`

since git pull is essentially git fetch + git merge.
