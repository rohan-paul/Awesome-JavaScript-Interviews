# What is the difference between encryption and hashing?

The TLDR answer is that encryption is two way and hashing is only one way.

Both are methods to securely transfer data, but there is some difference.

## Encryption is two way

When we say encryption is two way, it means that something can be decrypted after it has been encrypted. This is the entire purpose of encryption. The idea is that you transfer encrypted information, and the receiever can then decrypt it and read the contents.

## Hashing is one way, can't be undone

The concept between hashing is that it can't be undone. It is a one way operation, and there is no way to go from the hash to the original contents. While this may seem more secure, it does obviously come with a cost.

If passing over hashed data, there is no way for the recipient to go back from the hashed data to the original data. This means the use case is a little more limited. Since the process of hashing is unique (given an input, always produces the same output & doesn't produce the same output for two different inputs) it means we can compare if indeed the same input is submitted again at a later date (like a password submissions?) but we can't identify what the password is.