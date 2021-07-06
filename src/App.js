import logo from './logo.svg';
import { useState } from "react";
import './App.css';

function App() {
  
  const [name,setName]= useState('');
  const [email,setEmail]= useState('');
  const [number,setNumber]= useState('');
  const [imageFile,setImageFile]= useState('');
  

  const handleNameChange = (newValue) =>{
    setName(newValue)
  } 
  const handleEmailChange = (newValue) =>{
    setEmail(newValue)
  }  
  const handleNumberChange = (newValue) =>{
    setNumber(newValue)
  }
  const handleImageChange = (newValue) =>{
    const file = newValue[0];
    //console.log(formData)
    setImageFile(URL.createObjectURL(file))
  }     

  const [tabledata,setTabedata] = useState([])

  const handleSubmit = () =>{
    console.log(tabledata)
    const temp = tabledata;
    if(!(name===''||email===''||number===''||imageFile==='')){
      temp.push({
        name:name,
        email:email,
        number:number,
        image:imageFile
      })
      setTabedata(temp);
      setName('');
      setEmail('');
      setNumber('');
      setImageFile('');
    }else{
      alert("Some fields are missing")
    }
 

  }

  return (
    <div className="App">
    <form onSubmit={handleSubmit}>
      <h1>User Details</h1>
      <br/>
    <div style={{display:`flex`,margin:`0em 10em`,justifyContent:`space-between`}}>
    <div style={{paddingLeft:"5px"}}>
    Name:
    </div>
     <input type="text" name="name" value={name} onChange={(e)=>handleNameChange(e.target.value)}/>
     <div style={{paddingLeft:"5px"}}>
     Email:
     </div>
     <input type="email" name="email" value={email} onChange={(e)=>handleEmailChange(e.target.value)}/>
     <div style={{paddingLeft:"5px"}}>
     Number:
     </div>
     <input type="number"  name="number" value={number} onChange={(e)=>handleNumberChange(e.target.value)}/>
     <div style={{paddingLeft:"5px"}}>
     Image:
     </div>
     <input type="file"  onChange={(e)=>handleImageChange(e.target.files)}/>
     </div>
     </form>
     <button onClick={handleSubmit}>Submit</button>
     <center>
     <table>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Number</th>
          <th>Image</th>
          </tr>
     {
       tabledata.map((each)=>(
        <tr>
          <td>{each.name}</td>
          <td>{each.email}</td>
          <td>{each.number}</td>
          <td><img src={each.image} height="30px" width="30px"/></td>
        </tr>
       ))
     }
     </table>
     </center>
    </div>
    
  );
}

export default App;
