// var client = contentful.createClient({
//     space: 'x4jjujv3ppx5',
//     accessToken: '_-8gfgQbjRke6f59m_O5m1Jo4BvADnwMRcP3P6_8D-Q'
// })
class Topics {
    async getTopics(){
      try{
        let result = await fetch("../../topics-json/webdesignprinciples.json");
        let data = await result.json();
        let topics = data.items;
  
        topics = topics.map(item => {
          const { title, description } = item.fields;
          const { id } = item.sys;
          const image = item.fields.image.fields.file.url;
          return { title, description, id, image }
        })
        return topics;
      } catch (error) {
        console.log(error);
      }
    }
  }
  
  class UI  {
    //display all topics
    displayTopics(topics){
      console.log(topics);
      let result = '';
      topics.forEach(topic => {
        result +=`
        <a href="../../lectures/javascript/${topic.title.replace(/\s+/g, '-').toLowerCase()}/${topic.title.replace(/\s+/g, '-').toLowerCase()}.html">
        <div class="Card">
            <h3>${topic.title}</h3>
            <p>${topic.description}</p>
            <img src=${topic.image}>
        </div>
        <a/>
        `;
      });
      document.querySelector(".topics").innerHTML = result;
    }
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const ui = new UI();
    const topics = new Topics();
    //get all topics
    topics.getTopics().then(topics => ui.displayTopics(topics));
    console.log("hello")
  })