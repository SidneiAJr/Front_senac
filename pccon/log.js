function calc() {
    const w = parseFloat(document.getElementById("m").value); // CPU
    const v = parseFloat(document.getElementById("v").value); // GPU
    const s = parseFloat(document.getElementById("s").value); // RAM
    const hd = parseFloat(document.getElementById("hd").value); // HD
    const p = parseFloat(document.getElementById("p").value); // Outros
    const fonte = parseFloat(document.getElementById("fs").value); // Fonte

    const calctotal = w + v + s + hd + p;
    const calcpico = calctotal * 0.30;
    const calc = fonte - calctotal;

    if (!isNaN(w) && !isNaN(v) && !isNaN(s) && !isNaN(hd) && !isNaN(p) && !isNaN(fonte)) {
        document.getElementById("res").innerHTML = `O Total de consumo em W: ${calctotal.toFixed(2)}`;
        document.getElementById("res2").innerHTML = `Calculo com potencia de pico de 30%: ${calcpico.toFixed(2)}`;
        document.getElementById("res3").innerHTML = `A sobra de energia será W: ${calc.toFixed(2)}`;

        // Gera o gráfico
        const ctx = document.getElementById('myChart').getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['CPU', 'GPU', 'RAM', 'HD', 'Outros'], // Componentes
                datasets: [{
                    label: 'Consumo de energia (W)',
                    data: [w, v, s, hd, p], // Valores de consumo
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.5)',
                        'rgba(54, 162, 235, 0.5)',
                        'rgba(255, 206, 86, 0.5)',
                        'rgba(75, 192, 192, 0.5)',
                        'rgba(153, 102, 255, 0.5)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true // O eixo Y começa do zero
                    }
                }
            }
        });
    } else {
        document.getElementById("res").innerHTML = `Erro: Favor inserir valores válidos.`;
    }
}
