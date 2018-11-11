// 1) build a battle simulator
// 2) no ties, must select a single winner
// 3) randomize the result, non deterministic behavior
// 4) n number of armies
// 5) support complex army objects -> army {soldiers: number, tanks: number, planes: number}

// Math.random() -> returns float between 0 .. 1

const battle = (army1, army2) => {
  if (Math.random() < .5) {
    return army1;
  }
  return army2
}

// more than 1 army:

const battleNArmies = ([...armies]) => {
	const newArray = armies.map(
    (army, index, array) => {
      const score = (army.soldiers * 1) + (army.tanks * 2) + (army.planes * 3);
      const finalScore = Math.random() * score;
      return {
        army,
        finalScore
      }
    }
  )
  let winner = null
  for (let i = 0; i < newArray.length ; i++) {
    if (winner == null || (newArray[i].finalScore > winner.finalScore)) {
      winner = newArray[i];
    }
  }
  return winner.army.name + ' wins!';
}


let myArmies = [
  {'name': 'Army 1', 'soldiers': 1, 'tanks': 1, 'planes': 1},
  {'name': 'Army 2', 'soldiers': 2, 'tanks': 2, 'planes': 2},
  {'name': 'Army 3', 'soldiers': 3, 'tanks': 3, 'planes': 3},
  {'name': 'Army 4', 'soldiers': 4, 'tanks': 4, 'planes': 4}
]

console.log(battleNArmies(myArmies));

