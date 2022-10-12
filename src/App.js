
import './App.css';

function App() {

  return (
    <div className="App">
  
   <div className='content'>
   <textarea type={'text'} placeholder='0' id='balaji' className='dsply' readOnly></textarea>
   <div className='btndiv'>
   <div>
   <button onClick={event => show(event,9)} className='btn'>9</button>
   <button onClick={event => show(event,8)} className='btn'>8</button>
   <button onClick={event => show(event,7)} className='btn'>7</button>
   <button onClick={clear} className='btn'>C</button>
   </div>
   <div>
   <button onClick={event => show(event,6)} className='btn'>6</button>
   <button onClick={event => show(event,5)} className='btn'>5</button>
   <button onClick={event => show(event,4)} className='btn'>4</button>
   <button onClick={event => show(event,'+')} className='btn'>+</button>
   </div>
   <div>
   <button onClick={event => show(event,3)} className='btn'>3</button>
   <button onClick={event => show(event,2)} className='btn'>2</button>
   <button onClick={event => show(event,1)} className='btn'>1</button>
   <button onClick={event => show(event,'-')} className='btn'>-</button>
   </div>
   <div>
   <button onClick={event => show(event,'.')} className='btn'>.</button>
   <button onClick={event => show(event,0)} className='btn'>0</button>
   <button onClick={event => show(event,'/')} className='btn'>/</button>
   <button onClick={event => show(event,'*')} className='btn'>X</button>
   </div>
   <div>
   <button onClick= {evaluate} className='last'>Result</button>
   <button onClick={backspace} className='last'>Backspac</button>
   </div>
   </div>
   </div>
   </div>
  );
}
const show =(event, b) => {
document.getElementById("balaji").value += b;
}

function evaluate(){
 var expression= document.getElementById("balaji").value;
 document.getElementById("balaji").value = eval(expression);
}
function backspace() {
  var val = document.getElementById("balaji").value;
 var back= val.substring(0,val.length-1);
 document.getElementById("balaji").value = back;

}
function clear() {
  document.getElementById("balaji").value = "";
}
export default App;
