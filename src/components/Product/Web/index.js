import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Link } from 'react-router-dom';
import ProductItem from '../Item';
import classNames from 'classnames';
import './style.scss';

const computeNumberOfHexagon = (n) => {
  if ((n - 1) % 3 === 0) {
    return n;
  }
  computeNumberOfHexagon(n+1);
}

const style = {
  transform : 'unset'
}

class ProductWeb extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      hexagons: null,
      sticky: false
    };
  }
  
  componentWillMount() {
    let hexagons = computeNumberOfHexagon(this.props.products.length);
    this.setState({ hexagons });
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = (e) => {
    const tabs = document.querySelector('.product .product-container .tabs div:first-child')
    const webSideMenu = document.querySelector('#web-side_menu')
    const sideMenuList = webSideMenu.querySelectorAll("div")
    let translateY = tabs.getBoundingClientRect().top + tabs.clientHeight
    if (translateY < 0) {
      this.setState({ sticky: true })
    } else {
      this.setState({ sticky: false })
    }
    for (let item of sideMenuList) {
      const id = item.getAttribute("data-href")
      const h2 = document.getElementById(id)
      let bounding = h2.parentElement.getBoundingClientRect()
      console.log(bounding.top, )
      if (bounding.top <= 10 && bounding.top > -h2.parentElement.clientHeight) {
        item.style.color = "rgb(9, 30, 66)"
        item.style.fontWeight = 700
      } else {
        item.style.color = "rgb(122, 134, 154)"
        item.style.fontWeight = 'normal'
      }
    }
  }

  scrollTo = (e) => {
    const id = e.target.getAttribute("data-href")
    const elementTop = document.getElementById(id).getBoundingClientRect().top + window.scrollY
    window.scroll({
      top: elementTop,
      behavior: 'smooth'
    })
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location !== this.props.location) {
      window.addEventListener('scroll', this.handleScroll)
    }
  }

  render() {
    const { hexagons, sticky } = this.state;
    return (
      <Switch>
        <Route exact path="/product/:productItem" component={ProductItem}/>
        <Route>
          <div className="clear-fix">
            <div id="web-side_menu" className={sticky ? classNames("tab-sidemenu", "sticky") : classNames("tab-sidemenu")}>
              <div data-href="basic_project" onClick={this.scrollTo}>{this.context.t('product.web.basic_project')}</div>
              <div data-href="final_project" onClick={this.scrollTo}>{this.context.t('product.web.final_project')}</div>
              <div data-href="intership" onClick={this.scrollTo}>{this.context.t('product.web.internship')}</div>
            </div>
            <div id="web-main_content" className="tab-main-content">
              <div className="hex-wrapper">
                <h2 id="basic_project">{this.context.t('product.web.basic_project')}</h2>
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
              <div>
                <h2 id="final_project">{this.context.t('product.web.final_project')}</h2>
              </div>
            </div>
          </div>
        </Route>
      </Switch>
    );
  }
}

ProductWeb.contextTypes = {
  t: PropTypes.func
}

export default ProductWeb;