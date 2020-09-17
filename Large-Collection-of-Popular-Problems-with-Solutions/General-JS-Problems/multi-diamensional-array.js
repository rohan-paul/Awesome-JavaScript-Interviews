// Problem Statement - The first dimension represents the activity and the second one shows the number of hours spent per day for each.
// calculates the percentage of the hours spent for each activity and append the percentage to the inner array.

var activities = [
    ['Work', 9],
    ['Eat', 2],
    ['Commute', 2],
    ['Play Game', 2],
    ['Sleep', 7]
];

for (let i = 0; i < activities.length; i++) {
        let percentage = ((activities[i][1] / 24) * 100).toFixed();
        activities[i][2] = percentage + "%";
}

console.log(activities);