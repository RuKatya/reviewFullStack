import React, { Suspense } from 'react';
import axios from 'axios';
import { defer, useLoaderData, Await } from 'react-router-dom';

interface IComents {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string
}
const Coments = () => {
    const {coments} = useLoaderData() as {coments: Array<IComents> }
  return (
      <Suspense fallback={<h1>Loading</h1>}>
          <Await resolve={coments}>
            {coments.map((i, index) => (
                <div>
                  <h2>{i.name}</h2>
                  <p>{i.body}</p>  
                </div>
            ))}
          </Await>
      </Suspense>
  )
};

export default Coments;

const handleGetComents = async (id: string) => {
  try {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}/comments`
    );
    return data;
  } catch (error) {
    alert(error);
    return error;
  }
};

export const handleLoaderComentsPage = async ({ params }: any) => {
    const {postID} = params
  return defer({
    coments: await handleGetComents(postID),
  });
};
