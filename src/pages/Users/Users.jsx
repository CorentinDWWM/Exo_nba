import styles from "./Users.module.scss";

export default function Users({
  handleToggleUsers,
  handleInputUser,
  handleClickForm,
  user,
  allUsers,
  handleClickDelete,
}) {
  return (
    <div
      className={`d-flex flex-column justify-content-center align-items-center ${styles.main}`}
    >
      <h3 onClick={handleToggleUsers} className={`mb-20 ${styles.link}`}>
        Back to Homepage
      </h3>
      <form className="d-flex flex-column align-items-center p-20 mb-20">
        <div className={`mb-20 ${styles.searchBar}`}>
          <input
            onInput={handleInputUser}
            type="text"
            placeholder="name"
            name="name"
            value={user.name || ""}
          />
        </div>
        <div className={`mb-20 ${styles.searchBar}`}>
          <input
            onInput={handleInputUser}
            type="text"
            placeholder="player"
            name="player"
            value={user.player || ""}
          />
        </div>
        <button onClick={handleClickForm} className={`btn ${styles.btnSubmit}`}>
          Submit
        </button>
      </form>
      <ul className={`d-flex flex-column card list p-20 ${styles.list}`}>
        {allUsers.map((u, i) => (
          <li key={i} className="d-flex flex-row align-items-center mb-20">
            <span className={`flex-fill mr-20 ${styles.display}`}>
              {u.name} | {u.player}
            </span>
            <button
              onClick={() => handleClickDelete(i)}
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
