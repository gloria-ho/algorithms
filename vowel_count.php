<?php
  // https://www.codewars.com/kata/vowel-count

  // Return the number (count) of vowels in the given string.
  // We will consider a, e, i, o, and u as vowels for this Kata.
  // The input string will only consist of lower case letters and/or spaces.

  function getCount($str) {
    $vowelsCount = 0;
    foreach(str_split($str) as $k=>$v) {
      if (strpos("aeiou", $v) > -1 ) {
        $vowelsCount++;
      }
    }
    return $vowelsCount;
  }
?>