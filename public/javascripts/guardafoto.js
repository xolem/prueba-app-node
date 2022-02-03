const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req,file,cb)
        {
        cb(null,'./public/images')
        },
        filename: function (req,file,cb)
            {
                console.log(req.body.codigo);
                cb(null,`${req.body.codigo}.jpeg`); 
            }
})


const upload = multer({storage:storage});

module.exports = upload;
