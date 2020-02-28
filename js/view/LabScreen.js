// Copyright 2018-2020, University of Colorado Boulder

/**
 * The "Lab" screen for Build a Fraction
 *
 * @author Jonathan Olson <jonathan.olson@colorado.edu>
 */

import FractionsCommonColorProfile from '../../../fractions-common/js/common/view/FractionsCommonColorProfile.js';
import BuildingLabModel from '../../../fractions-common/js/lab/model/BuildingLabModel.js';
import BuildingLabScreenView from '../../../fractions-common/js/lab/view/BuildingLabScreenView.js';
import Screen from '../../../joist/js/Screen.js';
import buildAFractionStrings from '../build-a-fraction-strings.js';
import buildAFraction from '../buildAFraction.js';

const screenLabString = buildAFractionStrings.screen.lab;

class LabScreen extends Screen {
  constructor() {
    super(
      () => new BuildingLabModel( true ),
      model => new BuildingLabScreenView( model ),
      {
        name: screenLabString,
        backgroundColorProperty: FractionsCommonColorProfile.otherScreenBackgroundProperty,
        homeScreenIcon: BuildingLabScreenView.createMixedScreenIcon()
      }
    );
  }
}

buildAFraction.register( 'LabScreen', LabScreen );
export default LabScreen;