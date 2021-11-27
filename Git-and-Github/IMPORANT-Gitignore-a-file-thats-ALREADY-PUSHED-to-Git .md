### Gitignore a file that has already been uploaded / pushed to Git

If a file is already being tracked by Git, adding the file to .gitignore won’t stop Git from tracking it.

You’ll need to do git rm the offending file(s) first, then add to your .gitignore.

So, I first run

### $ git rm -r --cached .idea

And then updated .gitignore file properly to exclude all .idea folders > then the regular < git add . >  , < git commit -m “updaing gitignore” >  and < git push >


---

### After changing something in .gitignore or sometime if you think that local .git folder has been messed up we MUST clear cache - Note updated on 19-May-2021

https://stackoverflow.com/a/48703146/1902852

If you have performed a task, such as adding a new line item to your .gitignore file, I MUST need to clear out your git repo's cache in order for the changes to take place. Here are the commands for doing that:

```
git rm -r --cached .
git add .
git commit -am 'git cache cleared'
git push
```

I have create an alias for doing the above

OR The below for running all together

```
git rm -r --cached . && git add . && git commit -am 'git cache cleared' && git push
```