import _ from 'lodash'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Motion, spring } from 'react-motion'

const springSetting1 = {stiffness: 180, damping: 10};
const springSetting2 = {stiffness: 120, damping: 17};

const reInsert = (arr, from , to) => {
  const _arr = arr.slice(0) // duplicate arr
  const val = _arr[from]    // value at index 'from'
  _arr.splice(from, 1)      // remove element at 'from'
  _arr.splice(to, 0, val)   // insert at 'to'
  return _arr
}

const clamp = (n, min, max) => {
  return Math.max(Math.min(n, max), min);
}

class DraggableList extends Component {
  constructor(props) {
    super(props)
    this.state = {  
      mouseXY: [0, 0],
      mouseCircleDelta: [0, 0],
      lastPressed: null,
      isPressed: null,
      order: _.range(this.props.items.length),
      layout: null
    }
  }

  componentWillMount() {
    this.setState({
      layout:this.templateLayout(this.props.width, this.props.height)
    })
  }

  componentDidMount() {
    window.addEventListener('touchmove', this.handleTouchMove)
    window.addEventListener('touchend', this.handleTouchEnd)
    window.addEventListener('mousemove', this.handleMouseMove)
    window.addEventListener('mouseup', this.handleMouseUp)
  }
  
  componentWillUnmount() {
    window.removeEventListener('touchmove', this.handleTouchMove)
    window.removeEventListener('touchend', this.handleTouchEnd)
    window.removeEventListener('mousemove', this.handleMouseMove)
    window.removeEventListener('mouseup', this.handleMouseUp)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.width !== this.props.width ||nextProps.height !== this.props.height) {
      this.setState({
        layout:this.templateLayout(nextProps.width, nextProps.height)
      })
    }
  }

  templateLayout = (width, height) => {
    return this.state.order.map(n => {
      const col = n % this.props.column
      const row = Math.floor(n / this.props.column)
      return [width * col, height * row]
    })
  }

  handleMouseDown = (key, [pressX, pressY], {pageX, pageY}) => {
    this.setState({
      lastPress: key,
      isPressed: true,
      mouseCircleDelta: [pageX - pressX, pageY - pressY],
      mouseXY: [pressX, pressY],
    })
    console.log(pressX, pressY)
  }

  handleMouseMove = ({pageX, pageY}) => {
    const { width, height, column, items } = this.props
    const {order, lastPress, isPressed, mouseCircleDelta: [dx, dy]} = this.state;
    if (isPressed) {
      const mouseXY = [pageX - dx, pageY - dy];
      const col = clamp(Math.floor(mouseXY[0] / width), 0, column - 1);
      const row = clamp(Math.floor(mouseXY[1] / height), 0, Math.floor(items.length / column));
      const index = row * 3 + col;
      const newOrder = reInsert(order, order.indexOf(lastPress), index);
      this.setState({mouseXY, order: newOrder});
    }
  }

  handleMouseUp = () => {
    this.setState({ isPressed: false, mouseCircleDelta: [0, 0] })
  }

  render() {
    const { items, className, itemClassName, width } = this.props
    const { order, lastPress, isPressed, mouseXY } = this.state;
    return (
      <div className={className}>
        {_.map(items, (item, key) => {
          let style, x, y
          const visualPos = order.indexOf(key)
          if (key === lastPress && isPressed) {
            [x, y] = mouseXY;
            style = {
              translateX: x,
              translateY: y
            }
          } else {
            [x, y] = this.state.layout[visualPos]
            style = {
              translateX: spring(x, springSetting2),
              translateY: spring(y, springSetting2)
            };
          }
          return (
            <Motion key={key} style={style}>
              {({translateX, translateY}) => (
                <div
                  onMouseDown={this.handleMouseDown.bind(null, key, [x, y])}
                  className={itemClassName}
                  style={{
                    WebkitTransform: `translate3d(${translateX + width/20}px, ${translateY}px, 0)`,
                    transform: `translate3d(${translateX + width/20}px, ${translateY}px, 0)`,
                    zIndex: key === lastPress ? 99 : visualPos
                  }}
                >
                  {item}
                </div>
              )}
            </Motion>
          )
        })}
      </div>    
    );
  }
}

DraggableList.propTypes = {
  items: PropTypes.array.isRequired,
  column: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired
}

export default DraggableList;