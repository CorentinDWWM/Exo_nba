import { useState } from "react";
import Button from "../Button";
import styles from "./Header.module.scss";
import HeaderMobile from "./components/HeaderMobile";

export default function Header({
  changeView,
  handleInput,
  licensed,
  login,
  handleToggleUsers,
  handleToggleFavorites,
}) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className={`d-flex flex-row jc-between align-items-center`}>
      <h1 className={`${styles.mainTitle}`}>NBA</h1>
      <div
        className={`d-flex justify-content-center align-items-center my-30 ${styles.searchBar}`}
      >
        <i className="fa-solid fa-magnifying-glass mr-15"></i>
        <input
          onInput={handleInput}
          type="text"
          placeholder="Search"
          className="flex-fill"
        />
      </div>
      <nav>
        <Button changeView={changeView} value="East" />
        <Button changeView={changeView} value="West" />
        <Button changeView={changeView} value="All" btnStyle={true} />
      </nav>
      <i
        onClick={() => setShowMenu(true)}
        className={`fas fa-bars mr-10 ${styles.mobileHeader}`}
      ></i>
      {showMenu && (
        <>
          <div className="calc" onClick={() => setShowMenu(false)}></div>
          <HeaderMobile
            changeView={changeView}
            licensed={licensed}
            login={login}
            handleToggleUsers={handleToggleUsers}
            handleToggleFavorites={handleToggleFavorites}
          />
        </>
      )}
    </header>
  );
}
