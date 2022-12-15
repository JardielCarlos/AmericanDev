import { FacebookLogo, InstagramLogo, TwitterLogo, WhatsappLogo } from "phosphor-react";

export function Footer(){
  return (
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 mt-4 border-top bg-primary">
      <div className='w-25 p-3 '>
            <h4 className='text-black'>AmericanDev</h4>
            <p className='text-white'>Somos uma empresa consagrada no comercio nacional de conteúdo para desenvolvedores</p>
          </div>
          <div className="col-md-3 d-flex align-items-center">
            <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
              <svg className="bi" width="30" height="24"></svg>
            </a>
            <span className="text-black">© 2022 Company, Inc</span>
          </div>

          <ul className="nav col-md-2 justify-content-end list-unstyled d-flex px-3">
            <li className="ms-3"><InstagramLogo size={32} color="#1a1a1a" /></li>
            <li className="ms-3"><WhatsappLogo size={32} color="#1a1a1a" /></li>
            <li className="ms-3"><FacebookLogo size={32} color="#1a1a1a" /></li>
            <li className="ms-3"><TwitterLogo size={32} color="#1a1a1a" /></li>
          </ul>

    </footer>
  )
}