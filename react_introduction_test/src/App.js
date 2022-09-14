
import { useState } from 'react';
import './App.css';

function App() {
const [like, setLike] = useState (25);
const [like2, setLike2] = useState (0);
const [like3, setLike3] = useState (10);

function likes (){
  setLike ((prevLike)=> {
    return prevLike ? prevLike -1 : 0;
  });
}

function likes2 (){
  setLike2 ((prevLike2)=> {
    return prevLike2 ? prevLike2 -1 : 0;
  });
}

function likes3 (){
  setLike3 ((prevLike3)=> {
    return prevLike3 ? prevLike3 -1 : 0;
  });
}


  return (
    <div className="App">
      <p data-testid="countLike1">{like}</p>
      <button data-testid="plus" onClick={()=> setLike ((prevLike)=> prevLike + 1)} >1 Like +</button>
      <button data-testid="less"  onClick={()=> likes()} > 1 like - </button>

      <p data-testid="countLike2">{like2}</p>
      <button data-testid="plus2" onClick={()=> setLike2 ((prevlike2)=> prevlike2 + 1)} >1 Like +</button>
      <button data-testid="less2"  onClick={()=> likes2()} > 1 like - </button>

      <p data-testid="countLike3">{like3}</p>
      <button data-testid="plus3" onClick={()=> setLike3 ((prevLike3)=> prevLike3 + 1)} >1 Like +</button>
      <button data-testid="less3"  onClick={()=> likes3()} > 1 like - </button>


    </div>
    
  );
}

export default App;
