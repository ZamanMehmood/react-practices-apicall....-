    // Api Call 

// import React, {useState, useEffect} from 'react';
// import axios from 'axios';

// const App = () => {
//   const [posts, setPosts] =  useState([]);

//   useEffect(() => {
//     const apiHandler = async () => {
//          const data = await axios.get('https://jsonplaceholder.typicode.com/users')
//          console.log(data)
//          setPosts(data.data)

//     }
//     apiHandler();
//   },[])

//   return ( 
//     <div>
//       {/* <h2>React Interview</h2> */}
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Id</th>
//             <th>email</th>
//           </tr>
//         </thead>
//         <tbody>
//           {posts.map(post =>
//              <tr key={post.id}>
//              <td>{post.name}</td>
//              <td>{post.id}</td>
//              <td>{post.email}</td>

//          </tr>
//             )}
         
//         </tbody>
//       </table>
//     </div>
//    );
// }
 
// export default App;
  



////      Increment and Decrement Buttons

// import React, { useState } from 'react';

// const App = () => {
//   const [count, setCount] = useState(0);
//   return ( 
//     <div>
//       <h2>Increment and Decrement Buttons</h2>
//       <p>{count}</p>
//       <button onClick={() => setCount(count+1)}>Increment</button>
//       <button onClick={() => setCount(count-1)}>Decrement</button>
//       <button onClick={() => setCount(count*2)}>Increment</button>
//       <button onClick={() => setCount(count/4)}>Decrement</button>
//     </div>
//    );
// }
 
// export default App;


// form Validation 


// import React, { useState } from "react";

// const App = () => {

           
//     const initialValues = {
//       firstName : "",
//       lastName : "",
//       email : ""
//     }
//     const [formValues, setFormValues] = useState(initialValues)
//     const [formErrors, setFormErrors] = useState({});

//        const handleSubmit = (e) => {
//         e.preventDefault();
//         setFormErrors(validate(formValues))
//         // console.log("Form is submitted")
//        }

//         const validate = (values) => {
//               const errors = {};

//               if(values.firstName === ""){
//                 errors.firstName = "please enter your first name"
//               }
//               if(values.lastName === ""){
//                 errors.lastName = "please enter your lastName name"
//               } if(values.email === ""){
//                 errors.email = "please enter your email name"
//               }

//               return errors;
//         }


//       const hndleChange = (e) => {
//           const {name, value} = e.target


//           let errors = formErrors;
//           delete errors[name]
//           setFormErrors(errors)

//             //  if(value === ""){
//             //   errors[name] = "Please enter your names"
//             //  } 
//              setFormValues({ ...formValues, [name]: value });
//           if(name === "firstName" &&value === "" ){
//             errors[name] = "your firstName field is empty"
//           }
//           if(name === "lastName" && value === "" ){
//             errors[name] = "your firstName field is empty"
//           }
//           if(name === "email" &&value === "" ){
//             errors[name] = "your email field is empty"
//           }

         
//       }

//   return ( 
//     <div>
//       <h2>Form Validation</h2>
//       <form >
//        <div>
//        <label>FirstName</label>
//         <input
//          name="firstName"  
//          value={formValues.firstName}
//         onChange={hndleChange}
//          type='text'
//          />
//        </div>
//       <p>{formErrors.firstName}</p>

//        <div>
//        <label>LastName</label>
//                <input
//                type='text'
//                 name="lastName"  
//                 value={formValues.lastName}
//                 onChange={hndleChange} 
//                  />
//        </div>
//     <p>{formErrors.lastName}</p>

//       <div>
//       <label>email</label>
//              <input 
//               name="email" 
//               value={formValues.email} 
//               onChange={hndleChange} 
//               type='email' />
//       </div>
//      <p >{formErrors.email}</p>

//       </form>
//       <button type="submit" onClick={handleSubmit}>Submit</button>
//     </div>
//    );
// }
 
// export default App;

 import React, { useEffect, useState } from 'react';
 

const App = () => {
  const [posts,setPosts] = useState([]);


  useEffect(() =>{
    const apiHandler = async() => {
      const data = await axios.get('https://jsonplaceholder.typicode.com/users')
      console.log(data)
    }
    apiHandler();
  },[])
  return ( 
    <div>
      <h2>Api call Get Request</h2>

    </div>
   );
}
 
export default App;