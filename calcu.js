//display
function display(num){
    output.value +=num;
}
//clear =CL
function clearAll(){
output.value=''
}
function evaluateExp(){
    output.value=eval(output.value)
    //method-2
    //exp=output.value
    //result=eval(exp)
    //output.value=result
}
//remove last item
function removeLast(){
    currentExp=output.value
    output.value=currentExp.slice(0,-1)
}
