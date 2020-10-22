import React, { useEffect, useState, useRef } from "react";
import MenuListItem from "../menu-list-item";
// import { connect } from 'react-redux';
import WithRestoService from "../hoc";
// import {menuLoaded, menuRequested, menuError} from '../../actions';
// import Spinner from "../spinner";
// import Error from "../error";
import "./menu-list.scss";

const styles = {
  button: {
    marginLeft: "10px",
  },
};

const MenuList = (props) => {
  let intervalId = useRef(null);
  const { fps = 60, step = 1, number } = props;
  const getIntervalMS = (fps) => {
    return 1000 / fps;
  };

  const [value, setValue] = useState(0);
  const increment = () => {
    setValue((val) => val + step);
  };

  const stop = () => {
    clearInterval(intervalId.current); // TODO interval ID is cached in closure!!!
  };

  const start = () => {
    const interval = getIntervalMS(fps);
    intervalId.current = setInterval(increment, interval);
  };

  useEffect(() => {
    if (value > number) {
      stop();
    }
  }, [value, number]);

  console.log(intervalId);

  return (
    <div>
      <div>
        <button style={styles.button} onClick={start} type={"button"}>
          START
        </button>
        <button style={styles.button} onClick={stop} type={"button"}>
          STOP
        </button>
      </div>
      <div>{value}</div>
    </div>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     menuItems: state.menu,
//     loading: state.loading,
//     error: state.error,
//   };
// };

// const mapDispatchToProps = {
//   menuLoaded: menuLoaded,
//   menuRequested,
//   menuError,
// };

// const View = ({ items }) => {
//   return <ul className="menu__list">{items}</ul>;
// };

// export default WithRestoService()(
//   connect(mapStateToProps, mapDispatchToProps)(MenuList)
// );

export default MenuList;
