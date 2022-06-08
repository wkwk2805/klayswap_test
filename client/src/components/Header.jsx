import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <TextDropdown text="HELP" />
      <Network />
      <TextDropdown text="KO" />
    </header>
  );
}

function TextDropdown(props) {
  return (
    <article>
      <span className="text bold">{props.text}</span>
      <span>
        <img
          src="https://klayswap.com/img/icon/ic-chevron-bottom-disable-gray.svg"
          alt="chevron"
        />
      </span>
    </article>
  );
}

function Network() {
  return (
    <article className="network">
      <span className="ic-status pointer green"></span>
      <span className="text bold">mainnet</span>
      <span className="green sharp bold">#</span>
      <span className="text2">86,636,094</span>
    </article>
  );
}

export default Header;
