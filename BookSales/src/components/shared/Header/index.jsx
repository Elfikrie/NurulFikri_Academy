import { Link } from "react-router";

export default function Header() {

  return (
    <>
      <header
        id="header"
        className="p-3 mb-3 border-bottom"
        style={{ backgroundColor: "#2789eaff" }} 
      >
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a
            href=""
            className="d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none"
          >
            <i
              className="fa-solid fa-book fa-xl"
              style={{ color: "#e0f3edff" }}
            ></i>
            <span className="ms-2 fs-4" style={{  color: "#fff" }}>Book - Store</span>
          </a>

          {/* Navigasi di tengah */}
          <ul
            className="nav mx-auto mb-2 justify-content-center mb-md-0"
            style={{ gap: "20px", fontWeight: "500" }}
          >
            <li>
              <Link
                to="/"
                className="nav-link px-2 custom-link"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/books"
                className="nav-link px-2 custom-link"
              >
                Book
              </Link>
            </li>
            <li>
              <Link
                to="/team"
                className="nav-link px-2 custom-link"
              >
                Team
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="nav-link px-2 custom-link"
              >
                Contact
              </Link>
            </li>
          </ul>

          <div className="text-end">
            <Link to="/login">
              <button
                type="button"
                className="btn btn-outline-primary me-2 "
                style={{ borderRadius: "10px", color: "#fff", border: "1px solid #fff" }}
              >
                Login
              </button>
            </Link>
            <Link to="/register">
              <button
                type="button"
                className="btn btn-primary"
                style={{ borderRadius: "10px", border: "1px solid #fff" }}
              >
                Register
              </button>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
