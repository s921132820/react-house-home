import Modal from "../Modal";
import List from "../List";
import { asc, desc } from "../../component/common";

function MainPage({
  menus,
  rooms,
  setRooms,
  handleLogout,
  handleClick,
  showModal,
  selectedIndex,
  setShowModal,
}) {
  return (
    <div className="App">
      <header className="Menu-wrap">
        {menus.map((menu, index) => (
          <div className="item" key={index}>
            <a href="#">{menu}</a>
          </div>
        ))}
      </header>
      <div>
        <button onClick={() => asc(rooms, setRooms)}>오름차순</button>
        <button onClick={() => desc(rooms, setRooms)}>내림차순</button>
        <button onClick={handleLogout}>로그아웃</button>
      </div>

      <div className="list-container">
        {rooms.map((room, index) => (
          <div key={room.id} className="list-wrap">
            <List
              title={room.title}
              image={room.image}
              price={room.price}
              bad={room.bad}
              id={room.id}
              onClick={() => handleClick(index)}
            />
          </div>
        ))}
      </div>

      {/* 상세 모달 */}
      {showModal && selectedIndex !== null && (
        <Modal
          title={rooms[selectedIndex].title}
          image={rooms[selectedIndex].image}
          content={rooms[selectedIndex].content}
          price={rooms[selectedIndex].price}
          bad={rooms[selectedIndex].bad}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
}

export default MainPage;
