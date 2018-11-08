// Copyright 2017, University of Colorado Boulder

/**
 * TODO: doc
 *
 * @author Jonathan Olson <jonathan.olson@colorado.edu>
 */
define( function( require ) {
  'use strict';

  // modules
  var buildAFraction = require( 'BUILD_A_FRACTION/buildAFraction' );
  var BuildingLabModel = require( 'FRACTIONS_COMMON/lab/model/BuildingLabModel' );
  var BuildingLabScreenView = require( 'FRACTIONS_COMMON/lab/view/BuildingLabScreenView' );
  var FractionsCommonColorProfile = require( 'FRACTIONS_COMMON/common/view/FractionsCommonColorProfile' );
  var inherit = require( 'PHET_CORE/inherit' );
  var Screen = require( 'JOIST/Screen' );

  // strings
  var screenLabString = require( 'string!BUILD_A_FRACTION/screen.lab' );

  /**
   * @constructor
   */
  function LabScreen() {

    var options = {
      name: screenLabString,
      backgroundColorProperty: FractionsCommonColorProfile.otherScreenBackgroundProperty
    };

    Screen.call( this,
      function() { return new BuildingLabModel( true ); },
      function( model ) { return new BuildingLabScreenView( model ); },
      options
    );
  }

  buildAFraction.register( 'LabScreen', LabScreen );

  return inherit( Screen, LabScreen );
} );
