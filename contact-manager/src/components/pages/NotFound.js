import React from 'react';

export default function NotFound() {
  return (
    <div className="text-center">
      <h1 className="display-4 mt-5">
        <span className="text-danger">404</span> Page Not Found
      </h1>
      <p className="lead">Sorry, this page does not exist!</p>
    </div>
  );
}
