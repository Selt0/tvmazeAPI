## Overview

A simple app that uses an API to display TV show search results.

### The challenge / Features

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- Search for a show using a form
- Click on the images to take you to the listing

### Screenshot

![](./images/tvAPI.gif)

### Links

- Live Site URL: [https://selt0.github.io/tvmazeAPI/](https://selt0.github.io/tvmazeAPI/)

## My process

### Built with

- Semantic HTML5 markup
- [Bootstrap](https://getbootstrap.com/)
- Flexbox
- CSS Grid
- Mobile-first workflow

**### What I learned**

I used Axios to grab data from an api. There really is a library for everything. I created elements for each object from the results and appended them into the html. Using Bootstrap, I was able to use the predefined classes to create a grid for the results and used JavaScript to add those classes to the elements as I created them

```html

<div class="row row-cols-auto g-3 justify-content-center justify-content-md-start" id="results"></div>

```

```js

function displayResults(arrOfShows) {
  results.innerHTML = ''

  arrOfShows = arrOfShows.filter(data => data.show.image)

  arrOfShows.forEach(data => {
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

```

### Useful resources

- [TV Maze API](https://www.tvmaze.com/api)

- [Axios docs](https://axios-http.com/docs/intro) - Docs are always a great resource to see how things work. I noticed there can be different query parameters when you use the API. I was able to search the docs to see how I would add the different params

## Author

- Website - [Michael Martinez](https://michael-martinez.netlify.app/)
- Twitter - [@MMocomochi](https://twitter.com/MMocomochi)
