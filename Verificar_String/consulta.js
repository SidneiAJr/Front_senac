function verfica() {
    const info = document.getElementById("info").value.trim();

    if (info === "") {
        document.getElementById("tipo").innerHTML = "";
        document.getElementById("tamanho").innerHTML = "Insira um valor";
    } else {
        // Detecta se é um número válido ou não
        const tipo = isNaN(info) ? "string" : "number";
        const tamanho = info.length;

        document.getElementById("tipo").innerHTML = `Tipo de Variável: ${tipo}`;
        document.getElementById("tamanho").innerHTML = `Tamanho da Variável: ${tamanho}`;
    }
}
