function App() {
  return (
    <>
      {/* Header */}
      <div className="container">
        <header className="p-3 mb-3 border-bottom" id="header">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a
              href="/"
              className="d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none"
            >
              <i
                className="fa-solid fa-book fa-xl"
                style={{ color: "#63E6BE" }}
              ></i>
              <span className="ms-2 fs-4">Book - Store</span>
            </a>

            {/* Navigasi di tengah */}
            <ul className="nav mx-auto mb-2 justify-content-center mb-md-0">
              <li>
                <a href="#" className="nav-link px-2">
                  Home
                </a>
              </li>
              <li>
                <a href="#produkList" className="nav-link px-2">
                  Book
                </a>
              </li>
              <li>
                <a href="#team" className="nav-link px-2">
                  Team
                </a>
              </li>
              <li>
                <a href="#contact" className="nav-link px-2">
                  Contact
                </a>
              </li>
            </ul>

            <div className="text-end">
              <button type="button" className="btn btn-outline-primary me-2">
                Login
              </button>
              <button type="button" className="btn btn-primary">
                Register
              </button>
            </div>
          </div>
        </header>

        {/* Hero */}
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

        {/* Produk List */}
        <section className="py-5 text-center container" id="produkList">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="display-5 fw-light">Best Selling Book</h1>
              <p className="lead text-body-secondary">
                Inilah koleksi buku favorit yang paling banyak diminati. Cocok
                untuk menemani waktu luang, menambah pengetahuan, atau sekadar
                mencari inspirasi baru.
              </p>
              <p>
                <a href="#" className="btn btn-primary my-2 m-2">
                  Views
                </a>
                <a href="#" className="btn btn-secondary my-2">
                  Others Book
                </a>
              </p>
            </div>
          </div>
        </section>

        <div className="album py-5 bg-body-tertiary">
          <div className="container">
            <div className="row g-3">
              {/* Card 1 */}
              <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                <div className="card shadow-sm h-100">
                  <img
                    src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1715565995i/213278594.jpg"
                    className="card-img-top img-thumbnail"
                    alt="Book cover"
                  />
                  <div className="card-body">
                    <p className="card-text">
                      Buku 1 dengan deskripsi singkat tentang isi buku ini.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary mt-2"
                        >
                          View
                        </button>
                      </div>
                      <small className="text-body-secondary">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                <div className="card shadow-sm h-100">
                  <img
                    src="https://static.mizanstore.com/d/img/book/cover/janji-tere-liye-pre-order.jpg"
                    className="card-img-top "
                    alt="Book cover"
                  />
                  <div className="card-body">
                    <p className="card-text">
                      Buku 1 dengan deskripsi singkat tentang isi buku ini.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary mt-2"
                        >
                          View
                        </button>
                      </div>
                      <small className="text-body-secondary">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                <div className="card shadow-sm h-100">
                  <img
                    src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1702460504i/203728665.jpg"
                    className="card-img-top img-thumbnail"
                    alt="Book cover"
                  />
                  <div className="card-body">
                    <p className="card-text">
                      Buku 1 dengan deskripsi singkat tentang isi buku ini.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary mt-2"
                        >
                          View
                        </button>
                      </div>
                      <small className="text-body-secondary">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 4 */}
              <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                <div className="card shadow-sm h-100">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlnoYG20hbsFzQhlKK6GWMzfBmVZH0XGVKjA&s"
                    className="card-img-top img-thumbnail"
                    alt="Book cover"
                  />
                  <div className="card-body">
                    <p className="card-text">
                      Buku 1 dengan deskripsi singkat tentang isi buku ini.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary mt-2"
                        >
                          View
                        </button>
                      </div>
                      <small className="text-body-secondary">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
              {/* penutup card 4 */}
            </div>
          </div>
        </div>
        {/* Open team */}
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
                      Mengelola strategi pemasaran dan membangun brand
                      awareness.
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
        {/* Close team */}

        {/* Contact us */}
        <div className="py-5 bg-light" id="contact">
          <div className="container">
            <div className="text-center mb-5">
              <h2 className="fw-bold">Contact Us</h2>
              <p className="text-muted">
                Kami senang mendengar dari Anda. Silakan hubungi kami melalui
                informasi di bawah ini atau isi formulir.
              </p>
            </div>

            <div className="row g-4">
              {/* Info Kontak */}
              <div className="col-md-4">
                <div className="card shadow-sm h-100">
                  <div className="card-body">
                    <h5 className="card-title">Alamat</h5>
                    <p className="card-text text-muted">
                      Jl. Merdeka No. 123, Depok
                    </p>
                    <h5 className="card-title">Email</h5>
                    <p className="card-text text-muted">
                      support@booksales.com
                    </p>
                    <h5 className="card-title">Telepon</h5>
                    <p className="card-text text-muted">+62 812 3456 7890</p>
                  </div>
                </div>
              </div>

              {/* Form Kontak */}
              <div className="col-md-8">
                <div className="card shadow-sm h-100">
                  <div className="card-body">
                    <h5 className="card-title mb-4">Kirim Pesan</h5>
                    <form>
                      <div className="mb-3">
                        <label htmlFor="name" className="form-label">
                          Nama
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="Masukkan nama Anda"
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                          Email
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="Masukkan email Anda"
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="message" className="form-label">
                          Pesan
                        </label>
                        <textarea
                          className="form-control"
                          id="message"
                          rows="4"
                          placeholder="Tulis pesan Anda..."
                        ></textarea>
                      </div>
                      <button type="submit" className="btn btn-primary">
                        Kirim
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Close Contact */}

        {/* Footer */}
        <div className="container">
          <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <p className="col-md-4 mb-0 text-body-secondary">
              &copy; 2025 Nurul Fikri Academy | STT Terpadu Nurul Fikri
            </p>

            <a
              href="/"
              className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
              aria-label="Bootstrap"
            >
              <svg
                className="bi me-2"
                width="40"
                height="32"
                aria-hidden="true"
              >
                <use xlink:href="#bootstrap"></use>
              </svg>
            </a>

            <ul className="nav col-md-4 justify-content-end">
              <li className="nav-item">
                <a href="#header" className="nav-link px-2 text-body-secondary">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#produkList" className="nav-link px-2 text-body-secondary">
                  Book
                </a>
              </li>
              <li className="nav-item">
                <a href="#team" className="nav-link px-2 text-body-secondary">
                  Team
                </a>
              </li>
              <li className="nav-item">
                <a href="#contact" className="nav-link px-2 text-body-secondary">
                  Contact
                </a>
              </li>
            </ul>
          </footer>
        </div>
        {/* Penutup footer */}
      </div>
      {/* Penutup */}
    </>
  );
}

export default App;
