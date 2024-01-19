
const getData = async (id: number) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        next: {
            revalidate: 60
        }
    })
    return response.json()
}

interface Props {
    params: {
        id: number
    }
}

const PostPage = async (props: Props) => {
    const { params } = props
    const post = await getData(params.id)

    return (
        <div>
            PostPage {params.id}
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </div>
    )
}

export default PostPage