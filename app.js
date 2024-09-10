function pesquisar() {
    // Busca o elemento HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    // console.log(section); // Loga o elemento no console para verificação
    let campoPesquisa = document.getElementById
    ("campo-pesquisa").value

    console.log(campoPesquisa);

    //  se campoPesquisa for uma string sem nada
    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado . Você precisa digitar o nome do produto ou uma característica dele </p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada dado da pesquisa e constrói o HTML dos resultados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        // se titulo incluindes campoPesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // Cria um novo elemnto HTML para cada resultado
      resultados += `
      <div class="item-resultado">
        <h2>
          <a href="#" target="_blank">${dado.titulo}</a>
        </h2>
        <p class="descricao-meta">${dado.descricao}</p>
        <a href=${dado.link} target="_blank">Mais informações</a>
      </div>
    `;

        }
      
    }

    if(!resultados) { 
        resultados = "<p>Nada foi encontrado</p>"
    }
  
    // Insere os resultados construídos no elemento HTML
    section.innerHTML = resultados;
  }

