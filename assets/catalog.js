const productCards=[...document.querySelectorAll('.product-card')];
const filterButtons=[...document.querySelectorAll('[data-filter]')];
filterButtons.forEach(button=>button.addEventListener('click',()=>{
  const category=button.dataset.filter;
  filterButtons.forEach(other=>{const active=other===button;other.classList.toggle('active',active);other.setAttribute('aria-pressed',String(active));});
  let count=0;
  productCards.forEach(card=>{const visible=category==='All'||card.dataset.category===category;card.hidden=!visible;if(visible)count++;});
  const label=document.querySelector('#product-count');
  if(label)label.textContent=`Showing ${count} ${count===1?'style':'styles'}`;
}));
