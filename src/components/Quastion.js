import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import styles from './Quastion.module.css'

function Quastion({ block, blockFunc }) {
  return (
    block && (
      <div className={styles.quastion}>
        <div className={styles.quastionTitle}>
          <p>Информация</p>
          <FontAwesomeIcon
            icon={faArrowRight}
            className={styles.quastionClose}
            onClick={() => blockFunc(false)}
          />
        </div>
        <div className={styles.quastionItems}>
          <div>
            <p>
              NekoTok - это приложение, которое предлагает пользователям
              бесконечный поток изображений аниме в 40 категориях SFW и 11
              категориях NSFW. Просто выберите категорию, и наслаждайтесь
              мгновенным доступом к новым картинкам, прокручивая ленту, как в
              TikTok!
            </p>
            <p>
              Добавь на свой Discord-сервер
              <a href="https://kamiko.glitch.me/" target="blank">
                аниме-бота Kamiko
              </a>
              !
            </p>
            <p>
              ~нравится проект? Поддержи меня донатом :3
              <br />
              2202 2050 4046 4114 сбер
            </p>
          </div>
          <span>
            Идея, дизайн и разработка проекта:
            <a href="https://wwyynnee.site" target="blank">
              Wynne
            </a>
          </span>
        </div>
      </div>
    )
  )
}

export default Quastion
