import React, { useEffect } from 'react'
import { getPosts } from '../actions/getPosts'
import Products from '../components/Products'
import { useAppDispatch, useAppSelector } from '../hook/useTypedSelctor'

const Home = () =>{
  const useDispatch = useAppDispatch();
  const {data, loading, error} = useAppSelector(state=> state);
  useEffect(()=>{
    useDispatch(getPosts())
  }, [])
  return (
    <div>
      {loading ? (<h1>Loading...</h1>) : (
             data && data?.map(item=>(
              <div key={item.id}>
                <Products post={item}/>
              </div>
            ))
      )}
    </div>
  )
}

export default Home