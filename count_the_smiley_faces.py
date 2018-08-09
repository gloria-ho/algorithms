# https://www.codewars.com/kata/count-the-smiley-faces/train/python

# Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

# Rules for a smiling face:
# -Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
# -A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
# -Every smiling face must have a smiling mouth that should be marked with either ) or D.
# No additional characters are allowed except for those mentioned.
# Valid smiley face examples:
# :) :D ;-D :~)
# Invalid smiley faces:
# ;( :> :} :] 

# Example cases:

# countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
# countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
# countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;

import re

def count_smileys(arr):
  count = 0
  for x in arr:
    if re.match('^[:;]*[-~]*[)D]$', x):
      count += 1
  return count


print(count_smileys([':)', ';(', ';}', ':-D'])) # should return 2;
print(count_smileys([';D', ':-(', ':-)', ';~)'])) # should return 3;
print(count_smileys([';]', ':[', ';*', ':$', ';-D'])) # should return 1;
print(count_smileys([])) # 0)
print(count_smileys([':D',':~)',';~D',':)'])) # 4)
print(count_smileys([':)',':(',':D',':O',':;'])) # 2)
print(count_smileys([';]', ':[', ';*', ':$', ';-D'])) # 1)