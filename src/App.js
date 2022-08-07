// import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

// Funcion normal
// function Hello(props) {
//   return <h2>{props.title}</h2>
// }

// Funcion flecha
// const Hello = (props) => <h2>{props.title}</h2>

// A través de sintaxis de clases
class Hello extends Component {
  render() {
    return <h2>{this.props.title}</h2>
  }
}

// Todo se pone dentro de un div porque un componente solo puede devolver un elemento, sin embargo, ese elemento puede tener tantos sub-elementos como queramos
class Text extends Component {
  render() {
    var {
      arrayOfNumbers,
      isActive,
      number,
      objectWithInfo,
      text,
      textoParaBoolean,
      title
    } = this.props

    textoParaBoolean = isActive ? 'On' : 'Off';
    var mappedNumbers = arrayOfNumbers.map(this.props.multiply)

    return (
      < div >

        <p>{text}</p>
        <p>{number}</p>
        <p>{textoParaBoolean}</p>
        <p>{mappedNumbers.join(', ')}</p>
        <p>{objectWithInfo.key}</p>
        {title}
      </div>
    )
  }
}

// Se pueden utilizar valores por defecto para cuando no haya datos en las props
class DefaultProps extends Component {
  render() {
    return (
      <h1>{this.props.otroTitulo}</h1>
    )
  }
}
DefaultProps.defaultProps = {
  otroTitulo: 'Título por defecto'
}

// Primer componente con State
class Contador extends Component {
  constructor(props) {
    super(props);
    this.state = { contador: this.props.contadorInicial };
    setInterval(() => {
      this.setState({ contador: this.state.contador + 1 })
    }, 1000);
  }
  render() {
    // return <span>Contador: {this.state.contador}</span>
    return <ContadorNumero numero={this.state.contador} />
  }
}
Contador.defaultProps = {
  contadorInicial: 0
}

// Propagando el state de los componentes
class ContadorNumero extends Component {
  render() {
    return <span>{this.props.numero}</span>
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Hello title="Hello from props" />
        <Text
          arrayOfNumbers={[2, 4, 6]}
          isActive
          objectWithInfo={{ key: 'First Value', key2: 'Other Value' }}
          multiply={(number) => number * 4}
          number={2}
          text="Texto en string"
          title={<h1>Este es un h1</h1>}
        />
        <DefaultProps otroTitulo='Otro titulo desde props' />
        <p>Primer componente con state</p>
        <Contador contadorInicial={100} />
      </header>
    </div >
  );
}

export default App;
