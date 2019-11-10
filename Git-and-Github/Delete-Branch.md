### To delete the local GIT branch we can try one of the following commands:

```
git branch -d branch_name
git branch -D branch_name
```

as you can see above, we have 2 different argument, one with ‘d’ and one with ‘D’.

The **-d** option stands for --delete, which would delete the local branch, only if you have already pushed and merged it with your remote branches.

The **-D** option stands for --delete --force, which deletes the branch regardless of its push and merge status, so be careful using this one!
