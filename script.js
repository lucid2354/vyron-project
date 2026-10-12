const L={"en": {"title": "VYRON PIT — Made by German Technology", "desc": "VYRON PIT: sports nutrition supplements made by German technology. Premium quality · Science · Results.", "nav_home": "Home", "nav_tech": "Technology", "nav_prod": "Products", "nav_contact": "Contact", "eyebrow": "Made by German Technology", "btn": "Discover the range", "tech_h": "German <b>technology</b>", "tech_p": "VYRON PIT develops sports nutrition supplements built on German technology. Our promise is simple: premium quality, grounded in science, made for results.", "p1_h": "Made by German Technology", "p1_p": "The principle behind every VYRON formula.", "p2_h": "Premium Quality", "p2_p": "Carefully selected ingredients for athletes who demand more.", "p3_h": "Science · Results", "p3_p": "Formulas designed around training goals, from mass gain to clean protein.", "range_h": "The <b>range</b>", "range_p": "Two formulas, one brand. Browse every side of the pack: front, sides, back and lid.", "cta_h": "Premium quality <span style=\"color:var(--c)\">· Science · Results</span>", "cta_p": "VYRON PIT — Made by German Technology", "foot": "© VYRON PIT. Dietary supplements are not intended to diagnose, treat, cure or prevent any disease.", "a_prev": "Previous product", "a_next": "Next product", "a_views": "Pack view", "vn": ["Front", "Right side", "Back", "Left side", "Lid (top)"], "p": [{"sub": "High-calorie weight gainer · 3 kg · Chocolate", "d": "Built for mass gain. Protein, carbs, creatine and L-glutamine in every serving.", "st": [["30 g", "protein per 100 g"], ["112 g", "carbs"], ["560", "kcal"]], "f": ["30 g protein per 100 g serving", "112 g carbs · 560 kcal", "Creatine monohydrate &amp; L-glutamine"]}, {"sub": "100% egg protein powder · 2 kg · Vanilla", "d": "Premium-quality egg protein with fast absorption, for before and after training.", "st": [["25 g", "protein per serving"], ["5.4 g", "BCAAs"], ["4.2 g", "EAAs"]], "f": ["25 g protein per serving", "5.4 g BCAAs · 4.2 g EAAs", "Fast absorption, premium quality"]}]}, "ru": {"title": "VYRON PIT — Сделано по немецкой технологии", "desc": "VYRON PIT: спортивное питание, сделанное по немецкой технологии. Премиальное качество · Наука · Результат.", "nav_home": "Главная", "nav_tech": "Технологии", "nav_prod": "Продукция", "nav_contact": "Контакты", "eyebrow": "Сделано по немецкой технологии", "btn": "Смотреть линейку", "tech_h": "Немецкая <b>технология</b>", "tech_p": "VYRON PIT создаёт спортивное питание на основе немецкой технологии. Наше обещание простое: премиальное качество, научный подход и результат.", "p1_h": "Сделано по немецкой технологии", "p1_p": "Принцип, лежащий в основе каждой формулы VYRON.", "p2_h": "Премиальное качество", "p2_p": "Тщательно подобранные ингредиенты для тех, кто требует большего.", "p3_h": "Наука · Результат", "p3_p": "Формулы под тренировочные цели: от набора массы до чистого протеина.", "range_h": "Наша <b>линейка</b>", "range_p": "Два продукта, один бренд. Посмотрите упаковку со всех сторон: спереди, с боков, сзади и крышку.", "cta_h": "Премиальное качество <span style=\"color:var(--c)\">· Наука · Результат</span>", "cta_p": "VYRON PIT — сделано по немецкой технологии", "foot": "© VYRON PIT. Биологически активные добавки не являются лекарственным средством.", "a_prev": "Предыдущий продукт", "a_next": "Следующий продукт", "a_views": "Вид упаковки", "vn": ["Спереди", "Справа", "Сзади", "Слева", "Крышка"], "p": [{"sub": "Высококалорийный гейнер · 3 кг · Шоколад", "d": "Создан для набора массы. Белок, углеводы, креатин и L-глютамин в каждой порции.", "st": [["30 г", "белка на 100 г"], ["112 г", "углеводов"], ["560", "ккал"]], "f": ["30 г белка на 100 г порции", "112 г углеводов · 560 ккал", "Креатин моногидрат и L-глютамин"]}, {"sub": "100% яичный протеин · 2 кг · Ваниль", "d": "Яичный протеин премиального качества с быстрым усвоением: до и после тренировки.", "st": [["25 г", "белка в порции"], ["5,4 г", "BCAA"], ["4,2 г", "EAA"]], "f": ["25 г белка в порции", "5,4 г BCAA · 4,2 г EAA", "Быстрое усвоение, премиальное качество"]}]}};
let lang='en';
const P=[{c:'#FFC400',n:'VYRON GAIN',g:'GAIN'},{c:'#2DB8FF',n:'EGG PROTEIN',g:'EGG'}];
const V=[{c:'#FFC400',n:'VYRON Gain'},{c:'#2DB8FF',n:'Egg Protein'}];
const $=i=>document.getElementById(i);let cur=0,busy=false,vp=0,vv=0;
$('dots').innerHTML=P.map((p,i)=>`<button aria-label="${p.n}" data-i="${i}"></button>`).join('');
function text(i){const p=P[i],x=L[lang].p[i];document.documentElement.style.setProperty('--c',p.c);$('name').textContent=p.n;$('ghost').textContent=p.g;$('sub').textContent=x.sub;$('desc').textContent=x.d;
$('stats').innerHTML=x.st.map(s=>`<div>${s[0]}<small>${s[1]}</small></div>`).join('');
document.querySelectorAll('#dots button').forEach((b,k)=>b.setAttribute('aria-current',k==i))}
function go(n){n=(n+P.length)%P.length;if(busy||n==cur)return;busy=true;const dir=n>cur||(cur==P.length-1&&n==0)?1:-1;
const a=$('j'+cur),b=$('j'+n);$('info').classList.add('swap');
b.style.transition='none';b.classList.toggle('left',dir<0);void b.offsetWidth;b.style.transition='';
a.classList.remove('on');a.classList.toggle('left',dir>0);b.classList.remove('left');b.classList.add('on');
setTimeout(()=>{text(n);$('info').classList.remove('swap')},350);
setTimeout(()=>{busy=false},900);cur=n}
$('next').onclick=()=>go(cur+1);$('prev').onclick=()=>go(cur-1);
$('dots').onclick=e=>{if(e.target.dataset.i!=null)go(+e.target.dataset.i)};
addEventListener('keydown',e=>{if(e.key=='ArrowRight')go(cur+1);if(e.key=='ArrowLeft')go(cur-1)});
let sx=null;$('stage').addEventListener('touchstart',e=>sx=e.touches[0].clientX,{passive:true});
$('stage').addEventListener('touchend',e=>{if(sx==null)return;const d=e.changedTouches[0].clientX-sx;if(Math.abs(d)>40)go(cur+(d<0?1:-1));sx=null});
/* range viewer */
function showV(){const v=V[vp],x=L[lang].p[vp],vn=L[lang].vn;$('viewer').style.setProperty('--vc',v.c);$('vname').textContent=v.n;$('vsub').textContent=x.sub;$('vdesc').textContent=x.d;
$('vfacts').innerHTML=x.f.map(f=>`<li>${f}</li>`).join('');
$('views').innerHTML=vn.map((n,i)=>`<button data-v="${i}" aria-pressed="${i==vv}">${n}</button>`).join('');
document.querySelectorAll('.gal').forEach(g=>{g.classList.toggle('on',+g.dataset.p==vp);g.querySelectorAll('.ph').forEach(im=>{im.classList.toggle('on',+im.dataset.v==vv);im.alt='VYRON '+V[+g.dataset.p].n.replace('VYRON ','')+' — '+vn[+im.dataset.v]})});
document.querySelectorAll('#tabs button').forEach(b=>b.setAttribute('aria-selected',+b.dataset.p==vp))}
$('tabs').onclick=e=>{if(e.target.dataset.p!=null){vp=+e.target.dataset.p;vv=0;showV()}};
$('views').onclick=e=>{if(e.target.dataset.v!=null){vv=+e.target.dataset.v;showV()}};
let px=null;$('photo').addEventListener('touchstart',e=>px=e.touches[0].clientX,{passive:true});
$('photo').addEventListener('touchend',e=>{if(px==null)return;const d=e.changedTouches[0].clientX-px;if(Math.abs(d)>40){vv=(vv+(d<0?1:-1)+5)%5;showV()}px=null});
/* language */
function setLang(l,save){if(!L[l])l='en';lang=l;const D=L[l];
document.documentElement.lang=l;document.title=D.title;
const md=document.querySelector('meta[name=description]');if(md)md.content=D.desc;
document.querySelectorAll('[data-i]').forEach(e=>{if(D[e.dataset.i]!=null)e.innerHTML=D[e.dataset.i]});
const am={prev:D.a_prev,next:D.a_next,views:D.a_views};
document.querySelectorAll('[data-ia]').forEach(e=>e.setAttribute('aria-label',am[e.dataset.ia]));
document.querySelectorAll('.lang button').forEach(b=>b.setAttribute('aria-pressed',b.dataset.l==l));
text(cur);showV();
if(save){try{localStorage.setItem('vyron-lang',l)}catch(e){}}}
document.querySelector('.lang').onclick=e=>{const b=e.target.closest('button');if(b)setLang(b.dataset.l,true)};
let init='en';try{init=new URLSearchParams(location.search).get('lang')||localStorage.getItem('vyron-lang')||'en'}catch(e){}
setLang(init,false);
