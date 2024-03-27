/* 01 Cria lente: */
/* 02 Inserir lente: */
/* 03 Calcula a razão entre o resultado DIV e a lente: */
/* 04 Configura as propriedades de fundo para o resultado DIV */
/* 05 Executa uma função quando alguém move o cursor sobre a imagem, ou a lente: */
/* 06 E também para telas sensíveis ao toque: */
/* 07 Impede quaisquer outras ações que possam ocorrer ao se mover sobre a imagem */
/* 08 Obtém as posições x e y do cursor: */
/* 09 Calcula a posição da lente: */
/* 10 Impede que a lente seja posicionada fora da imagem: */
/* 11 Configura a posição da lente: */
/* 12 Exibe o que a lente "vê": */
/* 13 Obtém as posições x e y da imagem: */
/* 14 Calcula as coordenadas x e y do cursor, relativas à imagem: */
/* 15 Considere qualquer rolagem de página: */

function imageZoom(imgID, resultID) {
    var img, lens, result, cx, cy;
    img = document.getElementById(imgID);
    result = document.getElementById(resultID);
    /* 01 */
    lens = document.createElement("DIV");
    lens.setAttribute("class", "img-zoom-lens");
    /* 02 */
    img.parentElement.insertBefore(lens, img);
    /* 03 */
    cx = result.offsetWidth / lens.offsetWidth;
    cy = result.offsetHeight / lens.offsetHeight;
    /* 04 */
    result.style.backgroundImage = "url('" + img.src + "')";
    result.style.backgroundSize = (img.width * cx) + "px " + (img.height * cy) + "px";
    /* 05 */
    lens.addEventListener("mousemove", moveLens);
    img.addEventListener("mousemove", moveLens);
    /* 06 */
    lens.addEventListener("touchmove", moveLens);
    img.addEventListener("touchmove", moveLens);
    function moveLens(e) {
        var pos, x, y;
        /* 07 */
        e.preventDefault();
        /* 08 */
        pos = getCursorPos(e);
        /* 09 */
        x = pos.x - (lens.offsetWidth / 2);
        y = pos.y - (lens.offsetHeight / 2);
        /* 10 */
        if (x > img.width - lens.offsetWidth) { x = img.width - lens.offsetWidth; }
        if (x < 0) { x = 0; }
        if (y > img.height - lens.offsetHeight) { y = img.height - lens.offsetHeight; }
        if (y < 0) { y = 0; }
        /* 11 */
        lens.style.left = x + "px";
        lens.style.top = y + "px";
        /* 12 */
        result.style.backgroundPosition = "-" + (x * cx) + "px -" + (y * cy) + "px";
    }
    function getCursorPos(e) {
        var a, x = 0, y = 0;
        e = e || window.event;
        /* 13 */
        a = img.getBoundingClientRect();
        /* 14 */
        x = e.pageX - a.left;
        y = e.pageY - a.top;
        /* 15 */
        x = x - window.pageXOffset;
        y = y - window.pageYOffset;
        return { x: x, y: y };
    }
}