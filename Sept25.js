// Have the function NumberStream(str) take the str parameter being passed which will contain the numbers 2 through 9, 
//and determine if there is a consecutive stream of digits of at least N length where N is the actual digit value. 
//If so, return the string true, otherwise return the string false. For example: if str is "6539923335" then your program should return the string true because 
//there is a consecutive stream of 3's of length 3. The input string will always contain at least one digit.

//solution #1 
function NumberStream(str){
    for(let i=2;i<10;i++){
        let iChar = i.toString(); 
        let needle = iChar.repeat(i); 
        if(str.indexOf(needle)!==-1){
            return true; 
        }
    }

}
NumberStream("6539923335")

function NumberStream(str) { 

    for (let i = 0, lastDigit = -1, count = 0; i < str.length; i++) {
        if (str[i] === lastDigit) {
            // Stream continued
            count++;
            if (count >= Number(lastDigit)) {
                return true;
            }
        } else {
            // New stream
            lastDigit = str[i];
            count = 1;
        }
    }
    return false;
}

function NumberStream(str) {
    // generate patterns first
    var patterns = [];
    for (var i = 1; i < 10; i++) {
        patterns.push(String(i).repeat(i));
    }
    
    for (var pattern of patterns) {
        if (str.indexOf(pattern) !== -1) {
            // pattern found
            return true;
        }
    }
    return false;
}
 

