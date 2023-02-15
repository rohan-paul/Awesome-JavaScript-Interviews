### Resolving merge conflicts after a Git rebase

[Resolve conflicts manually](https://docs.openstack.org/doc-contrib-guide/additional-git-workflow/rebase.html):

Conflicts are marked in a file with clear line breaks:

```
<<<<<<< HEAD
Second line.
=======
Third line.
>>>>>>> feature/topic branch.
```

<<<<<<<: Indicates the start of the lines that had a merge conflict.

=======: Indicates separation of the two conflicting changes.

\>>>>>>> : Indicates the end of the lines that had a merge conflict.

You need to resolve a conflict by manually editing the file. You also need to delete the ‘<<<<<<<’, ‘=======’, and’>>>>>>>’ in the file.

#### Then regular command to add all files

`$ git add -A`

And then continue the rebasing process

`$ git rebase --continue`

And in a single cycle of rebasing you may get these conflicts multiple times.

#### Now most probably when you try to push to remote - you will be stopped from pushing to branch after rebase

[stackoverflow.com/questions/15143042/cant-push-to-branch-after-rebase](https://stackoverflow.com/questions/15143042/cant-push-to-branch-after-rebase)

#### Simple solution is to force push

`git push -f origin myNewFeature`

You need to force the push as you have moved the commits further down the line git is expecting you to add commits to the tip of the branch.

But, Above is a legitimate usage of force pushing. Never ever rewrite the history on a publicly accessible repository or a lot of people will hate you.

The main thing to keep in mind here is what pull and rebase are doing behind the scenes.

A pull will basically do two things: fetch and merge. When you include --rebase it will do a rebase instead of the merge.

A rebase is pretty much like stashing all of your local changes since you branched, fast forwarding your branch to the latest commit on the target, and unstashing your changes in order on top.

So, whenever you do a rebase you would need to do a force push **because the remote branch cannot be fast-forwarded to your commit.** You'd always want to make sure that you do a pull before pushing
