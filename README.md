# printDiamond
Print the lower half of the diamond by incrementing the iteration variable inside the for loop.|通过在for循环中使用递增迭代变量的方式来打印菱形的下半部。

# Preview
<!-- ![image](​https://github.com/Lumberjackisok/printDiamond/blob/main/dshafshreahe.png) -->

# Core Code
```javascript
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
```

# If given enough time
I could print a medium-sized cock