/*

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
  2 characters

/^\d{3}(\d{2})?$/
  3 or 5 characters   -- (second 2 are optional)


^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$
  look ahead to have a number
  look ahead to have a char
  must have only alpha numeric

*/
