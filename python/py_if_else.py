# https://www.hackerrank.com/challenges/py-if-else/problem

# Given an integer, , perform the following conditional actions:
# If n is odd, print Weird
# If n is even and in the inclusive range of 2 to 5, print Not Weird
# If n is even and in the inclusive range of 6 to 20, print Weird
# If n is even and greater than 20, print Not Weird

# Input Format
# A single line containing a positive integer, n.

# Constraints
# 1 <= n <= 100

# Output Format
# Print Weird if the number is weird; otherwise, print Not Weird.

# Sample Input 0
# 3

# Sample Output 0
# Weird

# Explanation 0 
# n = 3
# N is odd and odd numbers are weird, so we print Weird.

# Sample Input 1
# 24

# Sample Output 1
# Not Weird

# Explanation 1
# n = 24
# n > 20 and n is even, so it isn't weird. Thus, we print Not Weird.

# first attempt
# def weird(n):
#   if (n % 2 != 0) or (n > 5 and n < 21):
#     return 'Weird'
#   else:
#     return 'Not Weird'

# ternary version
def weird(n):
  return 'Weird' if (n % 2 != 0) or (n > 5 and n < 21) else 'Not Weird'

print weird(3) # 'Weird'
print weird(24) # 'Not Weird'
