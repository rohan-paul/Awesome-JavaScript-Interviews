### You can control the default behavior of the \$ git push command by setting push.default in your git config.

[Official Dox](https://git-scm.com/docs/git-config#Documentation/git-config.txt-pushdefault)

**`push.default`**

Defines the action git push should take if no refspec is given on the command line, no refspec is configured in the remote, and no refspec is implied by any of the options given on the command line. Possible values are:

**nothing**: do not push anything

**matching**: push all matching branches

All branches having the same name in both ends are considered to be matching.

This used to be the default, but not since Git 2.0 (simple is the new default).

**upstream**: push the current branch to its upstream branch (tracking is a deprecated synonym for upstream)

**current**: push the current branch to a branch of the same name - This to my mind is most useful and I used it in my Development machine.

**simple**: like upstream, but refuses to push if the upstream branch's name is different from the local one.

#### To view the which is your current configuration run the below command: (If I dont have any custom-configuratons setup, then I shall get nothing after running the below command )

```js
git config --global push.default
```

#### To set a new configuration

```js
git config --global push.default current
```
