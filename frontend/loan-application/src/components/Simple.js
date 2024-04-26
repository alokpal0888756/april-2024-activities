// import {useState}  from 'react';
// import axios from 'axios'
// import { useNavigate, useParams } from 'react-router-dom';


// export function ProfileSuccess(){
//    let {id} = useParams();
//    return (
//     <div>
//         <h3>Registered with Id : {id}</h3>
//     </div>
//    )
// }

// export function ProfileList(){
//     let[list, setList] = useState([])
//     let URL = 'http://localhost:8080/api/profile'
//     let handleSubmit = (e) => {
//         axios.get(URL).then(response => setList(response.data))
//         .catch(error => console.log(error));
//     }

//     return (
//         <div>
//             <h3>Get All Profile</h3>
//             <button onClick={handleSubmit}>Refresh</button>
//             <table className='table'>
//                 <thead>
//                     <tr>
//                         <th>Profile Id</th>
//                         <th>Name</th>
//                         <th>Phone Number</th>
//                         <th>DOB</th>
//                         <th>Profile Images</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {list.map((profile, index)=>
//                     <tr key={index}>

//                         <td>{profile.id}</td>
//                         <td>{profile.name}</td>
//                         <td>{profile.phone}</td>
//                         <td>{profile.dob}</td>
//                         <td>Image{index}</td>
//                     </tr>
//                         )}
//                 </tbody>
//             </table>
//         </div>

//     )

// }

// export function DeleteById(){
//     let [id, setId] = useState('');
//     let URL = 'http://localhost:8080/api/profile'
//     let handleClick = (e) => {
//         axios.delete(`${URL}/${id}`).then(response => alert(response.data))
//         .catch(error => console.log(error))

//     } 
//     return (
//         <div>
//             <input type="number" name='id' onChange={e => setId(e.target.value)} placeholder='enter id'/>
//             <button className='btn btn-primary' onClick={handleClick}>delete</button>
           
//         </div>
//     )
// }

// export function UsersFromJson() {
//     let [user, setUser] = useState('');
//     let [id, setId] = useState('');
//     let URL = 'https://jsonplaceholder.typicode.com/users';

//     let handleClick = (e) => {
//         axios.get(`${URL}/${id}`).then(response => setUser(response.data))
//         .catch(error => console.log(error))
//     } 
//     console.log(user)
    
//     return (
//         <div>
//             <input type="number" name='id' onChange={e => setId(e.target.value)} placeholder='enter id'/>
//             <button className='btn btn-primary' onClick={handleClick}>search</button>
//             <p>Hello {user.username}, email: {user.email}</p>
//         </div>
//     )
// }

// // a form can import simple in another js file
// export function ProfileForm(){
//     let[name, setName] = useState("");
//     let[password, setPassword] = useState("")
//     let[phone, setPhone] = useState("")
//     let[dob, setDob] = useState("")
//     let[profile, setProfile] = useState("")
//     let URL = 'http://localhost:8080/api/profile'
//     let navigate = useNavigate();
//     // let URL = "http://localhost:8080/api/profile"
//     // const getProfiles = axios.get(URL).then(response => response.json()).catch(console.error())

//     let handleSubmit = (e) =>{
//         e.preventDefault(); // it prevent reloading the browser after submitting
//         axios.post(URL, {"name": name, "dob":dob, "phone" : phone, "contactsList":null})
//         .then(response => navigate(`/success/${response.data.id}`))
//         .catch(error => error.log(error))
//     }

//     return (
//         <div>
//             <h2>Profile Registration</h2>
            
//             <form onSubmit={handleSubmit}>
            
//                 <input type="text" name='name' onChange={(e) => setName(e.target.value)} placeholder='Enter name' /> <br />
//                 <input type="number" name='phone' onChange={(e) => setPhone(e.target.value)} placeholder='Enter number' /><br />
//                 <input type="password" name='password' onChange={(e) => setPassword(e.target.value)} placeholder='Enter password' /><br />
//                 <input type="date" name='dob' onChange={(e) => setDob(e.target.value)} placeholder='Enter dob' /><br />
//                 <input type="submit" value='Register'></input>
//             </form>
//         </div>
//     )
// }

// export function Simple(){
//     let username = "your name"
//     return (
//         <div>
//             <h3>Hello {username}</h3>
//         </div>
//     )
// }

// export function User(props){
//     let name = props.name;
//     let age = props.age

//     return (
//         <div>
//             <h2>User Componenet</h2>
//             <h3>Hello {name}, your age is {age}</h3>
//         </div>
//     )
// }

// // a component that takes complex object which will have id, name, email, images
// export function Profile(props){
//     let profile = props.profile;
//     // profile.name, profile.dob
//     return (
//         <div>
//             <img src={profile.imageURL} width="100" height="100" style={{borderRadius: '50%' }} alt="" />
//             <p className="container lead">Name : {profile.name}</p>
//             <p>Birthday: {profile.dob}</p>
//             <p>Email: {profile.email}</p>
//         </div>
//     )
// }