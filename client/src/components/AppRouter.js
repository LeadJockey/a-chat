import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Page extends Component {
  render() {
    return (
    <div>
      <h1>Project Home</h1>
      {/* Link to List.js */}
      <Link to={'/list'}>
        <button variant="raised">
            My List
        </button>
      </Link>
    </div>
    );
  }
}
export default Page;