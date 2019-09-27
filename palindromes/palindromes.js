const palindromes = function(a) {
        
    function toremove(){
        let toremo ="!";
        console.log("sendremove")
        return toremo
    }
    function reverseString(str){

            
            console.log("start inner function")
            let filteredstr=str.replace(/\W/g,"")
            let filteredstr1=filteredstr.replace(" ","")


           
            // Step 1. Use the split() method to return a new array
            var splitString = filteredstr.split(""); // var splitString = "hello".split("");
            console.log("split")
            
            // ["h", "e", "l", "l", "o"]
            let filteredarray=splitString.filter(toremove);
            console.log("fliter")

           
            // Step 2. Use the reverse() method to reverse the new created array
            var reverseArray = filteredarray.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
            // ["o", "l", "l", "e", "h"]
            console.log("reverse")

            // Step 3. Use the join() method to join all elements of the array into a string
            var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
            // "olleh"
            console.log("reverse")
            let joinArraylow=joinArray.toLowerCase();

            console.log(joinArraylow)
        
            //Step 4. Return the reversed string
            return joinArraylow // "olleh"
}
        
        function clean(str1){
                
            let str1re=str1.replace(/\W/g,"")
            let filteredstr2=str1re.replace(" ","")
            let splitString1 = filteredstr2.split("")
            let joinedarray1=splitString1.join("");
            let alow=joinedarray1.toLowerCase();
                
            return  alow
        }
    reversed=reverseString(a)
    aclean=clean(a);
    if(aclean==reversed){
            console.log("true")
        return true
    }else{             console.log("false")

            return false
    }

}

module.exports = palindromes
