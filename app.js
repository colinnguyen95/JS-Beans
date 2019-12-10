// var client = contentful.createClient({
//     space: 'x4jjujv3ppx5',
//     accessToken: '_-8gfgQbjRke6f59m_O5m1Jo4BvADnwMRcP3P6_8D-Q'
// })

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//Fetching the course content from courses.json file
class Courses {
  async getCourses(){
    try{
      let result = await fetch("courses.json");
      let data = await result.json();
      let courses = data.items;

      courses = courses.map(item => {
        const { title, description } = item.fields;
        const { id } = item.sys;
        const image = item.fields.image.fields.file.url;
        return { title, description, id, image }
      })
      return courses;
    } catch (error) {
      console.log(error);
    }
  }
}

class UI  {
  //display all courses
  displayCourses(courses){
    console.log(courses);
    let result = '';
    courses.forEach(course => {
      result +=`
      <a href="./course-pages/${course.title.replace(/\s+/g, '-').toLowerCase()}/${course.title.replace(/\s+/g, '-').toLowerCase()}.html">
      <div class="Card">
          <h3>${course.title}</h3>
          <p>${course.description}</p>
          <img src=${course.image}>
      </div>
      </a>
      `;
    });
    document.querySelector(".wrapper").innerHTML = result;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const ui = new UI();
  const courses = new Courses();

  //get all courses
  courses.getCourses().then(courses => ui.displayCourses(courses));
  console.log("hello")
})