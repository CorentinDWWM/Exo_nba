import styles from "./Favorites.module.scss";

export default function Favorites({
  handleToggleFavorites,
  handleFavorites,
  teams,
}) {
  return (
    <div
      className={`d-flex flex-column justify-content-center align-items-center ${styles.main}`}
    >
      <h3 onClick={handleToggleFavorites} className={`mb-20 ${styles.link}`}>
        Back to Homepage
      </h3>
      <ul className={`d-flex flex-column card list p-20 ${styles.list}`}>
        {teams.map((f, i) => (
          <li key={i} className="d-flex flex-row align-items-center mb-20">
            <span className={`flex-fill mr-20 ${styles.display}`}>
              {f.name} | {f.club}
            </span>
            <button
              onClick={() => handleFavorites(f.id)}
              className={`btn ${styles.btnDelete}`}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
