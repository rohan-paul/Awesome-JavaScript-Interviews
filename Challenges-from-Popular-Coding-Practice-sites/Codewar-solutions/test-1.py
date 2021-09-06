my_list = [
    12,
    65,
    54,
    39,
    102,
    339,
    221,
    50,
    70,
]

result = list(filter(lambda x: (x % 13 == 0), my_list))

# printing the result
print(result)


"""
    a[-1]    # last item in the array
    a[-2:]   # last two items in the array
    a[:-2]   # everything except the last two items

Similarly, `step` may be a negative number:

    a[::-1]    # all items in the array, reversed
    a[1::-1]   # the first two items, reversed
    a[:-3:-1]  # the last two items, reversed
    a[-3::-1]  # everything except the last two items, reversed



### `a[::-1]` is a shortcut for reversing the list.

Referring to the [cpython source code](https://hg.python.org/cpython/file/3d4d52e47431/Objects/sliceobject.c#l132), we we can see the actual rules.

 1. If the step is not given, it is equal to 1

 2. If a start value is not given, choose a default start as 0 if step is not negative, or length -1 if it is

 3. If an end value is not given, choose a default end as length if step is not negative or -1 if it is (these values allow the last element to be kept knowing that the end point is non-inclusive)


- `a[::-1]` uses start of length-1 (default), an end of -1 (default), and step of -1

"""
