import React, { Component, PropTypes } from 'react';
import { FancyBorder } from '../../helpers';
import DayLegs from './DayLegs.jsx';
import { Button } from 'react-bootstrap';

class ItineraryContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};

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
    if (node !== this.state.itineraryDom) {
      this.setState({
        itineraryDom: node,
      });
    }
  }

  render() {
    console.log('itinerary in itinerarycontainer: ', this.props.itinerary);
    return (
      <div>

        <div className="itineraryContainer" ref={(node) => { this.props.setItineraryDom(node); this.setItineraryDom(node); }}>
          {this.props.itinerary ? <DayLegs itinerary={this.props.itinerary} addTimeToWaypoint={this.props.addTimeToWaypoint} /> : <div className="text-center">Add locations to your itinerary to see results!</div> }
        </div>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 ">
          <div className="finalizeButtonContainer">
            <FancyBorder color="green">
              <Button bsStyle="success" className="finalize-button" onClick={() => { this.props.downloadInnerHtml('myItinerary.html'); }}>Save My Itinerary</Button>
            </FancyBorder>
          </div>
        </div>
      </div>
    );
  }
}

ItineraryContainer.propTypes = {
  itinerary: PropTypes.object,
};

export default ItineraryContainer;
