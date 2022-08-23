<?php
  //https://www.codewars.com/kata/sum-of-positive

  // You get an array of numbers, return the sum of all of the positives ones.
  // Example [1,-4,7,12] => 1 + 7 + 12 = 20
  // Note: if there is nothing to sum, the sum is default to 0.

  function positive_sum($arr) {
    $sum = 0;
    foreach($arr as $x) {
      if ($x > 0) {
        $sum += $x;
      }
    }
  return $sum;
  }

  positive_sum([1, 2, 3, 4, 5]); // 15
  positive_sum([1, -2, 3, 4, 5]); // 13
?>