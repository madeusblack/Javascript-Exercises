const fibonacci = function(number) {
    if(number<0){
        let errorneg="OOPS"
        return errorneg
    }
    let show=0
    let a=0
    let b=1
    let i=1
    for(i;i<number;i++){
        show=a+b
        a=b;
        b=show
    }
    return show
}
module.exports = fibonacci
