# https://www.codewars.com/kata/build-tower

# Build Tower by the following given argument:
# number of floors (integer and always greater than 0).

# Tower block is represented as *

# Python: return a list;
# JavaScript: returns an Array;
# C#: returns a string[];
# PHP: returns an array;
# C++: returns a vector<string>;
# Haskell: returns a [String];
# Ruby: returns an Array;
# Have fun!

# for example, a tower of 3 floors looks like below

# [
#   '  *  ', 
#   ' *** ', 
#   '*****'
# ]
# and a tower of 6 floors looks like below

# [
#   '     *     ', 
#   '    ***    ', 
#   '   *****   ', 
#   '  *******  ', 
#   ' ********* ', 
#   '***********'
# ]

def tower_builder(n_floors):
  tower = []
  for x in range(1, n_floors + 1 ):
    stars = (x * 2 -1) * '*'
    side = int((((n_floors * 2) -1) - ((x * 2) - 1)) / 2) * ' '
    tower.append(side + stars + side)
  return tower

print (tower_builder(2))
print (tower_builder(4))
print (tower_builder(10))