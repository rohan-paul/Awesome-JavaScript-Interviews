// Recursive helper function
const flattenArr_TerminalCondition = ([first, ...rest], accumulator) =>
    (first === undefined )
    ? accumulator
    : (Array.isArray(first))
        ? flattenArr_TerminalCondition([...first, ...rest], accumulator)
        : flattenArr_TerminalCondition(rest, accumulator.concat(first));


const flattenDeep = array => flattenArr_TerminalCondition(array, []);

console.log(flattenDeep([[1,[2,[[3]]]],4,[5,[[[6]]]]]))