const linkAPI = "https://pokeapi.co/api/v2/pokemon"

async function ProcurarPokemom() {
    const nomePokemom = document.getElementById("NumeroPokemom").value;
    const idPokemom = document.getElementById("nomePokemom").value;
    const Tipo = document.getElementById("tipoPokemom").value;

    const busca = nomePokemom || idPokemom || Tipo

    try{
       
        if(!busca){
            alert("Digite o Nome Numero ou Tipo")
        }

        const resposta = await fetch(`${linkAPI}/${busca}`);
        if(!resposta.ok){
            alert("Pokemom Não Encontrado")
        }

        const dados = await resposta.json()

        const tipos = dados.types.map(t=>t.type.name).join(" ,")

        const imagem = dados.sprites.front_default;

        const habilidade = dados.abilities.map(h=>h.ability.name).join(",");

        const formas = dados.forms.map(f=>f.name).join(",");

        let saida = document.getElementById("img")

       saida.innerHTML = 
       `
         <img src="${imagem}" alt="${dados.name}"><br>
          ID:${dados.id}<br>
          Nome Pokemom:${dados.name.toUpperCase()}<br>
          Tipo de Pokem:${tipos}<br>
          Altura:${dados.height/10} KG<br>
          Peso:${dados.weight/10} M<br>
          Habilidades:${habilidade}<br>
          Formas: ${formas}<br>

       `
    }catch(erro){
            alert("Pokémon não encontrado ⚠️")
        console.error(erro)
    }

}
