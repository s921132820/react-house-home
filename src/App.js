import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Provider } from "react-redux";
import "./App.css";
import data from "./data/oneroom";
import Modal from "./pages/Modal";
import List from "./pages/List";
import Login from "./pages/Login";
import MainPage from "./pages/MainPage"; // MainPage import
import store from "./store";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [rooms, setRooms] = useState(data);
  const [showModal, setShowModal] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);

  // 로그인 처리
  const handleLogin = (user) => {
    setUserInfo(user);
    setIsLoggedIn(true);
    localStorage.setItem("user", JSON.stringify(user));
  };

  // 로그아웃 처리
  const handleLogout = () => {
    setUserInfo(null);
    setIsLoggedIn(false);
    localStorage.removeItem("user");
  };

  const handleClick = (index) => {
    setSelectedIndex(index);
    setShowModal(true);
  };

  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              isLoggedIn ? <Navigate to="/main" /> : <Login onLogin={handleLogin} />
            }
          />
          <Route
            path="/main"
            element={
              isLoggedIn ? (
                <MainPageWrapper
                  rooms={rooms}
                  setRooms={setRooms}
                  handleLogout={handleLogout}
                  handleClick={handleClick}
                  showModal={showModal}
                  selectedIndex={selectedIndex}
                  setShowModal={setShowModal}
                />
              ) : (
                <Navigate to="/" />
              )
            }
          />
        </Routes>
      </Router>
    </Provider>
  );
}

// MainPage를 감싸는 Wrapper 컴포넌트 추가
function MainPageWrapper({
  rooms,
  setRooms,
  handleLogout,
  handleClick,
  showModal,
  selectedIndex,
  setShowModal,
}) {
  const menus = useSelector((state) => state.menus);
  const dispatch = useDispatch();

  return (
    <MainPage
      menus={menus}
      rooms={rooms}
      setRooms={setRooms}
      handleLogout={handleLogout}
      handleClick={handleClick}
      showModal={showModal}
      selectedIndex={selectedIndex}
      setShowModal={setShowModal}
    />
  );
}

export default App;
