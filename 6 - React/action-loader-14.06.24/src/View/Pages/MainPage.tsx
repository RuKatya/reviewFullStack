import { Suspense } from 'react'
import { Form, defer, useLoaderData, Await } from 'react-router-dom'
import axios from 'axios'

const MainPage = () => {
    const { posts } = useLoaderData()

  return (
    <Suspense fallback={<h1>loading</h1>}>
        <Await resolve={posts}>
            {posts.slice(0, 10).map((i, index) => (
                <div key={index}>
                    <h2>{i.title}</h2>
                    <p>{i.body}</p>
                </div>
            ))}
        </Await>
    </Suspense>
  )
}

export default MainPage

const handleGetPost = async() => {
  const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts")
  return data
}

export const handleLoaderMainPage = async() => {
  return defer({
    posts: await handleGetPost(),
  })
}

//create a new project use the vite latest
//found new API and fetch it by use loader