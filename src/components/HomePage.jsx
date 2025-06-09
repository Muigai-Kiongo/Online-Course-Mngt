// this is the main component entailing header and courses list
import React from 'react'
import Search from './Search'
import Header from './Header'

export default function HomePage() {
  return (
    <div>
        <Header />
        <Search />
    </div>
  )
}
