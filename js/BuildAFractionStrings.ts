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
    'titleStringProperty': TReadOnlyProperty<string>;
  };
  'screen': {
    'buildAFraction': string;
    'buildAFractionStringProperty': TReadOnlyProperty<string>;
    'mixedNumbers': string;
    'mixedNumbersStringProperty': TReadOnlyProperty<string>;
    'lab': string;
    'labStringProperty': TReadOnlyProperty<string>;
  }
};

const BuildAFractionStrings = getStringModule( 'BUILD_A_FRACTION' ) as StringsType;

buildAFraction.register( 'BuildAFractionStrings', BuildAFractionStrings );

export default BuildAFractionStrings;
