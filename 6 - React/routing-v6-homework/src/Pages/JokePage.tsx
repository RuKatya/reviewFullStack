import React, { Suspense } from 'react'
import axios from 'axios'
import { defer, useLoaderData, Await } from 'react-router-dom'

const JokePage = () => {
  const { joke } = useLoaderData()
  console.log(joke)

  return (
    <Suspense fallback={<h2>Loader</h2>}>
      <Await resolve={joke}>
        <h1>JOKE</h1>
      </Await>
    </Suspense>
  )
}

export default JokePage

const handleGetJoke = async () => {
  try {
    const { data } = await axios.get(
      // `https://api.chucknorris.io/jokes/search?query=${joke}`
      `https://api.chucknorris.io`
    )
    return data;
  } catch (error) {
    alert (error)
    return error
  }
}

export const handleLoaderJoke = async () => {
  return defer({
    joke: await handleGetJoke()
  })
}