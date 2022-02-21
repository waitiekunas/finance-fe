import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { loadedAppActionTest } from '../store/actions/app.actions';

export default function Tets1() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadedAppActionTest());
  }, []);
  return (
    <div>
      Test1
      <nav>
        <Link to="/test">Home</Link>
      </nav>
    </div>
  );
}
