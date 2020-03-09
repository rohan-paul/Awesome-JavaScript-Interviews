setTimeout(
  changeMaker => {
    let list = changeMaker + ", "

    setTimeout(
      changeMaker => {
        list += changeMaker + ", "

        setTimeout(
          changeMaker => {
            list += changeMaker + ", "

            setTimeout(
              changeMaker => {
                list += changeMaker + ", "

                setTimeout(
                  changeMaker => {
                    list += changeMaker

                    console.log(list)
                  },
                  1,
                  "Travis Kalanick",
                )
              },
              1,
              "MarkZuckerberg",
            )
          },
          1,
          "SteveWoz",
        )
      },
      1,
      "SteveJobs",
    )
  },
  1,
  "BillGates",
)

/* Looking at the above, setTimeout gets a callback function that executes after one millisecond. The last parameter just feeds the callback with data, i.e the argument 'changeMaker' . This is like an Ajax call except the return 'changeMaker' parameter would come from the server.

I am gathering a list of changeMakers through asynchronous code. Each callback gives me a single 'changeMaker' name and I append that to the list.  */
