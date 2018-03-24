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
  var FractionsCommonColorProfile = require( 'FRACTIONS_COMMON/common/view/FractionsCommonColorProfile' );
  var inherit = require( 'PHET_CORE/inherit' );
  var Screen = require( 'JOIST/Screen' );

  // strings
  var screenMixedNumbersString = require( 'string!BUILD_A_FRACTION/screen.mixedNumbers' );

  /**
   * @constructor
   */
  function MixedNumbersScreen() {

    var options = {
      name: screenMixedNumbersString,
      backgroundColorProperty: FractionsCommonColorProfile.otherScreenBackgroundProperty
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
