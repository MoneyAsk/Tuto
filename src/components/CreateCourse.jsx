import React from "react";
import { useNavigate } from "react-router-dom";
/// You need to add input boxes to take input for users to create a course.
/// I've added one input so you understand the api to do it.
function CreateCourse() {
    const navigate = useNavigate();
    const [course, setCourse] = React.useState({
        title: "",
        description: "",
        price: "",
        imageLink: "",
        published:true,
    });
function handleChange(event){
    const { name, value, type, checked } = event.target;
    setCourse({
            ...course,
            [name]: type==="checkbox"?checked:value
    })
    // console.log(course);

}
function sendRequest(){
    console.log(localStorage.getItem("token"));
    fetch("http://localhost:3000/admin/courses",{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify(course)
        
    }).then(response => response.json())
    .then((data) =>{
        if(!data.error){
            alert(data);
            // localStorage.setItem("token",data.token);
            // console.log(localStorage.getItem('token'));
            navigate("/courses");
    }})
}


    return(
    <div className="course-page">
        <div className="course-card">
            <h1 className="course-card-heading">Create Your Course</h1>
            <div className="course-title">
                <label htmlFor="title">Course Tilte :</label>
                <input type="text" name="title" id="title"  onChange={handleChange}/>
            </div>
            <div className="course-title">
                <label htmlFor="desc">Course Description:</label>
                <input type="text" id="desc" name="description"  onChange={handleChange}/>
            </div>
            <div className="course-details">
                <div className="course-details-div">

                <label htmlFor="price">Price : <input type="text" id="price"  name="price" className="pricee"  onChange={handleChange} /></label>
                <label htmlFor="publish">Publish : <input type="checkbox" checked={course.publish} name="published" className="checboxx" id="publish"  onChange={handleChange}/></label>

                </div>

                <label htmlFor="url">Image Url : <input type="text" id="url" name="imageLink" onChange={handleChange} /></label>
            </div>
            <button className="course-submit-btn" onClick={sendRequest}>Submit</button>

            

        </div>

        
        



    </div>
    )
}
export default CreateCourse;

{/* <h1>Create Course Page</h1>
        <input type={"text"} onChange={e => setTitle(e.target.value)} />
        <button onClick={() => console.log(title)}>Create Course</button> */}