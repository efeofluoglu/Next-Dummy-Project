import { TeamMember } from "@/contentfulTypes";
import { createClient } from "contentful";
import Image from 'next/image';



interface PostsProps {
  posts: TeamMember[];
}

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID || "",
    accessToken: process.env.CONTENTFUL_ACCESS_KEY || "",
  });

  const res = await client.getEntries({
    content_type: "teamMember",
  });

  return {
    props: {
      posts: res.items.map((i) => i.fields),
    },
  };
}

export default function Home({ posts }: PostsProps) {
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>
            <h1>>{post.name}</h1>
            </li>
        ))}
      </ul>
    </div>
  );
}
