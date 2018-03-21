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
  var BuildingGameModel = require( 'FRACTIONS_COMMON/game/model/BuildingGameModel' );
  var BuildingGameScreenView = require( 'FRACTIONS_COMMON/game/view/BuildingGameScreenView' );
  var Color = require( 'SCENERY/util/Color' );
  var inherit = require( 'PHET_CORE/inherit' );
  var Property = require( 'AXON/Property' );
  var Screen = require( 'JOIST/Screen' );

  // strings
  var screenMixedNumbersString = require( 'string!BUILD_A_FRACTION/screen.mixedNumbers' );

  /**
   * @constructor
   */
  function MixedNumbersScreen() {

    var options = {
      name: screenMixedNumbersString,
      backgroundColorProperty: new Property( Color.WHITE )
    };

    Screen.call( this,
      function() { return new BuildingGameModel(); },
      function( model ) { return new BuildingGameScreenView( model ); },
      options
    );
  }

  buildAFraction.register( 'MixedNumbersScreen', MixedNumbersScreen );

  return inherit( Screen, MixedNumbersScreen );
} );
