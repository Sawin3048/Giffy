import React, { useState } from 'react'

const Contex = React.createContext({})

export function GifsContextProvider({ children }) {
  const [gifs, setGifs] = useState([])

  return <Contex.Provider value={{ gifs, setGifs }}>{children}</Contex.Provider>
}

export default Contex
