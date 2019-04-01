function solution(N, S, T) {
  let hits = T.split(" ");
  let ships = splitShips(S);
  let totalHit = 0;
  let totalSunk = 0;

  // check east ship's set of coordinates against the set of hits
  for (let i = 0; i < ships.length; i++) {
    let currentShip = ships[i];
    let currentHits = 0;
    for (let j = 0; j < hits.length; j++) {
      if (currentShip.includes(hits[j])) {
        currentHits += 1;
      }
    }
    if (currentHits && currentHits < currentShip.length) {
      totalHit += 1;
    } else if (currentHits && currentHits == currentShip.length) {
      totalSunk += 1;
    }
  }

  return totalSunk + "," + totalHit;

  // return an array of coordinates for all ships
  function splitShips(S) {
    let ships = S.split(",");
    let shipSets = [];
    for (let i = 0; i < ships.length; i++) {
      let corners = ships[i].split(" ");
      shipSets.push(getCoordinates(corners[0], corners[1]));
    }
    return shipSets;
  }

  // return an array of all coordinates for a ship based on the corners
  function getCoordinates(cornerA, cornerB) {
    let shipCoordinates = [];
    let pattern = /([0-9]+)([A-Z]+)/i;
    let x1 = cornerA.match(pattern)[1];
    let y1 = cornerA.match(pattern)[2];
    let x2 = cornerB.match(pattern)[1];
    let y2 = cornerB.match(pattern)[2];
      for (let i = x1; i <= x2; i++) {
        let j = y1;
        while (true) {
          let newCoordinate = i + j;
          shipCoordinates.push(newCoordinate);
          if(j == y2) {
            break;
          }
          j = getNextLetter(j);
        }
      }
    return shipCoordinates;
  }

  function getNextLetter(a) {
    return String.fromCharCode(a.charCodeAt(0) + 1);
  }
}


console.log(solution(12, "1A 2A,12A 12A","12A")); // "1,0"
console.log(solution(4, "1B 2C,2D 4D", "2B 2D 3D 4D 4A")); // "1,1"
console.log(solution(3, "1A 1B,2C 2C", "1B")); // "0,1"