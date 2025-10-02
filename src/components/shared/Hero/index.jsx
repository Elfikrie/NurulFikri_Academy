export default function Hero() {
  return (
    <>
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src="https://cf.shopee.co.id/file/ccb925d0b85e6ac380818902fb4f0bf2"
              className="d-block mx-lg-auto img-fluid rounded-5"
              alt=""
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
              Atomic Habits - Perubahan kecil yang memberikan hasil yang luar
              biasa
            </h1>
            <p className="lead mb-3">
              Cara mudah dan terukti untuk membentuk kebiasaan baik dan
              kebiasaan buruk
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button
                type="button"
                className="btn btn-primary btn-lg px-4 me-md-2"
              >
                Buy Now
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary btn-lg px-4"
              >
                Detail
              </button>
            </div>
          </div>
        </div>
      </div>
      ;
    </>
  );
}
