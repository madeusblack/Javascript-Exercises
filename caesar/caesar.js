const caesar = function(str, num) { 
    // you can comment this line
    //str = str.toLowerCase();

    let result = '';
    let charcode = 0;
    let toadd="";
    if (num < 0)
		return caesar(str, num + 26);
    for (let i = 0; i < str.length; i++) {
        charcode = (str[i].charCodeAt());
        console.log("AT START " + charcode)
        if(charcode>=65&&charcode<= 90){
            
            toadd=String.fromCharCode(((charcode - 65 + num) % 26) + 65)
            result += toadd
        }
        if(charcode>= 97&&charcode<= 122){
            toadd=String.fromCharCode(((charcode - 97 + num) % 26) + 97);
                result += toadd

        }
        if(charcode<65||charcode>90&&charcode<97||charcode>123){
            charcode = (str[i].charCodeAt());
            result += String.fromCharCode(charcode);
            console.log("else")
        }
    }
    return result;
}
    
module.exports = caesar
