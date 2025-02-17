// ==UserScript==
// @name           Youtube Sempre Rodando
// @description    Remove a mensagem "Continue assistindo" no YouTube e mantenha os vídeos reproduzindo
// @namespace      CowanNEVERSTOP
// @license        CowBas
// @version        1.0
// @author         Cowanbas
// @match          *://*/*
// @run-at         document-start
// ==/UserScript==

(function () {
  'use strict';

  // Função para remover a mensagem "Continue assistindo"
  function removeContinueWatching() {
    const continueButton = document.querySelector('button.ytp-continue-playback-button');
    if (continueButton) {
      continueButton.click();
    }
  }

  // Define um intervalo para verificar a existência da mensagem a cada segundo
  setInterval(removeContinueWatching, 1000);
})();