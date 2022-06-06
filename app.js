const form = document.querySelector('#searchForm')
const results = document.querySelector('#results')
const container = document.querySelector('.container')
form.addEventListener('submit', search)

async function search(e) {
  e.preventDefault()
  const tvSearch = form.elements.query.value
  const config = { params: { q: tvSearch } }
  const res = await axios.get('https://api.tvmaze.com/search/shows', config)

  displayResults(res.data)
  form.elements.query.value = ''
}

function displayResults(arrOfShows) {
  results.innerHTML = ''
  arrOfShows = arrOfShows.filter(data => data.show.image)
  console.log(arrOfShows)
  arrOfShows.forEach(data => {
    console.log(data)
    const div = document.createElement('div')
    div.classList.add('col')
    const link = document.createElement('a')
    link.href = data.show.url
    const img = document.createElement('img')
    img.classList.add('rounded')
    img.src = data.show.image.medium
    link.append(img)
    div.append(link)
    results.append(div)
  })
}
