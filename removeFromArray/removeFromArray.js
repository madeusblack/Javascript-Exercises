const removeFromArray = function(arraygiv,toremovea,toremoveb,toremovec,toremoved) {
    
   indx=arraygiv.indexOf(toremovea)
   if(indx!=-1){   arrtoret=arraygiv.splice(indx,1)

   }
if(toremoveb!= undefined ){
   indx=arraygiv.indexOf(toremoveb)
   if(indx!=-1){ arrtoret=arraygiv.splice(indx,1)
   }
  
}
if(toremovec!= undefined ){
    indx=arraygiv.indexOf(toremovec)
    if(indx!=-1){    arrtoret=arraygiv.splice(indx,1)
    }
    
 }
 if(toremoved!= undefined ){
    indx=arraygiv.indexOf(toremoved)
    if(indx!=-1){ arrtoret=arraygiv.splice(indx,1)}
   
 }


return arraygiv
}

module.exports = removeFromArray
