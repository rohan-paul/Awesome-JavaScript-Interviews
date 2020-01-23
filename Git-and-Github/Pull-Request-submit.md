# Simple Compact steps to create a new Pull Request

## OFFICIAL STEP BY STEP GUIDE - https://github.com/PointCloudLibrary/pcl/wiki/A-step-by-step-guide-on-preparing-and-submitting-a-pull-request

## OFFICIAL - https://help.github.com/articles/creating-a-pull-request/

## UNOFFICIAL BUT A LITTLE MORE DETAIL - https://www.digitalocean.com/community/tutorials/how-to-create-a-pull-request-on-github

# My cheat-sheet of compact Steps

The very first step is - Fork the project by clicking on the Fork icon withing Github >> git clone that fork only after that project shows up under my forked projects. And then do normal

## \$ git clone <repo .git >

Now from the git cloned project’s root directory, create a new branch on which I shall work locally

## \$ git checkout -b <new_topic-branch-name>

So, as an actual example on 5-March-2018 I ran

## \$ git checkout -b storybook-react-UI-component-too

You should also make sure that your branch name is a descriptive one. Rather than calling it my-branch, you should go with frontend-hook-migration or fix-documentation-typos instead.

Terminal will say - `‘Switched to a new branch 'new_topic-branch-name'`

Work in the local machine for my modification. Once you have modified existing files or added new files to the project, you can add them to your local repository

## git add -A

## git commit -m "adding storybook, a development environment for UI components"

Terminal will say something like below

[storybook-react-UI-component-too 6fcf716] adding storybook, a development environment for UI components
1 file chang

## git status

It may say something on the line -

On branch storybook-react-UI-component-too
nothing to commit, working directory clean

## git push origin storybook-react-UI-component-too

i.e. the format is -

## git push origin <new_topic-branch-name-which-I-created-above-and-with-which-I-worked-above>

F) Then in the browser navigate to the original URL of the Original repo.

At the very landing page of the repo I will see my own commits. And click on `“Compare & pull r­equest”` .. Actually that option will be only one, where I can do something, after submitting that commit.

G) Then in the next page, just put any comments that I may like to put, and , click on “Create Pull Request”.

Thats it..

### Create Pull Request in a Project - When I am one of the contributor as set by the Master Owner - Updated on 5-Mar-2018

### \$ git clone repo.git

### What to do when there’s a conflict as seen by the master branch owner after I (as a contributor) send the PR - Updated on 5June2018

Merge request official doc - https://help.github.com/articles/resolving-a-merge-conflict-using-the-command-line/

“Merge conflicts may occur if competing changes are made to the same line of a file or when a file is deleted that another person is attempting to edit.”

From official doc - https://help.github.com/articles/resolving-a-merge-conflict-on-github/

A> Under your repository name, click Pull requests.

B> In the "Pull Requests" list, click the pull request with a merge conflict that you'd like to resolve.

C> Resolve merge conflicts button. Near the bottom of your pull request, click Resolve conflicts.

### Another step I may take before starting on new work, on say a branch named 'rohan-dev-v2' after merging my master branch with the upstream branch is to force reset the head of the 'rohan-dev-v2' branch to the just mergerd master.

Move to the to the other branch and reset that branch to master

`git checkout rohan-dev-v2`

`git reset --hard master`

### Updating a Pull Request (that has already been raised) from my forked repo

https://stackoverflow.com/questions/9790448/how-to-update-a-pull-request-from-forked-repo

The case is as below and often repeated - So I first forked a repo and then made a commit to that forked repo. I then opened a pull request. The pull request listed all the changes I wanted.

After reviewing my pull request, there were a number of changes that the repo owner wanted me to make before he accepted it. I have made those changes in my fork, now how do I update the pull request with those changes

Ans is, basically I have to do nothing – just make changes of the forked repo, in that branch from which I sent the PR ( e.g. master ), i.e. just do a regular commit in your own local repo in local machine. Push this relevant branch of your fork to Github.

And thats it, the PR will reflect this changes immediately.
