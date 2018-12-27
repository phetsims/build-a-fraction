// Copyright 2018, University of Colorado Boulder

/**
 * The "Lab" screen for Build a Fraction
 *
 * @author Jonathan Olson <jonathan.olson@colorado.edu>
 */
define( require => {
  'use strict';

  // modules
  const buildAFraction = require( 'BUILD_A_FRACTION/buildAFraction' );
  const BuildingLabModel = require( 'FRACTIONS_COMMON/lab/model/BuildingLabModel' );
  const BuildingLabScreenView = require( 'FRACTIONS_COMMON/lab/view/BuildingLabScreenView' );
  const FractionsCommonColorProfile = require( 'FRACTIONS_COMMON/common/view/FractionsCommonColorProfile' );
  const Screen = require( 'JOIST/Screen' );

  // strings
  const screenLabString = require( 'string!BUILD_A_FRACTION/screen.lab' );

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

  return buildAFraction.register( 'LabScreen', LabScreen );
} );
