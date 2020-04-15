function hacerPeticion(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.onreadystatechange = function () {
    console.log(xhr.readyState);
    if (xhr.readyState === 4) {
      callback(xhr.response, false);
      return;
    } else {
      callback(null, true);
    }
  };
  xhr.send();
}

var url = "https://reqres.in/api/users?page=2";

function verDatos(data, error) {
  let div = document.getElementById("midiv");
  console.log("datos", data);
  console.log("exito?", error);
  if (error === true) {
    //IMPRIMO UN MENSAJE DE ERROR
    div.innerHTML = "Error al obtener los datos";
  } else {
   // IMPRIMO LOS USUARIOS
    div.innerHTML = '';
    //CONVERTIR ESTE TEXTO EN UN OBJETO
    let datos = JSON.parse(data);
    console.log("Mis datos", datos.data);
    let tabla = document.createElement("table");
    let tbody = document.createElement("tbody");
    let tr = "";
    datos.data.forEach((usuario) => {
      tr = tr + `<tr>
              <td>${usuario.id}</td>
              <td>${usuario.first_name}</td>
              <td>${usuario.last_name}</td>
            </tr>`;
    });
    tbody.innerHTML = tr;
    tabla.appendChild(tbody);
    div.appendChild(tabla);
  }
}

hacerPeticion(url, verDatos);
