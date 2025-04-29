import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'

import Header from './Header'
import Error from './Error'
import styles from './Nekos.module.css'

function Nekos() {
  const [ApiUrl, setApiUrl] = useState(() => {
    return (
      localStorage.getItem('categoryApi') ||
      'https://api.nekosia.cat/api/v1/images/animal-ears?count=5'
    )
  })
  const [images, setImages] = useState([])
  const [error, setError] = useState('')
  const [neko, setNeko] = useState(() => {
    return JSON.parse(localStorage.getItem('imagesNeko')) || []
  })

  // Добавление картинок в Понравившиеся
  function addHeart(imageUrl) {
    if (neko.includes(imageUrl)) return

    const nekoArray = [...neko, imageUrl]

    setNeko(nekoArray)
    localStorage.setItem('imagesNeko', JSON.stringify(nekoArray))
  }

  useEffect(() => {
    const nekoApi = localStorage.getItem('categoryApi')
    nekoApi && setApiUrl(nekoApi)
  }, [])
  
  useEffect(() => {
    setImages([])

    function loadImages() {
      if (
        // nekos.best
        [
          'https://nekos.best/api/v2/neko?amount=5',
          'https://nekos.best/api/v2/waifu?amount=5',
          'https://nekos.best/api/v2/husbando?amount=5',
          'https://nekos.best/api/v2/kitsune?amount=5',
        ].includes(ApiUrl)
      ) {
        fetch(ApiUrl)
          .then((response) => response.json())
          .then((json) => {
            setImages((array) => [
              ...array,
              ...json.results.map((images) => images.url),
            ])
          })
          .catch((error) => setError(error.message))
      } else if (
        // nekos.life
        [
          'https://nekos.life/api/v2/img/fox_girl',
          'https://nekos.life/api/v2/img/neko',
          'https://nekos.life/api/v2/img/ngif',
        ].includes(ApiUrl)
      ) {
        function fetchNekosLife() {
          fetch(ApiUrl)
            .then((response) => response.json())
            .then((json) => {
              setImages((array) => [...array, json.url])
            })
            .catch((error) => setError(error.message))
        }

        fetchNekosLife()
        fetchNekosLife()
        fetchNekosLife()
      } else if (
        // nekobot
        [
          'https://nekobot.xyz/api/image?type=coffee',
          'https://nekobot.xyz/api/image?type=kemonomimi',
          'https://nekobot.xyz/api/image?type=hentai',
          'https://nekobot.xyz/api/image?type=paizuri',
          'https://nekobot.xyz/api/image?type=tentacle',
          'https://nekobot.xyz/api/image?type=yaoi',
          'https://nekobot.xyz/api/image?type=hmidriff',
          'https://nekobot.xyz/api/image?type=hkitsune',
          'https://nekobot.xyz/api/image?type=hass',
          'https://nekobot.xyz/api/image?type=hboobs',
          'https://nekobot.xyz/api/image?type=hthigh',
          'https://nekobot.xyz/api/image?type=hanal',
          'https://nekobot.xyz/api/image?type=holo',
        ].includes(ApiUrl)
      ) {
        function fetchNekobot() {
          fetch(ApiUrl)
            .then((response) => response.json())
            .then((json) => {
              setImages((array) => [...array, json.message])
            })
            .catch((error) => setError(error.message))
        }

        fetchNekobot()
        fetchNekobot()
        fetchNekobot()
      } else {
        // nekosia.cat
        fetch(ApiUrl)
          .then((response) => response.json())
          .then((json) => {
            setImages((array) => [
              ...array,
              ...json.images.map((image) => image.image.original.url),
            ])
          })
          .catch((error) => setError(error.message))
      }
    }

    loadImages()

    // Появление картинок при скролле
    function scrollPage() {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 1000
      ) {
        loadImages()
      }
    }

    window.addEventListener('scroll', scrollPage)
    return () => window.removeEventListener('scroll', scrollPage)
  }, [ApiUrl])

  return (
    <>
      <Header neko={neko} setNeko={setNeko} setApiUrl={setApiUrl} />
      <div className={styles.images}>
        {error && <Error error={error} setError={setError} />}
        {images.map((image, item) => (
          <div key={item}>
            <img src={image} alt="" className={styles.img} />
            <div
              className={(styles.heart, styles.imagesHeart)}
              onClick={() => {
                addHeart(image)
              }}
            >
              <FontAwesomeIcon icon={faHeart} />
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Nekos
