// Convert the given number into a roman numeral.
// All roman numerals answers should be provided in upper-case.
// https://www.mathsisfun.com/roman-numerals.html

// convertToRoman(2) should return the string II.
// convertToRoman(3) should return the string III.
// convertToRoman(4) should return the string IV.
// convertToRoman(5) should return the string V.
// convertToRoman(9) should return the string IX.
// convertToRoman(12) should return the string XII.
// convertToRoman(16) should return the string XVI.
// convertToRoman(29) should return the string XXIX.
// convertToRoman(44) should return the string XLIV.
// convertToRoman(45) should return the string XLV.
// convertToRoman(68) should return the string LXVIII
// convertToRoman(83) should return the string LXXXIII
// convertToRoman(97) should return the string XCVII
// convertToRoman(99) should return the string XCIX
// convertToRoman(400) should return the string CD
// convertToRoman(500) should return the string D
// convertToRoman(501) should return the string DI
// convertToRoman(649) should return the string DCXLIX
// convertToRoman(798) should return the string DCCXCVIII
// convertToRoman(891) should return the string DCCCXCI
// convertToRoman(1000) should return the string M
// convertToRoman(1004) should return the string MIV
// convertToRoman(1006) should return the string MVI
// convertToRoman(1023) should return the string MXXIII
// convertToRoman(2014) should return the string MMXIV
// convertToRoman(3999) should return the string MMMCMXCIX

function convertToRoman(num) {
  let divider = 1000;
  let result = num;
  let output = "";
  const dict = {
    1000: "M",
    500: "D",
    100: "C",
    50: "L",
    10: "X",
    5: "V",
    1: "I",
  };

  while (result > 0) {
    if (result >= divider) {
      let round = Math.floor(result / divider);
      const outcome = divider * Math.floor(result / divider);

      if (round === 9) {
        output += dict[divider];
        output += dict[divider * 10];
      } else if (round > 4) {
        while (round > 0) {
          if (round >= 5) {
            output += dict[divider * 5];
            round = round - 5;
            continue;
          }
          output += dict[divider];
          round--;
        }
      } else if (round === 4) {
        output += dict[divider];
        output += dict[divider * 5];
      } else {
        // round is less than 4

        while (round > 0) {
          output += dict[divider];
          round--;
        }
      }

      result = result - outcome;
      console.log(divider, round, outcome);
    }

    divider /= 10;
  }

  return output;
}

convertToRoman(36);
