import React from 'react';


export default function Nav(){

    return (
      <>
        <nav className="nav-bar">
          <div className='navContent'>
            <img src={require("../img/logo.png")} alt="" className="nav--img" />
            <h2 className="nav--name">Meme Generator</h2>
          </div>
        </nav>
      </>
    );
}