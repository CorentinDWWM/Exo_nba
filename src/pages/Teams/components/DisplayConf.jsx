import styles from "./DisplayConf.module.scss";
import OneTeam from "./OneTeam";

export default function DisplayConf({ teams, view, filter, handleFavorites }) {
  return (
    <>
      {view && (
        <h2 className={`mt-30 ml-20 ${styles.east}`}>Conférence {view}</h2>
      )}
      <div className="d-flex flex-wrap justify-content-center">
        {view
          ? teams
              .filter((t) => t.conference === view)
              .filter((t) => t.club.toLowerCase().startsWith(filter))
              .map((t, i) => (
                <OneTeam
                  key={t.id}
                  t={t}
                  i={i}
                  handleFavorites={handleFavorites}
                />
              ))
          : teams
              .filter((t) => t.club.toLowerCase().startsWith(filter))
              .map((t, i) => (
                <OneTeam
                  key={t.id}
                  t={t}
                  i={i}
                  handleFavorites={handleFavorites}
                />
              ))}
      </div>
    </>
  );
}
