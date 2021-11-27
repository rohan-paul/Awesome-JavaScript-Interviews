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

---

### The below is the MOST EFFECTIVE one to ignore a folder at any depth below the current level

The below is the way to ignore all directories called "node_modules" anywhere below the current level in a directory tree

```
node_modules/
```

Source -  https://stackoverflow.com/a/1470664/1902852

---

### Important things to do after you change your .gitignore file and put new folder to the ignore list, which was already pushed to remote.

If you already have a file checked in, and you want to ignore it, Git will not ignore the file if you add a rule later. In those cases, you must untrack the file first, by running the following command in your terminal:

```
git rm --cached

```

So if you want add to ignore some directories in your local repository (which already exist) after editing .gitignore you want to run this on your root dir

```
git rm --cached -r .
git add .

```
It will basically 'refresh' your local repo and unstage ignored files.


#### [Source](https://stackoverflow.com/a/30210030/1902852)
