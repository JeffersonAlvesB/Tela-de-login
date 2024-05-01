const formulario = document.querySelector("form");
const email = document.getElementById("email");
const senha = document.getElementById("senha");

formulario.addEventListener("submit", (event) => {
  event.preventDefault();

  if (email.value === "" || !emailValido(email.value)) {
    alert("Preencha o seu email");
    return;
  }

  if (!senhaValida(senha.value, 8)) {
    alert("A senha precisa ter no mínimo 8 dígitos");
    return;
  }

  alert("Seu login foi concluido com sucesso");

  formulario.submit();
});

//Fução validar email
function emailValido(emails) {
  const emailRegex = new RegExp(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );

  if (emailRegex.test(emails)) {
    return true;
  } else {
    return false;
  }
}

//Função validar senhas
function senhaValida(senhas, minDigits) {
  if (senhas.length >= minDigits) {
    return true;
  } else {
    return false;
  }
}
