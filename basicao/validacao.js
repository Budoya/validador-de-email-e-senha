function validarEmail(email) {
    // Expressão regular para validar um endereço de e-mail
    const regex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
  
    // Verifica se o e-mail atende aos critérios da expressão regular
    try {
      return regex.test(email);
    } catch (error) {
      // Se o e-mail for inválido, o erro será capturado
      return false;
    }
  }
  
  function validarSenha(senha) {
    // Expressão regular para validar uma senha
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
  
    // Verifica se a senha atende aos critérios da expressão regular
    try {
      return regex.test(senha);
    } catch (error) {
      // Se a senha for inválida, o erro será capturado
      return false;
    }
  }
  
  // Valida o e-mail
  document.getElementById("email").addEventListener("change", () => {
    const valor = document.getElementById("email").value;
    const valido = validarEmail(valor);
  
    // Se o e-mail for inválido, a mensagem de erro será exibida
    if (!valido) {
      document.getElementById("email").setCustomValidity("E-mail inválido");
    } else {
      document.getElementById("email").setCustomValidity("");
    }
  });
  
  // Valida a senha
  document.getElementById("senha").addEventListener("change", () => {
    const valor = document.getElementById("senha").value;
    const valido = validarSenha(valor);
  
    // Se a senha for inválida, a mensagem de erro será exibida
    if (!valido) {
      document.getElementById("senha").setCustomValidity("Senha inválida");
    } else {
      document.getElementById("senha").setCustomValidity("");
    }
  });
  