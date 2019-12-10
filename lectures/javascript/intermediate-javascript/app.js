
  class Lectures {
    async getLectures(){
      try{
        let result = await fetch("../../../lectures-json/javascript/intermediate-javascript.json");
        let data = await result.json();
        let lectures = data.items;
  
        lectures = lectures.map(item => {
          const { title, description } = item.fields;
          const { id } = item.sys;
          const image = item.fields.image.fields.file.url;
          return { title, description, id, image }
        })
        return lectures;
      } catch (error) {
        console.log(error);
      }
    }
  }
  

  class UI  {
    //display all lectures
    displayLectures(lectures){
      console.log(lectures);
      let result = '';
      lectures.forEach(lecture => {
        result +=`
        <a href="../../../lecture-topics/${lecture.title.replace(/\s+/g, '-').toLowerCase()}.html">
        <div class="Card">
            <h3>${lecture.title}</h3>
            <p>${lecture.description}</p>
            <img src=${lecture.image}>
        </div>
        </a>
        `;
      });
      document.querySelector(".lectures").innerHTML = result;
    }
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const ui = new UI();
    const lectures = new Lectures();
  
    //get all lectures
    lectures.getLectures().then(lectures => ui.displayLectures(lectures));
    console.log("hello")
  })