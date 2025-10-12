/*let quantity=0||JSON.parse( JSON.parse( localStorage.getItem('quantity')));

document.querySelector('.plus-one').addEventListener('click',()=>{ 

  quantity+=1;
  JSON.stringify(localStorage.setItem('quantity',quantity));
  document.querySelector('input').value=`${quantity}`;
});
document.querySelector('.plus-two').addEventListener('click',()=>{ 

  quantity+=2;
   document.querySelector('input').value=`${quantity}`
   JSON.stringify(localStorage.setItem('quantity',quantity))
 
});
document.querySelector('.reset').addEventListener('click',()=>{ 

  quantity=0;
  JSON.stringify(localStorage.setItem('quantity',quantity));
  document.querySelector('input').value=`${quantity}`;
});

document.querySelector('.quantity').addEventListener('click',()=>{ 
 document.querySelector('input').value=`${quantity}`
});*/

/*
let dataAge=document.querySelector('.input').value;
if(dataAge.length>=2){
  document.querySelector('.input').addEventListener('input',(event)=>{ setTimeout(()=>{ 
    dataAge=document.querySelector('.input').value;
    console.log(dataAge);
    if(dataAge>22){ console.log(`You're elegibale to Apply`);}
    
  
  }, 2000);
  
  });
  
};*/;



let score= JSON.parse(localStorage.getItem('score')) ||{ Wins:0,
  Loses:0,
  Draws:0};

function Game(option) {
  
  if (option=='Rock'){ 
    let computerMove;
     
computerMove=Math.random();
if(computerMove<1/3){ 
  computerMove='Rock';
  score.Draws+=1;
  document.querySelector('input').value=`Draw`;
  JSON.stringify(localStorage.setItem('score',JSON.stringify(score)));
  alert(`Wins:${score.Wins}  Loses:${score.Loses}   Draws:${score.Draws}`);
 
  

}
else if(computerMove>1/3 && computerMove<2/3){
  computerMove='Paper'
  score.Loses+=1;
  document.querySelector('input').value=`You lose`;
  localStorage.setItem('score',JSON.stringify(score));
  alert(`Wins:${score.Wins}  Loses:${score.Loses}   Draws:${score.Draws}` );
}
  else{ 
    computerMove='Saissors';
    score.Wins+=1;
    document.querySelector('input').value=`You win`;
    localStorage.setItem('score',JSON.stringify(score));
    alert(`Wins:${score.Wins}  Loses:${score.Loses}   Draws:${score.Draws}` );

  };

  }
  else if(option=='Paper'){
    let computerMove;
    computerMove=Math.random();
  if(computerMove<1/3){ 
    computerMove='Rock'
    score.Wins+=1;
    document.querySelector('input').value=`You win`
    localStorage.setItem('score',JSON.stringify(score));
    alert(`Wins:${score.Wins}  Loses:${score.Loses}   Draws:${score.Draws}` );
  }
  else if(computerMove>1/3 && computerMove<2/3){
    computerMove='Paper'
    score.Draws+=1;
    document.querySelector('input').value=`Draw`;
    localStorage.setItem('score',JSON.stringify(score));
    alert(`Wins:${score.Wins}  Loses:${score.Loses}   Draws:${score.Draws}` );
  }
    else{ 
      computerMove='Saissors';
      score.Loses+=1;
      document.querySelector('input').value=`You lose`;
      localStorage.setItem('score',JSON.stringify(score));
      alert(`Wins:${score.Wins}  Loses:${score.Loses}   Draws:${score.Draws}` );
    }
   }
   else if(option=='Saissors'){ 
    let computerMove;
    computerMove=Math.random();
    if(computerMove<1/3){ 
      computerMove='Rock';
      score.Loses+=1;
      document.querySelector('input').value=`You lose`;
      localStorage.setItem('score',JSON.stringify(score));
      alert(`Wins:${score.Wins}  Loses:${score.Loses}   Draws:${score.Draws}` );
    }
    else if(computerMove>1/3 && computerMove<2/3){
      computerMove='Paper';
      score.Wins+=1;
      document.querySelector('input').value=`You win`;
      localStorage.setItem('score',JSON.stringify(score));
      alert(`Wins:${score.Wins}  Loses:${score.Loses}   Draws:${score.Draws}` );
    }
      else{ 
        computerMove='Saissors';
        score.Draws+=1;
        document.querySelector('input').value=`Draw`;
        localStorage.setItem('score',JSON.stringify(score));
        alert(`Wins:${score.Wins}  Loses:${score.Loses}   Draws:${score.Draws}` );
    }
  }
};



document.querySelector('input').addEventListener('keydown',(event)=>{ 
  if (event.key==='Enter') {
    console.log('nhabbek');
  }
  else{ console.log('fuck you!')}
  

});
document.querySelector('.Rock').addEventListener('click',()=>{ 
  const example=document.querySelector('input');

  let total;
  total=Number(example.value)+5 ;
  console.log(total);
  const doc=document.querySelector('.Rock');
  if (doc.innerText==='Rock') {
    doc.innerText='Rocked';
    
    doc.classList.add('test');
    doc.classList.remove('Rock1')
   
  }
  else{ 
    
    doc.classList.remove('test');
    doc.classList.add('Rock1')
    doc.innerText='Rock';
  };
  setTimeout(()=>{Game('Rock');},0)


});

document.querySelector('.Paper').addEventListener('click',()=>{ 
  Game('Paper');
  });


  document.querySelector('.Saissors').addEventListener('click',()=>{ 
    Game('Saissors');
    });
    document.querySelector('.Reset').addEventListener('click',()=>{ 
      score.Draws=0;
      score.Wins=0;
      score.Loses=0;
      document.querySelector('input').value='';
      localStorage.setItem('score',JSON.stringify(score));
    });
   
console.log(typeof JSON.stringify(score));
console.log(score);
const abdou={ 
  first_Name:'zerouali',
  age:33,
  ['job']:'web-developer'
};
console.log(abdou);
const {job}=abdou;
console.log(abdou);
console.log(job);
const object5={ 
  job,
  methode(){console.log('Artist');}
};
object5.methode();
/*. Object-Based vs. Object-Oriented
Object-Based: Focuses on using objects to organize code and data. It does not necessarily include advanced OOP concepts like inheritance or polymorphism.

Example: The DOM is object-based because it uses objects to represent the document structure.

Object-Oriented: Includes all features of object-based programming plus advanced concepts like inheritance, polymorphism, and encapsulation. */


const buttonElement= document.querySelector('.Reset');
console.log(buttonElement);


function autoPlay() {
  
  let polo=Math.random();
if(polo>=0 && polo<1/3){ 
  Game('Rock');
}
else if(polo>=1/3 && polo<2/3){ 
  Game('paper');
}
else if(polo>=2/3 && polo<1){ 
  Game('Saissors');
}
};
let intervalId;
let isAutoPlay=false;
document.querySelector('.Autoplay').addEventListener('click',()=>{ 
  /*setInterval(autoPlay(),3000);*/
  if(isAutoPlay===false){ 
    isAutoPlay=true;
   intervalId= setInterval(() => {autoPlay();
    
  },3000 );
  
}
  
  else { isAutoPlay=false;
    clearInterval(intervalId);
  
  };
console.log(isAutoPlay);

}

  );




  







  
  /*(2==10) ? console.log('truthy'): console.log('falsy');
 console.log( true && console.log('hello'));
 
 
let product={ 
  name:'T-shirt',
  number:5
}
console.log(product.name);
product.name='abdou';
console.log(product);
delete product.number;
console.log(product);
product.number=1;
console.log(product);
 
 
 */
  




