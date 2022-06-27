const themeDots=document.getElementsByClassName('theme-dot');
let theme=localStorage.getItem('theme');
if(theme == null){
    setTheme('light-mode')
}else{
    setTheme(theme)
}
for(var i=0 ; themeDots.length>i;i++){
    themeDots[i].addEventListener('click',(e)=>{
       
        setTheme(e.target.id)
    })
}

function setTheme(mode){
    if(mode === 'light-mode'){
        document.getElementById('theme-style').href= 'style.css'
    }else if(mode === 'blue-mode'){
        document.getElementById('theme-style').href= 'blue.css'
        
    }else if(mode === 'green-mode'){
        document.getElementById('theme-style').href= 'green.css'
        
        
        
    }else if(mode === 'purple-mode'){
        document.getElementById('theme-style').href= 'purple.css'
        console.log('Purple Mode Triggered');

    }
    
localStorage.setItem('theme',mode)
}

