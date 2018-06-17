import _ from 'lodash';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Tabs, Tab} from 'material-ui/Tabs';
import { lightBlueA400, grey800 } from 'material-ui/styles/colors';
import Bar from '../../components/Bar';
import Web from '../../components/Product/Web';
import './style.scss';

const tabSelectedStyle = {color: lightBlueA400,  textTransform:"capitalize", fontSize:20, fontWeight: "bold"}

const tabUnselectedStyle = { color: grey800,  textTransform:"capitalize", fontSize:20}
class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      slideIndex: 0
    };
  }

  handleChange = (value) => {
    this.setState({ slideIndex: value })
  }
  
  handleActive = (tab) => {
    this.props.history.push("/product")
  }

  render() {
    return (
      <div className="product">
        <div className="product-container">
        <Bar title={this.context.t('header.product')} topFaceStyle={{ backgroundColor: '#dcdbdc', color: '#9f8764'}} frontFaceStyle={{ backgroundColor: '#9f8764', color: '#dcdbdc'}}/>
        <Tabs
          onChange={this.handleChange}
          value={this.state.slideIndex}
          className="tabs"
          tabTemplateStyle={{color: grey800}}
          tabItemContainerStyle={{background: 'transparent'}}
          inkBarStyle={{background: lightBlueA400, height: 3}}
        >
          <Tab label={this.context.t('product.web')} value={0} onActive={this.handleActive}  style={this.state.slideIndex === 0 ? tabSelectedStyle : tabUnselectedStyle}>
            <div className="tab-content">
              <Web
                products={!_.isEmpty(this.props.products) && this.props.products}
              />
            </div>
          </Tab>
          <Tab label={this.context.t('product.game')} value={1} onActive={this.handleActive} style={this.state.slideIndex === 1 ? tabSelectedStyle : tabUnselectedStyle}/>
          <Tab label={this.context.t('product.novel')} value={2} onActive={this.handleActive} style={this.state.slideIndex === 2 ? tabSelectedStyle : tabUnselectedStyle} />
        </Tabs>
        {/* <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange}
          style={{maxWidth: 1130, margin: "0 auto"}}
        >
          
          <div className="tab-content">
            
          </div>
          <div className="tab-content">
            
          </div>
        </SwipeableViews> */}
        </div>
      </div>
    );
  }
}

Product.contextTypes = {
  t: PropTypes.func
}

export default Product;