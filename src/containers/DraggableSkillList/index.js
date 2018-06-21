import _ from 'lodash'
import React from 'react'
import Card from '../../components/Card'
import DraggableList from '../../components/DraggableList'
import { connect } from 'react-redux'
import Language from 'material-ui/svg-icons/action/language'

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({

})

const mergedProps = (stateProps, dispatchProps, ownProps) => {
  const items = _.range(6).map(n => <Card className="card-skill" label={"language"} image={<Language/>}/>)
  return {
    ...stateProps,
    ...dispatchProps,
    ...ownProps,
    items
  }
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps,
  mergedProps
)(DraggableList)