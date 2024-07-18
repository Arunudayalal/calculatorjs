function displayNumber(num)
{
    result.value+=num
}

// clear text box

function clearBox(){
    result.value=''
}

// evaluate expression

function evaluateExp() {
// method1
    // exp=result.value;
    // output=eval(exp)
    // result.value=output
    // method2

    result.value=eval(result.value)

    
}

function removelastitem(){
    result.value=result.value.slice(0,-1)
}