### First time installation

1> Best way to install - I directly ran the command as given in Official site -

``https://devcenter.heroku.com/articles/heroku-cli#debian-ubuntu``

``wget -qO- https://cli-assets.heroku.com/install-ubuntu.sh | sh ``

I was getting error “heroku command not found” after running ``heroku login`` or ``heroku --version``

So, from official site [https://devcenter.heroku.com/articles/heroku-cli#download-and-install](https://devcenter.heroku.com/articles/heroku-cli#download-and-install) I installed the CLI by

``npm install -g heroku-cli``

And also updated the node installation to the VERY LATEST version by running ``nvm install node``

and ONLY then, running ``heroku -v`` was giving me correct version

### After installation, I can check that it was installed correctly or if heroku is installed in a machine at all

``which heroku`` it will output “/usr/bin/heroku”

### First time Deployment of an app to Heroku - Note for each Heroku account max 5 apps are permitted without adding a Credit Card for Account Verification

The most important basic steps for deployment are the follows. All of them to be run from the Project root directory.

``heroku login`` [ Not needed if I have already logged in ]

``heroku keys:add``  [ Not needed if I have already added an SSH key earlier. Its a single key for multiple projects It will add the existing SSH key from the local Machine to Heroku ]

``heroku create``

 [ This command will create following kind of data in .git/config file of the project root folder.

```
[remote "heroku"]
	url = https://git.heroku.com/ancient-plateau-41920.git
	fetch = +refs/heads/*:refs/remotes/heroku/*
```

``git push heroku master`` [ Before running this command I should have fully committed to the Git repository ]

And then on a continuous basis the following commands to push the repo to production server in Heroku after each change in the local repo (See my sequence of commands in the main Github note).

1> To deploy ``git push heroku master``

Subsequent Heroku pushing after creating the App for the first time – for a Repo that already has been pushed to Heroku earlier :-

First update the .git directory in the local machine with the regular git command <git push > then upstream it to heroku with

``git push heroku master``