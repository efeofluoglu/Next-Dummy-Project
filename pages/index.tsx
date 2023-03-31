import { createClient } from "contentful";

interface Post {
  name: string;
}

interface PostsProps {
  posts: Post[];
}

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID || "",
    accessToken: process.env.CONTENTFUL_ACCESS_KEY || "",
  });

  const res = await client.getEntries({
    content_type: "dummyContent",
  });

  return {
    props: {
      posts: res.items.map((i) => i.fields)
    },
  };
}

export default function Home({ posts }: PostsProps) {
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>{post.name}</li>
        ))}
      </ul>
    </div>
  );
}
