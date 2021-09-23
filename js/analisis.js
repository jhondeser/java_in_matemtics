
function mediana_salarys (lista) {
  const salarios_col = colombia.map(
    function (worker) {
      return worker.w_salary;
    }
  );

  const salarios_col_sorted = salarios_col.sort((a,b) => a-b);
  const mitad_lista = parseInt(salarios_col_sorted.length/2)

  let mediana;

  if (salarios_col_sorted.length % 2 === 0) {
    const elemento1 = salarios_col_sorted[mitad_lista]
    const elemento2 = salarios_col_sorted[mitad_lista - 1]

    const promedio = (elemento1 + elemento2)/2

    document.getElementById("media_screen").innerText = promedio

  } else {
    mediana = lista[mitad_lista]
    document.getElementById("media_screen").innerText = mediana
  }
}
