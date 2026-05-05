import React, {  useState } from 'react'

const Home = () => {
  const [user , setUser] = useState(18);

var name = [
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkliIuVgejvDwavQJbzUFo2z99ptt-UGB43w&s",
    name:"Ali",
    age:20,
    email:"ali@gmail.com"
  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkliIuVgejvDwavQJbzUFo2z99ptt-UGB43w&s",
    name:"Ahmad",
    age:22,
    email:"ahmad@gmail.com"
  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkliIuVgejvDwavQJbzUFo2z99ptt-UGB43w&s",
    name:"salman",
    age:18,
    email:"slaman@gmail.com"
  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkliIuVgejvDwavQJbzUFo2z99ptt-UGB43w&s",
    name:"zeshan",
    age:25,
    email:"zeshan@gmail.com"
  }
];


  return (
    <>
     <div className='bg-light py-5'>
       <div className='container'>

        <div className='d-flex gap-3 flex-wrap'>
          {
          name.map((n)=>(
            <div className='border border-info rouded shadow p-4'>
              <img src={n.image} width='200' />
              <h2>Name : {n.name}</h2>
              <b>Age : {n.age}</b>
              <p>email : {n.email}</p>
            </div>
          ))
        }
        </div>

        <h1>{user}</h1>
        {
          user < 10 
          ?
          <h1>0 to 10</h1>
          :
          <h1>up to  10</h1>
        }
        <button onClick={()=>{setUser(user+1)}}>click</button>
        <button onClick={()=>{setUser(user-1)}}>click 2</button>
       </div>
     </div>
    </>
  )
}

export default Home