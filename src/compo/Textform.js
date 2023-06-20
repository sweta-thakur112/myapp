import React , {useState} from 'react'

export default function Textform(props) {
const[text,settext]= useState('text is here');
const handleupclick = () =>{
let n= text.toUpperCase();
settext(n);
}
const handlelpclick = (event) =>{
let n= text.toLocaleLowerCase();
settext(n);
}
const handleOnchange = (event) =>{
console.log("uppercase change");
settext(event.target.value)
}


return (
 <>
<div className="container mb-1" style={{ color : props.mode==='dark'?'white' : '#202060'}}>
    
<div className="mb-3" >
<h1>{props.heading}</h1>
<label for="textbox" className="form-label"></label>
<textarea className="form-control" id="textbox" rows="8" value={text} onChange={handleOnchange} style={{ backgroundColor : props.mode==='dark'?'gray' : 'white'}}></textarea>
</div >
<div className="d-grid gap-2 d-md-flex justify-content-md-start">
<button className="btn btn-primary p-3" onClick={handleupclick}>convert uppercase</button>
 <button className="btn btn-primary p-3" onClick={handlelpclick}>convert lowercase</button> 

</div>
<div className="container mb-1" style={{ color : props.mode==='dark'?'white' : '#202060'}}> 
<h1 >Your text summary</h1>
<p >{text.split(" ").length} words and {text.length} characters</p>
<p>{text.length>0? 0.08*text.split(" ").length : 0} minutes read</p>
</div>
<div className="container mb-1">
<h2> Preview</h2>
<p>{text.length>0?text: "Enter text to preview"}</p>
</div>

</div>
</>
)
}
