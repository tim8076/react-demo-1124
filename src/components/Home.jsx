import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="container my-3">
      <h1 className="text-center fs-2 mb-3 text-primary">好日子</h1>
      <div className="row">
        <div className="col-md-6 col-lg-3">
          <div className="card">
            <img src="https://agooday.com/wp-content/uploads/2024/01/26/210429/%E6%B0%B4%E8%B1%9A%E5%95%86%E5%93%81%E7%85%A7-%E5%8C%85%E8%A2%B1-768x768.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Pockeat食物袋 | 萌萌水豚君</h5>
              <p className="card-text">NT$608</p>
              <Link className="btn btn-primary" to="/product">
                選擇規格
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="card">
            <img src="https://agooday.com/wp-content/uploads/2024/01/26/210429/%E6%B0%B4%E8%B1%9A%E5%95%86%E5%93%81%E7%85%A7-%E5%8C%85%E8%A2%B1-768x768.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Pockeat食物袋 | 萌萌水豚君</h5>
              <p className="card-text">NT$608</p>
              <Link className="btn btn-primary" to="/product">
                選擇規格
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="card">
            <img src="https://agooday.com/wp-content/uploads/2024/01/26/210429/%E6%B0%B4%E8%B1%9A%E5%95%86%E5%93%81%E7%85%A7-%E5%8C%85%E8%A2%B1-768x768.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Pockeat食物袋 | 萌萌水豚君</h5>
              <p className="card-text">NT$608</p>
              <Link className="btn btn-primary" to="/product">
                選擇規格
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="card">
            <img src="https://agooday.com/wp-content/uploads/2024/01/26/210429/%E6%B0%B4%E8%B1%9A%E5%95%86%E5%93%81%E7%85%A7-%E5%8C%85%E8%A2%B1-768x768.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Pockeat食物袋 | 萌萌水豚君</h5>
              <p className="card-text">NT$608</p>
              <Link className="btn btn-primary" to="/product">
                選擇規格
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
