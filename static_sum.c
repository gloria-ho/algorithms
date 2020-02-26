' In this exercise, try to find the sum of some numbers by using the static keyword. Do not pass any variable
' representing the running total to the sum() function.

   #include <stdio.h>
   int sum (int num) {
       /**
       * find sum to n numbers
       */
       static int sum;
       sum += num;
       return sum;
   }

   int main() {
       printf("%d ",sum(55));
       printf("%d ",sum(45));
       printf("%d ",sum(50));
       return 0;
   }

   // expected outcome
   // 55 100 150