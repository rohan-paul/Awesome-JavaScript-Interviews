## To completely overwrite one branch's all files and commits with another branch

I have two branches, **old-branch** and **new-dev-branch**. **new-dev-branch** is the latest one and I no more need the **old-branch** changes in **new-dev-branch** branch, yet I don't want to delete them.

So I just want to dump all the contents of **new-dev-branch** into **old-branch** so that they both point to the same commit. Here's the commands.

#### $ git checkout old-branch

#### $ git tag old-email-branch # This is optional

#### $ git reset --hard new-dev-branch

[https://stackoverflow.com/questions/4624357/how-do-i-overwrite-rather-than-merge-a-branch-on-another-branch-in-git/9690693](https://stackoverflow.com/questions/4624357/how-do-i-overwrite-rather-than-merge-a-branch-on-another-branch-in-git/9690693)


### Git merge (apply the latest state of one branch into another branch) without including commits from one branch to another When you want to merge your "dev" branch into master

### So this is the simple case where I have a working branch on which I am doing all the experimentation, and at the end of my work, I want to apply all these changes to another branch ( that other branch could be master or any other branch) .

#### First move into the target branch in Terminal, to which I want to apply the changes. So, here

``git checkout master``

#### Then merge the latest state of the ``dev`` branch - BUT THIS WILL NOT BE HARD REPLACEMENT OF THE MASTER BRANCH WITH THE DEV BRANCH - SO THERE WILL BE MERGE-CONFLICT

``git merge --squash dev``

#### And then normally I can do a commit

`git commit -m "Add new feature."`


#### The --squash option will squash all of your intermediate changes into one big change. So, it will appear to the other developers as if his changes coming from the dev branch were one giant commit.

This will merge in the way that target branch would include only its own commits + merge commit and not include the commits from the second branch

[https://stackoverflow.com/questions/14824431/git-merge-without-including-commits-from-one-branch-to-another](https://stackoverflow.com/questions/14824431/git-merge-without-including-commits-from-one-branch-to-another)

This is also useful, when I myself want to merge the commits from a dev branch to the master branch in the local machine itself, before pushing to the remote repo

I create a separate "dev" branch and make all intermediate commits.

Once the code is in good state, make a merge to master. So the master wouldn't contain "intermediate" commits but only "normal" commits.

Delete the "dev" branch with all intermediate commits.


