const backToTopButton=document.querySelector('.back-to-top')
console.log(backToTopButton);


function toTop(){
    window.scrollTo(0,0);
}

backToTopButton.addEventListener('click',toTop);

window.addEventListener('scroll', function(){
    let posY=window.scrollY;

    if(posY>0){
        backToTopButton.style.display='flex';
    }else{
        backToTopButton.style.display='none';
    }
})