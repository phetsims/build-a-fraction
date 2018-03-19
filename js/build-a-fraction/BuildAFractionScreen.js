// Copyright 2018, University of Colorado Boulder

/**
 * @author Jonathan Olson <jonathan.olson@colorado.edu>
 */
define( function( require ) {
  'use strict';

  // modules
  var inherit = require( 'PHET_CORE/inherit' );
  var Property = require( 'AXON/Property' );
  var Screen = require( 'JOIST/Screen' );
  var buildAFraction = require( 'BUILD_A_FRACTION/buildAFraction' );
  var BuildAFractionModel = require( 'BUILD_A_FRACTION/build-a-fraction/model/BuildAFractionModel' );
  var BuildAFractionScreenView = require( 'BUILD_A_FRACTION/build-a-fraction/view/BuildAFractionScreenView' );

  /**
   * @constructor
   */
  function BuildAFractionScreen() {

    var options = {
      backgroundColorProperty: new Property( 'white' )
    };

    Screen.call( this,
      function() { return new BuildAFractionModel(); },
      function( model ) { return new BuildAFractionScreenView( model ); },
      options
    );
  }

  buildAFraction.register( 'BuildAFractionScreen', BuildAFractionScreen );

  return inherit( Screen, BuildAFractionScreen );
} );