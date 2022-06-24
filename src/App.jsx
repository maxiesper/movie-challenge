import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { MovieDetails } from "./pages/MovieDetails";
import { LandingPage } from "./pages/LandingPage";
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBContainer,
  MDBIcon,
} from "mdb-react-ui-kit";
import styles from "./App.module.css";

export function App() {
  return (
    <Router>
      <header className={styles.header}>
        <MDBNavbar expand="lg" light bgColor="black" fixed>
          <MDBContainer fluid>
            <MDBNavbarToggler
              aria-controls="navbarExample01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <MDBIcon fas icon="bars" color="white" />
            </MDBNavbarToggler>
            <div className="collapse navbar-collapse" id="navbarExample01">
              <MDBNavbarNav right className="mb-2 mb-lg-0">
                <MDBNavbarItem active>
                  <MDBNavbarLink
                  className='text-light bg-black'
                    aria-current="page"
                    href="/moviechallenge"
                  >
                    HOME
                  </MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink className='text-light bg-black' href="Promociones">
                    Promociones
                  </MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink className='text-light bg-black' href="Registrarse">
                    Registrarse
                  </MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink className='text-light bg-black' href="Iniciar Sesion">
                    Iniciar Sesion
                  </MDBNavbarLink>
                </MDBNavbarItem>
              </MDBNavbarNav>
            </div>
          </MDBContainer>
        </MDBNavbar>

        <div
          className="p-5 text-center bg-image"
          style={{
            backgroundImage:
              "url('https://mdbootstrap.com/img/new/slides/041.webp')",
            height: 400,
          }}
        >
          <div
            className="mask"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
          >
            <div className="d-flex justify-content-center align-items-center h-100">
              <div className="text-white">
                <h1 className="mb-3">TUS PELICULAS</h1>
                <h4 className="mb-3">EN UN SOLO SITIO</h4>
                <a
                  className="btn btn-outline-light btn-lg"
                  href="Navigate"
                  role="button"
                >
                  CINEMA HOME
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <Routes>
          <Route path="/movies/:movieId" element={<MovieDetails />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </main>
    </Router>
  );
}
