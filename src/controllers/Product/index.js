import React from 'react';
import { connect } from 'react-redux';
import Product from '../../Screens/Product';

const projects = [
  {
    id: 1,
    image: 'https://i.imgur.com/fGPOC6s.png',
    name: 'blog-cione',
    image_alt: 'html căn bản' 
  },
  {
    id: 2,
    image: 'https://i.imgur.com/cHmTT92.png',
    name: 'cart',
    image_alt: 'css căn bản'
  },
  {
    id: 3,
    image: 'https://i.imgur.com/dhlm25o.png',
    name: 'layout-website',
    image_alt: 'Bố cục website'
  },
  {
    id: 4,
    image: 'https://i.imgur.com/3bXbohL.png',
    name: 'photoshop',
    image_alt: 'Photoshop cho developper'
  },
  {
    id: 5,
    image: 'https://i.imgur.com/xxv3gSh.png',
    name: 'project',
    image_alt: 'Đồ án thực hành'
  },
  {
    id: 6,
    image: 'https://i.imgur.com/1AA61Gt.png',
    name: 'responsive',
    image_alt: 'Responsive Design'
  },
  {
    id: 7,
    image: 'https://i.imgur.com/a65kgOh.png',
    name: 'fluid-surveys',
    image_alt: 'html căn bản'
  }
]
const mapStateToProps = state => ({
  products: projects,
  location: state.routing.location
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Product);