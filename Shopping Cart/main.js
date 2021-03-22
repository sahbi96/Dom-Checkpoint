

// bouton plus
let plus = document.querySelectorAll('.plus')
for (let i=0; i<plus.length; i++) {
  plus[i].addEventListener('click', function () {
    plus[i].nextElementSibling.value++
    
    totalSomme()

  })
}



// bouton moins
let btn =document.querySelectorAll('.moins')
for(let i=0; i<btn.length; i++){
    btn[i].addEventListener('click',function(){
        if(btn[i].previousElementSibling.value > 0){
            btn[i].previousElementSibling.value--
        }

       
        totalSomme()
    })
    
}
// calcule de somme
function totalSomme (){

    let prix =document.getElementsByClassName('prix')
    let quantity = document.querySelectorAll('.inp')
   
    let sum = 0;
    for(let i=0; i< prix.length; i++){
        
        sum  += parseInt(prix[i].innerText) * parseInt(quantity[i].value)
       
        
       
    }
   
    document.getElementById('total').innerText=sum
}

    document.getElementsByClassName('total').onload =totalSomme();


   
//like btn

var likeBtn = document.querySelectorAll('.like');
 for (var i=0 ; i<likeBtn.length; i++){
   likeBtn[i].addEventListener('click', function () {
      this.classList.toggle('likeRed');
   })
  }
  
//   })

// }
/*var like = document.getElementsByClassName('like');
    for(let i=0; i<like.length;i++){
      like[i].addEventListener('click', ()=> {
      console.log(like[i])
        // like[i].classList.toggle('likered')
        document.body.style.backgroundColor = "red";
        document.body.style.backgroundColor = "grey"
    })}*/


//delete product

let deleteBtn = document.querySelectorAll('.delete');
for (let i = 0; i < deleteBtn.length; i++) {
  deleteBtn[i].addEventListener('click', function () {
    deleteBtn[i].parentElement.parentElement.remove()

    
    totalSomme()
  });
}

   
    
