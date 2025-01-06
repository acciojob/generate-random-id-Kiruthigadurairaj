function makeid(l) {
  // Initialize an empty string to hold the result
  var res = "";

  // Define the list of characters to use in the random string
  var char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  // Loop for the specified length
  for (var i = 0; i < l; i++) {
    // Append a random character from char_list to res
    res += char_list.charAt(
      Math.floor(
        Math.random() * char_list.length // Use Math.random (fix typo Mat.random)
      )
    );
  }

  // Return the generated string
  return res;
}


// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
