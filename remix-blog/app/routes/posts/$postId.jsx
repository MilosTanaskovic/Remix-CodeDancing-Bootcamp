// import { useParams, Meta, useLoaderData, Link } from '@remix-run/react';

// // export const loader = ({params}) => {
// //     console.log(params.postId);
// // }

// export const meta = () => ({
//     // Special cases
//     charset: "utf-8", // <meta charset="utf-8">
//     "og:image": "https://josiesshakeshack.com/logo.jpg", // <meta property="og:image" content="https://josiesshakeshack.com/logo.jpg">
//     title: "Josie's Shake Shack", // <title>Josie's Shake Shack</title>
  
//     // name => content
//     description: "Delicious shakes", // <meta name="description" content="Delicious shakes">
//     viewport: "width=device-width,initial-scale=1", // <meta name="viewport" content="width=device-width,initial-scale=1">
  
//     // <meta {...value}>
//     refresh: {
//       httpEquiv: "refresh",
//       content: "3;url=https://www.mozilla.org",
//     }, // <meta http-equiv="refresh" content="3;url=https://www.mozilla.org">
// });

// // GET
// export const loader = () => {
//     const data = {
//         posts: [
//             {
//                 id: 1,
//                 title: 'Post 1',
//                 body: 'Post body 1'
//             },
//             {
//                 id: 2,
//                 title: 'Post 2',
//                 body: 'Post body 2'
//             },
//             {
//                 id: 3,
//                 title: 'Post 3',
//                 body: 'Post body 3'
//             }
//         ]
//     }
//     return data;
// }


// function Post() {
//     const params = useParams();
//     const {posts} = useLoaderData();
//     //console.log(posts);
//   return (
//       <>
//         <section>
//             <h2>Posts</h2>
//             <Link to='/posts/newpost' className='btn'>
//                 New Post
//             </Link>
//         </section>
//         <section>
//         <ul className="posts-list">
//             {posts.map(post => (
//                 <li key={post.id}>
//                     <Link to={post.id}>
//                         <h3>{post.body}</h3>
//                     </Link>
//                 </li>
//             ))}
//         </ul>
//         </section>
//       </>
//   )
// }

// export default Post