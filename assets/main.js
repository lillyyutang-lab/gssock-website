const menu=document.querySelector('.menu'),nav=document.querySelector('#primary-nav');
menu?.addEventListener('click',()=>{const open=nav.style.display!=='flex';nav.style.display=open?'flex':'none';menu.setAttribute('aria-expanded',String(open));if(open){Object.assign(nav.style,{position:'absolute',top:'78px',left:'0',right:'0',background:'#fff',padding:'25px 7vw',flexDirection:'column',boxShadow:'0 15px 30px #0001'})}});
nav?.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{if(window.matchMedia('(max-width:900px)').matches){nav.style.display='none';menu?.setAttribute('aria-expanded','false')}}));

const quoteForm=document.querySelector('#quote-form');
quoteForm?.addEventListener('submit',event=>{event.preventDefault();const data=new FormData(quoteForm);const body=[`Name / Company: ${data.get('name')}`,`Email: ${data.get('email')}`,`Estimated Quantity: ${data.get('quantity')}`,`Project Details: ${data.get('details')}`].join('\n');window.location.href=`mailto:info@goodstartsocks.com?subject=${encodeURIComponent('GoodStartSocks custom socks quote request')}&body=${encodeURIComponent(body)}`;});

document.querySelectorAll('a[href="/"]').forEach(link=>link.addEventListener('click',event=>{if(window.location.protocol==='file:'){event.preventDefault();window.location.href='index.html';}}));

const headerContact=document.querySelector('header .btn.sm');
if(headerContact){headerContact.textContent='Contact Us';headerContact.href='contact.html';}
const contactButtonStyle=document.createElement('style');
contactButtonStyle.textContent='header .btn.sm{background:#625cff}header .btn.sm:hover{background:#5149e6}';
document.head.append(contactButtonStyle);

const whatsappStyle=document.createElement('style');
whatsappStyle.textContent='.whatsapp-float{position:fixed;right:28px;bottom:28px;z-index:50;display:flex;align-items:center;gap:10px;padding:10px 17px 10px 10px;border-radius:999px;background:#25d366;color:#fff;box-shadow:0 12px 28px #116d3830;font:800 14px/1.05 Inter,Arial,sans-serif;transition:transform .2s,box-shadow .2s}.whatsapp-float:hover{transform:translateY(-3px);box-shadow:0 16px 34px #116d3845}.whatsapp-float__icon{display:grid;place-items:center;width:38px;height:38px;border-radius:50%;background:#fff;color:#25d366;font-size:22px;line-height:1}.whatsapp-float__text{display:grid;gap:2px}.whatsapp-float__text small{font-size:11px;font-weight:700}@media(max-width:600px){.whatsapp-float{right:17px;bottom:17px;padding:9px}.whatsapp-float__text{display:none}.whatsapp-float__icon{width:42px;height:42px}}';
document.head.append(whatsappStyle);
const whatsappLink=document.createElement('a');
whatsappLink.className='whatsapp-float';
whatsappLink.href='https://wa.me/8615262579178';
whatsappLink.target='_blank';
whatsappLink.rel='noopener noreferrer';
whatsappLink.setAttribute('aria-label','Chat with GoodStartSocks on WhatsApp');
whatsappLink.innerHTML='<span class="whatsapp-float__icon" aria-hidden="true">☎</span><span class="whatsapp-float__text">WhatsApp<small>Chat with us</small></span>';
document.body.append(whatsappLink);
