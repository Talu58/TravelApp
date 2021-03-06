import React, { PropTypes } from 'react';
import { FancyBorder } from '../helpers.js';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

const glyphicons = {
  'Hiking': require('../../public/images/hiking.png'),
  'Biking': require('../../public/images/biking.png'),
  'Camping': require('../../public/images/camping.png'),
  'Water Sports': require('../../public/images/watersports.png'),
  'Cultural Sites': require('../../public/images/sites.png'),
  'Fishing': require('../../public/images/fishing.png'),
  'Motor Sports': require('../../public/images/motorsports.png'),
  'Equestrian': require('../../public/images/horsebackriding.png'),
  'Photography': require('../../public/images/photography.png'),
  'Winter Sports': require('../../public/images/winter.png'),
  'Climbing': require('../../public/images/climbing.png'),
  'Wildlife Viewing': require('../../public/images/wildlife.png'),
  'HikingActive': require('../../public/images/hiking-active.png'),
  'BikingActive': require('../../public/images/biking-active.png'),
  'CampingActive': require('../../public/images/camping-active.png'),
  'Water SportsActive': require('../../public/images/watersports-active.png'),
  'Cultural SitesActive': require('../../public/images/sites-active.png'),
  'FishingActive': require('../../public/images/fishing-active.png'),
  'Motor SportsActive': require('../../public/images/motorsports-active.png'),
  'EquestrianActive': require('../../public/images/horsebackriding-active.png'),
  'PhotographyActive': require('../../public/images/photography-active.png'),
  'Winter SportsActive': require('../../public/images/winter-active.png'),
  'ClimbingActive': require('../../public/images/climbing-active.png'),
  'Wildlife ViewingActive': require('../../public/images/wildlife-active.png'),
};

const InterestButton = props => (
  <div>
    <button
      value={props.interest.index}
      className={`centered ${(props.interest.interest[1]) ? 'includedInterestButton landing-page-interest-button-active' : 'interestButton landing-page-interest-button'}`}
      onClick={() => { props.handleInterestButtonClick(props.interest.index); }}
    ><img
      src={`${(!props.interest.interest[1]) ? glyphicons[props.interest.interest[0]] : glyphicons[props.interest.interest[0]+'Active']}`}
      // value={props.interest.index}
      className={`${(props.interest.interest[1]) ? 'landing-page-interest-glyphicon-active' : 'landing-page-interest-glyphicon'}`}
      // onClick={() => { props.handleInterestButtonClick(props.interest.index); }}
    />
    <br/>
    <span className="landing-page-interest-name">{props.interest.interest[0]}</span></button>
  </div>
  );

InterestButton.propTypes = {
  interest: PropTypes.object,
  handleInterestButtonClick: PropTypes.func,
};

export default InterestButton;
