#### 1- Question: What is `typeof []`

**Answer**: Object. Actually Array is derived from Object. If you want to check array use Array.isArray(arr)

#### Question: What is `typeof` arguments

**Answer**: Object. arguments are array like but not array. it has length, can access by index but can't push pop, etc.

#### Question: What is `2+true`

**Answer**: 3. The plus operator between a number and a boolean or two boolean will convert boolean to number. Hence, true converts to 1 and you get result of 2+1
