import { useState } from "react";
import Modal from "react-modal";
import logo from "../logo.png";

const Sidebar = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  return (
    <>
      <aside className="sidebar">
        <div className="logo">
          <img src={logo} />
          <p>Brand<span>Colors</span></p>
        </div>
        <div className="description">
          The biggest collection of official brand color codes around. Curated
          by @brandcolors and friends.
        </div>
        <nav className="menu">
          <ul>
            <li>
              <p>Suggest a Brand</p>
            </li>
            <li>
              <p onClick={toggleModal}>About BrandColors</p>
            </li>
          </ul>
        </nav>
      </aside>
      <div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={toggleModal}
          ariaHideApp={false}
          className="modal"
        >
          <button onClick={toggleModal} className="modal-button">
            X
          </button>
          <h2>About BrandColors</h2>
          <br />
          <p>
            BrandColors was created by DesignBombs. The goal was to create a
            helpful reference for the brand color codes that are needed most
            often.
          </p>
          <br />
          <p>
            It's been featured by Smashing Magazine, CSS-Tricks, Web Design
            Depot, Tuts+, and over 2 million pageviews. There are now over 600
            brands with 1600 colors and the collection is always growing.
          </p>
        </Modal>
      </div>
    </>
  );
};

export default Sidebar;
