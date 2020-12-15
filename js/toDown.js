// to the top button-------------------------------------------------------------
const toTop =  document.querySelector(".toTop");

window.addEventListener('scroll',() =>{
if(window.pageYOffset < 100){
	toTop.style.display = 'block'
}
else
	toTop.style.display = 'none';

})
