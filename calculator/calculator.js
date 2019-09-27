let result=0
function add (a,b) {
	
	result=a+b;
	return result
} 

function subtract (a,b) {
	result=a-b;
	return result
}

function sum (a) {
	result=0;
	if (a.length === 0){
		return 0;

	}
	

function myFunc(total, num) {
  return total+ num;
}
	result=a.reduce(myFunc);
	return result
}

function multiply (a) {
		result=0;
	if (a.length === 0){
		return 0;
	}
function myFunc1(total, num) {
  return total* num;
}
	result=a.reduce(myFunc1);
	return result
}
	

function power(b,c) {

result=b;
result1=b;
let mulplier=c
for(let times=0;mulplier>times+1;times++){
	result=result*result1;
}	return result
}

function factorial(a) {
result=1;
let base=1

if(a==0||a==1){
	result=1;
	return result
}
for(times=0;times<a;times++){
	result=base*result
	base++;
}return result
	
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}