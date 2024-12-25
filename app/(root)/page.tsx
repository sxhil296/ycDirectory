import SearchForm from '@/components/SearchForm'
import React from 'react'

const  Home = async ( {searchParams}:{searchParams: Promise<{query:string}>}) => {
  const query = (await searchParams).query
  return (
    <>
    <section className='pink_container'>
    <h1 className='heading'>Pitch your startup, <br />connect with enterpreneurs</h1>
    <p className='sub-heading !max-w-3xl'>
      Submit ideas, vote on pitches and get noticed in virtual competitions.
    </p>
    <SearchForm query={query}/>
    </section>
    
    </>
  )
}

export default Home
