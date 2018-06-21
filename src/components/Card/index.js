import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Card as MaterialCard, CardHeader, CardTitle, CardText} from 'material-ui/Card'
import Dialog from 'material-ui/Dialog'
import ClearIcon from 'material-ui/svg-icons/content/clear'

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      open: false
    };
  }

  handleOpen = () => this.setState({ open: true })

  handleClose = () => this.setState({ open: false })
  
  render() {
    const { label, image } = this.props
    const action = (
      <ClearIcon onClick={this.handleClose}/>
    )

    return (
      <div className={this.props.className}>
        <div className={`${this.props.className}-container`}>
          {this.props.icon}
          <h2>{this.props.title}</h2>
          <p>{this.props.text}</p>
        </div>
        <Dialog
          title="Dialog With Actions"
          actions={action}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          The actions in this window were passed in as an array of React objects.
        </Dialog>
      </div>
    );
  }
}

Card.contextTypes = {
  t: PropTypes.func
}

Card.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default Card;