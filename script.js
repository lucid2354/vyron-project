const D={
 "vn": [
  "Front",
  "Right side",
  "Back",
  "Left side",
  "Lid (top)"
 ],
 "p": [
  {
   "sub": "High-calorie weight gainer · 3 kg · Chocolate",
   "d": "Built for mass gain. Protein, carbs, creatine and L-glutamine in every serving.",
   "st": [
    [
     "30 g",
     "protein per 100 g"
    ],
    [
     "112 g",
     "carbs"
    ],
    [
     "560",
     "kcal"
    ]
   ],
   "f": [
    "30 g protein per 100 g serving",
    "112 g carbs · 560 kcal",
    "Creatine monohydrate &amp; L-glutamine"
   ]
  },
  {
   "sub": "100% egg protein powder · 2 kg · Vanilla",
   "d": "Premium-quality egg protein with fast absorption, for before and after training.",
   "st": [
    [
     "25 g",
     "protein per serving"
    ],
    [
     "5.4 g",
     "BCAAs"
    ],
    [
     "4.2 g",
     "EAAs"
    ]
   ],
   "f": [
    "25 g protein per serving",
    "5.4 g BCAAs · 4.2 g EAAs",
    "Fast absorption, premium quality"
   ]
  }
 ]
};
const P=[{c:'#FFC400',n:'VYRON GAIN',g:'GAIN'},{c:'#2DB8FF',n:'EGG PROTEIN',g:'EGG'}];
const V=[{c:'#FFC400',n:'VYRON Gain'},{c:'#2DB8FF',n:'Egg Protein'}];
const $=i=>document.getElementById(i);let cur=0,busy=false,vp=0,vv=0;
$('dots').innerHTML=P.map((p,i)=>`<button aria-label="${p.n}" data-i="${i}"></button>`).join('');
function text(i){const p=P[i],x=D.p[i];document.documentElement.style.setProperty('--c',p.c);$('name').textContent=p.n;$('ghost').textContent=p.g;$('sub').textContent=x.sub;$('desc').textContent=x.d;
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
function showV(){const v=V[vp],x=D.p[vp],vn=D.vn;$('viewer').style.setProperty('--vc',v.c);$('vname').textContent=v.n;$('vsub').textContent=x.sub;$('vdesc').textContent=x.d;
$('vfacts').innerHTML=x.f.map(f=>`<li>${f}</li>`).join('');
$('views').innerHTML=vn.map((n,i)=>`<button data-v="${i}" aria-pressed="${i==vv}">${n}</button>`).join('');
document.querySelectorAll('.gal').forEach(g=>{g.classList.toggle('on',+g.dataset.p==vp);g.querySelectorAll('.ph').forEach(im=>{im.classList.toggle('on',+im.dataset.v==vv);im.alt='VYRON '+V[+g.dataset.p].n.replace('VYRON ','')+' — '+vn[+im.dataset.v]})});
document.querySelectorAll('#tabs button').forEach(b=>b.setAttribute('aria-selected',+b.dataset.p==vp))}
$('tabs').onclick=e=>{if(e.target.dataset.p!=null){vp=+e.target.dataset.p;vv=0;showV()}};
$('views').onclick=e=>{if(e.target.dataset.v!=null){vv=+e.target.dataset.v;showV()}};
let px=null;$('photo').addEventListener('touchstart',e=>px=e.touches[0].clientX,{passive:true});
$('photo').addEventListener('touchend',e=>{if(px==null)return;const d=e.changedTouches[0].clientX-px;if(Math.abs(d)>40){vv=(vv+(d<0?1:-1)+5)%5;showV()}px=null});
text(cur);showV();
