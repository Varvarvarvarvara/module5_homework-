//1 задание

let value = prompt('введите значение');
value = +value;
if (typeof value != 'number') {
    alert('упс, кажется, вы ошиблись');

} else if (isNaN(value)) {
    alert('упс, кажется, вы ошиблись');
} else if (value % 2 === 0) {
    alert('это четное число');
} else {
    alert('это нечетное число');
}

//2 задание 
let x = prompt('Введите значение X');

if (typeof x === 'number') {
    alert(x + ' - число');
} else if (typeof x == 'string') {
    alert(x + ' - строка');
} else if (typeof x == 'boolean') {
    alert(x + 'Логический тип');
} else {
    alert(x + 'x не определен');
}


//3 задание 
let str = 'hello';

str = str.split("");
str = str.reverse();
str = str.join("");

console.log(str)


//4 задание
let x = Math.floor(Math.random() * 101);
console.log(x)

//5 задание 


let arr = ['one', 'two', 'tree', 'four'];
alert('Длина массива: ' + arr.length + ' элемента');
arr.forEach(function (item, i, arr) {
    alert(i + ":" + item + "(массив:" + arr + ")");
});


//6 задание

let arr = ['one', 'two', 'tree', 'four'];
for (let i = 0; i < 4; i = i + 1) {
    if (arr[i] === arr[i]) {
        alert(true);
    } else {
        alert(false);
    }
}


//7 задание 
let zeros=0;
let strs=0;
let countables=0;
let uncountables=0;
let nulls=0;

let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, null, 'dog', 'cat', 'beer'];
for (i = 0; i<array.length; i++) {
    
    if (typeof array[i] == 'string') {
        strs++;
    } else if (array[i]==null){
        nulls++;
    } else if (array[i]==0) {
        zeros++;
    } else if (array[i] % 2 === 0) {
        countables++;
    } else {
        uncountables++;
    }   
}


alert(`Нулей - ${zeros} \n Строк - ${strs} \n Нуллов - ${nulls} \n Четных - ${countables} \n Нечетных - ${uncountables}`)