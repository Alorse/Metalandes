import React from 'react';
import { withJsonFormsControlProps } from '@jsonforms/react';
import { MediaCapture } from './MediaCapture';
import {
    resolveSchema,
  } from "@jsonforms/core";

interface MediaCaptureControlProps {
  data: any;
  path: string;
  label: string;
  handleChange(path: string, value: any): void;
}

export const MediaCaptureControlTester = (uischema, schema) => {
  if(!uischema.scope || uischema.type !== 'Control' ){
    return -1;
  }
  const resolvedSchema = resolveSchema(schema, uischema.scope);
  if(resolvedSchema.type === 'array' && resolvedSchema.format === 'media-capture'){
    return 100;
  }
  return -1;
}

const newHaldleChange = (handleChange, path, newValue) => {
  // console.log('path', path);
  handleChange(path, newValue)
}

const MediaCaptureControl = ({ handleChange, path, label }: MediaCaptureControlProps) => (
  <MediaCapture
    updateValue={(newValue: string) => newHaldleChange(handleChange, path, newValue)}
    path={path}
    label={label}
  />
);

export default withJsonFormsControlProps(MediaCaptureControl);