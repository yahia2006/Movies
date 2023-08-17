let imgs=document.getElementsByClassName('im')
let btns=document.getElementsByClassName('carddd')
var likes=document.getElementsByClassName('like')
let num=0
for(let i=0;i<imgs.length&&btns.length;i++){
    btns[1].addEventListener('click',()=>{
        num++
        imgs[i].style.transform=`translateX(-100%)`
        btns[0].style.background='none'
        btns[2].style.background='none'
        btns[1].style.backgroundColor='tomato'

    })
    btns[2].addEventListener('click',()=>{
        num++
        imgs[i].style.transform=`translateX(-200%)`
        btns[0].style.background='none'
        btns[1].style.background='none'
        btns[2].style.backgroundColor='tomato'

    })
    btns[0].addEventListener('click',()=>{
        num++
        imgs[i].style.transform=`translateX(0%)`
        btns[2].style.background='none'
        btns[1].style.background='none'
        btns[0].style.backgroundColor='tomato'

    })
}





const opensetting=document.getElementById('opensetting')
const closesetting=document.getElementById('closessetting')
let settingcard=document.getElementById('setcard')
opensetting.addEventListener('click',()=>{
    settingcard.style.transform='translateY(0)';
})
closesetting.addEventListener('click',()=>{
    settingcard.style.transform='translateY(-200%)';
})
var colorsettingdiv=document.querySelectorAll('.changecolor div')
var alinks=document.getElementsByClassName('nava')
var like=document.getElementsByClassName('like')

for(let cs=0;cs<colorsettingdiv.length&&alinks.length;cs++){
    var cardsBrowse=document.getElementsByClassName('card-Browse')
    var cardsBrowseText=document.getElementsByClassName('text-card-browse')
    let colorsarray=['aqua','crimson','goldenrod','tomato','cornflowerblue']
    for(let hov=0;hov<cardsBrowse.length;hov++){
        cardsBrowse[hov].addEventListener('mouseover',()=>{
           cardsBrowseText[hov].style.backgroundColor=colorsarray[cs]
           cardsBrowseText[hov].style.scale='1'
        })
        cardsBrowse[hov].addEventListener('mouseleave',()=>{
            cardsBrowseText[hov].style.scale='0'
        })
        
    }
    for(let lk1=0;lk1<like.length;lk1++){
        like[lk1].style.backgroundColor=colorsarray[cs]
    
    }
    colorsettingdiv[cs].addEventListener('click',()=>{
        window.location.reload()
        window.localStorage.textbodycolor=colorsarray[cs]
        document.getElementById('log').style.color=colorsarray[cs]
        document.getElementById('sub').style.backgroundColorcolor=colorsarray[cs]
        document.getElementById('ym').style.color=colorsarray[cs]
        alinks[0].style.color=colorsarray[cs]
        alinks[1].style.color=colorsarray[cs]
        like[cs].style.backgroundColor=colorsarray[cs]
        alinks[2].style.color=colorsarray[cs]
        document.getElementById('gl').style.color=colorsarray[cs]
        document.getElementById('wnow').style.backgroundColor=colorsarray[cs]
        btns[0].style.border=`2px solid ${colorsarray[cs]}`
        btns[1].style.border=`2px solid ${colorsarray[cs]}`
        btns[2].style.border=`2px solid ${colorsarray[cs]}`
        btns[1].addEventListener('click',()=>{
            num++
            btns[0].style.background='none'
            btns[2].style.background='none'
            btns[1].style.backgroundColor=colorsarray[cs]
    
        })
        btns[2].addEventListener('click',()=>{
            num++
            
            btns[0].style.background='none'
            btns[1].style.background='none'
            btns[2].style.backgroundColor=colorsarray[cs]
        })
        btns[0].addEventListener('click',()=>{
            num++
            btns[2].style.background='none'
            btns[1].style.background='none'
            btns[0].style.backgroundColor=colorsarray[cs]
    
        })
        btns[0].style.backgroundColor=colorsarray[cs]
        document.getElementsByClassName('text-card-browse').style.backgroundColor=colorsarray[cs]
    })

    



}
var btntra=document.getElementsByClassName('transition')
for(let b=0;b<btntra.length;b++){
    btntra[0].addEventListener('click',()=>{
        btntra[0].style.backgroundColor='tomato'
        btntra[1].style.backgroundColor='#444'
        imgs[0].style.transition='0.4s all linear'
        imgs[1].style.transition='0.4s all linear'
        imgs[2].style.transition='0.4s all linear'
        

    })
    btntra[1].addEventListener('click',()=>{
        btntra[1].style.backgroundColor='tomato'
        btntra[0].style.backgroundColor='#444'
        imgs[0].style.transition='0s all linear'
        imgs[1].style.transition='0s all linear'
        imgs[2].style.transition='0s all linear'        
    })
   
}
window.onpageshow=()=>{
    let colorText=window.localStorage.getItem('textbodycolor')
    alinks[0].style.color=colorText
    alinks[1].style.color=colorText
    alinks[2].style.color=colorText
    document.getElementById('log').style.color=colorText
    document.getElementById('ym').style.color=colorText
    document.getElementById('gl').style.color=colorText
    document.getElementById('sub').style.backgroundColor=colorText
    document.getElementById('wnow').style.backgroundColor=colorText
    btns[0].style.border=`2px solid ${colorText}`
    btns[1].style.border=`2px solid ${colorText}`
    btns[2].style.border=`2px solid ${colorText}`
    btns[1].addEventListener('click',()=>{
        num++
        btns[0].style.background='none'
        btns[2].style.background='none'
        btns[1].style.backgroundColor=colorText

    })
    for(let lk=0;lk<like.length;lk++){
        like[lk].style.backgroundColor=colorText
    }
    btns[2].addEventListener('click',()=>{
        num++
        
        btns[0].style.background='none'
        btns[1].style.background='none'
        btns[2].style.backgroundColor=colorText
    })
    btns[0].addEventListener('click',()=>{
        num++
        btns[2].style.background='none'
        btns[1].style.background='none'
        btns[0].style.backgroundColor=colorText

    })
    btns[0].style.backgroundColor=colorText
    var cardsBrowse=document.getElementsByClassName('card-Browse')
    var cardsBrowseText=document.getElementsByClassName('text-card-browse')
    for(let hov=0;hov<cardsBrowse.length;hov++){
    cardsBrowse[hov].addEventListener('mouseover',()=>{
       cardsBrowseText[hov].style.backgroundColor=colorText
       cardsBrowseText[hov].style.scale='1'
    })
    cardsBrowse[hov].addEventListener('mouseleave',()=>{
        cardsBrowseText[hov].style.scale='0'
     })
    }
    }
let nav=document.getElementById('navmobileopen')
let cnav=document.getElementById('navmobileclose')
nav.addEventListener('click',()=>{
    nav.style.display='none'
    cnav.style.display='block'
    document.getElementById('nv').style.left='0'
})
cnav.addEventListener('click',()=>{
    cnav.style.display='none'
    nav.style.display='block'
    document.getElementById('nv').style.left='-100%'
})

window.onscroll=()=>{
    this.addEventListener('scroll',()=>{
        if(window.scrollY>500){
            //document.getElementById('inp').style.border='2px solid black'
            //document.getElementById('ic').style.color='black'
            //document.getElementById('ic1').style.color='black'
            //document.getElementById('opensetting').style.color='black'   
            document.getElementById('hd').style.backgroundColor='black'
            //document.getElementById('navmobileopen').style.color='black'
            //document.getElementById('navmobileclose').style.color='black'
           
        }else{
            document.getElementById('hd').style.background='none'
            document.getElementById('inp').style.border='2px solid white'
            document.getElementById('ic').style.color='white'
            document.getElementById('ic1').style.color='white'
            document.getElementById('opensetting').style.color='white'
            document.getElementById('navmobileopen').style.color='white'
            document.getElementById('navmobileclose').style.color='white'
        }
    })
}
if(window.innerWidth<999){
    window.onscroll=()=>{
        this.addEventListener('scroll',()=>{
            if(window.scrollY>500){
                document.getElementById('inp').style.border='2px solid black'
                document.getElementById('ic').style.color='white'
                document.getElementById('ic1').style.color='white'
                document.getElementById('opensetting').style.color='white' 
                document.getElementById('navmobileopen').style.color='white'
                document.getElementById('navmobileclose').style.color='white'
                document.getElementById('hd').style.backgroundColor='black'
               
            }else{
                document.getElementById('hd').style.background='none'
                document.getElementById('inp').style.border='2px solid white'
                document.getElementById('ic').style.color='white'
                document.getElementById('ic1').style.color='white'
                document.getElementById('opensetting').style.color='white'
                document.getElementById('navmobileopen').style.color='white'
                document.getElementById('navmobileclose').style.color='white'
                document.getElementById('hd').style.background='none'
            }
        })
    }
   

}











