/*
------------------------------------------------------
NOTE:

Below Regular expressions all 
	have a start (^) and end ($), which you can remove.
	have one / at the begin, and another / at the end, that you can remove. That's a way to write in JavaScript.

TEST DATA
------------------------------------------------------
ab
123
1234
1234 1234
1234 AB
12345
12345-234
123456
1234567
12345678
123456789
1234567890
12345678901
123456789012
A1A 1A1
AAA9 9AA
AAAA 1AA
AB 1234
AB12
AB2 1AB
ABC1234
ABCDE12
KY1-1111
KY1-2345
ZABC12340



REGULAR EXPRESSIONS:
------------------------------------------------------

/^\d{4}$/
  4 digits
  
/^\d{11}$/
  11 digits

/^\d{1,20}$/
  1 to 20 digits
  
/^\d{3} \d{2}$/
  3 digits, a space, then a 2 more digits

/^\d{2}-\d{4}$/
  2 digits, a hypen, then a 4 more digits

/^[a-zA-Z]{2}$/
  2 alphabets

/^\d{3}(\d{2})?$/
  3 or 5 alphabets   -- (second 2 are optional)

/^\d{4} [a-zA-Z]{2}$/
  4 digits, a space, then 2 alphabets

/^[a-zA-Z]\d[a-zA-Z] \d[a-zA-Z]\d$/
  an alphabet, then a digit, then another alphabet, then a space, then a digit, then an alphabet, then another digit

/^AD\d{3}$/
  The string AD then 3 digits

/^(\d{4}|\d{6})$/
  4 or 6 digits

/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/
  look ahead to have atleast a digit
  look ahead to have atleast a alphabet
  also must have only alpha numeric only

*/
