document.getElementById("formAdocao").addEventListener("submit", function (e) {
    e.preventDefault();

    // PEGAR VALORES
    let nome = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value.trim();
    let telefone = document.getElementById("telefone").value.trim();
    let cpf = document.getElementById("cpf").value.trim();
    let idade = document.getElementById("idade").value;
    let cidade = document.getElementById("cidade").value.trim();
    let moradia = document.getElementById("moradia").value;
    let quintal = document.querySelector('input[name="quintal"]:checked');
    let pet = document.querySelector('input[name="pet"]:checked');
    let horas = document.getElementById("horas").value;
    let motivo = document.getElementById("mensagem").value.trim();
    let termo = document.querySelector('input[type="checkbox"]').checked;

    let cpfsCadastrados = ["12345678900", "11111111111"];


    if (nome.length < 3) return alert("Nome deve ter no mínimo 3 caracteres");

    if (!email.includes("@")) return alert("Email inválido");

    if (telefone.length < 8) return alert("Telefone deve ter pelo menos 8 dígitos");

    if (isNaN(telefone)) return alert("Telefone deve conter apenas números");

    if (!cpf) return alert("CPF é obrigatório");

    if (cpfsCadastrados.includes(cpf)) return alert("CPF já cadastrado");

    if (idade < 18) return alert("Você precisa ter 18 anos ou mais");

    if (!cidade) return alert("Cidade é obrigatória");

    if (!moradia) return alert("Selecione o tipo de moradia");

    if (!quintal) return alert("Informe se possui quintal");

    if (!pet) return alert("Informe se já teve pet");

    if (!horas) return alert("Informe quantas horas o animal ficará sozinho");

    if (motivo.length < 10) return alert("Motivo deve ter pelo menos 10 caracteres");

    if (!termo) return alert("Você deve aceitar os termos");


    if (moradia === "apartamento" && quintal.value === "sim") {
        return alert("Quem mora em apartamento não pode ter quintal");
    }


    if (horas > 8) {
        let justificativa = prompt("O animal ficará muito tempo sozinho. Justifique:");
        if (!justificativa || justificativa.length < 5) {
            return alert("Justificativa obrigatória");
        }
    }

    if (pet.value === "nao") {
        alert("A ONG poderá acompanhar sua adaptação com o pet.");
    }


    let motivosInvalidos = ["quero", "porque sim", "sim"];
    if (motivosInvalidos.includes(motivo.toLowerCase())) {
        return alert("Motivo muito genérico. Explique melhor.");
    }


    document.getElementById("resultado").innerHTML =
        "✅ Cadastro realizado com sucesso!<br>" +
        "Nome: " + nome + "<br>" +
        "Cidade: " + cidade;
});