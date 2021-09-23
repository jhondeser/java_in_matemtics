function precio_descuento(precio, descuetno) {
  return (precio*(100-descuetno))/100
}

function precio_final() {
	const input_price = document.getElementById("inp_precio");
	const input_discount =document.getElementById("inp_descuento");

	const value_price = input_price.value;
	const value_discount = input_discount.value;

	const total = precio_descuento(value_price,value_discount);

	const total_value = document.getElementById("result_price")
	total_value.innerText = total
}