import mongoose from 'mongoose';


const blogSchema = new mongoose.Schema(
    {
        title: {type: String},
        content: {type: String}
    },
    {collection: 'blogs'}
);

//Another way to make a schema, the difference is the coding style
/* 
const Schema = mongoose.Schema;
const blogSchema2 = new Schema(
    {
        title: {type: String},
        content: {type: String}
    },
    {collection: 'blogs'}
);
*/
export default mongoose.model('BlogModelNoSql', blogSchema);