```
# See https://help.github.com/ignore-files/ for more about ignoring files.

node_modules/
# The above is the MOST EFFECTIVE ONE as per
# https://stackoverflow.com/a/1470664/1902852
# The way to ignore all directories called "node_modules"
# anywhere below the current level in a directory tree

# Further if I have already pushed a directory to remote then remove that with below
# Execute a folder remove (rm) from index only (--cached) recursivelly (-r). Command line example for root bin folder:
# `git rm -r --cached full_absolute_path`
# e.g. I had to run the below kind of command to remove the ".next" folder that was pushed to remote github
# passing the full path of the .next folder
# git rm -r --cached /media/veracrypt2/014-agency-classic-next/.next

*node_modules
/*node_modules
*/*node_modules
**/*node_modules
/node_modules
/node_modules/*
*/node_modules/*

# If you have performed a task, such as adding a new line item to your .gitignore file, I MUST need to clear out your git repo's cache in order for the changes to take place. Here are the commands for doing that:
# git rm -r --cached . && git add . && git commit -am 'git cache cleared' && git push


__MACOSX/
*__MACOSX
/*__MACOSX
*/*__MACOSX
**/*__MACOSX
/__MACOSX
/__MACOSX/*
*/__MACOSX/*

.next/
*.next
/*.next
*/*.next
**/*.next
/.next
/.next/*
*/.next/*

.npy/
*.npy
/*.npy
*/*.npy
**/*.npy
/.npy

# testing
coverage/
*coverage
/*coverage
*/*coverage
**/*coverage
/coverage
/coverage/*
*/coverage/*

# production
build/
*build
/*build
*/*build
**/*build
/build
/build/*
*/build/*


.db/
*.db
/*.db
*/*.db
**/*.db
/.db

.pkl/
*.pkl
/*.pkl
*/*.pkl
**/*.pkl
/.pkl

.pyc/
*.pyc
/*.pyc
*/*.pyc
**/*.pyc
/.pyc

*.txt
/*.txt
*/*.txt
**/*.txt
/.txt

*.csv
/*.csv
*/*.csv
**/*.csv
/.csv


*glove_vectors
/glove_vectors
*/*glove_vectors
**/*glove_vectors
/glove_vectors



*.zip
/*.zip
*/*.zip
**/*.zip
/.zip

*.rar
/*.rar
*/*.rar
**/*.rar
/.rar

*.7z
/*.7z
*/*.7z
**/*.7z
/.7z

LARGE_Datasets
*/LARGE_Datasets
*/LARGE_Datasets/**
**/LARGE_Datasets/**

# *** END OF FILES SPECIFIC TO ML Projects ****

# testing
/coverage

# production
/build

# misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Ignore docs files
_gh_pages
.ruby-version

# Numerous always-ignore extensions
*.diff
*.err
*.orig
*.log
*.rej
*.swo
*.swp
*.vi
*~
*.~lock*
.~lock*
*.asm
*.bytes



# OS or Editor folders
.DS_Store
._*
Thumbs.db
.cache
.project
.settings
.tmproj
*.esproj
nbproject
*.sublime-project
*.sublime-workspace
.idea
node_modules
Others_Code_gitignore
Project-Note-PAUL
.vscode


# Ignore all logfiles and tempfiles.
*glove_vectors
!/log/.keep
/tmp
/.gems

# Komodo
*.komodoproject
.komodotools

# grunt-html-validation
validation-status.json
validation-report.json

CountDownTimer-Note.odt
random-code-1.js
random-code-2.js
random-code-3.js
performance-1.js

#ignore file name ending in "-bkp.js" OR "-bkp.ts"  OR "-bkp.py"  or "-test.js" OR "-test.ts" in its name. So I will have to put "-test.js" at all files that is just for my development-time random testing code .
**/*-bkp.js
**/*-bkp.ts
**/*-bkp.py
**/*-BKP.py
*-BKP.py
**/*-bkp.ipynb
**/*-BKP.ipynb
*-BKP.ipynb
**/*-test.js
**/*-test.ts
**/*-test.py
**/*-test-.py
**/*test-.py
**/*-test.ipynb
**/*-test.md
**/*-test.json
**/* (copy).ipynb
**/* (copy).py



# to-ignore-files-ending with -with "test-any-number.js"
**/*test-[0-9]*.js

# to-ignore-files-ending with -with "test-any-number.ts"
**/*test-[0-9]*.ts

# to-ignore-files-ending with -with "test-any-number.py"
**/*test-[0-9]*.py

# to-ignore-files-ending with -with "test-any-number.ipynb"
**/*test-[0-9]*.ipynb

# to-ignore-files-ending with -with "untitled-any-number.ipynb"
**/*untitled-[0-9]*.ipynb

# to-ignore-files-ending with -with "untitled.ipynb"
**/*untitled.ipynb

# If you only want to ignore files-ending with -with "test-any-number.py" in the /static/img/ subdirectory you should either add the following line - to .gitignore file inside that subdirectory
# **/*test-[0-9]*.py

# OR add the following line in your root .gitignore:

# /static/img/test-[0-9]*.py
# Source - https://stackoverflow.com/a/18592835/1902852
.Rproj.user

```