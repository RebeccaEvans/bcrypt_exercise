// TODOS
// 1. Require bcrypt
// 2. Get a password from the user
// 3. Hash the password and store result in a local variable
// 4. Get another password from the user
// 5. If the second password matches the first one, print a success message
// 6. If the second password does not match the first one, print 'access denied'

var readlineSync = require('readline-sync')
var bcrypt = require('bcryptjs');
var saltRounds = 10;

userName = readlineSync.question('May I have your name? ')
console.log("Hi " + userName + "!")

//Handle the secret text (e.g. password).
var userPassword = readlineSync.question('Please enter a password: ', {hideEchoBack: true});

// Generate the hashed password
var hashedPassword = bcrypt.hashSync(userPassword, saltRounds);

// Print it out
console.log('Your hashed password is: ', hashedPassword);

//Handle the secret text (e.g. password).
var userPassword2 = readlineSync.question('Please re-enter your password: ', {
	hideEchoBack: true});

var hashedPassword2 = bcrypt.hashSync(userPassword2, saltRounds);

// Compare results
var result = bcrypt.compareSync(userPassword, hashedPassword2);

if (!result) {
	console.log('Sorry, your passwords do not match.')
}

else {
	console.log('Thanks - your passwords match.')
}
