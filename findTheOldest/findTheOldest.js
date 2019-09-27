let findTheOldest = function(people) {
    people.gettheoldest=function(){
      let newpeople={
        name:"",
      }
      let acom=[]
      this.forEach(people => {
        if(people.yearOfDeath==null){
          var d = new Date();
          var n = d.getFullYear();
          people.yearOfDeath=n
        }
        ages=people.yearOfDeath-people.yearOfBirth
        acom.push(ages)
        return ages     
      });
      let acommax=Math.max(...acom)
     this.forEach(people => {
       if(acommax==(people.yearOfDeath-people.yearOfBirth)){
       newpeople.name=people.name
       }
     });
     return newpeople
    }
    let toret={}  
    toret=people.gettheoldest()
    people=toret
    return people
}

module.exports = findTheOldest
