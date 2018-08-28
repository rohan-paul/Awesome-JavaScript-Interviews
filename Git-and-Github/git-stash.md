## git stash - How to Save Your Changes Temporarily

[https://git-scm.com/book/en/v1/Git-Tools-Stashing](https://git-scm.com/book/en/v1/Git-Tools-Stashing)

Often, when you’ve been working on part of your project, things are in a messy state and you want to switch branches for a bit to work on something else. The problem is, you don’t want to do a commit of half-done work just so you can get back to this point later. The answer to this issue is the git stash command.

Stashing takes the dirty state of your working directory — that is, your modified tracked files and staged changes — and saves it on a stack of unfinished changes that you can reapply at any time.

Stashing Your Work
To demonstrate, you’ll go into your project and start working on a couple of files and possibly stage one of the changes. If you run git status, you can see your dirty state:

## $ git status

```
# On branch master
# Changes to be committed:
#   (use "git reset HEAD <file>..." to unstage)
#
#      modified:   index.html
#
# Changes not staged for commit:
#   (use "git add <file>..." to update what will be committed)
#
#      modified:   lib/simplegit.rb
#
```
Now you want to switch branches, but you don’t want to commit what you’ve been working on yet; so you’ll stash the changes. To push a new stash onto your stack, run git stash:

## $ git stash

```
Saved working directory and index state \
  "WIP on master: 049d078 added the index file"
HEAD is now at 049d078 added the index file
(To restore them type "git stash apply")
```

### Look Your working directory is clean, just as it would have been if I had committed the changes

## $ git status

```
# On branch master
nothing to commit, working directory clean
```

At this point, you can easily switch branches and do work elsewhere; your changes are stored on your stack. To see which stashes you’ve stored, you can use git stash list:

## $ git stash list

```
stash@{0}: WIP on master: 049d078 added the index file
stash@{1}: WIP on master: c264051 Revert "added file_size"
stash@{2}: WIP on master: 21d80a5 added number to log

```

In this case, two stashes were done previously, so you have access to three different stashed works. You can reapply the one you just stashed by using the command shown in the help output of the original stash command: git stash apply. If you want to apply one of the older stashes, you can specify it by naming it, like this: git stash apply stash@{2}. If you don’t specify a stash, Git assumes the most recent stash and tries to apply it:

## Continuing Where You Left Off

Git's Stash is meant as a temporary storage. When you're ready to continue where you left off, you can restore the saved state easily:

## $ git stash apply

This command takes the top most stash in the stack and applies it to the repo. In our case it is stash@{0}

If you want to apply some other stash you can specify the stash id.

Here’s the example:

git stash apply stash@{1}

```
# On branch master
# Changes not staged for commit:
#   (use "git add <file>..." to update what will be committed)
#
#      modified:   index.html
#      modified:   lib/simplegit.rb
#
```
You can see that Git re-modifies the files you uncommitted when you saved the stash. In this case, you had a clean working directory when you tried to apply the stash, and you tried to apply it on the same branch you saved it from; but having a clean working directory and applying it on the same branch aren’t necessary to successfully apply a stash. You can save a stash on one branch, switch to another branch later, and try to reapply the changes. You can also have modified and uncommitted files in your working directory when you apply a stash — Git gives you merge conflicts if anything no longer applies cleanly.


# Here are some more useful trick about Git stash

## git stash pop

This command is very similar to stash apply but it deletes the topmost stash from the stack after it is applied.

So, this **pop** is just like the JS's Array.pop() method - It returns the removed element from the array and mutates the original array. The "pop" flag will reapply the last saved state and, at the same time, delete its representation on the Stash (in other words: it does the clean-up for you).

Likewise, if you want a particular stash to pop you can specify the stash id.

## git stash pop stash@{1}

## git stash show

This command shows the summary of the stash diffs. The above command considers only the latest stash.


If you want to see the full diff, you can use

## git stash show -p

Likewise with other commands, you can also specify the stash id to get the diff summary.

## git stash show stash@{1}

## Git stash branch <name>

This command creates a new branch with the latest stash, and then deletes the latest stash ( like stash pop).

If you need a particular stash you can specify the stash id.

## git stash branch <name> stash@{1}

This will be useful when you run into conflicts after you’ve applied the stash to the latest version of your branch.

## git stash clear

This command deletes all the stashes made in the repo. It maybe impossible to revert.

## git stash drop

This command deletes the latest stash from the stack. But use it with caution, it maybe be difficult to revert.

You can also specify the stash id.

## git stash drop stash@{1}

If you no longer need a particular stash, you can delete it with:

## git stash drop <stash_id>

you can delete all of your stashes from the repo with

## $ git stash clear