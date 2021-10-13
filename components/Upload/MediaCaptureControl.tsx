import React from 'react';
import { withJsonFormsControlProps } from '@jsonforms/react';
import { MediaCapture } from './MediaCapture';
import {
    resolveSchema,
  } from "@jsonforms/core";

interface MediaCaptureControlProps {
  data: any;
  handleChange(path: string, value: any): void;
  path: string;
  label: string;
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

// export const MediaCaptureControlTester = rankWith(100, and(isStringControl, formatIs('media-capture')));

const MediaCaptureControl = ({ data, handleChange, path, label }: MediaCaptureControlProps) => (
  <MediaCapture
    value={data}
    updateValue={(newValue: array) => handleChange(path, newValue)}
    label={label}
  />
);

export default withJsonFormsControlProps(MediaCaptureControl);