import Post from "../components/Post"
import {Link} from 'react-router-dom'

const AllPosts = (props) =>  (
    <>
    <Link to='/new'>
    <button>Add a New Blog Post</button>
    </Link>
    {props.posts.map(
    (post) => <Post post={post} key={post.id} />
    )}
    </>
)

export default AllPosts