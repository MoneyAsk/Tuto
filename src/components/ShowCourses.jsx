import React from "react";
import Card from "./Card";
  // Add code to fetch courses from the server
    // and set it in the courses state variable.
function ShowCourses() {
    let cards;
    const [visible,setVisible]=React.useState(false);

    const [courses, setCourses] = React.useState([]);
    console.log(visible);

    function sendRequest(){
        setVisible((prev)=>{
            if(prev!=true){
                return true;
                
            }
            else{
                return true;
            }
            
           
        });
        console.log(visible);
        fetch("http://localhost:3000/admin/courses",{
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
        // body: JSON.stringify(course)
        
    }).then((response) => response.json())
        .then((data) =>{
            // console.log(data);
            setCourses((prev)=>{
                return [...prev,data]
            })
    console.log(courses)
        } );
        
    }
    cards=courses.map((course)=>{
        // console.log(course[0].title);
         return course.map((course)=>{
            return <Card key={Math.random()} title={course.title} description={course.description} price={course.price} imageLink={course.imageLink}  />

        })

        
        // return(
        //     <Card title={course[0].title} description={course[0].description} price={course[0].price} imageLink={course[0].imageLink}  />
        // )
            
        })
    
    
    console.log(cards);

    return (
    <div className="show-courses">
            <div className="show-courses-btn">
                <button className="show-courses-btn-one" onClick={sendRequest}>Show Courses</button>
                <button className="show-courses-btn-one" onClick={()=>{
                    setVisible((prev)=>{
                        if(prev!=false){
                            return false;
                            
                        }
                        else{
                            return false;
                        }
                        
                       
                    });
                    
                }}>Hide Courses</button>
            </div>
           {visible && <div className="course-window">
               
                {/* <Card /> */}
               {cards}
                
            </div>}
    </div>
    )
}


export default ShowCourses;

// [
//     {
//         "title": "Full stack development",
//         "description": "Full stack dev course by harkirat",
//         "price": 5999,
//         "imageLink": "https://d33g7sdvsfd029.cloudfront.net/subject/2023-01-17-0.3698267942851394.jpg",
//         "published": true,
//         "id": 1
//     },
//     {
//         "title": "Intro To Java",
//         "description": "Learn Java with me",
//         "price": "999",
//         "imageLink": "https://www.pngkey.com/png/detail/264-2646582_logo-transparent-background-java.png",
//         "published": true,
//         "id": 2
//     },
//     {
//         "title": "Intro To Cpp",
//         "description": "Learn Cpp with Me",
//         "price": "1550",
//         "imageLink": "https://clipground.com/images/cpp-logo-clipart-5.jpg",
//         "published": true,
//         "id": 3
//     },
//     {
//         "title": "Intro To Python",
//         "description": "Learn Python with Me",
//         "price": "500",
//         "imageLink": "https://www.kindpng.com/picc/m/159-1595744_python-language-hd-png-download.png",
//         "published": true,
//         "id": 4
//     },
//     {
//         "title": "Intro To Html Css",
//         "description": "Learn Html Css with me",
//         "price": "700",
//         "imageLink": "https://cdn.freebiesupply.com/logos/large/2x/css3-logo-png-transparent.png",
//         "published": true,
//         "id": 5
//     },
//     {
//         "title": "intro to Ml",
//         "description": "learn ml with me",
//         "price": "",
//         "imageLink": "https://insticatorblog.com/wp-content/uploads/2017/06/blog-image6-machine-learning-Recovered-03.jpg",
//         "published": true,
//         "id": 6
//     },
//     {
//         "title": "into to Devops",
//         "description": "learn devops with me",
//         "price": "1220",
//         "imageLink": "https://www.onlinelogomaker.com/blog/wp-content/uploads/2020/09/9524b4f78673e0962a8a57fdcf62fc05.jpg",
//         "published": true,
//         "id": 7
//     },
//     {
//         "title": "Intro To Data Science",
//         "description": "Learn Ds with me",
//         "price": "1500",
//         "imageLink": "https://d1m75rqqgidzqn.cloudfront.net/wp-data/2020/08/17010729/shutterstock_1054542323.jpg",
//         "published": true,
//         "id": 8
//     },
//     {
//         "title": "Intro to Blockchain",
//         "description": "Learn Blockchain with me",
//         "price": "700",
//         "imageLink": "https://www.techbuzzfeeds.com/wp-content/uploads/2020/05/Blockchain.jpg",
//         "published": true,
//         "id": 9
//     }
// ]