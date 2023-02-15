/* Passage Counter - This is a feature utilized by most blogs to calculate reading time. Create a function which calculates the time to read a text in seconds, if it takes over 60 seconds to read a passage return the time to minutes.

The average human reads 200 words per minute.

Algo >>>  split the passage into an array of words > Clean up each word by trimming it of any extra space > then find the average time to read the total number of words in the passage, assuming the number of words a human reads per minute is 200

The resulting time is returned in minutes or seconds if less than a minute. All figures are rounded to whole numbers.
*/

passageCounter = passage => {

    const avgWordReadPerMinuter = 200;

    let cleanPassageArray = passage.split(' ').filter(word => word.trim() !== "")

    let totalTimeInMinute = cleanPassageArray.length / avgWordReadPerMinuter;

    // console.log(cleanPassageArray.length)

    return totalTimeInMinute < 1
        ? `Time to read this passage is ${Math.round(totalTimeInMinute * 60)} seconds`
        : `Time to read this passage is ${Math.round(totalTimeInMinute)} minute`

    // return totalTimeInMinute;

}

const passage = `The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim. Quick zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV quiz. How quickly daft jumping zebras vex. Two driven jocks help fax my big quiz. Quick, Baz, get my woven flax jodhpurs! "Now fax quiz Jack!" my brave ghost pled. Five quacking zephyrs jolt my wax bed. Flummoxed by job, kvetching W. zaps Iraq. Cozy sphinx waves quart jug of bad milk. The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim. Quick zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV quiz. How quickly daft jumping zebras vex. Two driven jocks help fax my big quiz. Quick, Baz, get my woven flax jodhpurs! "Now fax quiz Jack!" my brave ghost pled. Five quacking zephyrs jolt my wax bed. Flummoxed by job, kvetching W. zaps Iraq. Cozy sphinx waves quart jug of bad milk.`

const passage1 = `The quick, brown fox jumps over a lazy dog. `

console.log(passageCounter(passage))  // => Time to read this passage is 1 minute

console.log(passageCounter(passage1))  // => Time to read this passage is 3 seconds