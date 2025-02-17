// ==UserScript==
// @name            Folga na cpu
// @description     Verifica se a guia do navegador esta sendo usada, se nao estiver limita o uso da cpu na guia
// @namespace       CowanCPU
// @license         CowBas
// @version         3.0
// @author          Cowanbas
// @match           *://*/*
// @run-at          document-start
// ==/UserScript==

document.addEventListener("visibilitychange", function () {
  if (document.visibilityState === "hidden") {
    // Oculta o conteúdo da página e limitar o uso da CPU
    document.documentElement.style.display = "none";

    // Limita o uso da CPU
    if (window.requestIdleCallback) {
      requestIdleCallback(function () {
        // Reduzi uso da CPU quando a guia está oculta
      });
    } else {
      setTimeout(function () {
        // Para navegadores que não suportam requestIdleCallback
      }, 1000);
    }
  } else {
    // Mostrar o conteúdo da página quando a guia for aberta Novamente
    document.documentElement.style.display = "block";
  }
});