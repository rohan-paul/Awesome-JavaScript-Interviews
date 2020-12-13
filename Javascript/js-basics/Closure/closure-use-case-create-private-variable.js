/*
How would you use a closure to create a private counter?
 */

const counter = () => {
  // this is the variable that I have to change
  let _counter = 0
  return {
    add: (increment) => {
      return (_counter += increment)
    },
    retrieve: () => {
      return "The counter currently is at " + _counter
    },
  }
}

const c = counter()
console.log(c.add(5))
c.add(9)
console.log(c.retrieve())

/*
Output :

5
The counter currently is at 14
 */



https://gdcoder.com/decision-tree-regressor-explained-in-depth/

df_train = pd.read_csv('../input/house-prices-advanced-regression-techniques/train.csv')