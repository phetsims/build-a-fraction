// Copyright 2018-2020, University of Colorado Boulder

/**
 * The mixed-numbers game screen for Build a Fraction
 *
 * @author Jonathan Olson <jonathan.olson@colorado.edu>
 */

import FractionsCommonColorProfile from '../../../fractions-common/js/common/view/FractionsCommonColorProfile.js';
import BuildingGameModel from '../../../fractions-common/js/game/model/BuildingGameModel.js';
import BuildingGameScreenView from '../../../fractions-common/js/game/view/BuildingGameScreenView.js';
import Screen from '../../../joist/js/Screen.js';
import buildAFractionStrings from '../buildAFractionStrings.js';
import buildAFraction from '../buildAFraction.js';

const screenMixedNumbersString = buildAFractionStrings.screen.mixedNumbers;

class MixedNumbersScreen extends Screen {
  constructor() {
    super(
      () => new BuildingGameModel( true ),
      model => new BuildingGameScreenView( model ),
      {
        name: screenMixedNumbersString,
        backgroundColorProperty: FractionsCommonColorProfile.otherScreenBackgroundProperty,
        homeScreenIcon: BuildingGameScreenView.createMixedScreenIcon()
      }
    );
  }
}

buildAFraction.register( 'MixedNumbersScreen', MixedNumbersScreen );
export default MixedNumbersScreen;