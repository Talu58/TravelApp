import React, { Component, PropTypes } from 'react';
import { FancyBorder } from '../../helpers';
import DayLegs from './DayLegs.jsx';

class ItineraryContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    
    this.setItineraryDom = this.setItineraryDom.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.itinerary === nextProps.itinerary) {
      return false;
    } else {
      return true;
    }
  }

   setItineraryDom(node) {
    console.log(node !== this.state.itineraryDom)
    if (node !== this.state.itineraryDom) {
      this.setState({
        itineraryDom: node
      });
      console.log('itineraryDom: ', this.state.itineraryDom)
    }
  }
  
  render() {
    return (
      <div ref={(node) => {this.props.setItineraryDom(node); this.setItineraryDom(node)}}>
        <FancyBorder color="yellow">
          <DayLegs itinerary={this.props.itinerary} addTimeToWaypoint={this.props.addTimeToWaypoint} />
        </FancyBorder>
      </div>
    );
  }
}

ItineraryContainer.propTypes = {
  itinerary: PropTypes.object,
};

export default ItineraryContainer;
