const css = document.querySelector('#cssfile')
const icon = document.querySelector('#icon')

icon.addEventListener('click', ()=>{

if(icon.hasAttributes('fa-sun')){
  css.setAttribute('href', 'styles2.css')
  icon.classList.remove('fa-sun')
  icon.classList.add('fa-moon')
}

else if(icon.hasAttributes('fa-moon'))
{
  css.setAttribute('href', 'styles.css')
  icon.classList.remove('fa-moon')
  icon.classList.add('fa-sun')

}



})
