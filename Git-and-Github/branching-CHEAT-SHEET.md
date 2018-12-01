## First some basic Branch related Commands

## General note - After I create and move into a new branch, I have to do ``git add .`` and ``git commit -m "some message"`` for the the changes that I did to that branch to persist.


-------------------
Show branches:

### `git branch`

List or Show all the available branches (both local and remote)

### `git branch -a`

Create branch:

### `git branch branchname`

Change to branch:

### `git checkout branchname`

Create and change to new branch:

### `git checkout -b branchname`

Delete not merged branch:

### `git branch -D branch_to_delete`


### `git branch -m <new-name>` renames the current branch to ‘new-name’


To push the changes from a a new-branch to remote repo (i.e. to github)

### git push origin name_of_your_new_branch

Update your branch when the original branch from official repository has been updated (applicable when working in teams and many people are committing to a branch)

### git fetch [name_of_your_remote]


### Delete the branch on github :

#### I have to delete it by going to Github and deleting the branch there manually.

[https://help.github.com/articles/creating-and-deleting-branches-within-your-repository/](https://help.github.com/articles/creating-and-deleting-branches-within-your-repository/)

On GitHub, navigate to the main page of the repository.

Branches link on overview pageAbove the list of files, click  NUMBER branches.

delete the branchScroll to the branch that you want to delete, then click the delete icon on the right.

### Delete a branch in BitBucket

Nevigate to [https://bitbucket.org/volteo/frontend-portal/branches/](https://bitbucket.org/volteo/frontend-portal/branches/) and then on the right horizontal three-dots select Delete.


### ******************************************************************

## STEP 1

I make sure I am in the master branch of my team's shared repository & that I have the LATEST VERSION:

``git pull origin master``

## STEP 2

I make my very own branch.

I name it a name with no spaces, like: "mybranchname".

``git checkout -b mybranchname``

Now I am in my branch, not the master, so it is safe to make changes.

## STEP 3

I keep code away in my code editor, tappity-tap-tap.

## STEP 4

I add my changes:

``git add .``  OR ``git add insert-file-name-here``

Then I commit the changes:

``git commit -m 'my awesome improvements to app'``

### STOP RIGHT THERE: my teammates have been making changes to the master. I should refresh it before I push my changes to make the pull request. So I get the master branch with all the latest changes.

## STEP 5

I switch to master for a sec:

``git checkout master``

I refresh the master branch:

``git pull origin master``

## STEP 6

I switch back into my branch:

``git checkout mybranchname``

## STEP 7

Then I push my changes TO MY OWN BRANCH AND NOT TO THE MASTER (essentially, you are pushing to the remote version of your branch):

``git push origin mybranchname``

## STEP 8

I go over to github.com

Once there, I see in our shared repo, a 1 (or any number of requests) under "Pull Requests", so I click to go to that page.

## STEP 9

I click on my pull request to open it up, and then I click the green confirmation button, and click again, until I have satisfied all of the options to confirm the merge. If there are conflicts, I resolve them before confirming everything.


## STEP 10

No more green, you will now get an alert that is purple, telling you the merge is complete. It will ask you to delete the branch. Go ahead and do that.

## STEP 11

In my terminal (or git bash for PC,) I switch to my master branch

``git checkout master``

## STEP 12

I refresh my master branch using git pull origin master, to make sure I am up to date with my changes and also with any other changes that people made.

## STEP 13

In terminal, I delete the local version of the branch I SUCCESSFULLY merged & then deleted before, when I was on github.com.

``git branch -d mybranchname``

## STEP 14

I want to make a new branch (it is recommended to name your branches after a feature you are working on, so you can delete superfluous branches as you go. Start this cycle all over again from STEP 1.
