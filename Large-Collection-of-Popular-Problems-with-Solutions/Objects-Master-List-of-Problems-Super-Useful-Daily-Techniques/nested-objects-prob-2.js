const userInfo = {
    firstName: 'Avi',
    lastName: 'Flombaum',

    company: {
      name: 'Flatbook Labs',
      jobTitle: 'Developer Apprentice'
    },

    friends: [{
      firstName: 'Joe',
      lastName: 'Burgess',
      company: {
        name: 'Flatbook Labs',
        jobTitle: 'Developer Apprentice'
      }
    },
    {
      firstName: 'Gabe',
      lastName: 'Jackson',
      company: {
        name: 'Flatbook Labs',
        jobTitle: 'Lead Developer'
      }
    }],

    projects: [{
      title: 'Flatbook',
      description: 'The premier Flatiron School-based social network in the world.'
    },
    {
      title: 'Scuber',
      description: 'A burgeoning startup helping busy parents transport their children to and from all of their activities on scooters.'
    }]
  };

  // Whats the first name of his first friend:
const a = userInfo.friends[0].firstName;
console.log(a);  // => Joe

// Whats the title of his second project:
const b = userInfo.projects[1].title;
console.log(b);

