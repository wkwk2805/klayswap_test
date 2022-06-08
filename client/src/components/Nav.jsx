import React, { useState } from "react";
import "./Nav.css";
import tokenABI from "../abi/tokenABI"; // remix 활용하여 interface를 만들고 IERC20 상속받아서 사용
import { useDispatch } from "react-redux";
import { setBalance } from "../store/token";

const KETH_CA = "0x34d21b1e550d73cee41151c77f3c73359527a396"; // klayscope에서 검색하여 가져오기

// Navigation 부분
function Nav() {
  const dispatch = useDispatch();
  const [myAccount, setMyAccount] = useState();
  const start = async () => {
    if (window.klaytn) {
      const addressList = await window.klaytn.enable();
      const myAddress = addressList[0];
      const klayBalance =
        (await window.caver.klay.getBalance(myAddress)) / 1e18;
      const kEthContract = new window.caver.klay.Contract(tokenABI, KETH_CA);
      const kEthBalance =
        (await kEthContract.methods.balanceOf(myAddress).call()) / 1e18;
      dispatch(setBalance(myAddress, klayBalance, kEthBalance));
      setMyAccount(myAddress);
    } else {
      alert("카이카스 지갑을 설치해주세요");
    }
  };
  return (
    <nav>
      <article className="home">
        <img src="https://klayswap.com/img/logo/logo.svg" alt="main logo" />
        <label> KLAYswap </label>
      </article>
      <NavItem title="내자산" />
      <NavItem title="스왑" />
      <NavItem title="예치" isDownArrow={true} />
      <NavItem title="KSP거버넌스" isDownArrow={true} />
      <NavItem title="Drops" />
      <NavItem title="대시보드" />
      <article className="nav-btn">
        {!myAccount ? (
          <button onClick={start}>클레이스왑 시작하기</button>
        ) : (
          <div className="address">{myAccount.substring(0, 15)}...</div>
        )}
      </article>
    </nav>
  );
}

// 컴포넌트 활용 (중복시)
function NavItem(props) {
  return (
    <article className="nav-item">
      <span>{props.title}</span>
      {props.isDownArrow ? (
        <img
          src="https://klayswap.com/img/icon/ic-triangle-bottom-gray.svg"
          alt="tab"
        />
      ) : (
        <></>
      )}
    </article>
  );
}

export default Nav;
