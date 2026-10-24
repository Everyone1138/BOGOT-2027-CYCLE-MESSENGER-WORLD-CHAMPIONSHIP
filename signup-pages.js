/* Dedicated volunteer & sponsor forms: same PHP endpoints/admin CSVs as home page. */
(function () {
  const page = document.body.dataset.signupPage;
  const form = document.getElementById(page === 'volunteer' ? 'volunteer-form' : 'sponsor-apply-form');
  const message = document.getElementById(page === 'volunteer' ? 'volunteer-message' : 'sponsor-apply-message');
  if (!form || !message) return;
  const copy = {
    en: { back:'← Back to website',home:'Back to home ↗',eyebrow: 'CMWC / BOGOTÁ 2027 / '+page.toUpperCase(),
      title:page==='volunteer'?'VOLUNTEER SIGNUP':'SPONSOR APPLICATION',
      subtitle:page==='volunteer'?'Join the crew behind CMWC Bogotá 2027.':'Partner with CMWC Bogotá 2027.',
      formIntro:page==='volunteer'?'Tell us how you want to help. We will be in touch with more information.':'Tell us about your company or crew and how you would like to support the championship.',
      privacy:'Your information is sent to the CMWC registration team.',
      fields: page==='volunteer' ? ['FULL NAME','EMAIL','PHONE / WHATSAPP','CITY','PREFERRED ROLE','AVAILABILITY','FOOD PREFERENCE','OTHER FOOD PREFERENCE','FOOD ALLERGIES / NOTES','NOTES'] : ['COMPANY / CREW NAME','CONTACT NAME','EMAIL','PHONE / WHATSAPP','SPONSOR TYPE','WEBSITE / INSTAGRAM','HOW WOULD YOU LIKE TO HELP?'],
      submit:page==='volunteer'?'SIGN UP TO VOLUNTEER':'APPLY TO SPONSOR',
      success:'Thank you! Your application was received.', local:'Saved for the local VS Code preview. Live submissions go to the one.com admin dashboard.', fail:'Submission failed. Please try again.'},
    es: {back:'← Volver al sitio',home:'Volver al inicio ↗',eyebrow:'CMWC / BOGOTÁ 2027 / '+(page==='volunteer'?'VOLUNTARIADO':'PATROCINIO'),
      title:page==='volunteer'?'INSCRIPCIÓN DE VOLUNTARIADO':'SOLICITUD DE PATROCINIO',
      subtitle:page==='volunteer'?'Únete al equipo de CMWC Bogotá 2027.':'Apoya el CMWC Bogotá 2027.',
      formIntro:page==='volunteer'?'Cuéntanos cómo quieres colaborar. Te contactaremos con más información.':'Cuéntanos sobre tu empresa o colectivo y cómo te gustaría apoyar el campeonato.',
      privacy:'Tu información se envía al equipo de inscripción del CMWC.',
      fields:page==='volunteer' ? ['NOMBRE COMPLETO','CORREO ELECTRÓNICO','TELÉFONO / WHATSAPP','CIUDAD','ROL PREFERIDO','DISPONIBILIDAD','PREFERENCIAS ALIMENTARIAS','OTRA PREFERENCIA','ALERGIAS / NOTAS','COMENTARIOS'] : ['EMPRESA / COLECTIVO','NOMBRE DE CONTACTO','CORREO ELECTRÓNICO','TELÉFONO / WHATSAPP','TIPO DE PATROCINIO','WEB / INSTAGRAM','¿CÓMO QUIERES AYUDAR?'],
      submit:page==='volunteer'?'INSCRIBIRME COMO VOLUNTARIO/A':'SOLICITAR PATROCINIO',
      success:'¡Gracias! Recibimos tu solicitud.',local:'Guardado para la vista previa local de VS Code. Las inscripciones reales van al panel de administración de one.com.',fail:'No se pudo enviar. Vuelve a intentarlo.'}
  };
  const labels = [...form.querySelectorAll('label:not(.food-bubble):not(.housing-check)')];
  const originalLabels = labels.map(x=>x.textContent.trim());
  const optionLabels = ['No preference','Vegetarian','Vegan','Gluten-free','Lactose-free','Allergies / medical restriction','Other'];
  const esOptions = ['Sin preferencia','Vegetariano/a','Vegano/a','Sin gluten','Sin lactosa','Alergias / restricción médica','Otro'];
  let lang = localStorage.getItem('cmwc_language') === 'es'?'es':'en';
  function applyLanguage() {
    document.documentElement.lang = lang;
    localStorage.setItem('cmwc_language',lang);
    document.querySelectorAll('[data-copy]').forEach(n => n.textContent = copy[lang][n.dataset.copy]);
    document.querySelectorAll('.standalone-lang').forEach(b=>b.classList.toggle('active',b.dataset.lang===lang));
    labels.forEach((node,i)=>{ node.textContent = lang==='es' ? (copy.es.fields[i] || originalLabels[i]) : originalLabels[i]; });
    const housingTitle = form.querySelector('.housing-title');
    if (housingTitle) housingTitle.textContent = lang==='es' ? '¿NECESITAS ALOJAMIENTO EN BOGOTÁ?' : 'DO YOU NEED HOUSING IN BOGOTÁ?';
    const housingText = form.querySelector('.housing-check-text');
    if (housingText) housingText.textContent = lang==='es' ? 'Sí, necesito ayuda para encontrar alojamiento' : 'Yes, I need help finding accommodation';
    form.querySelectorAll('.food-bubble span').forEach((node,i)=>node.textContent=lang==='es'?esOptions[i]:optionLabels[i]);
    form.querySelector('button[type="submit"]').textContent=copy[lang].submit;
  }
  document.querySelectorAll('.standalone-lang').forEach(b=>b.addEventListener('click',()=>{lang=b.dataset.lang;applyLanguage();}));
  function refreshOther(){
    form.querySelectorAll('input[data-other-toggle]').forEach(box=>{
      const wrap=document.getElementById(box.dataset.otherToggle);
      if (wrap) {wrap.classList.toggle('hidden',!box.checked); if(!box.checked)wrap.querySelector('input').value='';}
    });
  }
  const bubbleGroup=form.querySelector('.food-bubble-group');
  if(bubbleGroup) bubbleGroup.addEventListener('change',e=>{
    if(e.target.type!=='checkbox')return;
    const boxes=[...bubbleGroup.querySelectorAll('input[type="checkbox"]')];
    if(e.target.value==='no-preference' && e.target.checked) boxes.forEach(b=>{if(b!==e.target)b.checked=false;});
    else if(e.target.checked){const no=boxes.find(b=>b.value==='no-preference');if(no)no.checked=false;}
    refreshOther();
  });
  function localMode(){return location.protocol==='file:'||['localhost','127.0.0.1',''].includes(location.hostname)||location.hostname.endsWith('.local');}
  if(localMode()) {const admin=document.getElementById('standalone-admin');if(admin)admin.href='admin/local-login.html';}
  function showMessage(text, ok){message.textContent=text;message.className='signup-message '+(ok?'success':'error');}
  form.addEventListener('submit',async e=>{
    e.preventDefault();if(!form.reportValidity())return;
    const payload=new FormData(form);payload.set('formLanguage',lang);
    const object={};for(const [key,value] of payload){if(key==='website')continue;const field=key.replace(/\[\]$/,'');object[field]=object[field]?object[field]+', '+value:value;}
    if (page==='volunteer') object.volunteerNeedsHousing = document.getElementById('volunteer-housing')?.checked ? 'Yes' : 'No';
    const key=page==='volunteer'?'cmwc_volunteer_signups':'cmwc_sponsor_applications';
    if(localMode()){
      try {const old=JSON.parse(localStorage.getItem(key)||'[]');old.push({...object,timestamp:Date.now()});localStorage.setItem(key,JSON.stringify(old));showMessage(copy[lang].local,true);form.reset();refreshOther();}catch(_){showMessage(copy[lang].fail,false);}
      return;
    }
    const submit=form.querySelector('button[type="submit"]');submit.disabled=true;
    try{
      const response=await fetch(form.action,{method:'POST',body:payload,headers:{'Accept':'application/json'}});
      const text=await response.text();let result;try{result=JSON.parse(text);}catch(_){result={ok:false,message:'Unexpected server response.'};}
      if(!response.ok||result.ok===false){showMessage(result.message||copy[lang].fail,false);return;}
      showMessage(result.message||copy[lang].success,true);form.reset();refreshOther();
    }catch(_){showMessage(copy[lang].fail,false);}finally{submit.disabled=false;}
  });
  applyLanguage();refreshOther();
})();
