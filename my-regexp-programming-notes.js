/*

/^\d{4}$/
  4 numbers
  
/^\d{11}$/
  11 numbers

/^\d{1,20}$/
  1 to 20 numbers


^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$
  look ahead to have a number
  look ahead to have a char
  must have only alpha numeric

*/
