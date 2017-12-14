import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () =>
  (
    <div>
      <h3>
        404 - Not found!
      </h3>
      <Link to='/'>Return to home</Link>
    </div>
  );

export default PageNotFound;
