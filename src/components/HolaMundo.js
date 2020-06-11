import React from "react";
import "../styles/Hola.css";
import '../css/components/helpers.css';
import '../css/components/landing-1.css';
import '../css/components/landing-2.css';
import '../css/components/slick.css';
import '../css/components/slick-theme.css';
import '../css/components/style.css';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/components/_forms.css';
import '../css/components/_header.css';
import '../css/components/_loader.css';
import '../css/components/_mouse-scroll.css';
import '../css/components/_portfolio.css';
import '../css/components/_pricing.css';
import '../css/components/_team.css';
import '../css/components/_testimonial.css';
import fondo from '../images/phone_3.png';

class Hola extends React.Component {

  render() {
    return (
      <div >
      <section className="pb_cover_v3  pb_gradient_v1 " id="section-home">
        <div className ="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-6">
              <h2 className="heading mb-3">Wakiando</h2>
              <div className="sub-heading">
                <p className="mb-4">Llevar a cabo el proyecto Wakiando beneficiaría a la sociedad a largo plazo, ya que este lo que busca es reducir la contaminación medioambiental producida por las empresas textiles. </p>
              </div>
            </div>
            <div className="col-md-1">
            </div>
            <div className="col-md-5 relative align-self-center">
  
              <form action="#" className="bg-white rounded pb_form_v1">
                <h2 className="mb-4 mt-0 text-center">Registrate</h2>
                <div className="form-group">
                  <input type="text" className="form-control pb_height-50 reverse" placeholder="Nombre"></input>
                </div>
                <div className="form-group">
                  <input type="text" className="form-control pb_height-50 reverse" placeholder="Correo"></input>
                </div>
                <div className="form-group">
                  <input type="text" className="form-control pb_height-50 reverse" placeholder="Confirmar correo"></input>
                </div>
                <div className="form-group">
                  <input type="text" className="form-control pb_height-50 reverse" placeholder="Contraseña"></input>
                </div>
  
                <div className="form-group">
                  <input type="submit" className="btn btn-primary btn-lg btn-block pb_btn-pill  btn-shadow-blue" value="Register"></input>
                </div>
              </form>
  
            </div>
          </div>
        </div>
      </section>
  
      <section className="pb_section bg-light pb_slant-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 order-2">
              <a href="https://www.instagram.com/wakiandoando/?igshid=qck2mxkthcmi"><img alt="some value" className="cosa" src={fondo} alt="Image placeholder"></img></a>
            </div>
            <div className="col-lg-8 pr-md-5 pr-sm-0 order-1  mb-5">
              <div className="row">
                <div className="col">
                  <h2>Que es wakiando</h2>
                  <p className="pb_font-20">Un proyecto que beneficiaría a la sociedad a largo plazo al reducir la contaminacion de las empresas textiles</p>
                </div>
              </div>
              <div className="row">
                <div className="col-lg">
  
                  <div className="media pb_feature-v2 text-left mb-1 mt-5">
                    <div className="pb_icon d-flex mr-3 align-self-start pb_w-15"><i className="ion-ios-bookmarks-outline pb_icon-gradient"></i></div>
                    <div className="media-body">
                      <h3 className="mt-2 mb-2 heading">Fin o fines</h3>
                      <p className="text-sans-serif pb_font-16">El proyecto Wakiando está enfocado principalmente a lograr un bajo consumo de prendas de vestir, para contribuir en la preservación del medio ambiente, además de la conservación de los recursos monetarios, financieros, materiales e intangibles, para que de esta manera los ciudadanos de las diferentes localidades tengan una mejor calidad de vida, permitiendo que estos tengan un control sobre los niveles de consumo de ropa nueva, dentro de sus gastos finales.</p>
                    </div>
                  </div>
  
                  <div className="media pb_feature-v2 text-left mb-1 mt-5">
                    <div className="pb_icon d-flex mr-3 align-self-start pb_w-15"><i className="ion-ios-bookmarks-outline pb_icon-gradient"></i></div>
                    <div className="media-body">
                      <h3 className="mt-2 mb-2 heading"> Propósito </h3>
                      <p className="text-sans-serif pb_font-16">      Propósito 
  Ya se mencionó anteriormente que este proyecto busca es vender ropa usada por un corto tiempo que se encuentra en excelente estado a un precio más asequible para la población que cuenta con unos ingresos medios (menos de 2 salarios mínimos legales vigentes) y beneficiar al medio ambiente. </p>
                    </div>
                  </div>
  
                </div>
                <div className="col-lg">
  
  
  
                  <div className="media pb_feature-v2 text-left mb-1 mt-5">
                    <div className="pb_icon d-flex mr-3 align-self-start pb_w-15"><i className="ion-ios-bookmarks-outline pb_icon-gradient"></i></div>
                    <div className="media-body">
                      <h3 className="mt-2 mb-2 heading">Descripción del problema </h3>
                      <p className="text-sans-serif pb_font-16">En el mercado colombiano se están generando unos 13.8 billones de ropa al año, lo cual representa un 1.13% del PIB con una participación del 10.3% en la industria. Por otro lado, las importaciones en el 2017 en dicho país alcanzaron los US $2.208 millones mientras que las exportaciones unos US $769 millones. Lo anterior deja en claro el alto consumo de ropa que los colombianos tienen, viéndose esta cifra en un aumento del 13% cada año. Cartagena se encuentra en el puesto número 7 dentro de las ciudades con más alto consumo de ropa del país, siendo Medellín la ciudad que encabeza la lista.</p>
                    </div>
                  </div>
  
                </div>
              </div>
  
            </div>
          </div>
        </div>
      </section>
  
      <div id="pb_loader" className="show fullscreen"><svg className="circular" width="48px" height="48px"><circle className="path-bg" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke="#eeeeee"/><circle className="path" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke-miterlimit="10" stroke="#1d82ff"/></svg></div>

  
    </div>
    );
  }
}
export default Hola;
