function func() {
  var privateFunc = function() {
    console.log("I am private")
  }
  return {
    publicFunc: function() {
      privateFunc()
    },
  }
}

func() //  shows nothing
// func().privateFunc() // TypeError: func(...).privateFunc is not a function
func().publicFunc() // I am private

/*
  func(), has a method publicfunction ( func.publicfunction() ) which calls privatefunction, which only exists inside the closure. You can NOT call privatefunction directly (i.e. func().privatefunction() ), just publicfunction().
*/
