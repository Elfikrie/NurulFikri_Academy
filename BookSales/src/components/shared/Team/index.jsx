export default function Team() {
  return (
    <>
      <div className="py-5 mt-3" id="team">
        <div className="container text-center">
          <h2 className="fw-bold mb-5">Meet Our Team</h2>
          <div className="row g-4">
            {/* Member 1 */}
            <div className="col-12 col-sm-6 col-md-3">
              <div className="card h-100 shadow-sm border-0">
                <img
                  src="el.jpg"
                  className="card-img-top rounded-circle mx-auto mt-3"
                  alt="Fikrie El Muqoffa"
                  style={{
                    width: "120px",
                    height: "120px",
                    objectFit: "cover",
                  }}
                />
                <div className="card-body">
                  <h5 className="card-title">M. Fikrie El Muqoffa</h5>
                  <p className="text-primary mb-1">Founder & CEO</p>
                  <p className="card-text small text-muted">
                    Membangun visi besar untuk BookSales dan mengarahkan
                    strategi perusahaan.
                  </p>
                </div>
                <div className="card-footer bg-transparent">
                  <a href="#" className="btn btn-outline-primary btn-sm">
                    Contact
                  </a>
                </div>
              </div>
            </div>

            {/* Member 2 */}
            <div className="col-12 col-sm-6 col-md-3">
              <div className="card h-100 shadow-sm border-0">
                <img
                  src="Naruto.jpg"
                  className="card-img-top rounded-circle mx-auto mt-3"
                  alt="Aisyah Nur"
                  style={{
                    width: "120px",
                    height: "120px",
                    objectFit: "cover",
                  }}
                />
                <div className="card-body">
                  <h5 className="card-title">Naruto Uzumaki</h5>
                  <p className="text-primary mb-1">CTO</p>
                  <p className="card-text small text-muted">
                    Bertanggung jawab pada pengembangan teknologi dan inovasi
                    produk.
                  </p>
                </div>
                <div className="card-footer bg-transparent">
                  <a href="#" className="btn btn-outline-primary btn-sm">
                    Contact
                  </a>
                </div>
              </div>
            </div>

            {/* Member 3 */}
            <div className="col-12 col-sm-6 col-md-3">
              <div className="card h-100 shadow-sm border-0">
                <img
                  src="sasuke.jpg"
                  className="card-img-top rounded-circle mx-auto mt-3"
                  alt="Ahmad Fajar"
                  style={{
                    width: "120px",
                    height: "120px",
                    objectFit: "cover",
                  }}
                />
                <div className="card-body">
                  <h5 className="card-title">Sasuke Uchiha</h5>
                  <p className="text-primary mb-1">Marketing Lead</p>
                  <p className="card-text small text-muted">
                    Mengelola strategi pemasaran dan membangun brand awareness.
                  </p>
                </div>
                <div className="card-footer bg-transparent">
                  <a href="#" className="btn btn-outline-primary btn-sm">
                    Contact
                  </a>
                </div>
              </div>
            </div>

            {/* Member 4 */}
            <div className="col-12 col-sm-6 col-md-3">
              <div className="card h-100 shadow-sm border-0">
                <img
                  src="kakashi.jpg"
                  className="card-img-top rounded-circle mx-auto mt-3"
                  alt="Siti Rahma"
                  style={{
                    width: "120px",
                    height: "120px",
                    objectFit: "cover",
                  }}
                />
                <div className="card-body">
                  <h5 className="card-title">Kakashi sensei</h5>
                  <p className="text-primary mb-1">UI/UX Designer</p>
                  <p className="card-text small text-muted">
                    Mendesain pengalaman pengguna yang sederhana dan
                    menyenangkan.
                  </p>
                </div>
                <div className="card-footer bg-transparent">
                  <a href="#" className="btn btn-outline-primary btn-sm">
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
