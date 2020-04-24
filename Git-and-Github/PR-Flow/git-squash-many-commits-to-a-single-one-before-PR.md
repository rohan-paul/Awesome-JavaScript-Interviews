One of the feature git, has enabled us to record all changes by the commit. And saved it as our history. So when something unexpected happens, you can rollback to specific commits.
But, too many commits may mess your git history. If you have a lot of fixup commits, and you merge all of them directly into master, the git history will be bloated (which is something we don't want). So, if your change consists of two commits X and Y, we want to squash them into a single commit Z

Some folks do it by hastily creating a new branch, porting all changes to it with a patch file and creating a separate pull request. But this is headache both for the contributor and project maintainer. There's an easier way, which is git squash

[https://www.digitalocean.com/community/tutorials/how-to-rebase-and-update-a-pull-request](https://www.digitalocean.com/community/tutorials/how-to-rebase-and-update-a-pull-request)

So before we start the process of squashing, first find out the number of commits we have made, we can inspect the total number of commits that have been made to the project with the following command:

`git log`

This will provide you with output that looks similar to this

```js
Output
commit 46f196203a16b448bf86e0473246eda1d46d1273
Author: username-2 <email-2>
Date: Mon Dec 14 07:32:45 2015 -0400

    Commit details

commit 66e506853b0366c87f4834bb6b39d941cd034fe3
Author: username1 <email-1>
Date: Fri Nov 27 20:24:45 2015 -0500

Commit details

```

The log shows all the commits made to the given project’s repository, so your commits will be mixed it with the commits made by others. For projects that have an extensive history of commits by multiple authors, you’ll want to specify yourself as author in the command:

`git log --author=your-username`

Now if you know the number of commits you’ve made on the branch (just count it) that you want to rebase, you can simply run the git rebase command like so:

`git rebase -i HEAD~x`

e.g.

`git rebase -i HEAD~8`

If, however, you don’t know how many commits you have made on your branch, you’ll need to find which commit is the base of your branch, which you can do by running the following command:

`git merge-base new-branch master`

This command will return a long string known as a commit hash, something that looks like this:

```
Output
66e506853b0366c87f4834bb6b39d341cd094fe9
```

We’ll use this commit hash to pass to the git rebase command:

`git rebase -i 66e506853b0366c87f4834bb6b39d341cd094fe9`

For either of the above commands, your command-line text editor will open with a file that contains a list of all the commits in your branch, and you can now choose whether to squash commits or reword them.

### Now after running `git rebase -i HEAD~8` the follwoing editor will open in the Terminal and this is where I have to choose which commit to Squash and which ones to Pick

When we squash commit messages, we are squashing or combining several smaller commits into one larger one.

In front of each commit you’ll see the word “pick,” so your file will look similar to this if you have two commits:

```
GNU nano 2.0.6 File: …username/repository/.git/rebase-merge/git-rebase-todo
pick a1f29a6 Adding a new feature
pick 79c0e80 Here is another new feature


# Rebase 66e5068..79c0e80 onto 66e5068 (2 command(s))

```

#### Now, for each line of the file you should replace the word “pick” with the word “squash” to combine the commits: And these lines will be arranged top to bottom like so, the most recent one (i.e. most recent commit) at the bottom most positon. And if I want to keep the lastest commit msg, all I have to do is edit the top-most line as pick and rest of all as squash.

```
GNU nano 2.0.6 File: …username/repository/.git/rebase-merge/git-rebase-todo
pick a1f29a6 Adding a new feature
squash 79c0e80 Here is another new feature
```

**At this point, you can save and close the file ( Choosing the option shown in the Terminal, Control + O for writing out, then just press Enter for choosing the default file to write to and then finally Control+X to exit). After first exit, it will open the section editor inside Terminal where I should be able to edit and add the comments for my commit. So the same flow here as well. Edit inside Terminal Editor > press Control+O to write out > Press Enter to save to default file > Control+X to Exit**

### ISSUE - If I get Error - Git: “Cannot 'squash' without a previous commit” error while rebase

[https://stackoverflow.com/a/51516360/1902852](https://stackoverflow.com/a/51516360/1902852)

Why it happened in my case was that, you cannot squash older commits onto a new commit. Here is an example say you have 3 commits:

```
pick 01mn9h78 The lastest commit
pick a2b6pcfr A commit before the latest
pick 093479uf An old commit i made a while back
```

Now if you say git rebase -i HEAD~3 and you do something like

```
pick 01mn9h78 The lastest commit
s a2b6pcfr A commit before the latest
s 093479uf An old commit i made a while back

```

This will result in the error :

```
error: cannot 'squash' without a previous commit You can fix this with 'git rebase --edit-todo' and then run 'git rebase --continue'. Or you can abort the rebase with 'git rebase --abort'.
```

**Solution :**

#### When squashing commits , you should squash recent commits to old ones not vice versa thus in the example it will be something like this :

### So put the 'squash' or 's' word before the latest comment and 'pick' word before the oldest one

```
s 01mn9h78 The lastest commit
s a2b6pcfr A commit before the latest
pick 093479uf An old commit i made a while back
```

### Now the FINAL step of actually pushing or updating the PR

**Once you perform a rebase, the history of your branch changes, and you are no longer able to use the git push command because the direct path has been modified.**

And you can check that by doing a `git status` You will get

```
Your branch and 'origin/master' have diverged,
and have 1 and 2 different commits each, respectively.
  (use "git pull" to merge the remote branch into yours)

nothing to commit, working tree clean
```

We will have to instead use the --force or -f flag to force-push the changes, informing Git that you are fully aware of what you are pushing.

At this point, we should ensure that we are on the correct branch by checking out the branch we are working on:

`git checkout new-branch`

```
Output
Already on 'new-branch'
```

Now we can perform the force-push:

`git push -f`

I could also do below, assuming I am in master branch, and all my squashing activities were in master branch

`git push origin master --force`

And now if I go to the exiting PR in Github, I will see the same PR has got fully updated with my latest changes, with just a single commit.

Note, all these squashing activities could have been done by the Repo's Manager as well. The repository's manager can squash all the commits in a pull request into a single commit by selecting "Squash and merge" on a pull request.

#### ISSUE - How to squash commits after the pull request has been opened ? That is, after I have created a PR, then squash my commits in my local machine and then when I go to the PR of the upstream Repo, I still see all the committs that were there previously.

#### Solution - (the below will save you many times)

The easiest way to squash all of these changes is probably start by resetting your current branch back to the upstream master branch:

```
$ git reset upstream/master

```

#### The magical thing abuout the above command is, this will reset the repository, but not your working directory, to the state of the upstream/master branch. Since it doesn't modify the state of your working directory, this means that all your changes are preserved, but not the commit history. At this point, we see:

```
\$ git status
[...]
Changes not staged for commit:
(use "git add <file>..." to update what will be committed)
(use "git checkout -- <file>..." to discard changes in working directory)

    modified:   app/server.go
    modified:   smtp.go

no changes added to commit (use "git add" and/or "git commit -a")

```

Now we can create a new commit:

```
$ git add -u
$ git commit
```

#### Now you have a single commit on top of the upstream master branch. You would then force push this to your own master branch, which would update the PR.

(NB: if you're worried about screwing something up or losing your changes or anything like that, either work on a new branch, or just make a local copy of your working directory and work on that instead.)
