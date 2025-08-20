<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Tormenta20 — Ficha de Personagem (Preencher & PDF)</title>
  <style>
    :root{
      --bg:#ffffff;--fg:#111;--muted:#666;--red:#c71f2d;--red-600:#b31b28;--line:#e7e7e9;--chip:#f7f7f7;
    }
    *{box-sizing:border-box}
    html,body{height:100%}
    body{margin:0;background:var(--bg);color:var(--fg);font:500 14px/1.45 system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,"Helvetica Neue",Arial,"Noto Sans",sans-serif}
    h1,h2,h3{margin:0 0 .5rem}
    h1{font-size:1.6rem}
    h2{font-size:1.1rem;letter-spacing:.2px;color:var(--red)}
    header{position:sticky;top:0;background:linear-gradient(180deg,#fff,rgba(255,255,255,.96));backdrop-filter:saturate(1.2) blur(6px);z-index:10;border-bottom:1px solid var(--line)}
    .wrap{max-width:1100px;margin:0 auto;padding:16px}
    .toolbar{display:flex;gap:.5rem;flex-wrap:wrap;align-items:center}
    .btn{appearance:none;border:1px solid var(--red);background:var(--red);color:#fff;padding:.6rem .9rem;border-radius:.75rem;font-weight:700;cursor:pointer;transition:.2s;box-shadow:0 1px 0 rgba(0,0,0,.06)}
    .btn.alt{background:#fff;color:var(--red)}
    .btn.ghost{border-color:var(--line);background:#fff;color:#222}
    .btn:hover{transform:translateY(-1px);filter:saturate(1.1)}
    .grid{display:grid;gap:14px}
    .card{background:#fff;border:1px solid var(--line);border-radius:16px;padding:14px}
    .two{grid-template-columns:1fr 1fr}
    .three{grid-template-columns:repeat(3,1fr)}
    .four{grid-template-columns:repeat(4,1fr)}
    @media (max-width:960px){.two,.three,.four{grid-template-columns:1fr}}
    label{display:block;font-size:.78rem;color:var(--muted);margin:0 0 .25rem .25rem}
    input[type="text"],input[type="number"],select,textarea{width:100%;padding:.6rem .7rem;border:1px solid var(--line);border-radius:.6rem;background:#fff;outline:none}
    input:focus,select:focus,textarea:focus{border-color:var(--red);box-shadow:0 0 0 3px rgba(199,31,45,.1)}
    textarea{min-height:110px;resize:vertical}
    .section-title{display:flex;align-items:center;justify-content:space-between;border-bottom:1px dashed var(--line);padding-bottom:.35rem;margin-bottom:.8rem}
    .chip{display:inline-flex;gap:.4rem;align-items:center;border:1px solid var(--line);background:var(--chip);border-radius:999px;padding:.35rem .6rem;font-size:.72rem}
    .muted{color:var(--muted)}
    .mono{font-family:ui-monospace,SFMono-Regular,Consolas,Menlo,monospace}
    .danger{color:var(--red)}
    table{width:100%;border-collapse:collapse}
    th,td{border-bottom:1px solid var(--line);padding:.5rem .4rem;text-align:left}
    th{font-size:.78rem;color:#444}
    .center{text-align:center}
    .right{text-align:right}
    .small{font-size:.8rem}
    .kpi{display:grid;grid-template-columns:repeat(6,1fr);gap:10px}
    .kpi .box{padding:.6rem;border:1px solid var(--line);border-radius:.75rem;background:#fff}
    .kpi .box h3{font-size:.75rem;color:var(--muted)}
    .kpi .val{font-size:1.4rem;font-weight:800;color:var(--red-600)}
    .row{display:flex;align-items:center;gap:.6rem;flex-wrap:wrap}
    .grow{flex:1}
    .pill{padding:.25rem .5rem;border-radius:999px;background:#fff;border:1px solid var(--line)}
    details{border:1px solid var(--line);border-radius:12px;padding:.6rem 1rem;background:#fff}
    summary{cursor:pointer;font-weight:700;color:var(--red)}
    .divider{height:1px;background:var(--line);margin:12px 0}
    .subtle{opacity:.8}
    .red{color:var(--red)}
    .badge{background:var(--red);color:#fff;border-radius:.5rem;padding:.15rem .4rem;font-size:.72rem}
    .flex{display:flex;gap:.6rem;align-items:center}
    .skills-table input[type="number"]{width:70px}
    .skills-table .trained{display:flex;align-items:center;gap:.3rem}
    .add{display:inline-flex;align-items:center;gap:.4rem;border:1px dashed var(--red);background:#fff;color:var(--red);padding:.35rem .5rem;border-radius:.6rem;cursor:pointer}
    .list{display:grid;gap:.5rem}
    .item{display:grid;gap:.5rem;grid-template-columns:2fr repeat(5,1fr) auto;align-items:center}
    .item input{width:100%}
    .del{background:#fff;border:1px solid var(--line);border-radius:.5rem;padding:.35rem .5rem;cursor:pointer}

    /* Impressão (PDF via Ctrl+P / botão) */
    @media print{
      header,.no-print{display:none !important}
      body{background:#fff}
      .wrap{max-width:100%;padding:0}
      .card{border:none;padding:0}
      .printable{page-break-inside:avoid}
      .grid{gap:8px}
      .kpi .box{border-color:#000}
      input,select,textarea{border:0;padding:2px 0}
      input[type=checkbox]{transform:scale(1.2)}
      th,td{border-color:#000}
    }
  </style>
</head>
<body>
  <header>
    <div class="wrap">
      <div class="toolbar">
        <h1 class="grow">Tormenta<span class="red">20</span> • Ficha de Personagem</h1>
        <button class="btn" onclick="window.print()">🧾 Imprimir / Salvar PDF</button>
        <button class="btn alt" onclick="exportJSON()">💾 Exportar JSON</button>
        <label class="pill no-print"><input type="file" accept="application/json" onchange="importJSON(event)"> Importar JSON</label>
      </div>
    </div>
  </header>

  <main class="wrap">
    <!-- IDENTIDADE -->
    <section class="card printable">
      <div class="section-title">
        <h2>Identidade</h2>
        <span class="chip">Paleta: <span class="badge">branco & vermelho</span></span>
      </div>
      <div class="grid two">
        <div>
          <label>Nome do Personagem</label>
          <input id="nome" type="text" placeholder="Ex.: Gyda Araydark" />
        </div>
        <div>
          <label>Jogador(a)</label>
          <input id="jogador" type="text" placeholder="Seu nome" />
        </div>
        <div>
          <label>Raça</label>
          <input id="raca" type="text" list="listaRacas" placeholder="Humano, Anão, Elfo..." />
        </div>
        <div>
          <label>Classe</label>
          <input id="classe" type="text" list="listaClasses" placeholder="Arcanista, Bárbaro..." />
        </div>
        <div>
          <label>Origem</label>
          <input id="origem" type="text" placeholder="Ex.: Estudioso, Forasteiro..." />
        </div>
        <div>
          <label>Divindade (opcional)</label>
          <input id="divindade" type="text" placeholder="Ex.: Valkaria" />
        </div>
        <div>
          <label>Nível</label>
          <input id="nivel" type="number" min="1" value="1" />
        </div>
        <div>
          <label>Alinhamento</label>
          <input id="alinhamento" type="text" placeholder="Ordeiro e Bom, Neutro..." />
        </div>
        <div>
          <label>Tamanho</label>
          <input id="tamanho" type="text" placeholder="Médio, Pequeno..." />
        </div>
        <div>
          <label>Deslocamento</label>
          <input id="deslocamento" type="text" placeholder="9 m (padrão)" />
        </div>
      </div>

      <datalist id="listaRacas">
        <option>Humano</option><option>Anão</option><option>Dahllan</option><option>Elfo</option><option>Goblin</option><option>Lefou</option><option>Minotauro</option><option>Qareen</option><option>Golem</option><option>Hynne</option><option>Kliren</option><option>Medusa</option><option>Osteon</option><option>Sereia/Tritão</option><option>Sílfide</option><option>Suraggel</option><option>Trog</option>
      </datalist>
      <datalist id="listaClasses">
        <option>Arcanista</option><option>Bárbaro</option><option>Bardo</option><option>Bucaneiro</option><option>Caçador</option><option>Cavaleiro</option><option>Clérigo</option><option>Druida</option><option>Guerreiro</option><option>Inventor</option><option>Ladino</option><option>Lutador</option><option>Nobre</option><option>Paladino</option>
      </datalist>
    </section>

    <!-- ATRIBUTOS & DERIVADOS -->
    <section class="grid two printable">
      <div class="card">
        <div class="section-title"><h2>Atributos</h2><span class="chip">Mod. = ⌊(Valor−10)/2⌋</span></div>
        <div class="grid three">
          <div><label>Força</label><input id="for" type="number" min="1" value="10" oninput="updateMods()"><small class="muted">Mod: <span class="mono" id="mod-for">0</span></small></div>
          <div><label>Destreza</label><input id="des" type="number" min="1" value="10" oninput="updateMods()"><small class="muted">Mod: <span class="mono" id="mod-des">0</span></small></div>
          <div><label>Constituição</label><input id="con" type="number" min="1" value="10" oninput="updateMods()"><small class="muted">Mod: <span class="mono" id="mod-con">0</span></small></div>
          <div><label>Inteligência</label><input id="int" type="number" min="1" value="10" oninput="updateMods()"><small class="muted">Mod: <span class="mono" id="mod-int">0</span></small></div>
          <div><label>Sabedoria</label><input id="sab" type="number" min="1" value="10" oninput="updateMods()"><small class="muted">Mod: <span class="mono" id="mod-sab">0</span></small></div>
          <div><label>Carisma</label><input id="car" type="number" min="1" value="10" oninput="updateMods()"><small class="muted">Mod: <span class="mono" id="mod-car">0</span></small></div>
        </div>
        <div class="divider"></div>
        <div class="row">
          <div class="grow">
            <label>Bônus de Treinado (perícias)</label>
            <input id="bonusTreinado" type="number" value="5" oninput="updateSkills()">
          </div>
          <div>
            <label>CD Padrão de Magia (se aplicável)</label>
            <input id="cdMagia" type="number" placeholder="10 + atributo + outros">
          </div>
        </div>
      </div>

      <div class="card">
        <div class="section-title"><h2>Características Derivadas</h2><span class="chip">edite livremente</span></div>
        <div class="kpi">
          <div class="box"><h3>PV</h3><div class="val"><input id="pv" type="number" value="0" /></div><div class="small muted">Pontos de Vida</div></div>
          <div class="box"><h3>PM</h3><div class="val"><input id="pm" type="number" value="0" /></div><div class="small muted">Pontos de Mana</div></div>
          <div class="box"><h3>Defesa</h3><div class="val"><input id="defesa" type="number" value="10" /></div><div class="small muted">Armadura/escudo/Des</div></div>
          <div class="box"><h3>Fortitude</h3><div class="val" id="kpi-fort">0</div><div class="small muted">Con + treinado + outros</div></div>
          <div class="box"><h3>Reflexos</h3><div class="val" id="kpi-ref">0</div><div class="small muted">Des + treinado + outros</div></div>
          <div class="box"><h3>Vontade</h3><div class="val" id="kpi-von">0</div><div class="small muted">Sab + treinado + outros</div></div>
        </div>
      </div>
    </section>

    <!-- PERÍCIAS -->
    <section class="card printable">
      <div class="section-title"><h2>Perícias</h2><span class="chip">Marque «Treinado» para aplicar o bônus</span></div>
      <div class="table-wrap">
        <table class="skills-table">
          <thead><tr><th>Perícia</th><th>Atributo</th><th class="center">Treinado</th><th class="right">Atributo</th><th class="right">Outros</th><th class="right">Total</th></tr></thead>
          <tbody id="tbodySkills"></tbody>
        </table>
      </div>
    </section>

    <!-- ATAQUES -->
    <section class="card printable">
      <div class="section-title">
        <h2>Ataques</h2>
        <button class="add no-print" onclick="addAtaque()">＋ adicionar</button>
      </div>
      <div id="ataques" class="list"></div>
    </section>

    <!-- MAGIA -->
    <section class="card printable">
      <div class="section-title"><h2>Magia</h2><span class="chip">Use PM conforme suas regras de classe</span></div>
      <div class="grid two">
        <div>
          <label>Atributo-chave (magia)</label>
          <select id="atribMagia" onchange="syncCD()">
            <option value="">—</option>
            <option value="int">Inteligência</option>
            <option value="sab">Sabedoria</option>
            <option value="car">Carisma</option>
          </select>
        </div>
        <div>
          <label>CD de Magia</label>
          <input id="cdFinal" type="number" placeholder="10 + mod atributo + outros" />
        </div>
      </div>
      <div class="divider"></div>
      <label>Magias Conhecidas / Preparadas</label>
      <textarea id="magias" placeholder="Liste magias, círculos, custos de PM, efeitos, etc."></textarea>
    </section>

    <!-- EQUIPAMENTOS -->
    <section class="card printable">
      <div class="section-title"><h2>Equipamentos & Itens</h2><span class="chip">moedas, carga, armas, armaduras</span></div>
      <textarea id="equip" placeholder="Anote inventário, riqueza, armaduras e escudos com bônus."></textarea>
    </section>

    <!-- PODERES -->
    <section class="grid two printable">
      <div class="card">
        <div class="section-title"><h2>Poderes (gerais/combate/magia/destino/da Tormenta)</h2></div>
        <textarea id="poderes" placeholder="Liste poderes e descrições resumidas."></textarea>
      </div>
      <div class="card">
        <div class="section-title"><h2>Habilidades de Classe / Raça / Origem</h2></div>
        <textarea id="habilidades" placeholder="Anote habilidades e usos por cena/dia, etc."></textarea>
      </div>
    </section>

    <!-- ANOTAÇÕES -->
    <section class="card printable">
      <div class="section-title"><h2>Anotações</h2></div>
      <textarea id="notas" placeholder="História, personalidade, aliados, inimigos, objetivos..."></textarea>
    </section>

    <div class="muted small">Feito com ♥ para Tormenta20. Este gerador é independente e usa apenas o navegador — exporte/import JSON para salvar suas fichas.</div>
  </main>

  <script>
    // ——— Modelo de dados base ———
    const $ = (sel)=>document.querySelector(sel);
    const $$ = (sel)=>Array.from(document.querySelectorAll(sel));

    const skills = [
      {nome:'Acrobacia', atr:'des'},
      {nome:'Adestramento', atr:'car'},
      {nome:'Atletismo', atr:'for'},
      {nome:'Atuação', atr:'car'},
      {nome:'Cavalgar', atr:'des'},
      {nome:'Conhecimento', atr:'int'},
      {nome:'Cura', atr:'sab'},
      {nome:'Diplomacia', atr:'car'},
      {nome:'Enganação', atr:'car'},
      {nome:'Fortitude', atr:'con'},
      {nome:'Furtividade', atr:'des'},
      {nome:'Guerra', atr:'int'},
      {nome:'Iniciativa', atr:'des'},
      {nome:'Intimidação', atr:'car'},
      {nome:'Intuição', atr:'sab'},
      {nome:'Investigação', atr:'int'},
      {nome:'Jogatina', atr:'car'},
      {nome:'Ladinagem', atr:'des'},
      {nome:'Luta', atr:'for'},
      {nome:'Misticismo', atr:'int'},
      {nome:'Nobreza', atr:'int'},
      {nome:'Ofício', atr:'int'},
      {nome:'Percepção', atr:'sab'},
      {nome:'Pilotagem', atr:'des'},
      {nome:'Pontaria', atr:'des'},
      {nome:'Reflexos', atr:'des'},
      {nome:'Religião', atr:'sab'},
      {nome:'Sobrevivência', atr:'sab'},
      {nome:'Vontade', atr:'sab'}
    ];

    const state = {
      ataques: []
    };

    function mod(v){ if(isNaN(v)) return 0; return Math.floor((Number(v)-10)/2); }

    function updateMods(){
      const vals = ['for','des','con','int','sab','car'];
      vals.forEach(k=>{
        const v = Number($('#'+k).value || 10);
        $('#mod-'+k).textContent = mod(v);
      });
      updateSkills();
      syncCD();
    }

    function trSkill(sk){
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${sk.nome}</td>
        <td class="small">${sk.atr.toUpperCase()}</td>
        <td class="center trained"><label class="trained"><input type="checkbox" onchange="updateSkills()"> Treinado</label></td>
        <td class="right mono atr">0</td>
        <td class="right"><input type="number" value="0" class="outros" oninput="updateSkills()"></td>
        <td class="right mono total">0</td>`;
      return tr;
    }

    function buildSkills(){
      const tbody = $('#tbodySkills');
      tbody.innerHTML = '';
      skills.forEach(s=> tbody.appendChild(trSkill(s)) );
      updateSkills();
    }

    function updateSkills(){
      const bTreinado = Number($('#bonusTreinado').value||0);
      const map = {for:mod($('#for').value), des:mod($('#des').value), con:mod($('#con').value), int:mod($('#int').value), sab:mod($('#sab').value), car:mod($('#car').value)};
      $$('#tbodySkills tr').forEach((tr,i)=>{
        const atr = skills[i].atr;
        tr.querySelector('.atr').textContent = map[atr];
        const outros = Number(tr.querySelector('.outros').value||0);
        const treinado = tr.querySelector('input[type=checkbox]').checked ? bTreinado : 0;
        const total = map[atr] + treinado + outros;
        tr.querySelector('.total').textContent = total;
      });
      // Atualiza KPIs de testes resistidos
      $('#kpi-fort').textContent = rowTotal('Fortitude');
      $('#kpi-ref').textContent = rowTotal('Reflexos');
      $('#kpi-von').textContent = rowTotal('Vontade');
    }

    function rowIndexByName(name){
      return skills.findIndex(s=>s.nome===name);
    }
    function rowTotal(name){
      const i = rowIndexByName(name);
      const tr = $$('#tbodySkills tr')[i];
      return tr ? tr.querySelector('.total').textContent : '0';
    }

    // ——— Ataques dinâmicos ———
    function ataqueRow(data={}){
      const wrap = document.createElement('div');
      wrap.className = 'item';
      wrap.innerHTML = `
        <input placeholder="Arma" value="${data.nome||''}">
        <input placeholder="Ataque" value="${data.ataque||''}">
        <input placeholder="Dano" value="${data.dano||''}">
        <input placeholder="Crítico" value="${data.critico||''}">
        <input placeholder="Alcance" value="${data.alcance||''}">
        <input placeholder="Tipo" value="${data.tipo||''}">
        <button class="del no-print" title="Remover" onclick="this.parentElement.remove()">✕</button>`;
      return wrap;
    }
    function addAtaque(){ $('#ataques').appendChild(ataqueRow()); }

    // ——— Magia ———
    function syncCD(){
      const atr = $('#atribMagia').value; if(!atr) return;
      const base = 10 + mod($('#'+atr).value);
      const extra = Number($('#cdMagia').value||0);
      $('#cdFinal').value = base + extra;
    }

    // ——— Exportar / Importar ———
    function collect(){
      const payload = {
        meta:{app:'t20-ficha', v:1, savedAt: new Date().toISOString()},
        identidade:{nome:$('#nome').value,jogador:$('#jogador').value,raca:$('#raca').value,classe:$('#classe').value,origem:$('#origem').value,divindade:$('#divindade').value,nivel:$('#nivel').value,alinhamento:$('#alinhamento').value,tamanho:$('#tamanho').value,deslocamento:$('#deslocamento').value},
        atributos:{for:$('#for').value,des:$('#des').value,con:$('#con').value,int:$('#int').value,sab:$('#sab').value,car:$('#car').value,bonusTreinado:$('#bonusTreinado').value,cdMagia:$('#cdMagia').value},
        derivados:{pv:$('#pv').value,pm:$('#pm').value,defesa:$('#defesa').value,fort:$('#kpi-fort').textContent,ref:$('#kpi-ref').textContent,von:$('#kpi-von').textContent},
        pericias: $$('#tbodySkills tr').map(tr=>({nome:tr.children[0].textContent, atr:tr.children[1].textContent, treinado:tr.querySelector('input[type=checkbox]').checked, outros:tr.querySelector('.outros').value, total:tr.querySelector('.total').textContent})),
        ataques: $$('#ataques .item').map(it=>({nome:it.children[0].value,ataque:it.children[1].value,dano:it.children[2].value,critico:it.children[3].value,alcance:it.children[4].value,tipo:it.children[5].value})),
        magia:{atribKey:$('#atribMagia').value,cdFinal:$('#cdFinal').value,magias:$('#magias').value},
        equip:$('#equip').value,
        poderes:$('#poderes').value,
        habilidades:$('#habilidades').value,
        notas:$('#notas').value
      };
      return payload;
    }

    function exportJSON(){
      const data = collect();
      const blob = new Blob([JSON.stringify(data,null,2)],{type:'application/json'});
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = (data.identidade.nome||'ficha-t20')+'.json';
      document.body.appendChild(a); a.click(); a.remove();
      URL.revokeObjectURL(a.href);
    }
    function importJSON(evt){
      const file = evt.target.files[0]; if(!file) return;
      const reader = new FileReader();
      reader.onload = () => {
        try{ const data = JSON.parse(reader.result); applyData(data); }
        catch(e){ alert('Arquivo inválido.'); }
      };
      reader.readAsText(file);
    }

    function applyData(d){
      if(!d) return;
      const I = d.identidade||{}; const A = d.atributos||{}; const D = d.derivados||{};
      $('#nome').value=I.nome||'';$('#jogador').value=I.jogador||'';$('#raca').value=I.raca||'';$('#classe').value=I.classe||'';$('#origem').value=I.origem||'';$('#divindade').value=I.divindade||'';$('#nivel').value=I.nivel||1;$('#alinhamento').value=I.alinhamento||'';$('#tamanho').value=I.tamanho||'';$('#deslocamento').value=I.deslocamento||'';
      $('#for').value=A.for||10;$('#des').value=A.des||10;$('#con').value=A.con||10;$('#int').value=A.int||10;$('#sab').value=A.sab||10;$('#car').value=A.car||10;$('#bonusTreinado').value=A.bonusTreinado||5;$('#cdMagia').value=A.cdMagia||0;
      updateMods();
      $('#pv').value=D.pv||0;$('#pm').value=D.pm||0;$('#defesa').value=D.defesa||10;
      // Perícias
      if(Array.isArray(d.pericias)){
        $$('#tbodySkills tr').forEach((tr,i)=>{
          const p = d.pericias[i]; if(!p) return;
          tr.querySelector('input[type=checkbox]').checked = !!p.treinado;
          tr.querySelector('.outros').value = p.outros||0;
        });
      }
      updateSkills();
      // Ataques
      $('#ataques').innerHTML='';
      (d.ataques||[]).forEach(a=>$('#ataques').appendChild(ataqueRow(a)));
      // Magia & outros
      $('#atribMagia').value = (d.magia&&d.magia.atribKey)||''; syncCD();
      $('#cdFinal').value = (d.magia&&d.magia.cdFinal)||'';
      $('#magias').value = (d.magia&&d.magia.magias)||'';
      $('#equip').value = d.equip||'';
      $('#poderes').value = d.poderes||'';
      $('#habilidades').value = d.habilidades||'';
      $('#notas').value = d.notas||'';
    }

    // Inicialização
    buildSkills();
    updateMods();
  </script>
</body>
</html>
