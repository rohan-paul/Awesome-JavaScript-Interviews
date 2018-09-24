## Only push my own branch to remote repo - i.e. NOT to master

[https://stackoverflow.com/questions/820178/how-do-you-push-just-a-single-git-branch-and-no-other-branches](https://stackoverflow.com/questions/820178/how-do-you-push-just-a-single-git-branch-and-no-other-branches)

I am working on a local git repository. There are two branches, master and feature_x.

I want to push ``feature_x`` to the remote repo, but I do not want to push the changes on the ``master`` branch.

Will a ``git push origin feature_x`` from my ``feature_x`` branch (feature_x branch already exists on remote) work ?

yes, just do the following

``git checkout feature_x``

``git push origin feature_x``