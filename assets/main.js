const menu=document.querySelector('.menu'),nav=document.querySelector('nav');menu?.addEventListener('click',()=>{nav.style.display=nav.style.display==='flex'?'none':'flex';if(nav.style.display==='flex'){Object.assign(nav.style,{position:'absolute',top:'78px',left:'0',right:'0',background:'#fff',padding:'25px 7vw',flexDirection:'column',boxShadow:'0 15px 30px #0001'})}});

const quoteForm=document.querySelector('#quote-form');
quoteForm?.addEventListener('submit',event=>{
  event.preventDefault();
  const data=new FormData(quoteForm);
  const body=[`Name / Company: ${data.get('name')}`,`Email: ${data.get('email')}`,`Estimated Quantity: ${data.get('quantity')}`,`Project Details: ${data.get('details')}`].join('\n');
  window.location.href=`mailto:lillyyutang@gmail.com?subject=${encodeURIComponent('GoodStartSocks custom socks quote request')}&body=${encodeURIComponent(body)}`;
});
