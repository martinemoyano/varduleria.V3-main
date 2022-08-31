document.getElementById('txtNombreUsuario').value
document.getElementById('txtClaveUsuario').value
document.getElementById('txtClaveUsuario2').value
document.getElementById('txtEmailUsuario').value

class Subscriptor {
    constructor(obj) {
        this.nombre = obj.nombre;
        this.clave = obj.clave;
        this.clave2 = obj.clave2;
        this.email = obj.email;
    }
}


let ArrayDeSubscriptores = [];






// VerificaryCargar();
let botonRegistrar = document.getElementById("btnRegistrar")
botonRegistrar.onclick = () => {

    const nombreIngresado = document.getElementById('txtNombreUsuario');
    const claveIngresada = document.getElementById('txtClaveUsuario').value;
    const claveIngresada2 = document.getElementById('txtClaveUsuario2').value;
    const emailIngresado = document.getElementById('txtEmailUsuario').value;


    /* validaciones */
    verificarIngresos()

    function verificarIngresos() {
        // verifica nombre  que no este vacio o ya en el array.
        if (nombreIngresado.value === "") {
            setErrorFor(nombreIngresado, "debe incluir un usuario");

        } else {
            setSuccessFor(nombreIngresado)

        }

        function setErrorFor(input, message) {

            const formControl = input.parentElement;
            formControl.className = 'form-control error'

            const small = formControl.querySelector('small');
            small.innerText = message;

        }

        function setSuccessFor(input) {
            const formControl = input.parentElement;
            formControl.className = 'form-control success';


            verificarClave()
        }
        // verifica clave
        function verificarClave() {
            let mensaje = document.getElementById('mensaje');
            if (claveIngresada.length != 0) {

                if (claveIngresada == claveIngresada2) {
                    mensaje.textContent = "contraseñas coinciden";
                    verificarEmail()
                    //    cargarUsuario()

                } else {
                    mensaje.textContent = "las contraseñas no coinciden";
                }
            } else {
                mensaje.textContent = "debe ingresar una contraseña";
            }
        }
        

    }
    // verificar correo
    function verificarEmail() {
        let mensaje = document.getElementById('mensajeCorreo');

        if (emailIngresado.length != 0) {
            cargarUsuario()

        } else {
            mensaje.textContent = "debe ingresar un correo electronico";
        }
    }






    // fin validaciones
    function cargarUsuario() {

        let objGenerico = {
            nombre: nombreIngresado.value,
            clave: claveIngresada,
            email: emailIngresado,
        }
        ArrayDeSubscriptores.push(new Subscriptor(objGenerico));

        Guardar()
    }

}



function Guardar() {
    localStorage.setItem("ListadoSubscriptores", JSON.stringify(ArrayDeSubscriptores));
    VerificaryCargar()
     
Swal.fire('GRACIAS POR REGISTRARTE')
}



function VerificaryCargar() {
    let arrayAuxiliar = JSON.parse(localStorage.getItem("ListadoSubscriptores"));

    if (arrayAuxiliar) {
        for (elemento of arrayAuxiliar) {
            ArrayDeSubscriptores.push(new Subscriptor(elemento));

        }
        let largo = arrayAuxiliar.length;
        console.log("tiene " + largo + " elementos");
    } else {
        console.log("no hay registros");
    }
}

// verificacion manda a otra pagina
// if (usuarioRetornado.clave == pass.value) {window.location = "turnero.html";} else {parrafo.innerHTML = "Los datos ingresados son incorrectos"}