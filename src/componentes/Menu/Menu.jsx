// digitar a estrutura de um componente

export default function Menu(){
    return(
        <>
        <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div class="container">
        <div className="logo">
        <img src="/logo-luis.png" className="logo-img" alt="Logo" />
        <span className="logo-text">ㅤ</span>
      </div>
    <a class="navbar-brand" href="#">Luisito</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Luisito</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-center flex-grow-1 pe-3">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Sobre Min</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Projetos</a>
          </li>
        </ul>
        {/* inserir cod abaixo do button tags primeira linha */}
        <a class="btn btn-primary" href="#" role="button">Acesse o meu Curriculo</a>
      </div>
    </div>
  </div>
</nav>

        </>
    )
}
