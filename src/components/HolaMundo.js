import React from "react";
import "../styles/Hola.css";
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'reactstrap';
import {  Card,  CardTitle,Button, FormGroup } from 'reactstrap';//Bootstrap para componestes

class Hola extends React.Component {
 constructor(props) {//contructor que guardara los valores del formulario
    super(props);
    this.state = {nombre: '',
    correo: ''};

    this.handleChangeName = this.handleChangeName.bind(this);// instanciamos los metodos para los eventos
    this.handleChangeCorreo = this.handleChangeCorreo.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeName(event) {//guardar nombre
    this.setState({nombre: event.target.value});

  }
  handleChangeCorreo(event) {
    this.setState({correo: event.target.value});//guardar correo 

  }

  handleSubmit(event) {//mostras los datos guarda
    alert('Nombre: ' + this.state.nombre +'  '+
          'correo:  ' + this.state.correo);
    event.preventDefault();
  }

  render() {
    return (

<Container>{/* contenedor especial con bootstrap */}
        <br/>
        <Row>{/* divido el formulario en 2 columnas*/}
          <Col md="3" sm="1"></Col>
          <Col md="6" sm="10" xs="12">
            <Card>
              <Card>
                <CardTitle className="txtSubTitulo">Ingrese sus datos</CardTitle>{/* titulo caja 1 */}
                  <form onSubmit={this.handleSubmit}>{/* metodo que usara el formulario */}
                  <Col md="12">
                    <FormGroup>
                    <p>Nombre: <br></br> <input type="text" value={this.state.nombre} onChange={this.handleChangeName} /></p>{/* campo para el nombnre*/}
                    </FormGroup>
                    <FormGroup>
                    <p>Correo:  <br></br> <input type="text" value={this.state.correo} onChange={this.handleChangeCorreo} /></p> {/* campo para el correo*/}             
                    </FormGroup>
                    <FormGroup>
                    </FormGroup>
                  </Col>   
                  </form>
                    <Button  onClick={this.handleSubmit}>{ 'Enviar'}</Button>{/* boton para mandar el formulario */}
                </Card>
            </Card>
          </Col>
          <Col md="3" sm="1"></Col>
       </Row>
      </Container>
    );
  }
}
export default Hola;
