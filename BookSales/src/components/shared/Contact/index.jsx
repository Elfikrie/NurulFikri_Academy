export default function Contact() {
  return (
    <>
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
                  <p className="card-text text-muted">support@booksales.com</p>
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
    </>
  );
}
