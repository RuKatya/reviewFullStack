import { defer, useLoaderData, Await } from 'react-router-dom'
import axios from 'axios'
import './App.css'
import { Suspense } from 'react'

// add interface
interface IJoke {
  iconUrl: string,
  id: string,
  url: string,
  value: string,
}

//add layout to projeckt (find where)

function App() {
  const { jokes } = useLoaderData() as { jokes: IJoke}

  return ( 
    <Suspense fallback={<h1>Loding</h1>}>
      <Await resolve={jokes}>
      {jokes.value}
      </Await>
    </Suspense>
  )
}

export default App

const handleGetJoks = async () => {
  try {
    const { data } = await axios.get(
      'https://api.chucknorris.io/jokes/random'
    )
    return data;
  } catch (error) {
    alert (error)
    return error;
  }
}

export const handleLoaderAPI = async () => {
  return defer({
    jokes: await handleGetJoks()
  })
}