### After changing something in .gitignore or sometime if you think that local .git folder has been messed up we MUST clear cache - Note updated on 19-May-2021

https://stackoverflow.com/a/48703146/1902852

If you have performed a task, such as adding a new line item to your .gitignore file, I MUST need to clear out your git repo's cache in order for the changes to take place. Here are the commands for doing that:

```
git rm -r --cached .
git add .
git commit -am 'git cache cleared'
git push
```


```
git rm -r --cached . && git add . && git commit -am 'git cache cleared' && git push
```