import Link from "next/link"

const getData = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/postsiuhihi`, {
        next: {
            revalidate: 60
        }
    })

    if (!response.ok) throw new Error(`Unable to fetch this post!`)

    return response.json()
}

const Blob = async () => {
    const posts = await getData()

    return (
        <div>
            Blob
            <ul>
                {posts.map((item: any) =>
                    <li key={item?.id}>
                        <Link href={`/blob/${item?.id}`}>
                            {item?.title}
                        </Link>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Blob