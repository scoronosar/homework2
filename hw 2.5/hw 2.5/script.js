function lower(a , b){
    if (a < b){
        console.log(a);
    }
    else if (a > b){
        console.log(b);
    }
    else{
        console.log(a);
    }
}

lower(prompt(), prompt());

function odd(a){
    if (a % 2 == 0){
        console.log('Число четное');
    }
    else {
        console.log('Число нечетное');
    }
}

odd(prompt());

function square(a){
    console.log(a * a);
}

square(prompt());

function square(a){
    return(a * a);
}

square(prompt());

function age(a){
    if (a < 0){
        alert("Вы ввели неправильное значение");
    }
    else if (a > -1 && a < 13){
        alert("Привет, друг!");
    }
    else {
        alert('Добро пожаловать!');
    }

}

age(prompt("How old are you?"));

function nan(a , b){
    if (Number.isNaN(a) == "true"  && Number.isNaN(b) == "true"){
        return (a*b);
    }
    else{
        return ('Одно или оба значения не являются числом');
    }
}

nan(prompt() , prompt());

function nan(a){
    if (Number.isNaN(a) == "true" && Number.isNaN(b) == "true"){
        return (`n в кубе равняется ${a*a*a}`);
    }
    else{
        return ('Переданный параметр не является числом');
    }
}

nan(prompt());

var cyrcle1 = {
    getArea: function(radius) {
        return(2*3.14*radius);
    }
}

cyrcle1.getArea(prompt());

var cyrcle2 = {
    getPerimeter: function(radius) {
        return(2*3.14*radius);
    }
}

cyrcle2.getPerimeter(prompt());