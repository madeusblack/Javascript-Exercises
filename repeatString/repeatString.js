const repeatString = function(strintorep,timesrepeated) {
    let newstring=""
    let timestorepeat=timesrepeated
    if(timesrepeated==-1){
        return 'ERROR'
    }
    for(torepeat=0;timestorepeat > torepeat;torepeat++){
        newstring=newstring+strintorep
    }
    return newstring

}

module.exports = repeatString
