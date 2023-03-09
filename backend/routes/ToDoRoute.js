const {Router} = require("express")


const router = Router()

router.get('/',(req, res) => {
    res.json({message: "ado kohomda..."})
})

module.exports = router;