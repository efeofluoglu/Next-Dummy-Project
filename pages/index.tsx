import { Inter } from 'next/font/google'
import { createClient } from 'contentful';
import { TeamMember } from '../contentfulTypes';

// export async function getStaticProps() {
//   const client = createClient({
//     space: process.env.CONTENTFUL_SPACE_ID || '',
//     accessToken: process.env.CONTENTFUL_ACCESS_KEY || '',
//   });

//   const res = await client.getEntries<TeamMember>({
//     content_type: 'teamMember',
//   });

//   return {
//     props: {
//       members: res.items.map((i) => i.fields),
//     },
//   };
// }
// interface TeamMemberTableProps {
//   members: TeamMember[];
// }
export default function Home() {

  
  return (
    <>
      <div>
        hello
      </div>
    </>
  )
}
