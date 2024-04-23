import { useState } from "react";
import styles from "./App.module.scss";
import Team from "./pages/Teams/Team";
import Header from "./components/Header/Header";
import Users from "./pages/Users/Users";
import { datas } from "./data";
import Loading from "./components/Loading/Loading";
import Favorites from "./pages/Favorites/Favorites";

function App() {
  const [teams, setTeams] = useState(datas);
  const [isLoading, setIsLoading] = useState(false);

  // setTimeout(() => {
  //   setIsLoading(false);
  //   setTeams(datas);
  // }, 1500);

  const [licensed, setLicensed] = useState(true);
  const [view, setView] = useState("All");
  const [filter, setFilter] = useState("");
  const [showUsers, setShowUsers] = useState(false);
  const [user, setUser] = useState({
    name: "",
    player: "",
  });
  const [allUsers, setAllUsers] = useState([]);

  const [showFavorites, setShowFavorites] = useState(false);

  function handleClickForm(e) {
    e.preventDefault();
    console.log(user);
    setAllUsers([...allUsers, { ...user }]);
  }

  function handleInputUser(e) {
    let value = e.target.value;
    const name = e.target.name;
    setUser({
      ...user,
      [name]: value,
    });
  }

  function handleClickDelete(id) {
    console.log(id);
    const newUserList = allUsers.filter((u, i) => i !== id);
    setAllUsers(newUserList);
  }

  function changeView(value) {
    setView(value);
  }

  function handleInput(e) {
    const value = e.target.value;
    setFilter(value.trim().toLowerCase());
  }

  function handleToggleUsers() {
    setShowUsers(!showUsers);
  }

  function login() {
    setLicensed(!licensed);
  }

  function handleFavorites(id) {
    let FavoritesList = teams;
    FavoritesList.find((f, i) => f.id === id).liked = !FavoritesList.find(
      (f, i) => f.id === id
    ).liked;
    setTeams([...FavoritesList]);
    console.log(teams);
  }

  function handleToggleFavorites() {
    setShowFavorites(!showFavorites);
  }

  const person = {
    name: "John",
    age: 20,
  };
  return (
    <div className={`d-flex align-items-center flex-column  ${styles.main}`}>
      {showUsers ? (
        <Users
          handleToggleUsers={handleToggleUsers}
          handleInputUser={handleInputUser}
          handleClickForm={handleClickForm}
          user={user}
          allUsers={allUsers}
          handleClickDelete={handleClickDelete}
        />
      ) : showFavorites ? (
        <Favorites
          teams={teams.filter((t) => t.liked === true)}
          handleFavorites={handleFavorites}
          handleToggleFavorites={handleToggleFavorites}
        />
      ) : (
        <>
          <Header
            changeView={changeView}
            handleInput={handleInput}
            licensed={licensed}
            login={login}
            handleToggleFavorites={handleToggleFavorites}
            handleToggleUsers={handleToggleUsers}
          />
          {isLoading ? (
            <Loading />
          ) : (
            <Team
              person={person}
              teams={teams}
              view={view}
              licensed={licensed}
              login={login}
              filter={filter}
              handleToggleUsers={handleToggleUsers}
              handleToggleFavorites={handleToggleFavorites}
              handleFavorites={handleFavorites}
            />
          )}
        </>
      )}
    </div>
  );
}

export default App;
