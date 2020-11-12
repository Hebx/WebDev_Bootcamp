const robot = {
  model: '1E78V2',
  energyLevel: 100,
  provideInfo() {
    return `I am ${this.model} and my current energy level is ${this.energyLevel}.`;
  },
};
console.log(robot.provideInfo());

const robot1 = {
  _energyLevel: 100,
  recharge() {
    this._energyLevel += 30;
    console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`);
  },
};
robot1._energyLevel = 'high';
robot1.recharge();

const robot2 = {
  _model: '1E78V2',
  _energyLevel: 100,
  get energyLevel() {
    if (typeof this._energyLevel === 'number') {
      return `My current energy level is ${this._energyLevel}`;
    }
    return 'System malfunction: cannot retrieve energy level';
  },
};
console.log(robot2.energyLevel);

const robot3 = {
  _model: '1E78V2',
  _energyLevel: 100,
  _numOfSensors: 15,
  get numOfSensors() {
    if (typeof this._numOfSensors === 'number') {
      return this._numOfSensors;
    }
    return 'Sensors are currently down.';
  },
  set numOfSensors(num) {
    if (typeof num === 'number' && num >= 0) {
      this._numOfSensors = num;
    } else {
      console.log('Pass in a number that is greater than or equal to 0');
    }
  },
};
robot3._numOfSensors = 100;
console.log(robot3._numOfSensors);

const robotFactory = (model, mobile) => ({
  model,
  mobile,
  beep() {
    console.log('Beep Boop');
  },
});
const tinCan = robotFactory('P-500', true);
tinCan.beep();

const robot4 = {
  model: '1E78V2',
  energyLevel: 100,
  functionality: {
    beep() {
      console.log('Beep Boop');
    },
    fireLaser() {
      console.log('Pew Pew');
    },
  },
};
const { functionality } = robot4;
console.log(functionality);
functionality.beep();

const robot5 = {
  model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75,
};

// What is missing in the following method call?
const robotKeys = Object.keys(robot5);

console.log(robotKeys);

// Declare robotEntries below this line:
const robotEntries = Object.entries(robot5);
console.log(robotEntries);

// Declare newRobot below this line:
const skills = { laserBlaster: true, voiceRecognition: true };
const newRobot = Object.assign(skills, robot5);
console.log(newRobot);
