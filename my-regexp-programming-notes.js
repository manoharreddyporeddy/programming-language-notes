/*

NOTE: These may not be 100%, though they may be. :-)
NOTE: These all have a start (^) and end ($), which you can remove
NOTE: These all have one / at the being, and another / at the end, that you can remove. That's a way to write in JavaScript

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

/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/
  look ahead to have a number
  look ahead to have a char
  must have only alpha numeric

*/
