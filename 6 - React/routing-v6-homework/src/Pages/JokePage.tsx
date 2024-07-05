import React, { Suspense } from 'react'
import axios from 'axios'
import { defer, useLoaderData, Await } from 'react-router-dom'

interface Ijoke {
  categories: [string],
  created_at: string,   
  icon_url: string,
  id: string,
  updated_at: string,
  url: string,
  value: string
}

const JokePage = () => {
  const { joke } = useLoaderData() as { joke: Ijoke }
  console.log(joke)

  return (
    <Suspense fallback={<h2>Loader</h2>}>
      <Await resolve={joke}>
        <h2>{joke.categories.map((ctg, i) => (
          <p key={i}>{ctg}</p>
        ))}</h2>
        <h3>{joke.value}</h3>
      </Await>
    </Suspense>
  )
}

export default JokePage

const handleGetJoke = async (joke: string) => {
  try {
    const { data } = await axios.get(
      `https://api.chucknorris.io/jokes/random?category=${joke}`
      )
    return data;
  } catch (error) {
    alert (error)
    return error
  }
}

export const handleLoaderJoke = async ({ params } : any) => {
  const { categoryname } = params 
  return defer({
    joke: await handleGetJoke(categoryname)
  })
}