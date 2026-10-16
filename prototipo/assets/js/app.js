
"use strict";

document.addEventListener("DOMContentLoaded", () => {
    console.log("app.js iniciou o DOMContentLoaded");
    const buscar = document.querySelector("#formBusca");
    const consulta = document.querySelector("#consulta");
    const limparBusca = document.querySelector("#limparBusca");
    const mensagemBusca = document.querySelector("#mensagemBusca");

    const listaFavoritos = document.querySelector("#listaFavoritos");
    const mensagemFavoritos = document.querySelector("#mensagemFavoritos");

    const formContato = document.querySelector("#formContato");
    const mensagemFormulario = document.querySelector("#mensagemFormulario");

    const itensGaleria = [
        ...document.querySelectorAll("[data-item-galeria]")
    ];
    const anterior = document.querySelector("#galeriaAnterior");
    const proxima = document.querySelector("#galeriaProxima");
    const estadoGaleria = document.querySelector("#estadoGaleria");
    const areaGaleria = document.querySelector("#areaGaleria");

    // Guarda os favoritos durante a sessão atual.
    const favoritos = new Map();
    let itemAtual = 0;

    // Busca: filtra notícias sem interpretar texto como HTML.
    function filtrarNoticias() {
        const termo = consulta.value.trim().toLocaleLowerCase("pt-BR");
        const noticias = document.querySelectorAll("#noticias article");
        let visiveis = 0;

        noticias.forEach((noticia) => {
            const corresponde = noticia.textContent
                .toLocaleLowerCase("pt-BR")
                .includes(termo);

            noticia.hidden = !corresponde;

            if (corresponde) visiveis++;
        });

        mensagemBusca.textContent = termo
            ? `${visiveis} notícia(s) encontrada(s).`
            : "Mostrando todas as notícias.";
    }

    buscar.addEventListener("submit", (evento) => {
        evento.preventDefault();
        filtrarNoticias();
    });

    consulta.addEventListener("input", filtrarNoticias);

    limparBusca.addEventListener("click", () => {
        consulta.value = "";
        filtrarNoticias();
        consulta.focus();
    });

    // Favoritos: delegação de eventos nos artigos e na lista.
    document.addEventListener("click", (evento) => {
        const botao = evento.target.closest("[data-favorito]");

        if (botao) {
            const artigo = botao.closest("article");
            if (!artigo) return;

            const titulo = artigo.querySelector("h3")?.textContent.trim();
            if (!titulo) return;

            if (favoritos.has(titulo)) {
                favoritos.delete(titulo);
            } else {
                favoritos.set(titulo, true);
            }

            atualizarFavoritos();
            return;
        }

        const remover = evento.target.closest("[data-remover-favorito]");

        if (remover) {
            favoritos.delete(remover.dataset.removerFavorito);
            atualizarFavoritos();
        }
    });

    function atualizarFavoritos() {
        // Atualiza todos os botões, inclusive os de itens que possam
        // ter sido adicionados posteriormente.
        document.querySelectorAll("[data-favorito]").forEach((botao) => {
            const artigo = botao.closest("article");
            const titulo = artigo?.querySelector("h3")?.textContent.trim();
            if (!titulo) return;

            const ativo = favoritos.has(titulo);
            botao.setAttribute("aria-pressed", String(ativo));
            botao.textContent = ativo ? "♥ Favoritado" : "♡ Favoritar";
            botao.setAttribute(
                "aria-label",
                `${ativo ? "Remover dos" : "Adicionar aos"} favoritos: ${titulo}`
            );
        });

        listaFavoritos.replaceChildren();

        favoritos.forEach((_, titulo) => {
            const item = document.createElement("li");
            const texto = document.createElement("span");
            const botao = document.createElement("button");

            texto.textContent = titulo;
            botao.type = "button";
            botao.textContent = "Remover";
            botao.dataset.removerFavorito = titulo;
            botao.setAttribute("aria-label", `Remover ${titulo} dos favoritos`);

            item.append(texto, " ", botao);
            listaFavoritos.append(item);
        });

        mensagemFavoritos.textContent = favoritos.size
            ? `${favoritos.size} item(ns) nos favoritos.`
            : "Nenhum favorito adicionado.";
    }

    // Formulário: validação nativa e mensagem acessível.
    formContato.addEventListener("submit", (evento) => {
        evento.preventDefault();

        if (!formContato.reportValidity()) {
            mensagemFormulario.textContent =
                "Confere os campos destacados antes de continuar.";
            return;
        }

        const nome = document.querySelector("#nome").value.trim();

        if (!nome) {
            document.querySelector("#nome").setCustomValidity(
                "Informe seu nome."
            );
            formContato.reportValidity();
            document.querySelector("#nome").setCustomValidity("");
            return;
        }

        mensagemFormulario.textContent =
            "Cadastro demonstrativo validado. Nenhum dado foi enviado ou armazenado.";
        formContato.reset();
    });

    // Galeria: botões e gesto com Pointer Events.
    function mostrarItem(indice) {
        if (!itensGaleria.length) return;

        itemAtual = (indice + itensGaleria.length) % itensGaleria.length;

        itensGaleria.forEach((item, i) => {
            item.hidden = i !== itemAtual;
        });

        estadoGaleria.textContent =
            `Item ${itemAtual + 1} de ${itensGaleria.length}`;
    }

    anterior.addEventListener("click", () => mostrarItem(itemAtual - 1));
    proxima.addEventListener("click", () => mostrarItem(itemAtual + 1));

    let inicioX = 0;
    let inicioY = 0;
    let ponteiroAtivo = null;

    areaGaleria.addEventListener("pointerdown", (evento) => {
        if (evento.pointerType === "mouse" && evento.button !== 0) return;

        inicioX = evento.clientX;
        inicioY = evento.clientY;
        ponteiroAtivo = evento.pointerId;
    });

    areaGaleria.addEventListener("pointerup", (evento) => {
        if (evento.pointerId !== ponteiroAtivo) return;
        ponteiroAtivo = null;

        const deslocamentoX = evento.clientX - inicioX;
        const deslocamentoY = evento.clientY - inicioY;

        // Só considera gesto horizontal significativo.
        if (
            Math.abs(deslocamentoX) < 50 ||
            Math.abs(deslocamentoX) < Math.abs(deslocamentoY) * 1.3
        ) return;

        mostrarItem(itemAtual + (deslocamentoX < 0 ? 1 : -1));
    });

    function cancelarGesto(evento) {
        if (evento.pointerId === ponteiroAtivo) {
            ponteiroAtivo = null;
        }
    }

    areaGaleria.addEventListener("pointercancel", cancelarGesto);
    areaGaleria.addEventListener("lostpointercapture", cancelarGesto);

    // Mensagem inicial e estado correto da galeria.
    atualizarFavoritos();
    if (itensGaleria.length) mostrarItem(0);

    // Remove os ouvintes deste módulo caso o ciclo de vida termine.
    function desmontar() {
        document.removeEventListener("click", atualizarFavoritos);
        buscar.removeEventListener("submit", filtrarNoticias);
        consulta.removeEventListener("input", filtrarNoticias);
        areaGaleria.removeEventListener("pointercancel", cancelarGesto);
        areaGaleria.removeEventListener("lostpointercapture", cancelarGesto);
    }

    // Disponibiliza limpeza explícita para páginas que desmontem o módulo.
    window.portalEsportivo = { desmontar };
    console.log("app.js chegou ao final");
});
