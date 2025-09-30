export default function ProdukList() {
  return (
    <>
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
    </>
  );
}
