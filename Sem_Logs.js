// ==UserScript==
// @name             Sem Logs
// @description      Remove os logs do navegador
// @namespace        CowanLOGS
// @license          GPL-3.0
// @version          1.0
// @author           Cowanbas
// @match            *://*/*
// @run-at           document-start
// ==/UserScript==

(function () {
  'use strict';

  const noop = function () { }; // Alterar as funções dos logs para "Noop"

  // Adiciona a função "Noop" No console
  console.log = noop;
  console.warn = noop;
  console.error = noop;
  console.info = noop;
  console.debug = noop;
  console.trace = noop;

  // Altera as propriedades do console com a função noop
  for (let method in console) {
    if (typeof console[method] === 'function') {
      console[method] = noop;
    }
  }

})();