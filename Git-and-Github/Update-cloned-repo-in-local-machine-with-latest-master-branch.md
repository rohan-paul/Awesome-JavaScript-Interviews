# How do I update a GitHub cloned repository in my local machine with the latest master branch? - 29May2018

https://help.github.com/articles/syncing-a-fork/

```js
git fetch --all
git reset --hard origin/master
git pull origin master
```

For the official doc on the various git pull related commands - https://help.github.com/articles/fetching-a-remote/

And when I gitclone a repo, and working on a particular branch by doing $ git checkout <branch_name> and then I want to update my local machine with the latest of the remote repo’s update, in the above commands, just replace master with the branch name - like so

```
git fetch --all
git reset --hard origin/branch-name
git pull origin branch-name

```

#### IMP POINT - So if I have a particular branch in which I want all the remote repo’s changes to be fetched, I have to run the above command for that particular branch. And just fetching the master branch will not be enough to bring the other branches changes to my local machine.