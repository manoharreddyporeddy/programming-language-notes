/*

/^\d{4}$/
  4 digits
  
/^\d{11}$/
  11 digits

/^\d{1,20}$/
  1 to 20 digits
  
/^\d{3} \d{2}$/
  3 digits, a space, then a 2 more digits

/^\d{3}-\d{4}$/
  3 digits, a hypen, then a 2 more digits



^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$
  look ahead to have a number
  look ahead to have a char
  must have only alpha numeric

*/
