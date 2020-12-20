// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (specimenNum, dna) => ({
  specimenNum,
  dna,
  mutate() {
    const randIndex = Math.floor(Math.random() * this.dna.length);
    let newBase = returnRandBase();
    while (this.dna[randIndex] === newBase) {
      newBase = returnRandBase();
    }
    this.dna[randIndex] = newBase;
    return this.dna;
  },
  compareDNA(otherSpec) {
    const similarities = this.dna.reduce((acc, id, arr) => {
      if (arr[id] === otherSpec.dna[id]) {
        return acc + 1;
      }
      return acc;
    }, 0);
    const percentOfDNAshared = (similarities / this.dna.length) * 100;
    const percent2Decimal = percentOfDNAshared.toFixed(2);
    console.log(
      `${this.specimenNum} and ${this.otherSpec} share ${percent2Decimal}% DNA in common.`
    );
  },
  willLikelySurvive() {
    const baseCorG = this.dna.filter((base) => base === 'C' || base === 'G');
    return (baseCorG.length / this.dna.length) * 100 >= 60;
  },
});
const survivingSpecimen = [];
let idCounter = 1;
while (survivingSpecimen.length < 30) {
  const newSpec = pAequorFactory(idCounter, mockUpStrand());
  if (newSpec.willLikelySurvive()) {
    survivingSpecimen.push(newSpec);
  }
  idCounter++;
}
console.log(survivingSpecimen);
