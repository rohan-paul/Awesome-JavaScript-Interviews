## Git Commands Cheat Sheet
=======================================


# Branch
-------------------
Show branches:

## `git branch`

List or Show all the available branches (both local and remote)

## `git branch -a`

Create branch:

## `git branch branchname`

Change to branch:

## `git checkout branchname`

Create and change to new branch:

## `git checkout -b branchname`

Rename branch:

## `git branch -m branchname new_branchname`

or:

`git branch --move branchname new_branchname`

Show all completely merged branches with current branch:

## `git branch --merged`

Delete merged branch (only possible if not HEAD):

## `git branch -d branchname` or:

## `git branch --delete branchname`


Delete not merged branch:

## `git branch -D branch_to_delete`


# Setup
-------------------

See where Git is located:

## `which git`

Get the version of Git:

## `git --version`

Create an alias (shortcut) for `git status`:

## `git config --global alias.st status`



# General
--------------------------

Initialize Git in the project root:

## `git init`

Get every file in the project ready to commit:

## `git add .`

Get custom file ready to commit:

## `git add index.html`

Commit changes:

## `git commit -m "Message"`

Add and commit in one step:

## `git commit -am "Message"`

Remove files from Git:

## `git rm index.html`

Update all changes:

## `git add -u`

Remove file but do not track anymore:

## `git rm --cached index.html`

Move or rename files:

## `git mv index.html dir/index_new.html`

Undo modifications (restore files from latest commited version):

## `git checkout -- index.html`

Restore file from a custom commit (in current branch):

## `git checkout 6eb715d -- index.html`