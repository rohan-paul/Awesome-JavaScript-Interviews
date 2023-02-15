First the regular steps, i.e. working on the fork and merging the dev-branch of the fork with master of the fork

A> Fork the repo from the upstream remote repo to my personal github

B> Create a Branch in the forked repository (This is Optional)

C> Work on that branch, and at the end merge it with the Master Branch (in the forked repo itself, i.e if I have actually worked on a separate Branch )

Lets say my Upstream Repo name is institutions-web under the Organization name of MyOrganization.

Fork the repo from MyOrganization to my personal github > then clone the repo into local machine to work locally > after development-work is done in my locally cloned repo from the root of the project.

Then run following command

`$ git remote add upstream git@github.com:MyOrganization/institutions-web.git`

i.e. the very first time before running < git fetch >

The above step configures a git remote for a fork. This step is ONLY required ONCE per repository, which is Add a new remote upstream repository to sync with the fork.

#### Now, I actually have to sync my local forked Repo with the remote Repo, before raising a new PR, this is VERY IMPORTANT as it will avoid all merge-conflict later on. So run below command, to Fetch project branches from the upstream repository to get all the commits.

`$ git fetch upstream`

Followed - https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/syncing-a-fork

#### 1> First sync it, by fetching latest changes from Upstream post the merge

`git fetch upstream`

I got below

remote: Enumerating objects: 1, done.
remote: Counting objects: 100% (1/1), done.
remote: Total 1 (delta 0), reused 0 (delta 0), pack-reused 0
Unpacking objects: 100% (1/1), done.
From github.com:MyOrganization/institutions-web
a6cd1e82..68ce35a3 master -> upstream/master

#### After fetching from the remote branch, you would still have to merge the commits. So you can actually replace

`$ git fetch upstream`

with

`$ git pull upstream master`

since git pull is essentially git fetch + git merge.

#### 2> Merge the changes from upstream/master into your local master branch. This brings your fork's master branch into sync with the upstream repository, without losing your local changes.

`$ git checkout master`

`$ git merge upstream/master`

#### Generally follow the below principles

You will probably find things more manageable if you work on a feature branch rather than your own master branch. That is, start with git checkout -b my-feature before you start making any changes. If you will be regularly contributing upstream, your life is easiest if your master branch always reflects the state of the upstream master branch at some point in time, because this permits you to update your local master branch with a simple

`git pull upstream master`

Avoiding merging code into your feature branches. Regularly rebase on upstream/master if you need to incorporate upstream changes.
