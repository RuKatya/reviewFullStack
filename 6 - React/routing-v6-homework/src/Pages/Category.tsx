import React, { Suspense } from 'react'
import { Await, useLoaderData, defer } from 'react-router-dom'
import axios from 'axios'

const Category = () => {
    const { joke } = useLoaderData()

    console.log(joke)
  return (
    <Suspense fallback={<h2>Loading</h2>}>
        <Await resolve={joke}>
            {/* {joke.map((ctg, index) => (
                {ctg}
            ))} */}
        </Await>
    </Suspense>
  )
}

export default Category

const handleGetCategory = async (category: string) => {
    try {
        const { data } = await axios.get(
            `https://api.chucknorris.io/jokes/random?category=${category}`
        )
        return data;
    } catch (error) {
        alert (error)
        return error
    }
}

export const handleLoaderApiCategory = async ({ params } : any) => {
    const { categoryname } = params
    return defer({
        joke: await handleGetCategory(categoryname)
    })
}