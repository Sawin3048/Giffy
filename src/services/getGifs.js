const apiKey = 'HDYtpxUBN3KvjH1h1nJKA4L0LIOKJxyY'

export default async function ({ keyword = 'cats', limit = 50 } = {}) {
  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=${limit}&offset=0&rating=r&lang=en`
  const res = await fetch(apiURL)
  const response = await res.json()
  const { data } = response
  // console.log(data)
  const gifs = data.map(gif => {
    const { images, title, id } = gif
    const { url, width, height } = images.original_still
    return { title, url, width, height, id }
  })
  return gifs
}
