const grupPeliculas = document.getElementById("grilla_principal");
const botonAnterior = document.getElementsByClassName("boton_anterior");
const botonSiguiente = document.getElementsByClassName("boton_siguiente");

let pagina = 1;
function antes (){
  if (pagina >1) {
    pagina -= 1;
    traerPeliculas();}}
  
function despues (){
  if (pagina <=1000){
    pagina +=1;
    traerPeliculas();
  }
}

const traerPeliculas = async () => {
  try {
    const respuesta = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=191528030c357419329af1198edbcb24&lenguage=es-Mx&page=${pagina}`);
    console.log(respuesta);

    if (respuesta.status === 200);
    const datos = await respuesta.json();
    console.log(datos);

    let peliculas = [];
    datos.results.forEach(pelicula => {
      peliculas +=
        `<div id="pelicula" class="card" style="width: 20vw;height: 28vw">
         <img src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}" class="card-img-top" alt="peliculas">
            
        </div>`
    });
    grupPeliculas.innerHTML = peliculas;
  }
  catch (error) {
    console.log(error.message);
  }
}

traerPeliculas();
