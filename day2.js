var fs = require('fs');
var readline = require('readline');
var total = 0;
var rl = readline.createInterface({
    input: fs.createReadStream('input.txt')
});

rl.on('line', function(line){
    splitLine(line);
});

function splitLine(line) {
    var lwsArray = line.split('x');
    var l = lwsArray[0];
    var w = lwsArray[1];
    var h = lwsArray[2];
    findWrapping(l, w, h);
}

function findWrapping(l, w, h) {

    side1 = l * w;
    side2 = w * h;
    side3 = h * l;
    sqFt = (2 * side1) + (2 * side2) + (2 *side3);
    sideFinder(side1, side2, side3, sqFt);
}

function sideFinder(a, b, c, sqFt) {
    var small = Math.min(a, b, c);
    var idiot = sqFt + small;
    total += idiot;

}
console.log('the final total ', total);
