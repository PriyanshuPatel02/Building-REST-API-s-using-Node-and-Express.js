const express = require("express");
const users = require("./MOCK_DATA.json");
const app = express(); /// instance create ho jata h
const PORT = 4000;
// HTML document
app.get("/users", (req, res) => {
    const html = `
    <ul> 
        ${users.map((user) => `<li>${user.first_name}  </li>`).join("")}
       
    </ul>
    `;
    res.send(html)
})
   // *********Surname aa jayega es se**********
app.get("/surname", (req, res) => {
    const html = `
    <ul> 
        ${users.map((user) => `<li>${user.last_name}  </li>`).join("")}
    </ul>
    `;
    res.send(html)
})
// ********JSON format me API aa jyga**********
app.get("/api/users", (req, res) => {
    return res.json(users);
})


// Router
app.route("/api/users/:uid")
//dynamic parameter
   .get((req, res) =>{
    const id = Number(req.params.uid);
    const userId = users.find((userId) => userId.id === id);
    return res.json(userId);
})
  .put ((req, res)=>{
    // Edit user wid id
     return res.json({status: "Pending"});
  })

  .patch ((req, res)=>{
    // Edit user wid id
     return res.json({status: "Pending"});
  })

  .delete((req,res)=>{
    // delete user with id
    return res.json({status: "Pending"});
  })





// app.listen(PORT, () => console.log("Server started at PORT"));

app.listen(4000, function(req,res){
    console.log("Server is run at 4000");
})