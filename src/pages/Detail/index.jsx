import useGlobalGifs from '../../hooks/useGlobalGifs'
import Gif from '../../components/Gif'

export default function Detail({ params }) {
  const gifs = useGlobalGifs()
  const gif = gifs.find(singleGif => singleGif.id === params.id)
  return (
    <>
      <h1>Gif con el id: {params.id}</h1>
      <Gif {...gif} withAuto={false}></Gif>
    </>
  )
}
