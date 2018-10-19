<?php
  // https://www.codewars.com/kata/isograms

  // An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

  // isIsogram "Dermatoglyphics" == true
  // isIsogram "moose" == false
  // isIsogram "aba" == false

  function isIsogram($string) {
    $existing = "";
    if (strlen($string) > 0) {
      foreach(str_split(strtolower($string)) as $key=>$letter) {
        if (strpos($existing, $letter) > -1) {
          return false;
        }
        $existing .= $letter;
      }
    }
    return true;
  }
?>