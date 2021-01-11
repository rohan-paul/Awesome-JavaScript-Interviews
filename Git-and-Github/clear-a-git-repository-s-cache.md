If you have performed a task, such as adding a new line item to your .gitignore file, you may need to clear out your git repo's cache in order for the changes to take place. Here are the commands for doing that:

```
git rm -r --cached .
git add .
git commit -am 'git cache cleared'
git push
```
