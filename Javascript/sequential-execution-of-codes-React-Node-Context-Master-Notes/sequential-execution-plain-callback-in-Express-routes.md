### A specific Use Case -

Here in the below backend Express Route - I have to capture visitor data (after OTP was sent and OTP Mongodb schema updated with that latest OTP) when a visitor to the site downloads data.

But I need to first pick the latest OTP (that was generated and saved in mongodb) from the already saved database before comparing with the otp input by the user when prompted.

```js
router.route("/visitor/:id").put((req, res, next) => {
  let visitorData = req.body;
  let visitorEmail = req.body.company_email;
  let latestOtp = [];

  // Wrapper function that will wrap the database call (the find() query) in a function and pass it a callback function that gets executed after the database query has finished.
  // Also always make sure the callback is indeed a function, without this check, if the findLatestOTP() is called either without the callback function as a parameter OR in place of a function a non-function is passed, our code will result in a runtime error.
  function findLatestOTP(mongoCollection, callback) {
    mongoCollection
      .find({ visitor_email: visitorEmail })
      .limit(1)
      .sort({ createdAt: -1 })
      .exec((err, record) => {
        if (err) {
          console.log(err);
        } else {
          latestOtp.push(record[0].generated_otp);
          if (typeof callback === "function") {
            callback();
          }
        }
      });
  }

  findLatestOTP(OTP, function() {
    if (req.body.otpReceivedByVisitor !== latestOtp[0]) {
      return res
        .status(401)
        .send({ success: false, msg: "Incorrect Code was input" });
    } else {
      DOCUMENTMODAL.findById(req.params.id, (err, record) => {
        if (err) {
          console.log(err);
        }
        record.visitor.push(visitorData);
        record.save((err, updatedRecord) => {
          if (err) {
            return next(err);
          }
          res.status(200).send(updatedRecord);
        });
      });
    }
  });
});
```

#### Some related Explanation -

##### JavaScript is single threaded, that means only one statement is executed at a time. As the JS engine processes our script line by line, it uses this single Call-Stack to keep track of codes that are supposed to run in their respective order.

Like what a stack does, a data structure which records lines of executable instructions and executes them in LIFO manner. So say if the engine steps into a function foo(){ it PUSH-es foo() into the stack and when the execution of foo()return; } is over foo() is POP-ped out of the call-stack.

<img src="./sequential-execution-1.png">
