//codigo del cuadrado
console.group("cuadrado")

	function perimetro_cuadrado (lado){
		return lado*4;
	} 

	function area_cuadrado (lado) {
		return lado * lado;
	}

console.groupEnd();

//codigo del triangulo
console.group("triangulo")

	function perimetro_triangulo(lado1,lado2,lado3) {
		return parseInt(lado1) + parseInt(lado2) + parseInt(lado3);
	} 


	function area_triangulo(lado1, altura) {
		return (lado1 * altura)/2;
	} 

console.groupEnd();

//codigo del circulo
console.group("circulo")

	function diametro_circulo (radio) {
		return radio *2;
	}

	const pi = Math.PI;
	function circunferencia_circulo (diametro) {
		return diametro * pi;
	} 

	function area_circulo (radio) {
		return (radio * radio) * pi;
	}

console.groupEnd();

//interactuar con botones html
function calcular_perimetro_cuadrado () {

	const input = document.getElementById("int_cuadrado");
	const value = input.value;

	const perimetro = perimetro_cuadrado(value);

	alert(perimetro)
}

function calcular_area_cuadrado () {

	const input = document.getElementById("int_cuadrado");
	const value = input.value;

	const area = area_cuadrado(value);

	alert(area)
}

function calcular_perimetro_triangulo () {
	const input = document.getElementById("int_triangle");
	const input2 = document.getElementById("int_triangle2");
	const input3 = document.getElementById("int_triangle3");
	
	const value = input.value;
	const value2 = input2.value;
	const value3 = input3.value;

	const perimetro = perimetro_triangulo(value, value2, value3);
	alert(perimetro)
}

function calcular_area_triangulo () {
	const input = document.getElementById("int_triangle");
	const input2 = document.getElementById("int_triangle2");
	const input3 = document.getElementById("int_triangle3");
	
	const value = input.value;
	const value2 = input2.value;
	const value3 = input3.value;

	const altura = Math.sqrt((value*value)-((value3*value3)/4))

	if (value == value2 && value != value3) {
		const area = area_triangulo(value3, altura)
		alert(area)
	} else {
		alert("tu triangulo no es isosceles")
	}
}

function calcular_perimetro_circulo () {
	const input = document.getElementById("int_circle");
	const value = input.value;

	const diametro = diametro_circulo(value);
	const perimetro = circunferencia_circulo(diametro);

	alert(perimetro)
}

function calcular_area_circulo () {
	const input = document.getElementById("int_circle");
	const value = input.value;

	const area = area_circulo (value);

	alert(area)
}