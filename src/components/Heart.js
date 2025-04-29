import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowRight,
  faXmark,
  faHeart,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'

import styles from './Heart.module.css'

function Heart({ block, blockFunc, neko, setNeko }) {
  function deleteHeart(imageUrl) {
    const nekoArray = neko.filter((img) => img !== imageUrl)

    setNeko(nekoArray)
    localStorage.setItem('imagesNeko', JSON.stringify(nekoArray))
  }

  return (
    block && (
      <div className={styles.heart}>
        <div className={styles.heartTitle}>
          <p>Понравившиеся</p>
          <FontAwesomeIcon
            icon={faArrowRight}
            className={styles.heartClose}
            onClick={() => blockFunc(false)}
          />
        </div>
        <div className={styles.heartItems}>
          <div className={styles.heartImages}>
            {neko.length === 0 ? (
              <p>
                Нажми <FontAwesomeIcon icon={faHeart} /> под картинкой, чтобы
                добавить её сюда
              </p>
            ) : (
              neko.map((imageUrl, index) => (
                <div className={styles.heartImagesBlock} key={index}>
                  <img src={imageUrl} alt="" />
                  <FontAwesomeIcon
                    icon={faXmark}
                    className={`${styles.heartImagesDelete} ${styles.heartButton}`}
                    onClick={() => deleteHeart(imageUrl)}
                  />
                  <a href={imageUrl} target="blank">
                    <FontAwesomeIcon
                      icon={faArrowUpRightFromSquare}
                      className={`${styles.heartImagesLink} ${styles.heartButton}`}
                    />
                  </a>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    )
  )
}

export default Heart
