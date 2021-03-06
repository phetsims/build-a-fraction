// Copyright 2018-2021, University of Colorado Boulder

/**
 * The mixed-numbers game screen for Build a Fraction
 *
 * @author Jonathan Olson <jonathan.olson@colorado.edu>
 */

import fractionsCommonColorProfile from '../../../fractions-common/js/common/view/fractionsCommonColorProfile.js';
import BuildingGameModel from '../../../fractions-common/js/game/model/BuildingGameModel.js';
import BuildingGameScreenView from '../../../fractions-common/js/game/view/BuildingGameScreenView.js';
import Screen from '../../../joist/js/Screen.js';
import ScreenIcon from '../../../joist/js/ScreenIcon.js';
import buildAFraction from '../buildAFraction.js';
import buildAFractionStrings from '../buildAFractionStrings.js';

const screenMixedNumbersString = buildAFractionStrings.screen.mixedNumbers;

class MixedNumbersScreen extends Screen {
  constructor() {
    super(
      () => new BuildingGameModel( true ),
      model => new BuildingGameScreenView( model ),
      {
        name: screenMixedNumbersString,
        backgroundColorProperty: fractionsCommonColorProfile.otherScreenBackgroundProperty,
        homeScreenIcon: new ScreenIcon( BuildingGameScreenView.createMixedScreenIcon(), {
          maxIconWidthProportion: 1,
          maxIconHeightProportion: 1
        } )
      }
    );
  }
}

buildAFraction.register( 'MixedNumbersScreen', MixedNumbersScreen );
export default MixedNumbersScreen;