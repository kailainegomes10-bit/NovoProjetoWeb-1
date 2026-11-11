(function () {
  'use strict';

  var CHAVE_FAVORITOS = 'univaga:favoritos';
  var CHAVE_ANUNCIOS = 'univaga:anuncios';

  var IMOVEIS = [
  {
    "id": "imovel-1",
    "foto": "foto/cozinha-apartamento.jpg",
    "alt": "Apartamento iluminado",
    "tipo": "Apartamento",
    "local": "Vila Imperador, Franca - SP",
    "titulo": "Apartamento com piso cerâmico e cozinha",
    "itens": [
      "2 quartos",
      "58 m²"
    ],
    "preco": 980,
    "precoTexto": "980"
  },
  {
    "id": "imovel-2",
    "foto": "foto/casa-fachada-2.jpg",
    "alt": "Casa térrea em rua tranquila",
    "tipo": "Casa",
    "local": "Centro, Franca - SP",
    "titulo": "Casa com corredor e portas de madeira",
    "itens": [
      "2 quartos",
      "70 m²"
    ],
    "preco": 1250,
    "precoTexto": "1.250"
  },
  {
    "id": "imovel-3",
    "foto": "foto/kitnet-1.jpg",
    "alt": "Kitnet mobiliada para estudante",
    "tipo": "Kitnet",
    "local": "Jardim Petráglia, Franca - SP",
    "titulo": "Kitnet mobiliada com bancada e ar-condicionado",
    "itens": [
      "1 quarto",
      "32 m²"
    ],
    "preco": 850,
    "precoTexto": "850"
  },
  {
    "id": "imovel-4",
    "foto": "foto/kitnet-2.jpg",
    "alt": "Kitnet com espaço de estudo",
    "tipo": "Kitnet",
    "local": "Centro, Franca - SP",
    "titulo": "Kitnet com mesa de estudos e cozinha equipada",
    "itens": [
      "1 quarto",
      "28 m²"
    ],
    "preco": 900,
    "precoTexto": "900"
  },
  {
    "id": "imovel-5",
    "foto": "foto/kitnet-3.jpg",
    "alt": "Kitnet compacta e organizada",
    "tipo": "Kitnet",
    "local": "Jardim Redentor, Franca - SP",
    "titulo": "Kitnet compacta com cama, armário e cozinha",
    "itens": [
      "1 quarto",
      "25 m²"
    ],
    "preco": 780,
    "precoTexto": "780"
  },
  {
    "id": "imovel-6",
    "foto": "foto/quarto-compartilhado-1.jpg",
    "alt": "Quarto compartilhado",
    "tipo": "Quarto",
    "local": "Centro, Franca - SP",
    "titulo": "Quarto com beliche e mesa de estudos",
    "itens": [
      "2 vagas",
      "mesa de estudos"
    ],
    "preco": 620,
    "precoTexto": "620"
  },
  {
    "id": "imovel-7",
    "foto": "foto/quarto-compartilhado-2.jpg",
    "alt": "Quarto compartilhado mobiliado",
    "tipo": "Quarto",
    "local": "Jardim Paulista, Franca - SP",
    "titulo": "Quarto para duas pessoas com piso de madeira",
    "itens": [
      "2 vagas",
      "piso de madeira"
    ],
    "preco": 590,
    "precoTexto": "590"
  },
  {
    "id": "imovel-8",
    "foto": "foto/quarto-compartilhado-3.jpg",
    "alt": "Quarto compartilhado perto da faculdade",
    "tipo": "Quarto",
    "local": "Vila Santa Cruz, Franca - SP",
    "titulo": "Quarto duplo com armário embutido",
    "itens": [
      "2 vagas",
      "escrivaninhas"
    ],
    "preco": 650,
    "precoTexto": "650"
  },
  {
    "id": "imovel-9",
    "foto": "foto/quarto-compartilhado-4.jpg",
    "alt": "República estudantil",
    "tipo": "República",
    "local": "Vila Santa Cruz, Franca - SP",
    "titulo": "República com quarto para dois e escrivaninhas",
    "itens": [
      "1 quarto",
      "18 m²"
    ],
    "preco": 540,
    "precoTexto": "540"
  },
  {
    "id": "imovel-10",
    "foto": "foto/casa-fachada-1.jpg",
    "alt": "Casa com quintal e garagem",
    "tipo": "Casa",
    "local": "Jardim Paulista, Franca - SP",
    "titulo": "Casa com cozinha planejada e sala de jantar",
    "itens": [
      "2 quartos",
      "82 m²"
    ],
    "preco": 1450,
    "precoTexto": "1.450"
  }
];

  function ler(chave) {
    try {
      var v = JSON.parse(localStorage.getItem(chave));
      return Array.isArray(v) ? v : [];
    } catch (e) {
      return [];
    }
  }
  function gravar(chave, valor) {
    try { localStorage.setItem(chave, JSON.stringify(valor)); } catch (e) { }
  }

  function ehFavorito(id) { return ler(CHAVE_FAVORITOS).indexOf(id) !== -1; }

  function alternarFavorito(id) {
    var lista = ler(CHAVE_FAVORITOS);
    var pos = lista.indexOf(id);
    if (pos === -1) { lista.push(id); } else { lista.splice(pos, 1); }
    gravar(CHAVE_FAVORITOS, lista);
  }

  function atualizarFavoritos() {
    var botoes = document.querySelectorAll('[data-fav]');
    Array.prototype.forEach.call(botoes, function (b) {
      var ativo = ehFavorito(b.getAttribute('data-fav'));
      b.setAttribute('aria-pressed', ativo ? 'true' : 'false');
      if (b.classList.contains('btn')) {
        b.textContent = ativo ? 'Remover dos favoritos' : 'Salvar nos favoritos';
      } else {
        b.setAttribute('aria-label', ativo ? 'Remover dos favoritos' : 'Salvar nos favoritos');
      }
    });

    var link = document.querySelector('.main-nav a[href="favoritos.html"]');
    if (link) {
      var marca = link.querySelector('.nav-count');
      var total = ler(CHAVE_FAVORITOS).length;
      if (total > 0) {
        if (!marca) {
          marca = document.createElement('span');
          marca.className = 'nav-count';
          link.appendChild(marca);
        }
        marca.textContent = total;
      } else if (marca) {
        link.removeChild(marca);
      }
    }
  }

  function cartao(im) {
    var feats = im.itens.map(function (t) { return '<span>' + t + '</span>'; }).join('');
    return '<article class="listing-card" data-id="' + im.id + '">' +
      '<div class="listing-image"><img src="' + im.foto + '" alt="' + im.alt + '" loading="lazy" />' +
      '<span class="listing-tag">' + im.tipo + '</span>' +
      '<button type="button" class="favorite-btn" data-fav="' + im.id + '" aria-pressed="true" aria-label="Remover dos favoritos">' +
      '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg></button></div>' +
      '<div class="listing-content"><div class="listing-location">' + im.local + '</div>' +
      '<h3 class="listing-title">' + im.titulo + '</h3>' +
      '<div class="listing-features">' + feats + '</div>' +
      '<div class="listing-bottom"><div class="listing-price">R$ ' + im.precoTexto + ' / mês</div>' +
      '<a class="detail-link" href="detalhes.html#' + im.id + '">Ver detalhes</a></div></div></article>';
  }

  function montarFavoritos() {
    var grade = document.getElementById('favoritos-grid');
    if (!grade) { return; }
    var ids = ler(CHAVE_FAVORITOS);
    var itens = IMOVEIS.filter(function (im) { return ids.indexOf(im.id) !== -1; });
    grade.innerHTML = itens.map(cartao).join('');
    grade.hidden = itens.length === 0;
    var vazio = document.getElementById('favoritos-vazio');
    if (vazio) { vazio.hidden = itens.length !== 0; }
    atualizarFavoritos();
  }

  document.addEventListener('click', function (e) {
    var b = e.target.closest ? e.target.closest('[data-fav]') : null;
    if (!b) { return; }
    e.preventDefault();
    alternarFavorito(b.getAttribute('data-fav'));
    if (document.getElementById('favoritos-grid')) { montarFavoritos(); } else { atualizarFavoritos(); }
  });

  function normalizar(t) {
    return String(t || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
  }

  function iniciarBusca() {
    var form = document.getElementById('form-busca');
    var grade = document.getElementById('listagem');
    if (!form || !grade) { return; }

    var cartoes = Array.prototype.slice.call(grade.querySelectorAll('.listing-card'));
    cartoes.forEach(function (c, i) { c.setAttribute('data-ordem', i); });

    var campoQ = form.elements.q, campoTipo = form.elements.tipo, campoPreco = form.elements.preco;
    var ordenar = document.getElementById('ordenar');
    var contagem = document.getElementById('contagem');
    var vazio = document.getElementById('sem-resultados');

    var params = new URLSearchParams(window.location.search);
    campoQ.value = params.get('q') || '';
    campoTipo.value = params.get('tipo') || '';
    campoPreco.value = params.get('preco') || '';

    function aplicar() {
      var q = normalizar(campoQ.value);
      var tipo = campoTipo.value;
      var max = parseFloat(campoPreco.value);
      var visiveis = [];

      cartoes.forEach(function (c) {
        var texto = normalizar(c.textContent);
        var ok = (!q || texto.indexOf(q) !== -1) &&
                 (!tipo || c.getAttribute('data-tipo') === tipo) &&
                 (isNaN(max) || parseFloat(c.getAttribute('data-preco')) <= max);
        c.hidden = !ok;
        if (ok) { visiveis.push(c); }
      });

      var modo = ordenar ? ordenar.value : 'recentes';
      cartoes.slice().sort(function (a, b) {
        if (modo === 'menor') { return a.getAttribute('data-preco') - b.getAttribute('data-preco'); }
        if (modo === 'maior') { return b.getAttribute('data-preco') - a.getAttribute('data-preco'); }
        return a.getAttribute('data-ordem') - b.getAttribute('data-ordem');
      }).forEach(function (c) { grade.appendChild(c); });

      var n = visiveis.length;
      if (contagem) { contagem.textContent = n + (n === 1 ? ' moradia encontrada' : ' moradias encontradas'); }
      if (vazio) { vazio.hidden = n !== 0; }
      grade.hidden = n === 0;

      var novo = new URLSearchParams();
      if (campoQ.value.trim()) { novo.set('q', campoQ.value.trim()); }
      if (tipo) { novo.set('tipo', tipo); }
      if (campoPreco.value) { novo.set('preco', campoPreco.value); }
      var qs = novo.toString();
      if (window.history && window.history.replaceState) {
        window.history.replaceState(null, '', window.location.pathname + (qs ? '?' + qs : ''));
      }
    }

    form.addEventListener('submit', function (e) { e.preventDefault(); aplicar(); });
    campoTipo.addEventListener('change', aplicar);
    if (ordenar) { ordenar.addEventListener('change', aplicar); }
    aplicar();
  }

  function mensagemDeErro(campo) {
    var v = campo.validity;
    if (v.valueMissing) {
      if (campo.type === 'checkbox') { return 'Marque esta opção para continuar.'; }
      if (campo.tagName === 'SELECT') { return 'Escolha uma opção.'; }
      return 'Preencha este campo.';
    }
    if (campo.type === 'email' && v.typeMismatch) { return 'Digite um e-mail válido, como nome@email.com.'; }
    if (campo.minLength > 0 && campo.value && campo.value.length < campo.minLength) {
      return 'Use pelo menos ' + campo.minLength + ' caracteres.';
    }
    if (v.rangeUnderflow) { return 'O valor mínimo é ' + campo.min + '.'; }
    if (v.rangeOverflow) { return 'O valor máximo é ' + campo.max + '.'; }
    if (campo.type === 'tel' && campo.value && !/^\D*(\d\D*){10,11}$/.test(campo.value)) {
      return 'Digite o telefone com DDD, por exemplo (16) 99999-0000.';
    }
    return '';
  }

  function limparErro(campo) {
    var rotulo = campo.closest('label') || campo.parentNode;
    var antigo = rotulo.querySelector('.field-error');
    if (antigo) { rotulo.removeChild(antigo); }
    campo.removeAttribute('aria-invalid');
  }

  function mostrarErro(campo, texto) {
    limparErro(campo);
    var rotulo = campo.closest('label') || campo.parentNode;
    var span = document.createElement('span');
    span.className = 'field-error';
    span.setAttribute('role', 'alert');
    span.textContent = texto;
    rotulo.appendChild(span);
    campo.setAttribute('aria-invalid', 'true');
  }

  function mascaraTelefone(campo) {
    campo.addEventListener('input', function () {
      var d = campo.value.replace(/\D/g, '').slice(0, 11);
      var t = d;
      if (d.length > 10) { t = '(' + d.slice(0, 2) + ') ' + d.slice(2, 7) + '-' + d.slice(7); }
      else if (d.length > 6) { t = '(' + d.slice(0, 2) + ') ' + d.slice(2, 6) + '-' + d.slice(6); }
      else if (d.length > 2) { t = '(' + d.slice(0, 2) + ') ' + d.slice(2); }
      else if (d.length > 0) { t = '(' + d; }
      campo.value = t;
    });
  }

  function mostrarStatus(form, texto) {
    var s = form.querySelector('.form-status');
    if (!s) {
      s = document.createElement('p');
      s.className = 'form-status';
      s.setAttribute('role', 'status');
      form.appendChild(s);
    }
    s.textContent = texto;
    if (s.scrollIntoView) { s.scrollIntoView({ behavior: 'smooth', block: 'nearest' }); }
  }

  function guardarAnuncio(form) {
    var dados = {};
    Array.prototype.forEach.call(form.elements, function (c) {
      if (c.name && c.type !== 'file' && c.type !== 'checkbox' && c.type !== 'password') { dados[c.name] = c.value; }
    });
    var lista = ler(CHAVE_ANUNCIOS);
    lista.push(dados);
    gravar(CHAVE_ANUNCIOS, lista);
  }

  function iniciarFormularios() {
    var forms = document.querySelectorAll('form:not(.hero-search):not(.filter-panel)');
    Array.prototype.forEach.call(forms, function (form) {
      form.noValidate = true;

      Array.prototype.forEach.call(form.querySelectorAll('input[type="tel"]'), mascaraTelefone);
      form.addEventListener('input', function (e) { if (e.target.getAttribute('aria-invalid')) { limparErro(e.target); } });

      form.addEventListener('submit', function (e) {
        var primeiro = null;
        Array.prototype.forEach.call(form.elements, function (c) {
          if (!c.name && c.type !== 'checkbox') { return; }
          limparErro(c);
          var msg = c.willValidate ? mensagemDeErro(c) : '';
          if (msg) { mostrarErro(c, msg); if (!primeiro) { primeiro = c; } }
        });
        if (primeiro) { e.preventDefault(); primeiro.focus(); return; }

        if (form.hasAttribute('data-demo')) {
          e.preventDefault();
          if (form.hasAttribute('data-salvar')) { guardarAnuncio(form); }
          mostrarStatus(form, form.getAttribute('data-demo'));
          form.reset();
        }
      });
    });
  }

  function iniciarMenu() {
    var caixa = document.getElementById('menu-check');
    if (!caixa) { return; }
    Array.prototype.forEach.call(document.querySelectorAll('.main-nav a'), function (a) {
      a.addEventListener('click', function () { caixa.checked = false; });
    });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') { caixa.checked = false; } });
  }

  document.addEventListener('DOMContentLoaded', function () {
    iniciarMenu();
    iniciarBusca();
    iniciarFormularios();
    if (document.getElementById('favoritos-grid')) { montarFavoritos(); } else { atualizarFavoritos(); }
  });
})();
