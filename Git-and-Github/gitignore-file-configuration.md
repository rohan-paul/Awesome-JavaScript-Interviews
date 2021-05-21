### To ignore a file with number in its file name - to use regexp sort of configurations

```

# to-ignore-files-ending with -with "test-any-number.js"
**/*test-[0-9]*.js

# to-ignore-files-ending with -with "test-any-number.ts"
**/*test-[0-9]*.ts

# to-ignore-files-ending with -with "test-any-number.py"
**/*test-[0-9]*.py

# to-ignore-files-ending with -with "test-any-number.ipynb"
**/*test-[0-9]*.ipynb

# If you only want to ignore files-ending with -with "test-any-number.py" in the /static/img/ subdirectory you should either add the following line - to .gitignore file inside that subdirectory
# **/*test-[0-9]*.py

# OR add the following line in your root .gitignore:

# /static/img/test-[0-9]*.py
# Source - https://stackoverflow.com/a/18592835/1902852

```


### After changing something in .gitignore or sometime if you think that local .git folder has been messed up we MUST clear cache - Note updated on 19-May-2021

https://stackoverflow.com/a/48703146/1902852

If you have performed a task, such as adding a new line item to your .gitignore file, I MUST need to clear out your git repo's cache in order for the changes to take place. Here are the commands for doing that:

```
git rm -r --cached .
git add .
git commit -am 'git cache cleared'
git push
```