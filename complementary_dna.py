# https://www.codewars.com/kata/554e4a2f232cdd87d9000038

# Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

# If you want to know more http://en.wikipedia.org/wiki/DNA

# In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You have function with one side of the DNA (string, except for Haskell); you need to get the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

# DNAStrand ("ATTGC") # return "TAACG"
# DNAStrand ("GTAT") # return "CATA"

#
# first solution
#
def DNA_strand(dna):
  new_DNA_strand = ''
  for x in dna:
    if x == 'A':
      new_DNA_strand += 'T'
    if x == 'T':
      new_DNA_strand += 'A'
    if x == 'C':
      new_DNA_strand += 'G'
    if x == 'G':
      new_DNA_strand += 'C'
  return new_DNA_strand

#
# second solution
#
def DNA_strand(dna):
  DNA_compliments = {'A':'T','T':'A','C':'G','G':'C'}
  return ''.join([DNA_compliments[x] for x in dna])