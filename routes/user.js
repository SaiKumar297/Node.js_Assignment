const express = require('express');
const router = express.Router();    
const {handleGetAllUsers, 
    handleGetUserById, 
    handleUpdateUserById, 
    handleDeleteUserById, 
    handleCreateNewUser
} = require('../controllers/user')
/*router.get("/", async(req,res)=>{
    const allDbUsers = await UserActivation.find({});
    const html = `
    <ul>
    ${allDbUsers
        .map((user) => `<li>${user.firstName} - ${user.email}</li>`)
        .join("")}
    }
    </ul>
    `;

    res.send(html);
});*/

router.route("/")
.get(handleGetAllUsers).post(handleCreateNewUser);
router
.route("/:id")
.get(handleGetUserById) 
.patch(handleUpdateUserById)
.delete(handleDeleteUserById)

router.post("/",handleCreateNewUser)
module.exports = router;
