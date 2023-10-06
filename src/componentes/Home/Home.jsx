import perfil from "../../assets/perfil.png";
import ProgressBar from 'react-bootstrap/ProgressBar';
// importar antes imagem em vezde colocar diretorio diretamente
export default function Home() {
  return (
    <>
      <section className="container mt-5 d-flex gap-5 w-100">
        <div className="d-flex justify-content-center mt-5">
          <img src={perfil} alt="" />
        </div>

        <div className="conteudo mt-5">
          <h2>Hola, mi nombre es Luis</h2>
          <p>
            ¡Hola! Soy Luis Enrique, un estudiante del curso técnico en
            informática para internet del Instituto Federal de Mato Grosso del
            Sur, Campus Naviraí. Tengo 18 años y soy un apasionado de la
            tecnología y los deportes, como el Atletismo y el Tenis. Estoy
            encantado de darles la bienvenida a mi portafolio personal.
          </p>
          <p>
            Creo firmemente en el poder de la tecnología para resolver problemas
            complejos y transformar el mundo. Siempre estoy ansioso por aprender
            mas cosas que me permitan aplicar mis conocimientos y contribuir con
            los otros. Cuando no estoy inmerso en el mundo de la tecnología, me
            encontrarán disfrutando de mi pasión por el atletismo y el Ciclismo
            también. Estos deportes me flipan mucho y complementan mi vida
            académica.
          </p>
          <p>
            Estoy a gustito de compartir mi trabajo y mis proyectos en este
            portafolio. Si desean colaborar o simplemente charlar sobre temas
            como la tecnologia y los deportes, no duden en ponerse en contacto
            conmigo chavales. ¡Espero que disfruten explorando mi trabajo y mis
            proyectos!
          </p>
          <button
            class="btn btn-primary"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasScrolling"
            aria-controls="offcanvasScrolling"
          >
            Formação Academica
          </button>

          <div
            class="offcanvas offcanvas-start"
            data-bs-scroll="true"
            data-bs-backdrop="false"
            tabindex="-1"
            id="offcanvasScrolling"
            aria-labelledby="offcanvasScrollingLabel"
          >
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasScrollingLabel">
                Formação Academica
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <ul>
                <li>TADS - IFMS</li>
                <ul>2021 - Cursando</ul>
                <li>Técnico em Informatica para Internet </li>
                <ul>2021 - Cursando</ul>
              </ul>
            </div>
          </div>

          <div className="mt-3">
            <h5>Front-End</h5>
            <ProgressBar animated now={70} />
          </div>
          <div className="mt-3">
            <h5>Back-End</h5>
            <ProgressBar animated now={40} variant="warning"/>
          </div>
          <div className="mt-3">
            <h5>Mobile</h5>
            <ProgressBar animated now={10} />
          </div>

          <div className="d-flex gap-4 mt-5 justify-content-center h1">
          <i class='bx bxl-react'></i>
          <i class='bx bxl-javascript' ></i>
          <i class='bx bxl-html5' ></i>
          <i class='bx bxl-css3' ></i>
          </div>

        </div>
      </section>
    </>
  );
}
