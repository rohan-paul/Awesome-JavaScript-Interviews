### How can I clear my working directory in Git?

https://stackoverflow.com/questions/673407/how-do-i-clear-my-local-working-directory-in-git

To reset the entire repository to the last committed state: If you're really serious, you can discard all local commits and all local edits by doing:

```
git reset --hard origin/branchname

```

For example:

```
git reset --hard origin/master

```

This makes your local repository exactly match the state of the origin (other than untracked files).

To remove untracked files, I usually just delete all files in the working copy (but not the .git/ folder!), then do git reset --hard which leaves it with only committed files.

A better way is to use git clean (warning: using the -x flag as below will cause Git to delete ignored files):

```
git clean -d -x -f

```

will remove untracked files, including directories (-d) and files ignored by git (-x). Replace the -f argument with -n to perform a dry-run or -i for interactive mode, and it will tell you what will be removed.
