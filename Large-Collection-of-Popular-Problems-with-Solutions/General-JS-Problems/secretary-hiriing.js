/*
 * Problem: For each candidate you interview, you have to make a decision whether to accept or reject him/her.
 * If you are interviewing them in a random order,
 * How do you select a candidate in a way that there is a maximum change of finding the best out of all candidates?
 * In the following function, candidateList is an array which gives us a "score" of each candidate telling us how good the candidate is for the job.
 * N is the number of candidates that have applied.
 */

function selectSecretary(candidateList, n) {

  /**
   * Solution: The probability of selecting the best applicant in the
   * classical secretary problem converges toward 1/e, ie, 1/2.718 which is approx 0.368.
   * therefore, We have the best chance of selecting the best candidate if we reject the first 36.8% candidates and
   * hire the next candidate which turns out to be better than all the previous candidates.
   */

  let numberOfTestCandidates = Math.round(n * (1/Math.E));  // This is out list of test candidates. Approx 36.8% of n.

  // find the best out of test candidates
  let bestOfTestCandidates = 0;

  for(let i = 0; i < numberOfTestCandidates; i++){
      bestOfTestCandidates = candidateList[i] > bestOfTestCandidates? candidateList[i] : bestOfTestCandidates
  }

  // for rest of the candidates, find one candidate who is better than all of our all of our test candidates.
  let hiredCandidate;
  for(let i = numberOfTestCandidates; i < n; i++){
      if(candidateList[i] > bestOfTestCandidates){
          hiredCandidate = i;
          break;
      }
  }

  // There is a possibility that we don't find anyone for the job. That's why we need to have an if condition to handle that possibility.
  if(hiredCandidate){
      return "Hired candidate number " + hiredCandidate
  }
  else return "Could not find the best candidate"

}

let candidatesList = [100,175,232,422,349,451,56,432,334,54,523,345,43,354,43,23,45,43,443,436];

console.log(selectSecretary(candidatesList, 20)); // => Hired candidate number 10

// Compact solution

const max = a => {
  let m = Math.max(...a.splice(0, Math.round(a.length/Math.E)));

  return a.slice(a.findIndex(x=>x>m))[0]
}

let candidates = [100,175,232,422,349,451,56,432,334,54,523,345,43,354,43,23,45,43,443,436];

console.log(max(candidates)); // => 523