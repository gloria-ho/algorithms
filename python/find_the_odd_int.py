# https://www.codewars.com/kata/54da5a58ea159efa38000836

# Given an array, find the int that appears an odd number of times.

# There will always be only one integer that appears an odd number of times.

#
# first solution
#

def find_it(seq):
  for x in seq:
    i = seq.count(x)
    if i % 2 != 0:
      return x
            
#
# second solution
#

def find_it(seq):
  for x in seq:
    if seq.count(x) % 2 != 0:
      return x