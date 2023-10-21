# USENSE Test task

## Task

Create applications to test password strength.

### The essence of the assignment:


* Create a field for entering a password, under the field add 3 sections which will show the strength of the password; 
* Changes in password strength must take place in real time;
* How to calculate the strength of a password:
  1. Only letters/digits/symbols - the password is easy;
  2. Only letters/digits/symbols - the password is easy;
  3. Only letters/digits/symbols - the password is easy;
* The color of the sections will depend on the strength of the password:
  1. If the field is empty, all sections are gray;
  2. If the field has less than 8 characters, all sections are red;
  3. If the password is easy - the first section is red the rest are gray;
  4. If the password is medium - the first two sections are yellow the last one is gray;
  5. If the password is strong, all sections are green;


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.
