const m=document.querySelector('.menu');m.addEventListener('click',()=>{const open=m.getAttribute('aria-expanded')!=='true';m.setAttribute('aria-expanded',String(open));document.querySelector('#nav').classList.toggle('open',open)});
const photoDialog=document.querySelector('.photo-dialog');
if(photoDialog && typeof photoDialog.showModal==='function'){
 let opener;
 document.querySelectorAll('.gallery-link').forEach(link=>link.addEventListener('click',event=>{event.preventDefault();opener=link;const img=photoDialog.querySelector('img');img.src=link.href;img.alt=link.dataset.caption;photoDialog.querySelector('p').textContent=link.dataset.caption;photoDialog.showModal();}));
 photoDialog.querySelector('button').addEventListener('click',()=>photoDialog.close());
 photoDialog.addEventListener('click',event=>{if(event.target===photoDialog){const r=photoDialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)photoDialog.close();}});
 photoDialog.addEventListener('close',()=>opener?.focus());
}

document.querySelectorAll('.hem-catalog-open').forEach(catalogOpen=>{
 const catalogDialog=document.getElementById(catalogOpen.getAttribute('aria-controls'));
 if(!catalogDialog)return;
 catalogOpen.addEventListener('click',()=>{
  const frame=catalogDialog.querySelector('iframe');
  if(typeof catalogDialog.showModal!=='function'){window.open(frame.dataset.src,'_blank','noopener');return;}
  if(!frame.getAttribute('src'))frame.src=frame.dataset.src;
  catalogDialog.showModal();
 });
 catalogDialog.querySelector('.hem-catalog-close').addEventListener('click',()=>catalogDialog.close());
 catalogDialog.addEventListener('click',e=>{if(e.target===catalogDialog){const b=catalogDialog.getBoundingClientRect();if(e.clientX<b.left||e.clientX>b.right||e.clientY<b.top||e.clientY>b.bottom)catalogDialog.close();}});
 catalogDialog.addEventListener('close',()=>catalogOpen.focus());
});
