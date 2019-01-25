// Turn DNA into RNA
// Write a function that takes a string of DNA and turns into a string of RNA. DNA is made of up As Ts Cs and Gs. RNA is made up of As, Us, Ts and Cs. As match with Us, Ts match with As, Gs -> Cs, Cs -> Gs. DNA is also read backwards to create RNA.

//  Ex: 'ATTGCGATCGATT' -> 'AAUCGAUCGCAAU'

const conversion = {
  A:'U',
  T:'A',
  G:'C',
  C:'G'
};

function convertDna(dna) {
  let dnaReversed = dna.split('').reverse();
  let rna = dnaReversed.map((x) => {
    return conversion[x];
  })
  return rna.join('');
}

console.log(convertDna('ATTGCGATCGATT')) // 'AAUCGAUCGCAAU'