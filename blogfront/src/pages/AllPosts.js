import Post from "../components/Post"
import {Link} from 'react-router-dom'

const AllPosts = (props) =>  (
    <>
    <Link to='/new'>
    <button>Add New Blog Post</button>
    </Link>
    {props.posts.map(
     (post) => <Post post={post} key={post.id} deleteBlog={props.deleteBlog} />
    )}
    </>
)

export default AllPosts