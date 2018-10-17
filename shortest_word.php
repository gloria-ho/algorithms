<?php
  // https://www.codewars.com/kata/shortest-word

  // Simple, given a string of words, return the length of the shortest word(s).

  // String will never be empty and you do not need to account for different data types.

  function findShort($str){
    $words = (explode(" ", $str));
    $lengths = array_map("strlen", $words);
    return min($lengths);
  }

  findShort("this is a test to find the shortest word"); // 1
?>