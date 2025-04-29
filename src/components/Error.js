import styles from './Error.module.css'

function Error({ error, setError }) {
  return (
    <div className={styles.error} onClick={() => setError('')}>
      <p>Что-то пошло не так, попробуйте позже</p>
      <span>Ошибка: {error}</span>
      <p className={styles.close}>Нажмите, чтобы закрыть</p>
    </div>
  )
}

export default Error
