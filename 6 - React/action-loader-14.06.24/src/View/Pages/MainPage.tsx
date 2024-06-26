import { Suspense, useState } from 'react';
import { defer, useLoaderData, Await, Link } from 'react-router-dom';
import axios from 'axios';

interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const MainPage = () => {
  const { posts } = useLoaderData() as { posts: Array<IPost> };
  const [allPosts, setAllPosts] = useState<Array<IPost>>(posts);
  const [loader, setLoader] = useState<boolean>(false);

  const handleDeletePost = async (postId: number) => {
    try {
      setLoader(true)
      console.log(postId);
      const { data } = await axios.delete(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
      );
      console.log(data);
      return setAllPosts((post) => post.filter((ps) => ps.id !== postId));
    } catch (error) {
      alert(error)
    } finally {
      setLoader(false)
    }
  };

  return (
    <Suspense fallback={<h1>loading</h1>}>
      <Await resolve={posts}>
        {allPosts.slice(0, 10).map((i, index) => (
          <div key={index}>
            <Link to={`/coments-of-post/${i.id}`}>
              <h2>{i.title}</h2>
              <p>{i.body}</p>
            </Link>
            <button 
              disabled={loader}
            onClick={() => handleDeletePost(i.id)}>Delete post</button>
          </div>
        ))}
      </Await>
    </Suspense>
  );
};

export default MainPage;

const handleGetPost = async () => {
  try {
    const { data } = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    );
    return data;
  } catch (error) {
    alert(error);
    return error;
  }
};

export const handleLoaderMainPage = async () => {
  return defer({
    posts: await handleGetPost(),
  });
};

//create a new project use the vite latest
//found new API and fetch it by use loader
