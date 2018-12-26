// Copyright 2018, University of Colorado Boulder

/**
 * The mixed-numbers game screen for Build a Fraction
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
  const screenMixedNumbersString = require( 'string!BUILD_A_FRACTION/screen.mixedNumbers' );

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

  return buildAFraction.register( 'MixedNumbersScreen', MixedNumbersScreen );
} );
