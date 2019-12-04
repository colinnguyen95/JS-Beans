// var client = contentful.createClient({
//     space: 'x4jjujv3ppx5',
//     accessToken: '_-8gfgQbjRke6f59m_O5m1Jo4BvADnwMRcP3P6_8D-Q'
// })

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

// class Topics {
//   async getTopics(){
//     try{
//       let result = await fetch("../topics.json");
//       let data = await result.json();
//       let topics = data.items;

//       topics = topics.map(item => {
//         const { title, description } = item.fields;
//         const { id } = item.sys;
//         const image = item.fields.image.fields.file.url;
//         return { title, description, id, image }
//       })
//       return topics;
//     } catch (error) {
//       console.log(error);
//     }
//   }
// }

// class Lectures {
//   async getLectures(){
//     try{
//       let result = await fetch("lectures.json");
//       let data = await result.json();
//       let courses = data.items;

//       courses = courses.map(item => {
//         const { title, description } = item.fields;
//         const { id } = item.sys;
//         const image = item.fields.image.fields.file.url;
//         return { title, description, id, image }
//       })
//       return courses;
//     } catch (error) {
//       console.log(error);
//     }
//   }
// }



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
    // window.location.href = "./course-pages/JS.html"
  }

  // //display all topics
  // displayTopics(topics){
  //   console.log(topics);
  //   let result = '';
  //   topics.forEach(topic => {
  //     result +=`
  //     <div class="Card">
  //         <h3>${topic.title}</h3>
  //         <p>${topic.description}</p>
  //         <img src=${topic.image}>
  //     </div>
  //     `;
  //   });
  //   document.querySelector(".topics").innerHTML = result;
  // }

  // //display all lectures
  // displayLectures(lectures){
  //   console.log(lectures);
  //   let result = '';
  //   lectures.forEach(lecture => {
  //     result +=`
  //     <a href="./course-pages/${lecture.title.replace(/\s+/g, '-').toLowerCase()}.html">
  //     <div class="Card">
  //         <h3>${lecture.title}</h3>
  //         <p>${lecture.description}</p>
  //         <img src=${lecture.image}>
  //     </div>
  //     </a>
  //     `;
  //   });
  //   document.querySelector(".lectures").innerHTML = result;
  // }
}

document.addEventListener("DOMContentLoaded", () => {
  const ui = new UI();
  const courses = new Courses();
  // const topics = new Topics();
  // const lectures = new Lectures();

  //get all courses
  courses.getCourses().then(courses => ui.displayCourses(courses));

  // //get all topics
  // topics.getTopics().then(topics => ui.displayTopics(topics));

  //get all lectures
  // lectures.getLectures().then(lectures => ui.displayLectures(lectures));
  console.log("hello")
})