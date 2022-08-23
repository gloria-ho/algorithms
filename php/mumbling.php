<?php
  // https://www.codewars.com/kata/mumbling
//   This time no story, no theory. The examples below show you how to write function accum:

  // Examples:

  // accum("abcd");    // "A-Bb-Ccc-Dddd"
  // accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
  // accum("cwAt");    // "C-Ww-Aaa-Tttt"
  // The parameter of accum is a string which includes only letters from a..z and A..Z.

  function accum($s) {
    $result = array();
    foreach(str_split($s) as $key=>$val) {
      $result[]= ucfirst( str_repeat(strtolower($val), $key+1));
    }
    return implode("-",$result);
  }

?>