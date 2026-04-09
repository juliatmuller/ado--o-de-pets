document.getElementById("formAdocao").addEventListener("submit", function (e) {
    e.preventDefault();

    let nome = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value.trim();
    let cpf = document.getElementById("cpf").value.trim();
    let telefone = document.getElementById("telefone").value.trim();
    let idade = parseInt(document.getElementById("idade").value);
    let cidade = document.getElementById("cidade").value.trim();
    let moradia = document.getElementById("moradia").value;
    let quintal = document.querySelector('input[name="quintal"]:checked');
    let pet = document.querySelector('input[name="pet"]:checked');
    let horas = parseFloat(document.getElementById("horas").value);
    let motivo = document.getElementById("mensagem").value.trim().toLowerCase();
    let termo = document.querySelector('input[type="checkbox"]').checked;


    let cpfsExistentes = ["12345678900", "99999999999"];

   

    if (nome.length < 3) return alert("Nome inválido (mínimo 3 caracteres)");
    if (!email.includes("@")) return alert("Email inválido");
    if (telefone.length < 8 || isNaN(telefone)) return alert("Telefone inválido");
    if (cpf === "") return alert("CPF obrigatório");
    if (cpfsExistentes.includes(cpf)) return alert("CPF já cadastrado!");
    if (isNaN(idade) || idade < 18) return alert("Obrigatório ter 18 anos ou mais");
    if (cidade === "") return alert("Cidade obrigatória");
    if (moradia === "") return alert("Selecione o tipo de moradia");
    if (!quintal) return alert("Informe se possui quintal");
    if (!pet) return alert("Informe se já teve pet");
    if (isNaN(horas) || horas < 0) return alert("Horas inválidas");
    if (motivo.length < 10) return alert("Motivo muito curto");
    if (!termo) return alert("Você deve aceitar o termo");


    if (moradia === "apartamento" && quintal.value === "sim") {
        return alert("Apartamento não pode ter quintal");
    }

    if (moradia === "casa" && quintal.value === "nao") {
        return alert("Casa deve ter quintal adequado/seguro");
    }

    if (horas > 8) {
        alert("Atenção: o animal ficará muito tempo sozinho!");
    }

    if (pet.value === "nao") {
        alert("A ONG poderá acompanhar sua adaptação");
    }

    let motivosInvalidos = ["quero", "porque sim", "porque eu quero"];
    if (motivosInvalidos.includes(motivo)) {
        return alert("Motivo inválido, seja mais específico");
    }


    document.getElementById("resultado").innerHTML =
        "✅ Cadastro realizado com sucesso!<br><br>" +
        "<strong>Nome:</strong> " + nome + "<br>" +
        "<strong>Email:</strong> " + email + "<br>" +
        "<strong>Telefone:</strong> " + telefone + "<br>" +
        "<strong>Cidade:</strong> " + cidade + "<br>" +
        "<strong>Moradia:</strong> " + moradia + "<br>" +
        "<strong>Horas sozinho:</strong> " + horas + "h";
});