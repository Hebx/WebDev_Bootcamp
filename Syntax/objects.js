const fasterShip = {
  'Fuel Type': 'Turbo Fuel',
  color: 'silver',
};

const spaceship = {
  homePlanet: 'Earth',
  color: 'silver',
  'Fuel Type': 'Turbo Fuel',
  numCrew: 5,
  flightPath: ['Venus', 'Mars', 'Saturn'],
};
const crewCount = spaceship.numCrew;
const planetArray = spaceship.flightPath;

const spaceship1 = {
  'Fuel Type': 'Turbo Fuel',
  'Active Mission': true,
  homePlanet: 'Earth',
  numCrew: 5,
};

const propName = 'Active Mission';
const isActive = spaceship1[propName];
console.log(isActive);

const spaceship2 = {
  'Fuel Type': 'Turbo Fuel',
  homePlanet: 'Earth',
  color: 'silver',
  'Secret Mission': 'Discover life outside of Earth.',
};
spaceship2.color = 'glorious gold';
spaceship2.numEngines = Math.floor(Math.random() * 10);
delete spaceship2['Secret Mission'];

const alienShip = {
  invade() {
    console.log(
      'Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.'
    );
  },
};
alienShip.invade();

const retreatMessage =
  'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';
const alienShip1 = {
  retreat() {
    console.log(retreatMessage);
  },
  takeOff() {
    console.log('Spim... Borp... Glix... Blastoff!');
  },
};
alienShip1.retreat();
alienShip1.takeOff();

const spaceship3 = {
  passengers: [{ name: 'Noctx' }],
  telescope: {
    yearBuilt: 2018,
    model: '91031-XLT',
    focalLength: 2032,
  },
  crew: {
    captain: {
      name: 'Sandra',
      degree: 'Computer Engineering',
      encourageTeam() {
        console.log('We got this!');
      },
      'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'],
    },
  },
  engine: {
    model: 'Nimbus2000',
  },
  nanoelectronics: {
    computer: {
      terabytes: 100,
      monitors: 'HD',
    },
    'back-up': {
      battery: 'Lithium',
      terabytes: 50,
    },
  },
};
const capFave = spaceship3.crew.captain['favorite foods'][0];
const firstPassenger = spaceship3.passengers[0];

const spaceship4 = {
  'Fuel Type': 'Turbo Fuel',
  homePlanet: 'Earth',
};
const greenEnergy = (obj) => {
  obj['Fuel Type'] = 'avocado oil';
};
const remotelyDisabled = (obj) => {
  obj.disabled = true;
};
greenEnergy(spaceship4);
remotelyDisabled(spaceship4);
console.log(spaceship4);

let spaceship5 = {
  homePlanet: 'Earth',
  color: 'red',
};
const tryReassignment = (obj) => {
  obj = {
    identified: false,
    'transport type': 'flying',
  };
  console.log(obj); // Prints {'identified': false, 'transport type': 'flying'}
};
tryReassignment(spaceship5); // The attempt at reassignment does not work.
console.log(spaceship5); // Still returns {homePlanet : 'Earth', color : 'red'};

spaceship5 = {
  identified: false,
  'transport type': 'flying',
};
console.log(spaceship5); // Regular reassignment still works.

const spaceship6 = {
  crew: {
    captain: {
      name: 'Lily',
      degree: 'Computer Engineering',
      cheerTeam() {
        console.log('You got this!');
      },
    },
    'chief officer': {
      name: 'Dan',
      degree: 'Aerospace Engineering',
      agree() {
        console.log('I agree, captain!');
      },
    },
    medic: {
      name: 'Clementine',
      degree: 'Physics',
      announce() {
        console.log(`Jets on!`);
      },
    },
    translator: {
      name: 'Shauna',
      degree: 'Conservation Science',
      powerFuel() {
        console.log('The tank is full!');
      },
    },
  },
};
for (const crewMember in spaceship6.crew) {
  console.log(`${crewMember}: ${spaceship6.crew[crewMember].name}`);
}
for (const crewMember in spaceship6.crew) {
  console.log(
    `${spaceship6.crew[crewMember].name}: ${spaceship6.crew[crewMember].degree}`
  );
}
