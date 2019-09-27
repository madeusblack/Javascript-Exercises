const ftoc = function(ftemp) {

let  celtemp=(ftemp - 32)* 5/9  ;
return Number(Math.round(celtemp+'e'+1)+'e-'+1)
} 

const ctof = function(ctemp) {
let  fartemp=(ctemp * 9/5) + 32 
return Number(Math.round(fartemp+'e'+1)+'e-'+1)
}

module.exports = {
  ftoc,
  ctof
}
