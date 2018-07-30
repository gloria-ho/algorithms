# https://www.codewars.com/kata/5709bdd2f088096786000008

# Write a function that rearranges an integer into its largest possible value.

# superSize(123456) //654321
# superSize(105) // 510
# superSize(12) // 21
# If the argument passed through is single digit or is already the maximum possible integer, your function should simply return it.

def super_size(n):
  i = [int(x) for x in str(n)]
  i.sort(reverse = True)
  return int(''.join(map(str, i)))