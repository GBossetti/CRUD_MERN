import BlogModelNoSql from "../models/BlogModelNoSql.js"; 

export const getAllBlogsNoSql = async (req, res) => {
    try {
        const blogs = await BlogModelNoSql.find();
        res.status(200).json(blogs);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }};

/* export const getAllBlogsPromiseNoSql = BlogModelSql.findAll()
    .then((blogs) => {
        console.log(blogs);
    })
    .catch((error) => {
        console.log(error);
    });
*/

export const getBlogNoSql = async (req, res) => {
    try {
        const id = req.params.id
        const blog = await BlogModelNoSql.findById({_id:id})
            .then ((blog) => {
                res.status(200).json(blog); 
            });        
    } 
    catch(error){
        res.status(500).json(error);
    }
}

export const createBlogNoSql = async (req, res) => {
    try {
        await BlogModelNoSql.create(req.body);
        res.status(200).json(
            {"message":"Registro creado con éxito"}
        );
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
}

export const updateBlogNoSql = async (req, res) => {
    try {
        const id = req.params.id;
        await BlogModelNoSql.updateOne({_id:id}, req.body).then( 
            (res) => {console.log(res);}
        );
        res.status(200).json(
            {"message" : "Registro actualizado con éxito"}
        );
    }
    catch (error){
        res.status(500).json({message:error.message});
    }
}

export const deleteBlogNoSql = async (req, res) => {
    try{
        const id = req.params.id;
        await BlogModelNoSql.deleteOne({_id:id}).then(
            (res)=> {console.log(res);}
        );
        res.status(200).json(
            {"message": "Registro eliminado con éxito"}
        );
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
}