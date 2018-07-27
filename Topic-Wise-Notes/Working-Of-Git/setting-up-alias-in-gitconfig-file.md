# Setting up alias in ~/.gitconfig file with which I can combine multiple commands in a single command - last implemented on 25-Jul-2018

In $HOME/.gitconfig or .git/config include the below along with what ever was already existing in that file

```
[alias]
  p = "!f(){ git add . && git commit -m \"$1\"; git push origin master; };f"
```

## And from now just do a push request with the following single command which will do all the above jobs set up in the above alias

## $ git p "message ..."