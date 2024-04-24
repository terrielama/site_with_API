const main = document.querySelector('main')
const audio = document.querySelector('audio')
// main.style.cursor = 'pointer'

// let isPlayed = false
const musics = ['cest-si-bon-emilie-claire-barlow','sous-le-ciel-de-paris-jill-barber','the-chainsmokers-paris',]

let musicIndex = 0

// fetch est une promesse
fetch(
  'https://api.themoviedb.org/3/movie/upcoming?api_key=f21f9a3af90d3b652b0fefe8ced2e831'
)
  .then((res) => res.json())
  .then((json) => {
    let index = 0
    let interval = null

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

  // une fonction qui passe en paramètre d'une fonction est un callback
    window.addEventListener('keydown', (event) => {
      const {key} = event

      console.log(key)

switch( key ) {
  case 'Enter':
    if (interval)
    {
      clearInterval(interval)
      interval = null
    } else
    {
      start()
    }
    break

  // -------------------------musique------------------
    case 's' :
      if (audio.paused) audio.play()
      else  audio.pause()
      break
      case '  ArrowLeft':
        console.log(left)
        break
        case '  ArrowRight':
          console.log(lright)
          break
      default:
        break
}
      
    })
  })
  .catch((error) => console.error('Erreur du fetch :', error))