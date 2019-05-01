import React, {
  Component
} from 'react';
import MenuKontak from './Page/MenuKontak';
import MenuProduct from './Page/MenuProduct';
import MenuTentangKami from './Page/MenuTentangKami';
import MenuUtama from './Page/MenuUtama';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <MenuUtama />
        <MenuProduct />
        <MenuKontak />
        <MenuTentangKami />
        <Footer />
      </div>
    );
  }
}

const Header = () => {
  return(
    <div>
      <h4>Halaman Untuk Header</h4>
    </div>
  )
}

const Footer = () => {
  return(
    <div>
      <h4>Halaman Untuk Footer</h4>
    </div>
  )
}

export default App;