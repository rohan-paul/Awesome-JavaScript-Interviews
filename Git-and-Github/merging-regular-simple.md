### Merging two branches

This is probably the most important and sensitive area to deal with when working in a team.
Lets say we are working in “dev” branch and want to integrate the changes from “dev” branch back into “master”.

Before merging our code of master branch into one of our project’s long-running branches (i.e. in this case the “dev” and “master” branch), make sure that your local repository is up to date. Both our local feature / bugfix / “dev” branch and the receiving branch should be updated with the latest changes from our remote server.
The target of this integration (i.e. the branch that receives changes) is always the currently checked out HEAD branch (in the below case its 'dev' branch). Meaning in below I want to merge the latest pulled-in master branch to my currenty WIP branch named 'dev'. This is the set of commands you will most often do during a regular day, to keep your branch updated with the master branch.

```js
git checkout master
git pull
git checkout dev
git merge master
```

Similarly, if you are currently working in a branch named dev and would like to merge any new changes that were made in a branch named new-features, you would issue the following command:

`git merge new-features`

### How to resolve Merge Conflicts after doing git merge

if two people changed the same lines in that same file, or if one person decided to delete it while the other person decided to modify it, Git simply cannot know what is correct. Git will then mark the file as having a conflict — which you’ll have to solve before you can continue your work. And in terminal you will see something like this.

```
CONFLICT (content): Merge conflict in index.js
Automatic merge failed; fix conflicts and then commit the result.
```

Git hasn’t automatically created a new merge commit. It has paused the process while you resolve the conflict. If you want to see which files are unmerged at any point after a merge conflict, you can run git status:
`git status`

```
On branch master
You have unmerged paths.
(fix conflicts and run "git commit")

Unmerged paths:
(use "git add <file>..." to mark resolution)

    both modified:      index.js

no changes added to commit (use "git add" and/or "git commit -a")
```

Take a look at the contents of the conflicted file. Git was nice enough to mark the problematic area in the file by enclosing it in “<<<<<<< HEAD” and “>>>>>>> [other/branch/name]”.

The contents after the first marker originate from our current working branch. After the angle brackets, Git tells us where (from which branch) the changes came from. A line with “=======” separates the two conflicting changes.

This means the version in HEAD (our master branch, because that was what I had checked out when I ran the git merge command) is the top part of that block (everything above the =======). This is the receiving branch.
And the version in my dev branch looks like everything in the bottom part.

Our job is now to clean up these lines. In a team its advisable to consult other teammate who wrote the conflicting changes to decide which code is finally correct.

At this stage (i.e. after manually resolving all the conflicts) - If I do < git merge > it will give me error as below

```
error: Merging is not possible because you have unmerged files.
hint: Fix them up in the work tree, and then use 'git add/rm <file>'
hint: as appropriate to mark resolution and make a commit.
fatal: Exiting because of an unresolved conflict.
```

This is because my current branch has changes that has NOT been committed.

So when you've successfully solved all conflicts, you need to do two more things:

-1. So now, you'll have to mark the file as resolved by executing a "git add <filename>" command. OR a `git add -A` command.

-2. AND then, after solving all conflicts, a merge conflict situation needs to be absolutely finally concluded by a regular commit. Just as you would commit any other change with the "git commit" command.

### How to Undo a Merge

You should always keep in mind that you can return to the state before you started the merge at any time. This should give you the confidence that you can't break anything. On the command line, a simple "git merge --abort" will do this for you.

In case you've made a mistake while resolving a conflict and realize this only after completing the merge, you can still easily undo it: just roll back to the commit before the merge happened with "git reset --hard " and start over again.

Overall remember - Fetch Remote Changes Frequently to Avoid Big Conflicts

##### Further Reading

[merge-conflicts](https://www.git-tower.com/learn/git/ebook/en/command-line/advanced-topics/merge-conflicts)
