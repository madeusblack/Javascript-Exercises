const sumAll = function(min,max) {
    if(min<0||max<0){
        return 'ERROR'
    }
    if(typeof min !='number'||typeof max !='number'){
        return 'ERROR'
    }
    let total=0

    if(min>max){
        for(numberToAdd=max;numberToAdd<min+1;numberToAdd++){
  
            total=numberToAdd+total
            
        }return total
    }
    for(numberToAdd=min;numberToAdd<max+1;numberToAdd++){
  
        total=numberToAdd+total
        
    }return total

}

module.exports = sumAll
