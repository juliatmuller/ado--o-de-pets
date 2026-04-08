// Lista de CPFs já cadastrados (simulação)
const cpfsCadastrados = ["12345678900", "11122233344", "99988877766"];

function validarFormulario() {

    // Pegando valores
    let nome = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value.trim();
    let telefone = document.getElementById("telefone").value.trim();
    let cpf = document.getElementById("cpf").value.trim();
    let idade = parseInt(document.getElementById("idade").value);
    let cidade = document.getElementById("cidade").value.trim();
    let moradia = document.getElementById("moradia").value;
    let quintal = document.getElementById("quintal").value;
    let quintalSeguro = document.getElementById("quintalSeguro")?.value;
    let permiteAnimais = document.getElementById("permiteAnimais")?.value;
    let tevePet = document.getElementById("tevePet").value;
    let horas = parseFloat(document.getElementById("horas").value);
    let motivo = document.getElementById("motivo").value.trim();
    let termo = document.getElementById("termo").checked;
    let financeiro = document.getElementById("financeiro").value;
    let decisao = document.getElementById("decisao").value;

    // ===== VALIDAÇÕES TÉCNICAS =====

    if (nome.length < 3) {
        alert("Nome deve ter pelo menos 3 caracteres");
        return false;
    }

    if (!email.includes("@")) {
        alert("Email inválido");
        return false;
    }

    if (telefone.length < 8 || isNaN(telefone)) {
        alert("Telefone inválido");
        return false;
    }

    if (cpf === "") {
        alert("CPF é obrigatório");
        return false;
    }

    if (cpfsCadastrados.includes(cpf)) {
        alert("CPF já cadastrado!");
        return false;
    }

    if (idade < 18) {
        alert("Você precisa ter 18 anos ou mais para adotar");
        return false;
    }

    if (cidade === "") {
        alert("Cidade é obrigatória");
        return false;
    }

    if (moradia === "") {
        alert("Tipo de moradia é obrigatório");
        return false;
    }

    if (quintal === "") {
        alert("Informe sobre o quintal");
        return false;
    }

    if (tevePet === "") {
        alert("Informe se já teve pet");
        return false;
    }

    if (isNaN(horas)) {
        alert("Informe um número válido de horas");
        return false;
    }

    if (motivo.length < 10) {
        alert("Motivo deve ter pelo menos 10 caracteres");
        return false;
    }

    if (!termo) {
        alert("Você deve aceitar o termo");
        return false;
    }

    // ===== REGRAS DE NEGÓCIO =====

    // Moradia
    if (moradia === "apartamento" && !permiteAnimais) {
        alert("Informe se o apartamento permite animais");
        return false;
    }

    if (moradia === "casa" && !quintalSeguro) {
        alert("Informe se o quintal é seguro");
        return false;
    }

    // Coerência
    if (moradia === "apartamento" && quintal === "sim") {
        alert("Apartamento não pode ter quintal");
        return false;
    }

    // Horas sozinho
    if (horas > 8) {
        let confirmacao = confirm("O animal ficará muito tempo sozinho. Deseja continuar?");
        if (!confirmacao) return false;
    }

    // Nunca teve pet
    if (tevePet === "nao") {
        alert("A ONG poderá acompanhar sua adaptação com o pet");
    }

    // Motivo genérico
    let motivosInvalidos = ["quero", "porque sim", "sim"];
    if (motivosInvalidos.includes(motivo.toLowerCase())) {
        alert("Motivo muito genérico. Seja mais específico");
        return false;
    }

    // Condição financeira
    if (financeiro === "nao") {
        alert("Sem condições financeiras para manter o pet");
        return false;
    }

    // Decisão impulsiva
    if (decisao === "hoje") {
        alert("Atenção: adoção por impulso pode não ser ideal");
    }

    // SUCESSO
    alert("Formulário enviado com sucesso!");
    return true;
}