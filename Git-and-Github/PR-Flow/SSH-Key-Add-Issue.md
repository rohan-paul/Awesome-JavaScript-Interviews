### Issue - "ssh-key-permissions-0644-for-id-rsa-pub-are-too-open"

After running below command I got the above error - and in this case I can not Push anything to Github and Git will completely ignore too-open-permission-ed rsa key

`ssh-add ~/.ssh/id_rsa`

To Add your SSH private key to the ssh-agent. If you created your key with a different name, or if you are adding an existing key that has a different name, replace id_ed25519 in the command with the name of your private key file.


#### Solution

https://stackoverflow.com/a/37779390/1902852

```
chmod 400 ~/.ssh/id_rsa
```