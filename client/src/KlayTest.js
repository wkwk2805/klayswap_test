import React from "react";
import tokenABI from "./abi/tokenABI";
const KETH_ADDRESS = "0x34d21b1e550d73cee41151c77f3c73359527a396";
const KDAI_ADDRESS = "0x5c74070fdea071359b86082bd9f9b3deaafbe32b";
// 35분까지 질문해주세요 ~
function KlayTest() {
  const connectWallet = async () => {
    const result = await window.klaytn.enable(); // 연결이 끝나야
    const myAccount = result[0];
    const balance = await window.caver.klay.getBalance(myAccount);
    const contract = new window.caver.klay.Contract(tokenABI, KDAI_ADDRESS);
    const kEthBalance = await contract.methods.balanceOf(myAccount).call();
    console.log("잔액:", kEthBalance / 1e18);
  };
  return (
    <div
      style={{
        display: "flex",
        height: "80vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button onClick={connectWallet}>지갑연결</button>
    </div>
  );
}

export default KlayTest;
