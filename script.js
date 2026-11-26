/* ===== DADOS (edite aqui) ===== */
var TEL = '5561994244624';
var DIAS = ['Segunda','Terça','Quarta','Quinta','Sexta','Sábado'];

// Serviços e preços. "por" = preço promocional; "dias" = dias da promoção; "dest" = aparece na página inicial
var SERVICOS = [
 {n:'Lavagem americana',c:'lav',p:'35,00',dias:['Quarta','Quinta'],dest:1,d:'Lavagem externa rápida e econômica, para deixar o carro limpo no dia a dia.'},
 {n:'Lavagem simples',c:'lav',p:'30,00',por:'25,00',dias:['Terça'],d:'Lavagem externa com shampoo automotivo, secagem e pretinho nos pneus.'},
 {n:'Lavagem completa',c:'lav',p:'49,90',dest:1,d:'Lavagem externa e interna: aspiração, painel, portas, vidros e porta-malas.'},
 {n:'Lavagem detalhada',c:'lav',p:'120,00',por:'99,90',dias:['Sexta'],d:'Limpeza minuciosa de frestas, caixas de roda, soleiras e acabamentos.'},
 {n:'Lavagem de motor',c:'lav',p:'60,00',d:'Limpeza técnica do cofre do motor, protegendo os componentes sensíveis.'},
 {n:'Lavagem de chassi',c:'lav',p:'70,00',por:'59,90',dias:['Segunda'],d:'Remoção de barro, graxa e resíduos da parte inferior do veículo.'},
 {n:'Lavagem a seco',c:'lav',p:'40,00',d:'Limpeza prática e ecológica, com baixo consumo de água.'},
 {n:'Polimento',c:'est',p:'280,00',dest:1,d:'Remove riscos leves e oxidação, devolvendo profundidade à cor.'},
 {n:'Cristalização',c:'est',p:'200,00',por:'170,00',dias:['Segunda'],d:'Camada de proteção que realça o brilho e facilita as próximas lavagens.'},
 {n:'Vitrificação',c:'est',p:'600,00',d:'Proteção de longa duração contra sol, chuva e sujeira.'},
 {n:'Higienização interna',c:'est',p:'180,00',por:'150,00',dias:['Sábado'],d:'Limpeza profunda de bancos, carpetes e forrações, com eliminação de odores.'},
 {n:'Hidratação de couro',c:'est',p:'120,00',d:'Limpeza e hidratação dos bancos para evitar ressecamento.'},
 {n:'Revitalização de faróis',c:'est',p:'90,00',por:'70,00',dias:['Quarta'],d:'Remove o amarelado e devolve transparência e segurança noturna.'}
];

// Depoimentos REAIS de clientes. Exemplo: {nome:'Maria S.', texto:'Meu carro ficou impecável!'}
var DEPOIMENTOS = [];

// Horário de funcionamento (minutos desde 00:00). 0 = domingo ... 6 = sábado
var HORA = {0:[600,1060],1:[600,1160],2:[600,1160],3:[600,1160],4:[600,1160],5:[600,1160],6:[600,1180]};

/* ===== FUNÇÕES ===== */
function $(s,r){return (r||document).querySelector(s)}
function $$(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))}
function fmt(s){return s.por?'<s>R$ '+s.p+'</s><strong>R$ '+s.por+'</strong>':'<strong>R$ '+s.p+'</strong>'}
function quando(d){return (d[0]==='Sábado'?'aos ':'às ')+d.map(function(x){return x.toLowerCase()+'s'}).join(' e ')}
function hm(m){return Math.floor(m/60)+':'+('0'+m%60).slice(-2)}
function wa(t){return 'https://wa.me/'+TEL+(t?'?text='+encodeURIComponent(t):'')}

function card(s){
 return '<article class="card reveal"><div class="card-top"><h3>'+s.n+'</h3>'+(s.dias?'<span class="badge">Promoção '+quando(s.dias)+'</span>':'')+'</div>'+
  '<p>'+s.d+'</p><div class="card-foot"><div class="preco">'+fmt(s)+'</div><a class="btn sm dk" href="#contato" data-serv="'+s.n+'">Agendar</a></div></article>';
}
function listar(cat){
 $('#lista').innerHTML=SERVICOS.filter(function(s){return s.c===cat}).map(card).join('');
 reveal();
}
function renderPromos(){
 var hoje=['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado'][new Date().getDay()];
 $('#promos').innerHTML=DIAS.map(function(d){
  var l=SERVICOS.filter(function(s){return s.dias&&s.dias.indexOf(d)>-1});
  return '<div class="dia'+(d===hoje?' hoje':'')+'"><h3>'+d+(d===hoje?' · hoje':'')+'</h3>'+l.map(function(s){return '<p><b>'+s.n+'</b><span>R$ '+(s.por||s.p)+'</span></p>'}).join('')+'</div>';
 }).join('');
}
function renderDepoimentos(){
 var el=$('#depoimentos');
 if(DEPOIMENTOS.length){
  el.innerHTML=DEPOIMENTOS.map(function(d){return '<article class="card depo reveal"><p>“'+d.texto+'”</p><b>'+d.nome+'</b></article>'}).join('');
 }else{
  el.innerHTML='<div class="convite reveal"><h3>Já foi nosso cliente?</h3><p>Conte como foi a sua experiência. Sua opinião ajuda outras pessoas a escolherem o melhor cuidado para o carro.</p><a class="btn dk" target="_blank" rel="noopener" href="'+wa('Olá! Gostaria de deixar minha avaliação sobre o atendimento do Coutinho Lava Car.')+'">Enviar minha avaliação</a></div>';
 }
}
function status(){
 var n=new Date(),m=n.getHours()*60+n.getMinutes(),h=HORA[n.getDay()],t,c;
 if(m<h[0]){t='Abre hoje às '+hm(h[0]);c='off'}
 else if(m<h[1]){t='Aberto agora · fecha às '+hm(h[1]);c='on'}
 else{t='Fechado agora · abre amanhã às '+hm(HORA[(n.getDay()+1)%7][0]);c='off'}
 $('#status').innerHTML='<i class="dot '+c+'"></i>'+t;
}

/* ===== PÁGINAS (menu) ===== */
var nomes=['inicio','servicos','sobre','contato'];
var btn=$('#menu-btn'),nav=$('#menu'),sel=$('#serv');
function rota(){
 var h=location.hash.slice(1);if(nomes.indexOf(h)<0)h='inicio';
 $$('.view').forEach(function(v){v.classList.toggle('ativa',v.id==='v-'+h)});
 $$('nav ul a').forEach(function(a){if(a.getAttribute('href')==='#'+h)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current')});
 nav.classList.remove('aberto');btn.setAttribute('aria-expanded','false');window.scrollTo(0,0);
}
btn.addEventListener('click',function(){var a=nav.classList.toggle('aberto');btn.setAttribute('aria-expanded',a)});
window.addEventListener('hashchange',rota);

/* ===== ANIMAÇÃO DE ENTRADA ===== */
var io=('IntersectionObserver' in window)?new IntersectionObserver(function(es){
 es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}});
},{threshold:.12}):null;
function reveal(){$$('.reveal:not(.in)').forEach(function(el){io?io.observe(el):el.classList.add('in')})}

/* ===== INÍCIO ===== */
$('#destaques').innerHTML=SERVICOS.filter(function(s){return s.dest}).map(card).join('');
SERVICOS.forEach(function(s){var o=document.createElement('option');o.textContent=s.n;sel.appendChild(o)});
renderPromos();renderDepoimentos();listar('lav');status();setInterval(status,60000);

// abas Lavagens / Estética
$$('.tabs button').forEach(function(b){b.addEventListener('click',function(){
 $$('.tabs button').forEach(function(x){x.classList.remove('on');x.setAttribute('aria-pressed','false')});
 b.classList.add('on');b.setAttribute('aria-pressed','true');listar(b.getAttribute('data-cat'));
})});

// "Agendar" seleciona o serviço no formulário
document.addEventListener('click',function(e){
 var a=e.target.closest('[data-serv]');if(a)sel.value=a.getAttribute('data-serv');
});

// formulário -> WhatsApp
$('#form').addEventListener('submit',function(e){
 e.preventDefault();
 var t='Olá! Meu nome é '+$('#nome').value+'. Gostaria de agendar: '+sel.value+'.';
 if($('#quando').value)t+=' Preferência de dia e horário: '+$('#quando').value+'.';
 if($('#msg').value)t+=' '+$('#msg').value;
 window.open(wa(t),'_blank');
});

rota();reveal();
/* ===== TEMA CLARO / ESCURO ===== */
var raiz=document.documentElement,btTema=document.getElementById('tema');
function aplicaTema(t,salvar){
 raiz.setAttribute('data-theme',t);
 btTema.setAttribute('aria-pressed',t==='dark');
 btTema.setAttribute('aria-label',t==='dark'?'Mudar para o tema claro':'Mudar para o tema escuro');
 if(salvar){try{localStorage.setItem('tema',t)}catch(e){}}
}
aplicaTema(raiz.getAttribute('data-theme')||'light');
btTema.addEventListener('click',function(){aplicaTema(raiz.getAttribute('data-theme')==='dark'?'light':'dark',true)});
if(window.matchMedia){matchMedia('(prefers-color-scheme: dark)').addEventListener('change',function(e){
 var salvo;try{salvo=localStorage.getItem('tema')}catch(x){}
 if(!salvo)aplicaTema(e.matches?'dark':'light');
})}k