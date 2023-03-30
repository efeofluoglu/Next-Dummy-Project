interface Post {
  id: number
  title: string
}

interface PostsProps {
  posts: Post[]
}

export async function getStaticProps() {
  // Fetch posts from the JSONPlaceholder API
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await response.json()

  return {
    props: {
      posts,
    },
  }
}

export default function Home({ posts }: PostsProps) {

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}
