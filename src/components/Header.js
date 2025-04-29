import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faBars, faQuestion } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

import Heart from './Heart'
import Menu from './Menu'
import Quastion from './Quastion'
import styles from './Header.module.css'

function Header({ neko, setNeko, setApiUrl }) {
  const [heart, setHeart] = useState(false)
  const [menu, setMenu] = useState(false)
  const [quastion, setQuastion] = useState(false)

  return (
    <>
      <div className={styles.header}>
        <p>
          <span>N</span>ekoTok
        </p>
        <div>
          {menu ? null : (
            <FontAwesomeIcon
              icon={faBars}
              className={styles.button}
              onClick={() => setMenu(true)}
            />
          )}
          {heart ? null : (
            <FontAwesomeIcon
              icon={faHeart}
              className={styles.button}
              onClick={() => setHeart(true)}
            />
          )}
          {quastion ? null : (
            <FontAwesomeIcon
              icon={faQuestion}
              className={styles.button}
              onClick={() => setQuastion(true)}
            />
          )}
        </div>
      </div>
      <Heart block={heart} blockFunc={setHeart} neko={neko} setNeko={setNeko} />
      <Menu block={menu} blockFunc={setMenu} setApiUrl={setApiUrl} />
      <Quastion block={quastion} blockFunc={setQuastion} />
    </>
  )
}

export default Header
