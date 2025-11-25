/*alert("Bienvenido al banco $")
let nombre = prompt("Por favor, ingrese su Email"); 
let password = prompt("Por favor, ingrese su contraseña");

if (nombre === "admin@admin.com" && password === "12345") {
    alert("Inicio de sesión exitoso. ¡Bienvenido, administrador!");
} else {
    alert("Credenciales incorrectas. Acceso denegado.");
} 
*/  

function loguear()
{
    let user=document.getElementById("usuario").value
    let userpass=document.getElementById("clave").value

    if (user=="admin" && userpass=="12345")

    {
        window.location.href="menu.html"
    }
    else
    {
        alert("Usuario o contraseña incorrecta")
    }
        
    
}

document.addEventListener("DOMContentLoaded", () => {
    const btnDepositar = document.getElementById("depositar");

    if (btnDepositar) {
        btnDepositar.addEventListener("click", () => {
            alert("Serás redirigido a Depósito");
        });
    }
});


document.addEventListener("DOMContentLoaded", () => {
    const btnDepositar = document.getElementById("dinero");

    if (btnDepositar) {
        btnDepositar.addEventListener("click", () => {
            alert("Serás redirigido a Enviar Dinero");
        });
    }
});


document.addEventListener("DOMContentLoaded", () => {
    const btnDepositar = document.getElementById("ultimos movimientos");

    if (btnDepositar) {
        btnDepositar.addEventListener("click", () => {
            alert("Serás redirigido a Ultimos Movimientos");
        });
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const btnDepositar = document.getElementById("depositando");

    if (btnDepositar) {
        btnDepositar.addEventListener("click", () => {
            alert("Depositaras el monto de dinero digitado");
        });
    }
});




$(document).ready(function() {
  var balance = 0;

  function updateBalance() {
    $('#balance').text(balance.toFixed(2));
  }

  $('#depositBtn').click(function() {
    var amount = parseFloat($('#amount').val());
    if (!isNaN(amount) && amount > 0) {
      balance += amount;
      updateBalance();
      $('#amount').val('');
      alert('Deposito realizado!');
    } else {
      alert('Monto invalido. Por favor ingrese un número positivo.');
    }
  });

  $('#withdrawBtn').click(function() {
    var amount = parseFloat($('#amount').val());
    if (!isNaN(amount) && amount > 0 && amount <= balance) {
      balance -= amount;
      updateBalance();
      $('#amount').val('');
      alert('Retiro exitoso!');
    } else {
      alert('Cantidad no válida. Ingrese un número válido dentro de su saldo.');
    }
  });
});

