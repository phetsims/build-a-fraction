// Copyright 2018, University of Colorado Boulder

/**
 * The non-mixed-numbers game screen for Build a Fraction
 *
 * @author Jonathan Olson <jonathan.olson@colorado.edu>
 */
define( require => {
  'use strict';

  // modules
  const buildAFraction = require( 'BUILD_A_FRACTION/buildAFraction' );
  const BuildingGameModel = require( 'FRACTIONS_COMMON/game/model/BuildingGameModel' );
  const BuildingGameScreenView = require( 'FRACTIONS_COMMON/game/view/BuildingGameScreenView' );
  const FractionsCommonColorProfile = require( 'FRACTIONS_COMMON/common/view/FractionsCommonColorProfile' );
  const Screen = require( 'JOIST/Screen' );

  // strings
  const screenBuildAFractionString = require( 'string!BUILD_A_FRACTION/screen.buildAFraction' );

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
  
  return buildAFraction.register( 'BuildAFractionScreen', BuildAFractionScreen );
} );
