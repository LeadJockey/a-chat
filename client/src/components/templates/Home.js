import React from "react";
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div>
        <h2>HOME</h2>
        <Link to={"/counter"}>go to counter</Link>
      </div>
    );
  }
}

export default Home;
