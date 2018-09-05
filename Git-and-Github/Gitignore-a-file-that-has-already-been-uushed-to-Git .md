### Gitignore a file that has already been uploaded / pushed to Git

If a file is already being tracked by Git, adding the file to .gitignore won’t stop Git from tracking it.

You’ll need to do git rm the offending file(s) first, then add to your .gitignore.

So, I first run

### $ git rm -r --cached .idea

And then updated .gitignore file properly to exclude all .idea folders > then the regular < git add . >  , < git commit -m “updaing gitignore” >  and < git push >
