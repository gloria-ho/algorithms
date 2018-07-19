# Given an array, find the int that appears an odd number of times.

# There will always be only one integer that appears an odd number of times.

def find_it(seq):
    for x in seq:
        if seq.count(x) % 2 != 0:
            return x