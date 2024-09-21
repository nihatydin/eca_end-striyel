document.addEventListener("DOMContentLoaded", function() {

console.log("READY");


const collapse = document.getElementById('collapse');
const collapse_opener = document.getElementById('collapse_opener');
const collapse_closer = document.getElementById('collapse_closer');
const con = document.getElementById('con');
let nav = document.getElementById('nav');

collapse_opener.addEventListener('click', ()=> {
    //nav.style.borderBottom='0';

    collapse.style.display = 'block';
    con.style.display = 'none';
    collapse_opener.style.display='none';
    collapse_closer.style.display='block';



});
collapse_closer.addEventListener('click', ()=> {
    //nav.style.borderBottom='1px solid #e9e9e9';


    collapse.style.display = 'none';
    con.style.display = 'block';
    collapse_opener.style.display='block';
    collapse_closer.style.display='none';

});



const search_input = document.getElementById('search_input');
const search_btn = document.getElementById('search_btn');
const search_input_mobile = document.getElementById('search_input_mobile');
const search_btn_mobile = document.getElementById('search_btn_mobile');

search_input.addEventListener('mousedown', ()=> {
    search_input.style.boxShadow = 'none';
    search_input.style.backgroundColor = 'rgb(242, 242, 242)';
});
search_btn.addEventListener('mousedown', ()=> {
    search_btn.style.boxShadow = 'none';
});
search_input_mobile.addEventListener('mousedown', ()=> {
    search_input_mobile.style.boxShadow = 'none';
    search_input_mobile.style.backgroundColor = 'rgb(242, 242, 242)';
});
search_btn_mobile.addEventListener('mousedown', ()=> {
    search_btn_mobile.style.boxShadow = 'none';
});
search_btn.addEventListener('click', ()=> {
    console.log ( 'search_btn clicked! value: ' + search_input.value);
});
search_btn_mobile.addEventListener('click', ()=> {
    console.log ('search_btn_mobile clicked! value: ' + search_input_mobile.value);
});




let mobile_search_icon = document.getElementById('mobile-search-icon');
let mobile_search_div = document.getElementById('mobile-search-div');
let mobile_search_div_closer = document.getElementById('mobile-search-div-closer');
const suggestions = document.getElementById('suggestions');

for(let i=1;i<99;i++){
    mobile_search_icon.addEventListener('click' , ()=> {

        if(i%2==0){
            mobile_search_div.style.display='flex';  
            mobile_search_icon.style.display='none';
            mobile_search_div_closer.style.display='block';
            con.style.display='none';
            nav.style.display='none';
            search_input_mobile.focus();
            search_input_mobile.style.boxShadow='none';
            search_input_mobile.style.backgroundColor='rgb(242, 242, 242)';
            suggestions.style.display='block';
            // down.style.transform='rotateX(0deg)';
            // alt_nav.style.display='none';

        }
        i=i+1;
    })
};
for(let i=1;i<99;i++){
    mobile_search_div_closer.addEventListener('click' , ()=> {
        if(i%2==0){
            mobile_search_div.style.display='none';  
            mobile_search_icon.style.display='block';
            mobile_search_div_closer.style.display='none';
            con.style.display='block';
            nav.style.display='block';
            // nav.style.boxShadow='0 3px 8px -6px rgb(177, 177, 177)';
            // navbar bug çözümü 
            collapse.style.display = 'none';
            collapse_closer.style.display='none';
            collapse_opener.style.display='block';
            suggestions.style.display='none';
        }
        i=i+1;
    })
};




let nav_it = document.querySelectorAll('.nav-it');

    for(let i=0;i<nav_it.length;i++){
        nav_it[i].addEventListener('click', function(event){
                
            collapse.style.display='none';
           // alt_nav.style.display='none';
           // down.style.transform='rotateX(0deg)';

            con.style.display='block';
            collapse_closer.style.display='none';
            collapse_opener.style.display='block';
            // nav.style.boxShadow='0 3px 8px -6px rgb(177, 177, 177)';

            mobile_search_div.style.display='none';
            suggestions.style.display='none';
            nav.style.display='block';
            mobile_search_icon.style.display='block';

            console.log('You have clicked: '+ event.target.innerText); 
        });
    }




let ust = document.getElementById('ust');
let alt_nav = document.getElementById('alt-nav');

if(screen.width < 1200){
for(let i=1;i<99;i++){
    ust.addEventListener('click' , ()=> {
        if(i%2==0){
            alt_nav.style.display='block';
        }else{
            alt_nav.style.display='none';
        }
        i=i+1;
    })
}
}


const down = document.getElementById('fa-chevron-down');
if(screen.width < 1200){
    for(let i=0;i<99;i++){
    ust.addEventListener('click' , ()=>{
        if(i%2==0){   
            down.style.transform='rotateX(180deg)';
            down.style.transition='.3s';
        }
        else{
            down.style.transform='rotateX(0deg)';
        }
        i++;
    })
}
}





const likeBtn = document.querySelectorAll(".like__btn");
likeBtn.forEach(function (item) {
    item.addEventListener("click", (event) => {
        let likeIcon = item.querySelector(".icon");
        let count = item.querySelector(".count");
        if (+count.textContent == 0) {
            clicked = true;
            likeIcon.innerHTML = `<i class="fa-solid fa-heart" style="color: #ff0000;"></i>`;
            count.textContent++;
        } else {
            clicked = false;
            likeIcon.innerHTML = `<i class="fa-regular fa-heart"></i>`;
            count.textContent--;
        }
    });
})






let myUp = document.getElementById('myUp');

window.onscroll = ()=>{
    if (document.documentElement.scrollTop > 1000) {
        myUp.style.display = "flex";
    } else {
        myUp.style.display = "none";
    }
};








});