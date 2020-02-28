// Copyright 2018-2020, University of Colorado Boulder

/**
 * The non-mixed-numbers game screen for Build a Fraction
 *
 * @author Jonathan Olson <jonathan.olson@colorado.edu>
 */

import FractionsCommonColorProfile from '../../../fractions-common/js/common/view/FractionsCommonColorProfile.js';
import BuildingGameModel from '../../../fractions-common/js/game/model/BuildingGameModel.js';
import BuildingGameScreenView from '../../../fractions-common/js/game/view/BuildingGameScreenView.js';
import Screen from '../../../joist/js/Screen.js';
import buildAFractionStrings from '../build-a-fraction-strings.js';
import buildAFraction from '../buildAFraction.js';

const screenBuildAFractionString = buildAFractionStrings.screen.buildAFraction;

class BuildAFractionScreen extends Screen {
  constructor() {
    super(
      () => new BuildingGameModel( false ),
      model => new BuildingGameScreenView( model ),
      {
        name: screenBuildAFractionString,
        backgroundColorProperty: FractionsCommonColorProfile.otherScreenBackgroundProperty,
        homeScreenIcon: BuildingGameScreenView.createUnmixedScreenIcon()
      }
    );
  }
}

buildAFraction.register( 'BuildAFractionScreen', BuildAFractionScreen );
export default BuildAFractionScreen;