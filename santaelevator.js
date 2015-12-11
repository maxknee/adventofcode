var fs = require('fs');

var readable = fs.createReadStream("input.txt", {
    encoding: 'utf8',
    fd: null,
});

function findFloor() {
    var storeParens = [];
    readable.on('readable', function() {
        var chunk;
        while (null !== (chunk = readable.read(1))) {
            storeParens.push(chunk);
        }
        //console.log(storeParens);
        //console.log('5: ' + storeParens[5]);
        console.log(storeParens.length + 'length of array');
        for (var i = 0; i < storeParens.length; i++) {
            if (storeParens[i] === '(' && storeParens[i+1] === ')') {
                console.log(i + 2);
            }
        }
    });
}

findFloor();

