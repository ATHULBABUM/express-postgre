import post from "../typedefs/post";

export default {
    Query: {
        getAllPosts: async (_,{},{ Post }) => {
            let posts = await Post.find();
            return posts
        },
        getPostByID: async (_, { id }, { Post }) => {
            let getPost = await Post.findById(id);
            return getPost
        }
    },
    Mutation: {
        createNewPost: async (_,{newPost},{Post})=> {
            let result = await Post.create(newPost);
            return result 
        },
        editPostByID: async(_, {id,updatedPost}, {Post})=> {
            let editedPost = await Post.findByIdAndUpdate(id,{ ...updatedPost}, {new: true});
            return editedPost;
        },
        deletePostByID: async(_, { id }, { Post }) => {
            let deletedPost = await Post.findByIdAndDelete(id);
            return {
                success: true,
                id: deletedPost.id,
                message: "Your Post is deleted"
            }
        }
    }
} 