# https://www.codewars.com/kata/friend-or-foe

# Make a program that filters a list of strings and returns a list with only your friends name in it.

# If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

# Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

# Note: keep the original order of the names in the output.

def friend(x):
  friends = []
  for name in x:
    if len(name) == 4:
      friends.append(name)
  return friends

print(friend(["Ryan", "Kieran", "Jason", "Yous"])) # ["Ryan", "Yous"]