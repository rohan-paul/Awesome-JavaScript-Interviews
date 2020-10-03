# Authentication - Passport is Authentication Middleware for Node.JS

### jwt module creates the token and passport actually Authenticates / validates it.

Authentication is the process of verifying the identity of a user by obtaining some sort of credentials and using those credentials to verify the user's identity. If the credentials are valid, the authorization process starts. Authentication process always proceeds to Authorization process.

# Authorization

Authorization is the process of allowing an authenticated users to access the resources by checking whether the user has access rights to the system. Authorization helps you to control access rights by granting or denying specific permissions to an authenticated user.

For example, students of a particular university are required to authenticate themselves before accessing the student link of the university’s official website. This is called authentication.

On the other hand, Authorization determines exactly what information the students are authorized to access on the university website after successful authentication.

## What Is Activity Based Authorization?

[https://github.com/derickbailey/mustbe](https://github.com/derickbailey/mustbe)

The gist of it is that you check whether or not a user has permission to perform an activity. How they get permission to do that activity is up to you. Maybe it's throug a role, maybe it's through data they have been assigned to. But the permission for the activity is what needs to be checked.
