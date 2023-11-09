import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const myLinks= links.map(
    (link,index) =>{
      let url =`#${link}`
      return <a key={index} href={url}>{link}</a>
    }
  )

  return <nav>{
    myLinks
    }
    </nav>;
}

export default NavBar;
