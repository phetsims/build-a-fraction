// Copyright 2018-2021, University of Colorado Boulder

/**
 * The "Lab" screen for Build a Fraction
 *
 * @author Jonathan Olson <jonathan.olson@colorado.edu>
 */

import FractionsCommonColors from '../../../fractions-common/js/common/view/FractionsCommonColors.js';
import BuildingLabModel from '../../../fractions-common/js/lab/model/BuildingLabModel.js';
import BuildingLabScreenView from '../../../fractions-common/js/lab/view/BuildingLabScreenView.js';
import Screen from '../../../joist/js/Screen.js';
import ScreenIcon from '../../../joist/js/ScreenIcon.js';
import buildAFraction from '../buildAFraction.js';
import buildAFractionStrings from '../buildAFractionStrings.js';

const screenLabString = buildAFractionStrings.screen.lab;

class LabScreen extends Screen {
  constructor() {
    super(
      () => new BuildingLabModel( true ),
      model => new BuildingLabScreenView( model ),
      {
        name: screenLabString,
        backgroundColorProperty: FractionsCommonColors.otherScreenBackgroundProperty,
        homeScreenIcon: new ScreenIcon( BuildingLabScreenView.createMixedScreenIcon(), {
          maxIconWidthProportion: 1,
          maxIconHeightProportion: 1
        } )
      }
    );
  }
}

buildAFraction.register( 'LabScreen', LabScreen );
export default LabScreen;