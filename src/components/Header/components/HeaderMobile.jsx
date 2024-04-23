import styles from "./HeaderMobile.module.scss";
import Button from "../../Button";

export default function HeaderMobile({
  changeView,
  licensed,
  login,
  handleToggleUsers,
  handleToggleFavorites,
}) {
  return (
    <ul className={`p-20 ${styles.container}`}>
      <Button changeView={changeView} value="All" btnStyle={true} />
      <Button changeView={changeView} value="West" />
      <Button changeView={changeView} value="East" />
      <button onClick={login} className="btn btn-reverse-primary mr-15 fz-20">
        {licensed ? "Logout" : "Login"}
      </button>
      <button onClick={handleToggleUsers} className="btn btn-primary fz-20">
        Users
      </button>
      <button onClick={handleToggleFavorites} className="btn btn-primary fz-20">
        Favorites
      </button>
    </ul>
  );
}
