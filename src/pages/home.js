import { homeLogic } from "../lib/index.js";
// Declara una constante llamada "home" que es igual a una función flecha sin parámetros
const home = () => {
    // Crea un elemento HTML <section> y lo guarda en una constante llamada "container"
    const container = document.createElement("section");
    // Añade la clase al elemento
    container.classList.add("four");
    // Declara una constante llamada "viewHome" que es igual a una cadena de texto con un mensaje de no disponible
    const viewHome = `
    <div class="signOff">
        <button type="submit" id="signOffBtn">
        Cerrar Sesión 
        <img src="../img/iconSignOut.svg" id="iconSignOut"/>
        </button>
    </div>
    <figure>
        <img src="./img/logoHome.svg" alt="logo SportX" />
    </figure>
    <p id="userName"></p>
    <div>
        <textarea type="text" placeholder="¿En qué estás pensando ahora?" id="commentField" class="commentField" rows="3" cols="30" style="resize:none;" >
        </textarea> 
        <button id="publishBtn" class="publishBtn">Publicar</button>
    </div>
    <div class="fieldPublications">
        <section id="publications" class="publications"></section>
    </div>
    `;
    // Inserta el contenido HTML de "viewHome" dentro del elemento <section> creado antes
    container.innerHTML = viewHome;
    homeLogic(container);
    // Retorna el elemento <section> con el mensaje de no disponible
    return container;
};
// Exporta la función "home" para que pueda ser utilizada en otros módulos
export { home };
