import { Row , Col} from 'react-bootstrap';
import './App.css';
import { TextField } from '@mui/material';
import Stack from '@mui/material/Stack';
import { Button } from '@mui/material';
import { useState } from 'react';
function App(){
  
  const[weight,setweight] = useState(0)
  const[height,setheight] = useState(0)
  const[bmi,setbmi] = useState(0 )
  const[age ,setage]=useState(0)



/* conditional rendering */
  const[isweight,setisweight] = useState(true)
  const[isheight,setisheight] = useState(true)
  const[isbmi,setisbmi] = useState(true)
  const[isage ,setisage]=useState(true)
 const[status ,setstatus]=useState("")


 const[isimage,setisimage]=useState(false)
const[isimage1,setisimage1]=useState(false)
const[isimage2,setisimage2]=useState(false)

  const getvalidate=(e)=>{

    const{name,value}=e.target
   /* /*  console.log(name,value); */
    /* if(!!value.match(/^[0-9]+$/)) */

if(!!value.match(/^[0-9]*.?[0-9]+$/)){
  if(name==='weight'){
  setweight(value)
  setisweight(true)}
  else if(name==="height"){
    setheight(value)
    setisheight(true)}

    else if(name==="age"){
      setage(value)
      setisage(true)}
}
else{
  if(name==='weight'){
  setweight(value)
  setisweight(false)}
  else if(name==='height'){
    setheight(value)
    setisheight(false)}
    else if(name==='age'){
      setage(value)
      setisage(false)}
  }
}

  const handlesubmit = (e)=>{
    e.preventDefault()
    if(!weight && !height &&!age){
      alert('please fill the form')
    }
    else{
      const height2=height/100
      const result=((weight/height2/height2).toFixed(2))
      setbmi(result)  
    if (result<18.5){
      setstatus("you are Underweight")
      setisimage2(true)
      setisimage(false)
      setisimage1(false)
  }
    else if(result>=29){
      setstatus(" you are Overweight")
      setisimage(true)
      setisimage1(false)
      setisimage2(false)
    }
    else if (result<=25){
      setstatus(" you are Healthy")
      setisimage1(true)
      setisimage(false)
      setisimage2(false)
    }

}

  }

 
  return (
    <>

<div  style={{width:'100%',height:'100%' , backgroundColor:'#004591', 

color:'darkcyan'}}>
<div className='container rounded'>
 <div className=' ' >
   <Row >
    <Col lg={1}></Col>
    <Col  lg={10}>
      <Row  style={{backgroundImage:'url("https://img.freepik.com/free-photo/vivid-blurred-colorful-background_58702-2655.jpg?size=626&ext=jpg&ga=GA1.1.1803636316.1700784000&semt=ais")',backgroundSize: "cover",
            backgroundRepeat: "no-repeat",  marginTop:'100px'}} className='  rounded  mb-5 border border-5 bg-transparent'>
        <Col lg={6}>
          
            
           <div  className='container    d-flex justify-content-center align-items-center w-100 flex-column '>
           <h1 className='mt-5 text-center' style={{fontSize:'20px',fontFamily:'cursive' }}>AIM FOR A HEALTHY DIET</h1>
            
           <h6 className='mt-3' >Body mass index (BMI) is a measure of body fat based on height and weight that applies to adult men and women.</h6>
              <div className='border border-4 border-info pt-5 mt-5 rounded-circle ' style={{width:'150px',   height:'150px'}}>
      <h5 style={{marginTop:'-30px'}} className='text-center '>your bmi</h5>
      <h5 style={{marginTop:'20px'}} className='text-center'>{bmi || ""}</h5>
              </div>

              <div className='mt-4 text-warning'  ><h4>{status}</h4></div>
              

              
<div className='mb-4'>
  
                {isimage2?
              <img className='rounded-4' style={{width:'250px', height:'250px'}} src="https://img.freepik.com/premium-vector/skinny-sad-kid-boy-use-weight-scale-vector_753212-7.jpg" alt="" />
              :
              <img  src='' alt="" />
              }
            {isimage1?
              <img className='rounded-4' style={{width:'250px', height:"250px"}} src="https://img.freepik.com/free-vector/self-care-health-concept_23-2148517202.jpg?size=626&ext=jpg&ga=GA1.1.1652760071.1701096059&semt=ais" alt="" />
              :
              <img   src="" alt="" />
              }
             {isimage?
              <img className='rounded-4' style={{width:'250px', height:"250px"}} src="https://img.freepik.com/free-vector/hand-drawn-fat-person-cartoon-illustration_52683-117783.jpg?size=626&ext=jpg&ga=GA1.1.1652760071.1701096059&semt=ais" alt="" />
              :
              <img   src="" alt="" />
              }
  
</div>
           </div>
       
        </Col>
        <Col style={{borderLeft:'2px solid white'}} lg={6}>

        <h1 className='text-center mt-5' style={{fontSize:'20px', fontFamily:'cursive'}}>CALCULATE YOUR (BMI)</h1>
         <div className=' d-flex justify-content-center align-items-center w-100 flex-column mt-5 ' >
        
       
       <form  onSubmit={handlesubmit}>
           <div className='mb-5 rounded d-flex justify-content-center align-items-center flex-column border boder-5 p-5 bg-secondary shadow'  style={{backgroundImage:'url("https://img.freepik.com/free-photo/vivid-blurred-colorful-background_58702-2655.jpg?size=626&ext=jpg&ga=GA1.1.1803636316.1700784000&semt=ais")',backgroundSize: "cover",
            backgroundRepeat: "no-repeat", width:'300px',  height:'500px'}} >
             
               <TextField name='age' value={age || ""}  onChange={(e)=>getvalidate(e)}  id="standard-basic" label="Age" variant="standard" />
               <div>
                {!isage &&
                  <p className='pt-2 text-danger me-3'>*invalid input</p>
                }
               </div>
  
               <TextField name='weight' onChange={(e)=>getvalidate(e)}   value={weight || ""} id="standard-basic" label="Weight in cm" variant="standard" />
               <div>
                {!isweight &&
                  <p className='pt-2 text-danger me-3'>*invalid input</p>
                }
               </div>
    
               <TextField name='height' onChange={(e)=>getvalidate(e)}   value={height || ""} id="standard-basic" label="Height in cm" variant="standard" />
               <div>
                {!isheight &&
                  <p className='pt-2 text-danger me-3'>*invalid input</p>
                }
               </div>
    
               <div className='mt-5'>
             
               <Stack
        direction="row"
        
        spacing={2}
      >
      <Button type='submit' disabled={isheight && isweight && isage?false:true}  className='bg-success' style={{width:'100px',height:'50px'}}    variant="contained">calculate</Button>
  <Button style={{width:'00px',height:'50px'}}  onclick="window.location.reload()"  variant="outlined">reset</Button>
      </Stack>
           </div>
           </div>
       </form>
         {/* <div className='mt-5 mb-5' >
           <h6 className='text-center'>BMI Categories:</h6>
  <h6>Underweight = or greater than 18.5</h6>
  <h6>Normal weight = 18.5–24.9</h6>
  <h6>Overweight = 25–29.9</h6>
  <h6>Obesity = BMI of 30 or greater</h6>
  
        </div> */}
         </div>

       
         
        </Col>
      </Row>
    </Col>
    <Col lg={1}></Col>
   </Row>
 </div>
</div>
</div>


    </>
       );
      }
    
export default App;
