import {Link} from 'react-router-dom'

const divStyle = {
    textAlign: 'center',
    border: '3px solid',
    margin: '10px auto',
    width: '89%'
}
const titleStyle = {
    color: 'green',
    fontSize: '4em'
}

const Post = ({post}) => {
    return( 
    <div style={divStyle} >
        <Link to={`/post/${post.id}`}>
            <h1 style={titleStyle}>{post.title}</h1>
        </Link>
        <h2>{post.body}</h2>
    </div>
    )
}

export default Post