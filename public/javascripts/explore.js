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

        let result = obj.filter(
          (cook) => cook.region == input && cook.status == "Green"
        );

        result.forEach((obj) => {
          const { cookname, motivation, certification, region, status, _id } = obj;

          item += `
          <div class="card card-body">
          <h4>name: ${cookname}</h4>
          <p>location: ${motivation}</p>
          <p>description: ${certification}</p>
          <p>region: ${region}</p>
          <p>status: ${status}</p>
          <p><a href="/cooks/${_id}/menus" class="btn btn-primary">COMPLETE MENU</a>
        </div>
        <hr>`;
        });

        document.getElementById("container").innerHTML = item;
      })
      .catch((err) => {
        console.log(err);
        err.response.status === 404
          ? alert(`The id doesn't exist.`)
          : alert("Server error! Sorry.");
      });
  };

  document
    .getElementById("fetch-by-reg")
    .addEventListener("click", function (event) {
      event.preventDefault();
      // console.log("hello world!");
      const region = document.getElementById("fetch-by-region-input").value;
      filterById(region);
    });
});
