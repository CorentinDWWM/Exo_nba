import styles from "./OneTeam.module.scss";

export default function OneTeam({ t, i, handleFavorites }) {
  return (
    <div className={`card p-20 d-flex flex-column ${styles.teamCard}`}>
      <p className={`${styles.team}`}>
        <span>CITY : </span>
        {t.name}
      </p>
      <p className={`${styles.team}`}>
        <span>NAME : </span>
        {t.club}
      </p>
      <div className="d-flex justify-content-center align-items-center flex-fill">
        <img className={styles.logo} src={t.logo} alt="logo" />
      </div>
      {t.liked ? (
        <i
          onClick={() => handleFavorites(t.id)}
          className="fa-solid fa-heart"
        ></i>
      ) : (
        <i
          onClick={() => handleFavorites(t.id)}
          className="fa-regular fa-heart"
        ></i>
      )}
    </div>
  );
}
