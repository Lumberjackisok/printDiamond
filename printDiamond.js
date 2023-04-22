function usuallyPrintDiamond(n) {
    for (let i = 0; i < n; i++) {
        let str = '';
        for (let j = 0; j < n - i - 1; j++) {
            str += ' ';
        }
        for (let k = 0; k < 2 * i + 1; k++) {
            str += '*';
        }
        console.log(str);
    }

    //Decreasing iterative variables|迭代变量递减
    for (let i = n - 2; i >= 0; i--) {
        let str = '';
        for (let j = 0; j < n - i - 1; j++) {
            str += ' ';
        }
        for (let k = 0; k < 2 * i + 1; k++) {
            str += '*';
        }
        console.log(str);
    }
}
console.log('                                 ');
console.log('                                 ');
console.log('                                 ');
console.log('                                 ');
console.log('Usually Print Diamond:');
console.log('                                 ');
usuallyPrintDiamond(5);


console.log('                                 ');
console.log('                                 ');
console.log('                                 ');
console.log('                                 ');

//---------------------------------------cutline-----------------------------------

/*
先打印一个矩形:***     *         *     每层*的个数=2x当前层-1
              ***  >> ***      ***   空格=总层数-当前层
              ***     *****   *****
        ***  n-1        每层*的个数=  n x 3 -(2 x i + n)-1
        *** >> ***  >>      空格=当前层
        ***    *
           中间层=总层数-总层数/2
*/
function geniusPrintDiamond(n) {
    for (let i = 0; i < n - 1; i++) {
        let str = '';
        for (let j = 0; j < n - i - 1; j++) {
            str += ' ';
        }
        for (let k = 0; k < 2 * i + 1; k++) {
            str += '*';
        }
        console.log(str);
    }

    //incrementing the iteration variable|迭代变量递增
    for (let i = 0; i < n; i++) {
        let str = '';
        for (let j = 0; j < i; j++) {
            str += ' ';
        }
        for (let k = 0; k < n * 3 - (2 * i + n) - 1; k++) {
            str += '*';
        }
        console.log(str);
    }
}

console.log('Genius Print Diamond:');
console.log('                                 ');
geniusPrintDiamond(5);