#### Problem Statement - I want to fire second request based on one value returned by the first request. So, axios.all will not resolve my probelem.

I can use async and await

```js
 async function getData() {
      const firstRequest = await axios.get(`${<URL1>}`);
      data1 = firstRequest.data[0];
      if (data1){
          const secondRequest = await axios.get(`${<URL2>}`);
          data1 = secondRequest.data;
      }
      return data1;
  }
```

A very important use case of this is, when resetting password. Before resetting the password, I have to make sure, that the unique-link sent to the user is valid (Not expired and the same that was sent to him) - So, for this, in the same password-reset function, I have to first make an axios call to an API endpoint, which will validate that the link sent to the user is valid. And only if this API call returns a valid respoonse, I will fire the second API call to the endpoint to actually reset the password.

Extract from a PasswordReset Component production grade project below

```js

 componentDidMount() {
    const parsed = queryString.parse(this.props.location.search);
    this.setState({
      emailFromURLParams: parsed.email,
      uidFromURLParams: parsed.uid
    });
  }

// Function to reset the password - It will fire two sequential axios request and based on first request's successful response value, will do the next axios request.
  passwordResetOnSubmit = async e => {
    e.preventDefault();

    const {
      emailFromURLParams,
      uidFromURLParams,
      newResetPassword,
      confirmNewPassword
    } = this.state;

    const firstRequest = await axios
      .post("/api/forgot-password/verify-uid-before-password-reset", {
        emailFromURLParams,
        uidFromURLParams
      })
      .catch(error => {
        if (error.response.status === 400) {
          this.setState({ openWrongDateRangeSnackBar: true });
        }
      });
    const userId = await (firstRequest && firstRequest.data);

    if (userId && newResetPassword === confirmNewPassword) {
      axios
        .put("/api/user/password-reset", {
          userId,
          newResetPassword
        })
        .then(() => {
          this.setState(
            {
              openNewItemAddedConfirmSnackbar: true,
              newResetPassword: "",
              confirmNewPassword: ""
            },

            () => {
              setInterval(function() {
                history.push("/login");
              }, 3000);
            }
          );
        })
        .catch(error => {
          if (error.response.status === 404) {
            this.setState({
              message: "Authentication failed. User not found."
            });
          } else if (error.response.status === 401) {
            this.setState({ message: "Authentication failed. Wrong Password" });
          } else if (
            error.response.status === 500 ||
            error.response.status === 422
          ) {
            this.setState({
              message:
                "Authentication failed. Only for Port authorized personnel"
            });
          }
        });
    }
  };

```

#### Further Reading

https://stackoverflow.com/questions/47343225/making-2-sequential-requests-with-axios-second-request-depends-on-the-response
