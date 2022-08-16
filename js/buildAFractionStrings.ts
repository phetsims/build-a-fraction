// Copyright 2020-2022, University of Colorado Boulder

/**
 * Auto-generated from modulify, DO NOT manually modify.
 */
/* eslint-disable */
import getStringModule from '../../chipper/js/getStringModule.js';
import TReadOnlyProperty from '../../axon/js/TReadOnlyProperty.js';
import buildAFraction from './buildAFraction.js';

type StringsType = {
  'build-a-fraction': {
    'title': string;
    'titleProperty': TReadOnlyProperty<string>;
  };
  'screen': {
    'buildAFraction': string;
    'buildAFractionProperty': TReadOnlyProperty<string>;
    'mixedNumbers': string;
    'mixedNumbersProperty': TReadOnlyProperty<string>;
    'lab': string;
    'labProperty': TReadOnlyProperty<string>;
  }
};

const buildAFractionStrings = getStringModule( 'BUILD_A_FRACTION' ) as StringsType;

buildAFraction.register( 'buildAFractionStrings', buildAFractionStrings );

export default buildAFractionStrings;
