## To delete a commit from Github

I accidentally switched to the master branch..

And there I somehow made 2 commits, and pushed them.

After going back to source branch, subsequent rake gen_deploy will give this error:

`failed to push some refs to 'git@github.com:samwize/samwize.github.com'`

I don’t really understand why.

But I knew I shouldn’t push the 2 commits in the first place.

### Steps to remove the 2 commits

Firstly, find out the commit that you want to revert back to.

`git log`

For example, commit 7f6d03 was before the 2 wrongful commits.

press q to exit from `git log`

Force push that commit as the new master:

`git push origin +7f6d03:master`

### The + is interpreted as forced push.

## Another way

You can also use git reset to undo things. Then force push.

## git reset 7f6d03 --hard

### git push origin -f

Source - [https://samwize.com/2014/01/15/how-to-remove-a-commit-that-is-already-pushed-to-github/](https://samwize.com/2014/01/15/how-to-remove-a-commit-that-is-already-pushed-to-github/)

## To delete a commit from Github - my earlier note, but should work still now

https://stackoverflow.com/questions/10817906/delete-a-commit-from-github?lq=1

```js
git reset --hard <sha-commit-name-to-go-back-to>

git push -f origin HEAD^:master
```

In first command for "**sha-commit-name-to-go-back-to**" - I copied-and-pasted, the the SHA Key (click on the that specific commit, and then on the right side of the page).

This commit was named as “second commit” and after the above 2 commands the entire commit and also another commit (named “third commit”) was deleted. Meaning, the above 2 commands will delete all commits starting from the SHA Key and any forward commit.

But then, when I added the correct version of the full project (by following the above 3 steps) – all the previous commit came right back.

Have to study in moer detail (as of 26-May-2014) to get the correct solution be able to delete a single commit only.

Specially Note, as per the above link, when I ran the below 2 commands

`git rebase -i HEAD~2` and then `git push origin +master` after running the above 2, my Project got completely messed up and went back to much previous state.

### The + is interpreted as forced push.
