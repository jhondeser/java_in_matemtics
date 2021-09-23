
function promedio (lista) {
  let suma_total = 0;

  for (let i = 0; i < lista.length; i++) {
    suma_total = suma_total + lista[i]
  }

  const promedio = suma_lista/lista.length;

  return promedio
}

function mediana (lista) {
  const lista_ordenada = lista.sort((a,b) => a-b);
  const mitad_lista = parseInt(lista.length/2)
  let mediana;
  console.log(lista_ordenada)

  if (lista.length % 2 === 0) {
    const elemento1 = lista[mitad_lista]
    const elemento2 = lista[mitad_lista - 1]

    const promedio = (elemento1 + elemento2)/2

    return promedio

  } else {
    mediana = lista[mitad_lista]
    return mediana
  }
}

function moda (lista) {
  const lista_count = {}

  lista.map(
    function (x) {
      if (lista_count[x]) {
        lista_count[x] += 1;
      } else {
        lista_count[x] = 1;
      }
    }
  )

  console.log(lista_count) 

  const lista_x = Object.entries(lista_count).sort((a,b) => a[1]-b[1]);

  console.log(lista_x)
  
  return lista_x[lista_x.length - 1]
}