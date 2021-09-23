const colombia = []

function persona_salary (name, salary) {
  colombia.push({
    w_name: name,
    w_salary: salary,
  })
}

function agregar_trabajador () {
  const name = document.getElementById("inp_name");
  const salary = document.getElementById("inp_salary");

  const name_value = name.value
  var salary_value = salary.value
  var salary_value = parseInt(salary_value)

  persona_salary (name_value,salary_value);

  name.value = "";
  salary.value = "";

  alert("usuario agregado")
}