import { gql } from 'apollo-server-express';


export default gql`
    extend type Query {
        getAllPosts:[Post!]!
        getPostByID(id: ID!): Post!
    },
    extend type Mutation {
        deletePostByID(id: ID!): PostNotification
        editPostByID(updatedPost: PostInput,id: ID!): Post!
        createNewPost(newPost: PostInput!): Post!
    }
    input PostInput {
        title: String!
        content: String!
        featuredImage: String
    }
    type Post {
        id:ID!
        title: String!
        content: String!
        featuredImage: String
        createdAt: String
        updatedAt: String
    }
    type PostNotification {
        id: ID!
        message:String!
        success: Boolean
    }
`;