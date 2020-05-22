import React, { useState } from 'react'

export default () => {
  const [slug, setSlug] = useState('')

  return (
    <div className="page">
      <div className="title">Hello, </div>
      <div className="subtitle">To whom am I speaking? </div>
      <input type="text" name="search" onChange={(event) => { setSlug(event.target.value) }} value={slug} />
      <div className="slug" />
      <button type="button" onClick={() => { setSlug('') }}>Clear</button>
      <div className="response">
        Nice to meet you
        {' '}
        {slug}
      </div>
    </div>
  )
}
