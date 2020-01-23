[https://www.digitalocean.com/community/tutorials/how-to-rebase-and-update-a-pull-request](https://www.digitalocean.com/community/tutorials/how-to-rebase-and-update-a-pull-request)

To find out the number of commits we have made, we can inspect the total number of commits that have been made to the project with the following command:

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

### Squash Commits

When we squash commit messages, we are squashing or combining several smaller commits into one larger one.

In front of each commit you’ll see the word “pick,” so your file will look similar to this if you have two commits:

```
GNU nano 2.0.6 File: …username/repository/.git/rebase-merge/git-rebase-todo
pick a1f29a6 Adding a new feature
pick 79c0e80 Here is another new feature


# Rebase 66e5068..79c0e80 onto 66e5068 (2 command(s))

```

#### Now, for each line of the file you should replace the word “pick” with the word “squash” to combine the commits: And these lines will be arranged top to bottom like so, the most recent one at the bottom most positon. So mostly I should be able to "squash" all of the commits except the last most recent commit at the bottom of this list.

```
GNU nano 2.0.6 File: …username/repository/.git/rebase-merge/git-rebase-todo
pick a1f29a6 Adding a new feature
squash 79c0e80 Here is another new feature
```

At this point, you can save and close the file ( Choosing the option shown in the Termianl, Control + O for writing out, then just press Enter for chosing the default file to write to and then fianally Control+X to exit).

### If I get Error - Git: “Cannot 'squash' without a previous commit” error while rebase

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

```
s 01mn9h78 The lastest commit
s a2b6pcfr A commit before the latest
pick 093479uf An old commit i made a while back
```
