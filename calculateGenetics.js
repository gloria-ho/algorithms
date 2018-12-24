// Calculate genetics
// Given the following object of parents and their genetic probabilities, write a function that takes two parents and two traits, and calculates the percent chance that a child with those parents will have that trait, based on the parents' genes

// (note: for this question we are ignoring the dominant and recessive mechanisms of true gene expression)

// Ex: (['Amanda', 'Gerald'], ['blueEyes', 'brownHair']) -> .096% chance that their child will have both blue eyes and brown hair.

const people = {
  Amanda: {
    eyes: {
      blueEyes: .2,
      brownEyes: .8,
      greenEyes: 0
    },
    hair: {
      blackHair: .4,
      brownHair: .3,
      blondeHair: .1,
      redHair: .2
    }
  },
  Gerald: {
    eyes: {
      blueEyes: .1,
      brownEyes: .8,
      greenEyes: .1
    },
    hair: {
      blackHair: .2,
      brownHair: .8,
      blondeHair: 0,
      redHair: 0
    }
  },
  Marilyn: {
    eyes: {
      blueEyes: .6,
      brownEyes: .1,
      greenEyes: .4
    },
    hair: {
      blackHair: .9,
      brownHair: .1,
      blondeHair: 0,
      redHair: 0
    }
  },
  John: {
    eyes: {
      blueEyes: .1,
      brownEyes: .1,
      greenEyes: .8
    },
    hair: {
      blackHair: 0,
      brownHair: .1,
      blondeHair: .6,
      redHair: .3
    }
  },
  Ray: {
    eyes: {
      blueEyes: .1,
      brownEyes: .7,
      greenEyes: .2
    },
    hair: {
      blackHair: .4,   
      brownHair: .3,
      blondeHair: .1,     
      redHair: .2    
    }
  }, 
  Roseanne: {
    eyes: {   
      blueEyes: 0,
      brownEyes: .8,     
      greenEyes: .2   
    },   
    hair: {
      blackHair: .5,
      brownHair: .3,
      blondeHair: 0,
      redHair: .2
    }
  }
}

const calculateGenetics = (parents, traits) => {
  let parent1 = parents[0];
  let parent2 = parents[1];
  let trait1Type = traits[0].includes('Hair') ? 'hair' : 'eyes';
  let trait2Type = traits[1].includes('Hair') ? 'hair' : 'eyes';
  let trait1 = traits[0];
  let trait2 = traits[1];
  
  return people[parent1][trait1Type][trait1] * 
    people[parent2][trait1Type][trait1] * 
    people[parent1][trait2Type][trait2] * 
    people[parent2][trait2Type][trait2] * 2
}

console.log(calculateGenetics(["Amanda", "Gerald"], ["blueEyes", "brownHair"]));