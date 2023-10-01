import axios from 'axios';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

const URI = 'http://localhost:8000/blogs/';

const CompShowBlogs = () => {
    const [blogs, setBlog] = useState([]);
    
    
    useEffect(() => {
        console.log(blogs);
        getBlogs();
    }, []);
    
    //Procedimiento para obtener todos los registros
    const getBlogs = async () => {
        const res = await axios.get(`${URI}/allBlogsNoSql`);
        setBlog(res.data);
    }
    
    //Procedimiento para eliminar un registro
    const deleteBlog = async (id) => {
        await axios.delete(`${URI}deleteBlogNoSql/${id}`);
        getBlogs();
    }
    
    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <Link to="/create" className='btn btn-primary mt-2 mb-2'>Crear</Link>
                    <table className='table'>
                        <thead className='table-primary'>
                            <tr>
                                <th>Title</th>
                                <th>Content</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {blogs.map((blog, index) => (
                                <tr key={index}>
                                    <td>{blog.title}</td>
                                    <td>{blog.content}</td>
                                <td>
                                    <Link to={`/edit/${blog._id}`} className='btn btn-info'>Edit</Link>
                                    <button onClick={()=>deleteBlog(blog._id)} className='btn btn-danger'>Delete</button>
                                </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default CompShowBlogs;