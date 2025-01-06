function makeid(l) {
  // write your code here
var res="";
	var char_list="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789" 
	for (var i=0;i<l;i++){
		res+=char_list.charAt( 
			Math.floor(
				Mat.random()*char_list.length
			)
	 )
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
