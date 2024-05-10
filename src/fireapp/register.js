// import React, { useRef, useState } from 'react'
// import './fireapp.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { initializeApp } from "firebase/app";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// export default function Register() {

//   // initialize useref for accessing the field value  
//   const name = useRef(null);
//   const address = useRef(null);
//   const email = useRef(null);
//   const password = useRef(null);
//   const submitform= useRef(null);

//   // state for store the formdata
//   const [userdata, setusersata] = useState([{
//     username: '',
//     useraddres: '',
//     usermail: '',
//     userpassword: ''
//   }])

//   console.log(userdata)


//   // function for get the form data
//   const formdatasubmit = (e) => {
//     e.preventDefault();

//     const username = name.current.value;
//     const useraddress = address.current.value;
//     const useremail = email.current.value;
//     const userpassword = password.current.value;

//     setusersata([{
//       username: username,
//       useraddres: useraddress,
//       useremail: useremail,
//       userpassword: userpassword
//     }])


//     // clear the feild after submit the form  
//     name.current.value = '';
//     address.current.value = '';
//     email.current.value = '';
//     password.current.value = '';
//   }


//   // function for move next input feild on press enter  
//   const feildjumphandle = (ref, e) => {
//     if (e.key == 'Enter') {
//       e.preventDefault()
//       if (ref && ref.current) {
//         ref.current.focus();
//       }
//     }
//   }


//  // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDX0vLRyEXJwGqDcHr-61c7_-7CMTKvIYI",
//   authDomain: "crystal-registration.firebaseapp.com",
//   databaseURL: "https://crystal-registration-default-rtdb.firebaseio.com",
//   projectId: "crystal-registration",
//   storageBucket: "crystal-registration.appspot.com",
//   messagingSenderId: "995708119811",
//   appId: "1:995708119811:web:bcd7e84e510128cda6d736"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);




// const auth = getAuth(app);
// createUserWithEmailAndPassword(auth, userdata.username, userdata.useraddres,  userdata.useremail,userdata.userpassword)
//   .then((userCredential) => {
//     // Signed up 
//     const user = userCredential.user;
//     setusersata({
//       username: '',
//       useraddress: '',
//       useremail: '',
//       userpassword: ''
//     });
//     // ...

   
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     console.log(errorCode)
//     console.log(errorMessage)
//     // ..
//   });


//   return (
//     <div className='main_container'>
//       <div className='login_container'>
//         <div className='login_div'>
//           <div style={{ width: '100%', textAlign: 'center' }}>
//             <span style={{ fontSize: '18px', fontWeight: '500' }}>
//               CRYSTAL REGISTRATION
//             </span>
//           </div>

//           <form onSubmit={formdatasubmit}>
//             <div class="mb-3" style={{ width: '400px' }}>
//               <label for="exampleInputEmail1" class="form-label">Name</label>
//               <input type="text"
//                 ref={name}
//                 placeholder='enter name'
//                 class="form-control"
//                 id="username"
//                 aria-describedby="emailHelp"
//                 onKeyDown={(e) => feildjumphandle(address, e)}
//               />
//             </div>

//             <div class="mb-3" style={{ width: '400px' }}>
//               <label for="exampleInputEmail1" class="form-label">Address</label>
//               <input type="text"
//                 ref={address}
//                 placeholder='enter address'
//                 class="form-control"
//                 id="useraddress"
//                 aria-describedby="emailHelp"
//                 onKeyDown={(e) => feildjumphandle(email, e)}
//               />
//             </div>

//             <div class="mb-3" style={{ width: '400px' }}>
//               <label for="exampleInputEmail1" class="form-label">Email </label>
//               <input type="email"
//                 ref={email}
//                 placeholder='enter email'
//                 class="form-control"
//                 id="useremail"
//                 aria-describedby="emailHelp"
//                 onKeyDown={(e) => feildjumphandle(password, e)}
//               />
//             </div>

//             <div class="mb-3" style={{ width: '400px' }}>
//               <label for="exampleInputPassword1" class="form-label">Password</label>
//               <input type="password"
//                ref={password}
//                 placeholder='enter password' 
//                 class="form-control"
//                  id="userpassword"
//                  onKeyDown={(e) => feildjumphandle(submitform, e)}
//                  />
//             </div>

//             <button type="submit" ref={submitform}  class="btn btn-primary">Submit</button>
//           </form>
//         </div>
//       </div>
//     </div>
//   )
// }


import React, { useRef, useState, useEffect } from 'react'
import './fireapp.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function Register() {
  // initialize useref for accessing the field value  
  const name = useRef(null);
  const address = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const submitform= useRef(null);

  // state for store the formdata
  const [userdata, setUserData] = useState({
    username: '',
    useraddress: '',
    useremail: '',
    userpassword: ''
  });

  console.log(userdata)


    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: "AIzaSyDX0vLRyEXJwGqDcHr-61c7_-7CMTKvIYI",
      authDomain: "crystal-registration.firebaseapp.com",
      databaseURL: "https://crystal-registration-default-rtdb.firebaseio.com",
      projectId: "crystal-registration",
      storageBucket: "crystal-registration.appspot.com",
      messagingSenderId: "995708119811",
      appId: "1:995708119811:web:bcd7e84e510128cda6d736"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
 // Empty dependency array ensures this effect runs only once after component mount

  // function for get the form data
  const formdatasubmit = (e) => {
    e.preventDefault();

    const username = name.current.value;
    const useraddress = address.current.value;
    const useremail = email.current.value;
    const userpassword = password.current.value;

    setUserData({
      username: username,
      useraddress: useraddress,
      useremail: useremail,
      userpassword: userpassword
    });

    // clear the field after submit the form  
    name.current.value = '';
    address.current.value = '';
    email.current.value = '';
    password.current.value = '';
  }

  // function for move next input field on press enter  
  const fieldJumpHandle = (ref, e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      if (ref && ref.current) {
        ref.current.focus();
      }
    }
  }

  const handleUserRegistration = () => {
    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, userdata.useremail, userdata.userpassword)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        setUserData({
          username: '',
          useraddress: '',
          useremail: '',
          userpassword: ''
        });
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage);
        // Handle errors
      });
  };

  return (
    <div className='main_container'>
      <div className='login_container'>
        <div className='login_div'>
          <div style={{ width: '100%', textAlign: 'center' }}>
            <span style={{ fontSize: '18px', fontWeight: '500' }}>
              CRYSTAL REGISTRATION
            </span>
          </div>

          <form onSubmit={formdatasubmit}>
            <div className="mb-3" style={{ width: '400px' }}>
              <label htmlFor="username" className="form-label">Name</label>
              <input
                type="text"
                ref={name}
                placeholder='Enter name'
                className="form-control"
                id="username"
                onKeyDown={(e) => fieldJumpHandle(address, e)}
              />
            </div>

            <div className="mb-3" style={{ width: '400px' }}>
              <label htmlFor="useraddress" className="form-label">Address</label>
              <input
                type="text"
                ref={address}
                placeholder='Enter address'
                className="form-control"
                id="useraddress"
                onKeyDown={(e) => fieldJumpHandle(email, e)}
              />
            </div>

            <div className="mb-3" style={{ width: '400px' }}>
              <label htmlFor="useremail" className="form-label">Email</label>
              <input
                type="email"
                ref={email}
                placeholder='Enter email'
                className="form-control"
                id="useremail"
                onKeyDown={(e) => fieldJumpHandle(password, e)}
              />
            </div>

            <div className="mb-3" style={{ width: '400px' }}>
              <label htmlFor="userpassword" className="form-label">Password</label>
              <input
                type="password"
                ref={password}
                placeholder='Enter password'
                className="form-control"
                id="userpassword"
                onKeyDown={(e) => fieldJumpHandle(submitform, e)}
              />
            </div>

            <button type="submit" ref={submitform} className="btn btn-primary" onClick={handleUserRegistration}>Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}
