const main = document.querySelector('main')
main.style.cursor = 'pointer'

// fetch est une promesse
fetch(
  'https://api.themoviedb.org/3/movie/upcoming?api_key=f21f9a3af90d3b652b0fefe8ced2e831'
)
  // Callback : méthode dans une méthode
  .then((res) => res.json())
  .then((json) => {
    let index = 0
    let interval = null

    // '=>' veut dire que c'est une fonction fléchée
    const start = () => {
      interval = setInterval(() => {
        const { original_title, overview, poster_path } = json.results[index++]

        const section = `<section>
    <img
      src="https://image.tmdb.org/t/p/original/${poster_path}"
      alt="Affiche du film “${original_title}”"
      class="movie__poster"
    />
    <div class="movie__text">
      <h1>${original_title}</h1>
      <p>
        ${overview}
      </p>
    </div>
  </section>`

        main.innerHTML = section
        index = index === json.results.lenght - 1 ? 0 : index + 1
      }, 2000)
    }

    start()

    main.addEventListener('click', () => {
      if (interval) {
        clearInterval(interval)
        interval = null
      } else{
        start()
      }
    })
  })
  .catch((error) => console.error('Erreur du fetch :', error))