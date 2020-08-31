document.addEventListener("DOMContentLoaded", () => {
    console.log("EXPLORE JS");
  
    const filterById = (id) => {
      console.log("I AM BEING CLICKED");
      axios
        .get(`${window.location.origin}/explore/search`, { params: { id: id } })
  
        .then((cooks) => {
          const obj = cooks.data;
          const input = cooks.config.params.id;
          console.log("json", obj);
          console.log("this is the input from view", cooks.config.params.id);
  
          // DOM manupulation
          let item = "";
  
          // 1.loop through array of objects
          // 2. deconstruct properties name, location,category
          // 3. show only those with category = spots.config.params.id
  
          let result = obj.filter((cook) => cook.region == input);
  
          result.forEach((obj) => {
            const { cookname, motivation, certification } = obj;
  
            item += `
          <div class="card card-body">
          <h4>name: ${cookname}</h4>
          <p>location: ${motivation}</p>
          <p>description: ${certification}</p>
          <p><a href="" class="btn btn-primary">See more</a>
        </div>
        <hr>`;
          });
  
          document.getElementById("cont").innerHTML = item;
        })
        .catch((err) => {
          console.log(err);
          err.response.status === 404
            ? alert(`The id doesn't exist.`)
            : alert("Server error! Sorry.");
        });
    };
  
    document
      .getElementById("fetch-by-cat")
      .addEventListener("click", function (event) {
        event.preventDefault();
        // console.log("hello world!");
        const category = document.getElementById("fetch-by-category-input").value; // input id of item to be retrived
        filterById(category);
      });
  });