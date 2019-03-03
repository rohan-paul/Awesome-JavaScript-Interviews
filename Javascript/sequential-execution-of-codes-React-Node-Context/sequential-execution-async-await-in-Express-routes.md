### Use case (Sequential Execution with plain callback function and async-await) - Here in the below EDIT / PUT route - From Client side req.body, I am sending a JSON data which along with other info has a 'date' field. I had to format that 'date' from req.body (to "YYYY-MM-DD") with moment, before running findByIdAndUpdate(). Else mongoose was saving the date one day prior to what I was selecting in the DatePicker, and then subsequent API call for that date's data (after the EDIT) will NOT give me the correct edited data.

### NOTE - The code is working EVEN WITHOUT async-await. But including async-await seems to be better for safely achieving the result.

#### req.body is as below

```js
{
        "wharfage": 143,
        "berth_hire": 5,
        "other_services": 6,
        "port_dues": 20,
        "total": 26,
        "date": "2019-02-25"
}
```

### The actual route code in Express backend

#### Alternative - 1 - With a wrapper function which will invoke a callback()

```js
router.put("/:id", (req, res, next) => {
  let editedItem = req.body;

  // Have to do this extra date formatting step, to change the formatting of the 'date' field. Else mongoose was saving the date one day prior to what I was selecting in the DatePicker.
  // Wrapper function that will wrap the database call (the findByIdAndUpdate() query) within a callback function that gets executed after the database query has finished.
  const wrapperFunction = async (editItem, callback) => {
    editItem.date = await moment(editItem.date).format("YYYY-MM-DD");
    if (typeof callback === "function") {
      callback();
    }
  };

  wrapperFunction(editedItem, () => {
    Revenue.findByIdAndUpdate(req.params.id, editedItem, { new: true }).exec(
      (err, record) => {
        if (err) {
          console.log(err);
          return next(err);
        } else {
          res.status(200).json(record);
        }
      }
    );
  });
});
```

#### Alternative - 2 for the above EDIT (PUT) route function (with an extra database call ) - this code was working

```js
router.put("/:id", (req, res, next) => {
  let editedItem = req.body;
  Revenue.findById(req.params.id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      editedItem.date = moment(editedItem.date).format("YYYY-MM-DD");
    }
  }).then(() => {
    Revenue.findByIdAndUpdate(req.params.id, editedItem, { new: true }).exec(
      (err, record) => {
        if (err) {
          console.log(err);
          return next(err);
        } else {
          res.status(200).json(record);
        }
      }
    );
  });
});
```

#### Alternative-2 for the EDIT (PUT) route function above - Here, I am just plain formatting the date without resorting to any technique to make the next db-call function to wait. While its working the solution with async-await seems to be better for safely achieving the same.

```js
router.put("/:id", (req, res, next) => {
  let editedItem = req.body;
  editedItem.date = moment(editedItem.date).format("YYYY-MM-DD");

  Revenue.findByIdAndUpdate(req.params.id, editedItem, { new: true }).exec(
    (err, record) => {
      if (err) {
        console.log(err);
        return next(err);
      } else {
        res.status(200).json(record);
      }
    }
  );
});
```
