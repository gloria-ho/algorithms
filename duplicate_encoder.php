<?php
  // https://www.codewars.com/kata/duplicate-encoder

  // The goal of this exercise is to convert a string to a new string where each character in the new string is '(' if that character appears only once in the original string, or ')' if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

  // Examples:
  // "din" => "((("
  // "recede" => "()()()"
  // "Success" => ")())())"
  // "(( @" => "))(("

  // create an associative array where the key is the letter
  // value is either '(' or ')'
  // check the original string with foreach (str_split(strtolower($str)) as $k=>$v)
  // if it doesn't exists, create it and make it equal to (
  // if it does exists, change the value to )
  // return a string using the keys of the parameters to pull values from the array

  function duplicate_encode($word) {
    $char = array();
    $word = str_split(strtolower($word));
    $result = "";
    foreach($word as $key=>$letter) {
      if (array_key_exists($letter, $char)) {
        $char[$letter] = ")";
      } else {
        $char[$letter] = "(";
      }
    }
    foreach($word as $key=>$letter) {
      $result .= $char[$v];
    }
    return $result;
  }


?>