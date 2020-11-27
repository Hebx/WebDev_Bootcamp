const team = {
  _players: [
    {
      firstName: 'Diego',
      lastName: 'Sanchez',
      age: 29,
    },
    {
      firstName: 'Pablo',
      lastName: 'Pogba',
      age: 27,
    },
    {
      firstName: 'John',
      lastName: 'Smith',
      age: 25,
    },
  ],
  _games: [
    {
      opponent: 'Chilis',
      teamPoints: 33,
      opponentPoints: 27,
    },
    {
      opponent: 'Moros',
      teamPoints: 12,
      opponentPoints: 24,
    },
    {
      opponent: 'Broncos',
      teamPoints: 25,
      opponentPoints: 19,
    },
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer(firstName, lastName, age) {
    const player = {
      firstName,
      lastName,
      age,
    };
    this.players.push(player);
  },
  addGame(oppName, points, oppPoints) {
    const game = {
      opponent: oppName,
      points,
      opponentPoints: oppPoints,
    };
    this.games.push(game);
  },
};
team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);

console.log(team.players);

team.addGame('Rca', 77, 44);
team.addGame('Wac', 55, 66);
team.addGame('Mors', 99, 88);

console.log(team.games);
