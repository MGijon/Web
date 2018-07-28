let numeroCajas = 0;
let numeroEnlaces = 0;
let numeroRellenos = 0;
const arrayCaja = [];

// NODES
const infoTableCaja = document.getElementById("filasCajas");
const infoTableEnlace = document.getElementById("filasEnlaces");
const infoTableRelleno = document.getElementById("filasRellenos");
const designLayer = document.getElementById("designDiv");

const crearElemento = (tipo) => {
  switch (tipo) {
    case "lista":
      let lista = document.createElement("li");
      lista.innerHTML = "Caja" + numeroCajas;
      return lista;

    case "caja":
      numeroCajas++;
      let caja = document.createElement("input");
      caja.setAttribute('placeholder', 'Caja ' + numeroCajas);
      caja.setAttribute("id", "caja" + numeroCajas);
      designLayer.append(caja);
      actualizarTabla("caja");
      caja.focus();
      arrayCaja.push({ id: caja.id });
      addListeners(caja);
      break;

    case "enlace":
      break;

    case "relleno":
      let relleno = document.createElement("textarea");
      relleno.setAttribute("rows", "5");
      relleno.setAttribute("cols", "20");
      designLayer.append(relleno);
      actualizarTabla("relleno");
      relleno.focus();
      break;
  }
};

const actualizarTabla = (elemento) => {
  switch (elemento) {
    case "caja":
      let listaCaja = crearElemento("lista");
      infoTableCaja.append(listaCaja);
      break;
    case "enlace":
      let listaEnlace = crearElemento("lista");
      infoTableEnlace.append(listaEnlace);
      break;
    case "relleno":
      let listaRelleno = crearElemento("lista");
      infoTableRelleno.append(listaRelleno);
      break;
  }
};


function addListeners(el) {
  el.addEventListener('mouseup', mouseUp);
  el.addEventListener('mousedown', mouseDown);
}

function mouseDown(e) {
  const el = e.target;
  el.style.position = 'absolute';
  const offset = arrayCaja.find(c => c.id === el.id);
  offset.y = el.offsetTop - e.clientY;
  offset.x = el.offsetLeft - e.clientX;
  el.addEventListener('mousemove', divMove);
}

function mouseUp(e) {
  e.target.removeEventListener('mousemove', divMove);
}

function divMove(e) {
  const el = e.target;
  const offset = arrayCaja.find(c => c.id === el.id);
  el.style.top = `${offset.y + e.clientY}px`;
  el.style.left = `${offset.x + e.clientX}px`;
}