// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import reportWebVitals from './reportWebVitals';
// import { BrowserRouter as Router, Routes, Route, Navigate, Link, Outlet, useParams, NavLink, useNavigate } from "react-router-dom"

// ReactDOM.render(
//   <Router>
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/myapp" element={<Navigate replace to="/learn" />} />
//       <Route path="/learn" element={<Learn />}>
//         <Route path="courses" element={<Courses />} >
//           <Route path=":courseid" element={<CourseId />} />
//         </Route>
//         <Route path="bundles" element={<Bundle />} />
//       </Route>
//       <Route path="/dashboard" element={<dashbord/>}/>
//     </Routes>
//   </Router>,
//   document.getElementById('root')
// );

// function Home() {
//   return (
//     <div>
//       <h1>Home Route</h1>
//     </div>
//   )
// }

// function Learn() {
//   return (
//     <div>
//       <h1>Learn Courses</h1>
//       <h4>All courses are available lissted here.</h4>
//       <Link to="/learn/courses" className='btn btn-success'>Courese</Link>
//       <Link to="/learn/bundles" className='btn btn-primary'>Bundle</Link>
//       <Outlet />
//     </div>
//   )
// }


// function Courses() {
//   const CourseNames = ["Angular", "Vue", "React", "Node.js"]
//   const randomCourses = CourseNames[Math.floor(Math.random() * CourseNames.length)]
//   return (
//     <div>
//       <h1>Course List</h1>

//       <p>More Tests</p>
//       <NavLink
//         style={({ isActive }) => {
//           return {
//             backgroundColor: isActive ? "blue" : "white"
//           }
//         }}
//         to={`/learn/courses/${randomCourses}`}>
//         {randomCourses}
//       </NavLink>
//       <NavLink className="btn btn-danger" to={`/learn/courses/test`}>
//         text
//       </NavLink>
//       <Outlet />
//     </div>
//   )
// }


// function Bundle() {
//   return (
//     <div>
//       <h1>Bundle List</h1>
//     </div>
//   )
// }



// function CourseId() {
//   const navigate = useNavigate();
//   const { courseid } = useParams();
//   return (
//     <div>
//       <h1>URL param id:{courseid}</h1>
//       <button onClick = {() => {
//         navigate("/dashboard")
//       }} className='btn btn-success'>Price</button>
//     </div>
//   )
// }

// function dashbord() {
//   return (
//     <div>
//       <h1>info of the courses ----</h1>
//     </div>
//   )
// }


// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


// < ArticleContext.Provider value={initialData}>
//         <Router>
//           <Routes>
//             <Route path="/" element={<Blogs />} />
//             <Route path="/post" element={<CreateBlog />} />
//             <Route path="/post/:id" element={<BlogDetails />} />
//           </Routes>
//         </Router>
//       </ArticleContext.Provider>
//     )



//     // blogs

//     import React from 'react'
// import "./index.css"
// import Button from '@mui/material/Button';
// import PostAddIcon from '@mui/icons-material/PostAdd';
// import { Component } from "react"
// import { BlogCard } from '../BlogCard';

// import { Data } from '../Data';
// import { Link }from "react-router-dom";
// import { addaArticles } from '../../actions';
// import { userContext } from '../../App';




// class Blogs extends Component {
   
//     render() {
        
//         // <userContext.Consumer>

//         // </userContext.Consumer>

//         //console.log(initialData) 
//         return (
//             <div>
//                 <div className='container sticky-top'>
//                     <div className='row'>
//                         <div className='col-12 title_container mt-2' >
//                             <h1 className='m-auto title'>Blogs</h1>
//                             <Link to='/post'><Button variatn="contained" startIcon={<PostAddIcon />} style={{ backgroundColor: "blue", color: "white", marginTop: "8px", marginBottom: "8px", borderRadius: "10px", paddingLeft: "20px", paddingRight: "20px" }} onClick={this.popup}>Add</Button></Link>
//                         </div>
//                     </div>
//                 </div>
                // {
                //     initialData.map((item) => (
                //         <BlogCard item = {item} key={item.id}/>
                //     ))
                // }
            // </div>
//         )
//     }


// }

// export default Blogs




//  blogs card


// import React from 'react'
// import "./index.css"
// import { Link , useParams} from "react-router-dom"


// export const BlogCard = (props) => {
//     const { item } = props
//     const { id,title, discription, date, authorName } = item;
//     return (

//         <div className='container mt-3'>
//             <div className='row'>
//                 <Link to={`/post/${id}`}style={{textDecoration:"none"}}>
//                     <div className='col-12' >
//                         <li className='list_item card_container'>
//                             <div className='card p-4 shadow-lg p-3 mb-5 bg-white rounded'>
//                                 <h1 className='fs-4 text-dark'>{title}</h1>
//                                 <p className='text-dark discription'>{discription}</p>
//                                 <p className='text-end' style={{textDecoration:"underline"}}>more</p>
//                             </div>
//                         </li>
//                     </div>
//                 </Link>
//             </div>
//         </div>
//     )
// }




// blogs detals 


// import React from 'react'

// export const BlogDetails = () => {



//     return (
//         <div className='container'>
//             <div className='row'>
//                 <div className='col-12 title_container mt-2' >
//                     <h1 className='text-center  pt-2 title'>Blogs Detials</h1>
//                 </div>
//                 <div className='col-12'>
//                     <div className='card p-4 shadow-lg p-3 mb-5 bg-white rounded'>
                        
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }


// create blogs 

// import React from 'react'
// import { Component } from "react"
// import "./index.css"
// import Button from "@mui/material/Button"
// import SaveAsIcon from '@mui/icons-material/SaveAs';

// class CreateBlog extends Component {



//     inputElement = () => (
//         <div className='mt-4'>
//             <input type="text" className='form-control w-25' id="title" placeholder='title'/>
//         </div>
//     )

//     textAreaElement = () => (
//         <div className='mt-4'>
//             <textarea cols={50} rows={5} className='w-75 form-control' placeholder='content'></textarea>
//         </div>
//     )
//     render() {
//         const inputElement = this.inputElement()
//         const textAreaElement = this.textAreaElement()
//         return (
//             <div className='container mt-4'>
//                 <div className='row'>
//                     <div className='col-12 title_container mb-3' >
//                         <h1 className='text-center  pt-2 title'>Blogs Detials</h1>
//                     </div>
//                     <div className='col-12'>
//                         <form className='p-4 pt-1 shadow-lg p-3 mb-5 bg-white rounded' >
//                             {inputElement}
//                             {textAreaElement}
//                             <Button style={{color:"white",backgroundColor:"blue", marginTop:"20px",}} size="large" startIcon={<SaveAsIcon/>}>Save Post</Button>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         )
//     }


// }


// export default CreateBlog;
