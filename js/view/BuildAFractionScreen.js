// Copyright 2018-2021, University of Colorado Boulder

/**
 * The non-mixed-numbers game screen for Build a Fraction
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

const screenBuildAFractionString = buildAFractionStrings.screen.buildAFraction;

class BuildAFractionScreen extends Screen {
  constructor() {
    super(
      () => new BuildingGameModel( false ),
      model => new BuildingGameScreenView( model ),
      {
        name: screenBuildAFractionString,
        backgroundColorProperty: fractionsCommonColorProfile.otherScreenBackgroundProperty,
        homeScreenIcon: new ScreenIcon( BuildingGameScreenView.createUnmixedScreenIcon(), {
          maxIconWidthProportion: 1,
          maxIconHeightProportion: 1
        } )
      }
    );
  }
}

buildAFraction.register( 'BuildAFractionScreen', BuildAFractionScreen );
export default BuildAFractionScreen;