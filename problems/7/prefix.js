function prefixMath(prefix, a, b){
    if (prefix === "+"){
        return a + b;
    }
    if (prefix === '/'){
        return a / b;
    }
    if (prefix === '*'){
        return a * b;
    }
}

Array.prototype.popPush = function(prefixIndex, push){
    this.splice(prefixIndex + 1, 1);
    this.splice(prefixIndex + 1, 1);
    this[prefixIndex] = push;
};

    
function prefixExpression(array){
    var arrLength = array.length -1;
    if (arrLength === 0){
        return array[0].toString();
    }
    for (var x=arrLength; x >= 0; x--){
        if(array[x] === '+' || array[x] === '/' || array[x] === '*'){
            var push = prefixMath(array[x], array[x +1], array[x + 2]);
            array.popPush(x, push);
            return prefixExpression(array);
        }
        else{
            array[x] = parseFloat(array[x]);
            continue;
        }
    }
}

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
    var input = line;
    
    var inputArr = input.split(' ');
    
    console.log(prefixExpression(inputArr)); 
    }
});