// Objective
// This challenge will let you learn about bitwise operators in C.

// Inside the CPU, mathematical operations like addition, subtraction, multiplication and division
// are done in bit-level. To perform bit-level operations in C programming, bitwise operators are
// used which are explained below.

// Bitwise AND operator &
// The output of bitwise AND is 1 if the corresponding bits of two operands
// is 1. If either bit of an operand is 0, the result of corresponding bit is evaluated to 0. It
// is denoted by &.

// Bitwise OR operator |
// The output of bitwise OR is 1 if at least one corresponding bit of two
// operands is 1. It is denoted by |.

// Bitwise XOR (exclusive OR) operator ^
// The result of bitwise XOR operator is 1 if the corresponding
// bits of two operands are opposite. It is denoted by ^.

// For example, for integers 3 and 5,
// 3 = 00000011 (In Binary)
// 5 = 00000101 (In Binary)

// AND operation        OR operation        XOR operation
//   00000011             00000011            00000011
// & 00000101           | 00000101          ^ 00000101
//   ________             ________            ________
//   00000001  = 1        00000111  = 7       00000110  = 6

// Task
// Given set S = {1, 2, 3, ..., n}, find:
//     - the maximum value of a & b which is less than a given integer k, where a and b (where a > b)
//     are two integers from set S.
//     - the maximum value of a | b which is less than a given integer k, where a and b (where a > b)
//     are two integers from set S.
//     - the maximum value of a ^ b which is less than a given integer k, where a and b (where a > b)
//     are two integers from set S.

// Input Format
// The only line contains 2 space-separated integers, n and k, respectively.

// Constraints
//     2 <= n <= 10
//     2 <= k <= n

// Output Format
// The first line of output contains the maximum possible value of a & b.
// The second line of output contains the maximum possible value of a | b.
// The second line of output contains the maximum possible value of a ^ b.

// Sample Input 0
// 5 4

// Sample Output 0
// 2
// 3
// 3

// Explanation 0
// n = 5, k = 4;
// S = {1, 2, 3, 4, 5}

// All possible values of  and  are:
// 1. a = 1, b = 2; a & b = 0; a | b = 3; a ^ b = 3;
// 2. a = 1, b = 3; a & b = 1; a | b = 3; a ^ b = 2;
// 3. a = 1, b = 4; a & b = 0; a | b = 5; a ^ b = 5;
// 4. a = 1, b = 5; a & b = 1; a | b = 5; a ^ b = 4;
// 5. a = 2, b = 3; a & b = 2; a | b = 3; a ^ b = 1;
// 6. a = 2, b = 4; a & b = 0; a | b = 6; a ^ b = 6;
// 7. a = 2, b = 5; a & b = 0; a | b = 7; a ^ b = 7;
// 8. a = 3, b = 4; a & b = 0; a | b = 7; a ^ b = 7;
// 9. a = 3, b = 5; a & b = 1; a | b = 7; a ^ b = 6;
// 10. a = 4, b = 5; a & b = 4; a | b = 5; a ^ b = 1;

//     The maximum possible value of a & b that is also < (k = 4) is  2, so we print 2 on first line.
//     The maximum possible value of a | b that is also < (k = 4) is 3, so we print 3 on second line.
//     The maximum possible value of a ^ b that is also < (k = 4) is 4, so we print 4 on third line.

#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>

void calculate_the_maximum(int n, int k) {
    int maxAnd = 0;
    int maxOr = 0;
    int maxXor = 0;
    for (int i = 1; i <= n; i++) {
        for (int j = i + 1; j <= n; j++) {
            if (((i & j) > maxAnd) && ((i & j) < k)) {
                maxAnd = i & j;
            }
            if (((i | j) > maxOr) && ((i | j) < k)) {
                maxOr = i | j;
            }
            if (((i ^ j) > maxXor) && ((i ^j ) < k)) {
                maxXor = i ^ j;
            }
        }
    }
    printf("%d\n%d\n%d\n", maxAnd, maxOr, maxXor);
}

int main() {
    int n, k;
    scanf("%d %d", &n, &k);
    calculate_the_maximum(n, k);
    return 0;
}
