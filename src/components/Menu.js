import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import data from '../data/Categories.json'
import styles from './Menu.module.css'

function Menu({ block, blockFunc, setApiUrl }) {
  const categoriesSFW = data.categories.sfw
  const categoriesNSFW = data.categories.nsfw

  function setCategory(category, index) {
    if (['neko', 'waifu', 'husbando', 'kitsune'].includes(category)) {
      const nekosBest = `https://nekos.best/api/v2/${category}?amount=5`

      setApiUrl(nekosBest)
      localStorage.setItem('categoryApi', nekosBest)
    } else if (['fox_girl', 'neko_2', 'ngif'].includes(category)) {
      let nekosLife = `https://nekos.life/api/v2/img/${category}`
      if (category === 'neko_2')
        nekosLife = 'https://nekos.life/api/v2/img/neko'

      setApiUrl(nekosLife)
      localStorage.setItem('categoryApi', nekosLife)
    } else if ([...categoriesNSFW, 'coffee', 'kemonomimi'].includes(category)) {
      const nekobot = `https://nekobot.xyz/api/image?type=${category}`

      setApiUrl(nekobot)
      localStorage.setItem('categoryApi', nekobot)
    } else {
      const nekosiaCat = `https://api.nekosia.cat/api/v1/images/${category}?count=5`

      setApiUrl(nekosiaCat)
      localStorage.setItem('categoryApi', nekosiaCat)
    }

    localStorage.setItem('category', index)
  }

  // По-умолчанию категория 0
  const categoryImages =
    localStorage.getItem('category') !== null
      ? parseInt(localStorage.getItem('category'), 10)
      : 0

  return (
    block && (
      <div className={styles.menu}>
        <div className={styles.menuTitle}>
          <p>Категории</p>
          <FontAwesomeIcon
            icon={faArrowRight}
            className={styles.menuClose}
            onClick={() => blockFunc(false)}
          />
        </div>
        <p className={styles.menuP}>SFW</p>
        <div className={styles.menuItems}>
          {categoriesSFW.map((category, index) => (
            <div
              className={`${categoryImages === index ? styles.menuActive : ''}`}
              key={index}
              onClick={() => setCategory(category, index)}
            >
              {category}
            </div>
          ))}
        </div>
        <p>NSFW</p>
        <div className={styles.menuItems}>
          {categoriesNSFW.map((category, index) => (
            <div
              className={`${
                categoryImages === 0 - index - 1 ? styles.menuActive : ''
              }`}
              key={index}
              onClick={() => setCategory(category, 0 - index - 1)}
            >
              {category}
            </div>
          ))}
        </div>
      </div>
    )
  )
}

export default Menu
