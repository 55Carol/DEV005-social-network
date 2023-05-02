// Define una función "register" que toma un argumento "findRouteAndNavigate"
const register = (findRouteAndNavigate) => {
    // Crea un nuevo elemento <section> y guárdalo en la variable "container"
    const container = document.createElement("section");
    // Agrega la clase CSS "three" al elemento "container"
    container.classList.add("three");
    // Define una cadena de código HTML con marcadores de posición para datos dinámicos y guárdalo en la variable "viewRegister"
    const viewRegister = ` 
    <div>
    <img src="./img/logo.png" alt="logo SportX" class="logoThree"/>   
    </div>
    <div class="registrationForm">
    <div>
    <label>Nombre</label>
    <input id="userName" type="text" placeholder="Nombre  apellido">
    </div>
    <div>
    <label>Usuario</label>
    <input id="userId" type="text" placeholder="Nombre de usuario">
    </div>
    <div>
    <label>Correo electrónico</label>
    <input id="userMail" type="text" placeholder="ejemploa@gmail.com">
    </div>
    <div>
    <label>Contraseña</label>
    <input id="userPassword " type="password" placeholder="***********">
    </div>
    <div>
    </div>
    <div class="botonesRegistro">
        <div class="registerMailBtn">
            <input  id='registerMailBtn' type="submit" value="Registrarse">
        </div>
        <div class="registerMailGoogleBtn">
            <button id="registerMailGoogleBtn">
            <img src="./img/google.png" alt="google" class="imgGoogle"/>
                Registrarse con Google
            </button>
        </div>
        <div class="volverInicioSesion">
            <span>¿Ya tienes cuenta?</span>
            <a id="loginBtn">Iniciar Sesión</a>
        </div>
    </div>
      `;
    // Rellena el elemento "container" con el código HTML almacenado en "viewRegister"
    container.innerHTML = viewRegister;
    // Encuentra el elemento con el ID "register" dentro del elemento "container" y guárdalo en la variable "registerB"
    const registerBtn = container.querySelector("#registerMailBtn");
    // Agrega un event listener de clic al elemento "loginBtn", que ejecuta una función cuando se hace clic
    registerBtn.addEventListener("click", () => {
        // La función llama a la función "findRouteAndNavigate" con el argumento "/register"
        findRouteAndNavigate("/register");
    });
    // Devuelve el elemento "container"
    return container;
};

// Exporta la función "register" para que se pueda importar y utilizar en otros archivos
export { register };