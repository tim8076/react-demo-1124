import { useEffect, useRef } from "react";


export default function DonateModal({closeModal}) {
  return (
    <div className="modal fade" id="donateModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog  modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">好日子 X 台灣石虎保育協會</h1>
            <button type="button" className="btn-close" aria-label="Close"
              onClick={closeModal}></button>
          </div>
          <div className="modal-body">
            <img src="https://cdn-images-1.medium.com/max/1000/1*ST_FYCv41Ok6mHFJ_VC5MA.png" 
            alt=""
            className="img-fluid mb-3" />
            <p className="mb-3">
              台灣石虎保育協會
              為台灣第一個推動石虎保育的協會
              除了推動石虎及其棲地環境保育 也致力於促進人與石虎和諧共存與推動生態研究

              好日子與台灣石虎保育協會合作
              推出 惜惜石虎 公益聯名款 Pockeat 食物袋
              一點點的付出一起和石虎過好日子
            </p>
            <p className="text-primary fw-bold text-end fs-4">贊助方案: 600元 / 次</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary"
              onClick={closeModal}>取消</button>
            <button type="button" className="btn btn-primary"
              onClick={closeModal}>加入購物車</button>
          </div>
        </div>
      </div>
    </div>
  )
}
