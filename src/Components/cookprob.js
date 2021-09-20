import { useState } from "react"

const Cook=()=>{
    const [Input,setInput]=useState({days:'',noi:'',ingredients:[]});

    const handler=(e)=>{
       const att=e.target.name
       const val=e.target.value
       if(att==='ingredients'){
           val=val.split(',');
       }
       setInput({...Input,[att]:val})
       console.log(Input);
    }
    const hnd=(e)=>{
        const att=e.target.previousSibling.previousSibling.name
       let val=e.target.previousSibling.previousSibling.value
       val=val.split(",")
      console.log(val);
       setInput({...Input,[att]:val})
       console.log(Input);
    }

    return (
        <section>
            <label htmlFor="days">Days</label><br/>
            <input name="days" id="days" onChange={handler}></input><br/>
            <label htmlFor="noi">No_of_Ingredients</label><br/>
            <input name="noi" id="noi"  onChange={handler}></input><br/>
            <label htmlFor="ingredients">ingredients</label><br/>
            <textarea name="ingredients" id="ingredients" rows="5" ></textarea><br/>
            <button onClick={hnd}>click</button>
        </section>
    )
}
export default Cook;