// Copyright 2018, University of Colorado Boulder

/**
 * Main entry point for the sim.
 *
 * @author Jonathan Olson <jonathan.olson@colorado.edu>
 */
define( require => {
  'use strict';

  // modules
  const BuildAFractionScreen = require( 'BUILD_A_FRACTION/view/BuildAFractionScreen' );
  const LabScreen = require( 'BUILD_A_FRACTION/view/LabScreen' );
  const MixedNumbersScreen = require( 'BUILD_A_FRACTION/view/MixedNumbersScreen' );
  const Sim = require( 'JOIST/Sim' );
  const SimLauncher = require( 'JOIST/SimLauncher' );

  // strings
  const buildAFractionTitleString = require( 'string!BUILD_A_FRACTION/build-a-fraction.title' );

  const simOptions = {
    credits: {
      leadDesign: 'Ariel Paul',
      softwareDevelopment: 'Jonathan Olson, Sam Reid',
      team: 'Mike Dubson, Karina K. R. Hensberry, Trish Loeblein, Amanda McGarry, Kathy Perkins',
      qualityAssurance: '',
      graphicArts: '',
      thanks: ''
    }
  };

  SimLauncher.launch( () => {
    const sim = new Sim( buildAFractionTitleString, [
      new BuildAFractionScreen(),
      new MixedNumbersScreen(),
      new LabScreen()
    ], simOptions );
    sim.start();
  } );
} );
