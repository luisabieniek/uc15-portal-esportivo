
"use strict";

(function ($) {
    $(function () {
        const $botao = $("#botaoSobre");
        const $conteudo = $("#sobrePortal");

        if (!$botao.length || !$conteudo.length) {
            console.warn("Elementos da interação T08 não encontrados.");
            return;
        }

        $botao
            .off("click.t08")
            .on("click.t08", function () {
                const visivel = $conteudo.is(":visible");

                $conteudo.toggle(!visivel);
                $(this)
                    .text(visivel ? "Mostrar sobre o portal" : "Ocultar sobre o portal")
                    .attr("aria-expanded", String(!visivel));
            });
    });
})(jQuery);
