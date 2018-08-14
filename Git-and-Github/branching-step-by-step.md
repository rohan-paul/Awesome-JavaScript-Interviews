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