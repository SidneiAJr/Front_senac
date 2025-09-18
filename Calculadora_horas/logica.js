function calcularhoras() {
            const horaEntrada = document.getElementById("horaEntrada").value;
            const horaIntervalo = document.getElementById("horaIntervalo").value;
            const horaSaida = document.getElementById("horaSaida").value;
            const horatotal = parseFloat(document.getElementById("horatotal").value); // Convertendo para número

            // Verifica se todas as horas foram preenchidas
            if (!horaEntrada || !horaIntervalo || !horaSaida || isNaN(horatotal)) {
                document.getElementById("res").innerHTML = "Por favor, preencha todas as horas e a carga horária total.";
                return;
            }

            // Cria objetos Date com as horas (data arbitrária de 1970)
            const entrada = new Date(`1970-01-01T${horaEntrada}:00`);
            const intervalo = new Date(`1970-01-01T${horaIntervalo}:00`);
            const saida = new Date(`1970-01-01T${horaSaida}:00`);

            // Calcula as horas antes do intervalo (de entrada até o início do intervalo)
            const horasAntesIntervaloMs = intervalo - entrada;

            // Calcula as horas após o intervalo (de fim do intervalo até a hora de saída)
            const horasDepoisIntervaloMs = saida - intervalo;

            // Converte as diferenças de milissegundos para horas
            const horasAntesIntervalo = horasAntesIntervaloMs / (1000 * 60 * 60); // ms para horas
            const horasDepoisIntervalo = horasDepoisIntervaloMs / (1000 * 60 * 60); // ms para horas
            
            // Total de horas trabalhadas (antes e depois do intervalo)
            const totalHoras = horasAntesIntervalo + horasDepoisIntervalo;

            // Subtrai 1 hora para o intervalo
            const Totalhoras2 = totalHoras - 1;

            // Cálculo de horas extras (considerando 8 horas como carga horária normal)
            const horasExtras = Totalhoras2 - horatotal;

            // Exibe o resultado com 2 casas decimais
            document.getElementById("res").innerHTML = `
                Total de Horas Trabalhadas: ${Totalhoras2.toFixed(2)} horas<br>
                Total de Horas Extras: ${horasExtras.toFixed(2)} horas
            `;
        }
