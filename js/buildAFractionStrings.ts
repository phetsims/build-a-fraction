// Copyright 2020-2021, University of Colorado Boulder

/**
 * Auto-generated from modulify, DO NOT manually modify.
 */
/* eslint-disable */
import getStringModule from '../../chipper/js/getStringModule.js';
import buildAFraction from './buildAFraction.js';

type StringsType = {
  'build-a-fraction': {
    'title': string;
  };
  'screen': {
    'buildAFraction': string;
    'mixedNumbers': string;
    'lab': string;
  }
};

const buildAFractionStrings = getStringModule( 'BUILD_A_FRACTION' ) as StringsType;

buildAFraction.register( 'buildAFractionStrings', buildAFractionStrings );

export default buildAFractionStrings;
