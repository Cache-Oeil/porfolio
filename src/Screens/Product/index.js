import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import ProductDetail from './Item';
import './style.scss';

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      hexagons: null
    };
  }

  componentWillMount() {
    let hexagons = computeNumberOfHexagon(this.props.products.length);
    this.setState({ hexagons });
  }

  render() {
    const { hexagons } = this.state;
    console.log(this.props.location)
    return (
      <div className="product">
        <div className="product-container">
          <Switch>
            { this.props.products.map(product => (
              <Route path={`/product/${product.name}`} component={ProductDetail} />
            ))}
            <Route>
              <div className="hex-wrapper">
                { Array.from({length: 3}, v => 0).map((v, i) => {
                  if (i === 0) {
                    return (
                      <div key="top" className="hex-row top">
                        { this.props.products.filter((product, index) => index < (hexagons-1)/3).map(product => (
                          <Link key={product.id} className="hex" data-name={product.name} to={`/product/${product.name}`}>
                            <div className="hex-label">
                                <img src={product.image} alt={product.image_alt} />
                            </div>
                            <div className="hex-1"></div>
                            <div className="hex-2"></div>
                          </Link>
                        ))}
                      </div>
                    )
                  }
                  if (i === 1) {
                    return (
                      <div key="middle" className="hex-row middle">
                        { this.props.products.filter((product, index) => index >= (hexagons-1)/3 && index <= 2*(hexagons-1)/3).map(product => (
                          <Link key={product.id} className="hex" data-name={product.name} to={`/product/${product.name}`}>
                            <div className="hex-label">
                                <img src={product.image} alt={product.image_alt} />
                            </div>
                            <div className="hex-1"></div>
                            <div className="hex-2"></div>
                          </Link>
                        ))}
                      </div>
                    )
                  }
                  if (i === 2) {
                    return (
                      <div key="bottom" className="hex-row bottom">
                        { this.props.products.filter((product, index) => index > 2*(hexagons-1)/3).map(product => (
                          <Link key={product.id} className="hex" data-name={product.name} to={`/product/${product.name}`}>
                            <div className="hex-label">
                                <img src={product.image} alt={product.image_alt} />
                            </div>
                            <div className="hex-1"></div>
                            <div className="hex-2"></div>
                          </Link>
                        ))}
                      </div> 
                    )
                  }
                })}   
              </div>
            </Route>
          </Switch>
        </div>
      </div>
    );
  }
}


function computeNumberOfHexagon(n) {
  if ((n - 1) % 3 === 0) {
    return n;
  }
  computeNumberOfHexagon(n+1);
}

export default Product;