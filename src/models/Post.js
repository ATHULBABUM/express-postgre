import { model,Schema } from 'mongoose';

const PostSchema = new Schema({
    title: {
        type: String,
        required: true  
    },
    content: {
        type: String,
        required: true
    },
    featuredImage: {
        type: String,
        required: false
    }
}, {
    timestamps: true
});

const Post = model('post', PostSchema);
export default Post;