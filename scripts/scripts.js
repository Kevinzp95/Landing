$(function(){
	res();
	$(window).resize(function(){
		res();
	});
	$("#zcode").focusin(function(){
		$("#zcode").val("");
	});
	$("#zcode").focusout(function(){
		if($("#zcode").val()==""){
			$("#zcode").val("Введите ваше имя");
		}
	});

	$("#name").focusin(function(){
		$("#name").val("");
	});
	$("#name").focusout(function(){
		if($("#name").val()==""){
			$("#name").val("Name");
		}
	});

	$("#email").focusin(function(){
		$("#email").val("");
	});
	$("#email").focusout(function(){
		if($("#email").val()==""){
			$("#email").val("email address");
		}
	});

	$("#message").focusin(function(){
		$("#message").val("");
	});
	$("#message").focusout(function(){
		if($("#message").val()==""){
			$("#message").val("Message");
		}
	});
	$(window).scroll(function(){
		scr=$(window).scrollTop();
		if (scr>30){
			$("#menu").addClass("fi");
		}else{
			$("#menu").removeClass("fi");
		}
	});
	/*$("#menu a").eq(0).click(function(){
		some=$("#fpage");
		$(window).scrollTop(some.offset().top);
	});
	$("#menu a").eq(1).click(function(){
		some=$(".bl2");
		$(window).scrollTop(some.offset().top);
	});*/
	$("#menu a").click(function(){
		//a=$(this).text();
		//a=$(this).attr("data-href");
		a=$(".bl3 img").attr("src");
		console.log(a);
	});
});

function res(){
	ww=$(window).width();
	wh=$("#fpage").height();
	$(".pust").css("height",wh);
	$(".di").css("left", (ww/2)-420);
	$(".bl2").css("background-position-x", (ww/2)-380);
	$(".polosa").css("height",ww*0.26);
}

/*Что будет отображаться при выводе(будет 1)

let obj={a: 1}


console.log(obj.a)



Проверка массив ли этот

let arr=[0,1,2,3] - массив
let obj={0: 0, 1: 1} - объект

console.log(Array.isArray(obj)) false
console.log(Array.isArray(arr)) true

Слияние массива

const duplicate = arr => [...arr, ...arr];

duplicate ([1,2,3,4,5]); [1,2,3,4,5,1,2,3,4,5]



let arr = [1, 2, 3, 4, 5];
let result = arr.filter( function (el) {
	return el % 2;
});

console.log ( result); // будет 1 3 5

var firstname = 'Иван';
var lastname = 'Петров';
var fullname = firstname + ' ' + lastname;

console.log(fullname);

var properties = [0, 1, 2, 3];
var totalItems = properties.push(4,5);
console.log(properties);

var properties = [0,1,2,3];
var totalItems = properties.unshift(4,5);
console.log(properties);

var properties = [0,1,2,3];
var removedItem = properties.shift();
console.log(properties);*/



/*var fridayCash = prompt('Сколько денег вы можете потратить?', '');
	if (fridayCash >= 1500) {
	alert('Вы можете и поужинать, и пойти в кино.');
} else 
	if (fridayCash >= 1000) {
	alert('Вы можете поужинать.');
} else 
	if (fridayCash >= 500) {
	alert('Вы можете пойти в кино.');
} 
  else {
	alert('Похоже, вы будете смотреть телевизор.');
}

let arr = [1,2,3,4,5,6,7,8,9];

	var element = prompt('Введите число', '');
	if (element == 9) {
		alert('Вы ввели максимальное число');
	} else 
	if (element == 1) {
		alert('Вы ввели минимальное число');
	} else 
	if (1< element && element <9) {
		alert('Вы ввели произвольное число из массива данных');
	} else
	if (element >9) {
		alert('Вы ввели недопустимое значение');
	} else
	if (element <1) {
		alert('Ошибка');
	}



	var num = 1;
	while (num <= 10) {
	document.write('Число '+ num + '<br>');
	num += 1;
	}

	/*-------Тот же код только с циклом for и короче----------*/

	/*var num = 1;
	for (var num = 1; num <=10; num++) {
		document.write('Число ' + num + '<br>');
	}



	var days = ['Понедельник1', 'Вторник1', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

	var counter = 6;

	while (counter < days.length) {
		document.write(days[counter] + ' ');
	counter++;
}*/

/*-------Тот же код только с циклом for и короче----------*/


/*var days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
	for (var i= 0; i<days.length; i++) {
		document.write(days[i] + ' ');
}*/

// var example = ['первый', 'второй', 'третий', 'последний'];
// 	for (var j = example.length-1; j >= 0; j--) {
// 		document.write(example[j] + '<br>');
//}



