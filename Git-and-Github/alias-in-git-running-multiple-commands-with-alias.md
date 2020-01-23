## Setting up alias in ~/.gitconfig file with which I can combine multiple commands in a single command - last implemented on 25-Jul-2018

In \$HOME/.gitconfig or .git/config include the below along with what ever was already existing in that file

```
[alias]
  p = "!f(){ git add . && git commit -m \"$1\"; git push origin master; };f"
```

## And from now just do a push request with the following single command which will do all the above jobs set up in the above alias

## \$ git p "message ..."

## How to alias 'git checkout' to 'git co'

The command:

`git config --global alias.co checkout`

will create a git alias to do that. It will add the following entry into your global ~/.gitconfig file:

```js
[alias];
co = checkout;
```

#### git alias setup, so that when I run the following command from my local machine’s feature_branch, it will push to remote repo's branch by the same name (feature_branch)

```js
git c 'some message'
```

This is very useful, as most of the time you will not work in the master branch, you will rather work in your own feature branch.

First set up the default behaviour of the git push command, as discussed earlier

`git config --global push.default current`

This will make sure, that when you run only git push without specifying the branch name, it will push to the remote repo from the local machine’s existing branch to the same branch in remote repo. That is, it should pushes the current branch to update a branch with the same name on the receiving end.

Now in `~/.gitconfig` file add the below

```js
[alias];
c = '!f(){ git add . && git commit -m "$1"; git push; };f';
```

Now when you run `git c 'some message'` from **current_branch_i_am_in** it will actually run under the hood the following commands sequentially.

```js
git add -A
git commit -m 'some message'
git push origin current_branch_i_am_in

```
