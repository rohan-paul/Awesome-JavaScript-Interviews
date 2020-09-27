function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts with 'Mr.', 'Mrs.', 'Ms.', 'Dr.', or 'Er.',
     * followed by one or more letters.
     */

    var re = (/^(Mr\.|Dr\.|Er\.|Ms\.|Mrs\.)\s?[a-z|A-Z]+$/);

    /*
     * Do not remove the return statement
     */
    return re;
}

/* My Note
^ - Start of string, or start of line in multi-line pattern. Matches the position at the beginning of the input string.

$ - End of string, or end of line in multi-line pattern. Matches the position at the end of the input string.

By adding ^, you tell it that the start of the match must be the start of the string and by adding $ you tell it that the end of the match must be the end of the string.

+ - Matches the preceding character or subexpression one or more times. For example, 'zo+' matches "zo" and "zoo", but not "z". + is equivalent to {1,}.

*/