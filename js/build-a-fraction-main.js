// Copyright 2018-2021, University of Colorado Boulder

/**
 * Main entry point for the sim.
 *
 * @author Jonathan Olson <jonathan.olson@colorado.edu>
 */

import Sim from '../../joist/js/Sim.js';
import simLauncher from '../../joist/js/simLauncher.js';
import buildAFractionStrings from './buildAFractionStrings.js';
import BuildAFractionScreen from './view/BuildAFractionScreen.js';
import LabScreen from './view/LabScreen.js';
import MixedNumbersScreen from './view/MixedNumbersScreen.js';

const buildAFractionTitleString = buildAFractionStrings[ 'build-a-fraction' ].title;

const simOptions = {
  credits: {
    leadDesign: 'Ariel Paul',
    softwareDevelopment: 'Jonathan Olson, Sam Reid',
    team: 'Mike Dubson, Karina K. R. Hensberry, Trish Loeblein, Amanda McGarry, Kathy Perkins',
    qualityAssurance: 'Steele Dalton, Megan Lai, Liam Mulhall, Laura Rea, Jacob Romero, Kathryn Woessner, and Kelly Wurtz',
    graphicArts: '',
    thanks: ''
  }
};

simLauncher.launch( () => {
  const sim = new Sim( buildAFractionTitleString, [
    new BuildAFractionScreen(),
    new MixedNumbersScreen(),
    new LabScreen()
  ], simOptions );
  sim.start();
} );