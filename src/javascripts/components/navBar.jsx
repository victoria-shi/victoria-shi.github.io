import React from 'react';

import 'css/components/navBar.scss';

function NavBar(props) {
  const links = [
    { url: '/', name: 'Home', shortName: 'H' },
    { url: '/#/code', name: 'Code', shortName: 'C' },
    { url: '/#/art', name: 'Design + Art', shortName: 'D+A' },
    { url: '/#/resume', name: 'Resume', shortName: 'R' },
    { url: '/#/about', name: 'About Me', shortName: 'Abt.' }
  ];
  const linksFull = links.map((link, index) => {
    return (
      <a key={index} href={link.url}>{link.name}</a>
    );
  });
  const linksShort = links.map((link, index) => {
    return (
      <a key={index} href={link.url}>{link.shortName}</a>
    );
  });
  return (
    <div id="navBar">
    	<a className="logo" href="/"></a>
      <div className="linksFull">
        {linksFull}
      </div>
      <div className="linksShort">
        {linksShort}
      </div>
    </div>
  );
}

export default NavBar;