// Copyright 2018, University of Colorado Boulder

/**
 * Main entry point for the sim.
 *
 * @author Jonathan Olson <jonathan.olson@colorado.edu>
 */
define( function( require ) {
  'use strict';

  // modules
  var BuildAFractionScreen = require( 'BUILD_A_FRACTION/view/BuildAFractionScreen' );
  var LabScreen = require( 'BUILD_A_FRACTION/view/LabScreen' );
  var MixedNumbersScreen = require( 'BUILD_A_FRACTION/view/MixedNumbersScreen' );
  var Sim = require( 'JOIST/Sim' );
  var SimLauncher = require( 'JOIST/SimLauncher' );

  // strings
  var buildAFractionTitleString = require( 'string!BUILD_A_FRACTION/build-a-fraction.title' );

  var simOptions = {
    credits: {
      //TODO fill in proper credits, all of these fields are optional, see joist.AboutDialog
      leadDesign: '',
      softwareDevelopment: '',
      team: '',
      qualityAssurance: '',
      graphicArts: '',
      thanks: ''
    }
  };

  SimLauncher.launch( function() {
    var sim = new Sim( buildAFractionTitleString, [
      new BuildAFractionScreen(),
      new MixedNumbersScreen(),
      new LabScreen()
    ], simOptions );
    sim.start();
  } );
  
} );
