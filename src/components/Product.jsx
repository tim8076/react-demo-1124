import { useState, useEffect, useRef } from "react";
import DonateModal from "./DonateModal";
import { Modal } from "bootstrap";
export default function Product() {
  const [productNum, setProductNum] = useState(1);
  const isDisabledClass = productNum === 1 ? 'disabled' : '';
  const cartTotal = productNum * 600;
  const productModal = useRef(null);
  useEffect(() => {
    productModal.current = new Modal('#donateModal');
  }, []);
  const openModal = () => {
    productModal.current.show();
  }
  const closeModal = () => {
    productModal.current.hide();
  }
  return (
    <div className="container my-3">
      <DonateModal closeModal={closeModal}/>
      <div className="row pt-5 justify-content-center">
        <div className="col-md-10">
          <div className="row">
            <div className="col-md-4">
              <img src="https://agooday.com/wp-content/uploads/2024/01/26/210429/%E6%B0%B4%E8%B1%9A%E5%95%86%E5%93%81%E7%85%A7-%E5%8C%85%E8%A2%B1-300x300.png"
                alt="" 
                className="w-100"/>
            </div>
            <div className="col-md-8 d-flex flex-column">
              <h1 className="mb-3">Pockeat食物袋 | 萌萌水豚君</h1>
              <p className="card-text fs-3 mb-3">NT${cartTotal}</p>
              <div className="row">
                <div className="col-6">
                  <div className="input-group mb-3">
                    <button className={`btn btn-outline-secondary ${isDisabledClass}`}
                      type="button"
                      onClick={() => setProductNum(productNum - 1)}>-
                    </button>
                    <input type="number" className="form-control text-center" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" value={productNum}
                    onChange={e => setProductNum(e.target.value)} />
                    <button className="btn btn-outline-secondary"
                      type="button"
                      onClick={() => setProductNum(productNum + 1)}>+
                    </button>
                  </div>
                </div>
                <div className="col-6">
                  <button className="btn btn-primary w-100"
                  >加入購物車</button>
                </div>
              </div>
              <p className="mb-2 mt-auto fs-4 fw-bold">歡迎加購贊助方案</p>
              <p className="mb-3">好日子除了將綠行動落實在生活中之外，也關注各式各樣的公益議題，讓這些團體能夠在各種不同的層面一起共築更好的生活，歡迎捐款贊助</p>
              <div className="d-flex">
                <button className="btn btn-primary me-2" onClick={openModal}>愛心捐贈方案一</button>
                <button className="btn btn-primary me-2" onClick={openModal}>愛心捐贈方案二</button>
                <button className="btn btn-primary" onClick={openModal}>愛心捐贈方案三</button>
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>
  )
}
