import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import exchangeABI from "../abi/exchangeABI";
import factoryABI from "../abi/factoryABI";
import { setChangeKEth } from "../store/token";
import "./Main.css";

const KLAY_KETH_CA = "0x27f80731dddb90c51cd934e9bd54bff2d4e99e8a";
const FACTORY_CA = "0xc6a2ad8cc6e4a7e08fc37cc5954be07d499e7654";
const KETH_CA = "0x34d21b1e550d73cee41151c77f3c73359527a396"; // klayscope에서 검색하여 가져오기

function Main() {
  const token = useSelector((state) => state.token);

  const swap = () => {
    if (!token.account) {
      alert("지갑을 연결해 주세요");
      return;
    }

    const contract = new window.caver.klay.Contract(factoryABI, FACTORY_CA);
    const value = token.changeKlay * 1e18;

    contract.methods
      .exchangeKlayPos(KETH_CA, 1, [])
      .send({
        from: token.account,
        gas: 1e7,
        value: value.toString(),
      })
      .then((data) => {
        console.log(data);
        alert("거래성공");

        window.location.reload();
      })
      .catch((e) => {
        console.error(e);
        alert("거래 실패");
      });
  };
  return (
    <main>
      <section>
        <span className="main-text">
          원하는 자산으로 바로 <span className="text-strong">교환(스왑)</span>
          하세요
        </span>
      </section>
      <section className="ticket">
        <section>
          <KlayCardItem />
          <article className="change-icon">
            <img src="https://klayswap.com/img/icon/ic-target-swap.svg" />
          </article>
          <KEthCardItem />
        </section>
        <section onClick={swap}>
          <span>Swap</span>
        </section>
      </section>
    </main>
  );
}

/* + */
function KlayCardItem(props) {
  const [amount, setAmount] = useState();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);
  const _onChange = async (e) => {
    const inputValue = e.target.value;
    const exContract = new window.caver.klay.Contract(
      exchangeABI,
      KLAY_KETH_CA
    );
    const pool = await exContract.methods.getCurrentPool().call();
    const changeKEth = (pool[1] / pool[0]) * inputValue;
    dispatch(setChangeKEth(inputValue, changeKEth));
    setAmount(inputValue);
  };
  return (
    <article className="card-item">
      <label>From</label>
      <div className="exchange">
        <input
          type="number"
          placeholder="0"
          onChange={_onChange}
          value={amount}
        />
        <img src="https://klayswap.com/img/icon/ic-drp-open-gray.svg" />
        <div className="token-img">
          <img src="https://s.klayswap.com/data/img/token/0x0000000000000000000000000000000000000000/icon.svg?v=1647939876203" />
        </div>
      </div>
      <div className="final-part">
        <span className="sub-text">
          <span>보유</span>
          <span>{token.klay}</span>
        </span>
        <span className="sub-text2">KLAY</span>
      </div>
    </article>
  );
}

function KEthCardItem(props) {
  const [amount, setAmount] = useState();
  const token = useSelector((state) => state.token);

  useEffect(() => {
    setAmount(token.changeKEth);
  }, [token.changeKEth]);

  const _onChange = async (e) => {
    setAmount(e.target.value);
  };

  return (
    <article className="card-item">
      <label>To</label>
      <div className="exchange">
        <input
          type="number"
          placeholder="0"
          onChange={_onChange}
          value={amount}
        />
        <img src="https://klayswap.com/img/icon/ic-drp-open-gray.svg" />
        <div className="token-img">
          <img src="https://s.klayswap.com/data/img/token/0x34d21b1e550d73cee41151c77f3c73359527a396.svg" />
        </div>
      </div>
      <div className="final-part">
        <span className="sub-text">
          <span>보유</span>
          <span>{token.kEth}</span>
        </span>
        <span className="sub-text2">KETH</span>
      </div>
    </article>
  );
}

export default Main;
