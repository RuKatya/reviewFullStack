import React, { Suspense } from 'react'
import { Await, defer, useLoaderData, Link } from 'react-router-dom'
import axios from 'axios'

const Categories = () => {
    const { categoriesApi } = useLoaderData()
  return (
    <Suspense fallback={<h1>Loding</h1>}>
        <Await resolve={categoriesApi}>
            {categoriesApi.map((ctg, index) => (
                <Link key={index} to={`/joke-page/${ctg}`}>{ctg}</Link>
            ))}
        </Await>
    </Suspense>
  )
}

export default Categories

const handleGetCategories = async () => {
    try {
        const { data } = await axios.get(
            'https://api.chucknorris.io/jokes/categories'
        )
        return data
    } catch (error) {
        alert (error)
        return error
    }
}

export const handleLoaderCategories = async () => {
    return defer({
        categoriesApi: await handleGetCategories()
    })
}