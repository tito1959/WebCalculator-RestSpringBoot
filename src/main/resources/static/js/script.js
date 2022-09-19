window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    const main = document.querySelector(".container");
    const button = document.querySelector("#calculadora");

    // escucha de evento
    addEventListener("click", (event) => {
        if (event.target === button) {
            console.log("Container clickeado!");

            const body = `<h1 class="text-center">Mi Calculadora</h1>
            <form action="api/email" class="col-sm-12 col-md-6 mx-auto py-5" method="get" id="form">
                <div class = "row bg-light">

                    <div class="mb-3">
                        <label for="num1" class="form-label">Numero 1</label>
                        <input type="number" class="form-control" id="num1" aria-describedby="numHelp" name="num1" />
                    </div>

                    <div class="mb-3">
                        <label for="num2" class="form-label">Numero 2</label>
                        <input type="number" class="form-control" id="num2" aria-describedby="numHelp" name="num2" />
                    </div>

                    <div class="mb-3">
                        <label for="select" class="form-label">Operador</label>
                        <select id="select" class="form-select" name="operation">
                            <option value="suma">Suma</option>
                            <option value="resta">Resta</option>
                            <option value="mult">Multiplicación</option>
                            <option value="div">División</option>
                        </select>
                    </div>

                    <div class="d-grid mx-auto col-6 py-2 gap-2">
                        <button type="button" class="btn btn-primary" id="calculator">Calcular</button>
                        <button type="submit" class="btn btn-secondary" id="send">Enviar</button>
                    </div>

                </div>
            </form>
            <div id="result" class="bg-primary text-center text-white h1 rounded">
            </div>
            `;

            main.innerHTML = body;
        }

        const submit = document.getElementById("calculator");
        if (event.target !== submit) return;
        if (num1 === "" || num2 === "") return;
        requestFetch();
    });

    addEventListener("submit", (event) => {

        event.preventDefault();
        const submit2 = document.getElementById("form");
        const num1 = document.querySelector("#num1").value;
        const num2 = document.querySelector("#num2").value;

        if (event.target !== submit2) return;
        if (num1 === "" || num2 === "") return;

        const option = document.querySelector("#select").value;

        // realizar operaciones matematicas:
        let resultado = 0;

        switch (option) {
            case 'suma':
                resultado = parseInt(num1) + parseInt(num2);
                break;
            case 'resta':
                resultado = num1 - num2;
                break;
            case 'mult':
                resultado = num1 * num2;
                break;
            case 'div':
                resultado = num1 / num2;
                break;

            default:
                break;
        }
        /* document.querySelector(".container").innerHTML = `
                 <div class="row">
                     <div class="bg-primary text-white p-3 h1">
                         Resultado: ${resultado}
                     </div>
                 </div>
         `;
        */
        resultHtml(resultado);
    });

    const requestFetch = () => {
        const num1 = document.querySelector("#num1").value;
        const num2 = document.querySelector("#num2").value;
        const option = document.querySelector("#select").value;

        // Fetch to api/email
        fetch(`http://localhost:8090/api/email?num1=${num1}&num2=${num2}&operation=${option}`)
            .then((response) => response.text())
            .then((data) => resultHtml(data));
    }

    const resultHtml = (resultado) => {
        document.getElementById("result").innerHTML = `Resultado: ${resultado}`;
    }
});