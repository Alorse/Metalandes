import React, { Fragment, useState } from 'react';

import {
  LayoutProps,
  isObjectArrayWithNesting,
  RankedTester,
  rankWith,
} from "@jsonforms/core";
import { areEqual, withJsonFormsLayoutProps } from "@jsonforms/react";
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import Videocam from '@material-ui/icons/Videocam';

export const MediaCaptureLayout = ({
  visible,
  enabled,
  uischema,
  schema,
  renderers,
  cells,
  data,
  path
}: LayoutProps) => {

  const [file, setFile] = useState();
  const handleCapture = ({ target }) => {
    const fileReader = new FileReader();
    const name = target.accept.includes('image') ? 'images' : 'videos';
    const scope = this

    fileReader.readAsDataURL(target.files[0]);
    fileReader.onload = (e) => {
        scope.setState((prevState) => ({
            [name]: [...prevState[name], e.target.result]
        }));
    };
};
  return (
    <Fragment>
        <input
            accept="image/*"
            id="icon-button-photo"
            onChange={handleCapture}
            type="file"
        />
        <label htmlFor="icon-button-photo">
            <IconButton color="primary" component="span">
                <PhotoCamera />
            </IconButton>
        </label>

        <input
            accept="video/*"
            capture="camcorder"
            id="icon-button-video"
            onChange={handleCapture}
            type="file"
        />
        <label htmlFor="icon-button-video">
            <IconButton color="primary" component="span">
                <Videocam />
            </IconButton>
        </label>
    </Fragment>
  );
};

export const MediaCaptureLayoutTester: RankedTester = rankWith(
  5,
  isObjectArrayWithNesting
);
export default React.memo(
  withJsonFormsLayoutProps(MediaCaptureLayout),
  (prevProps, props) => areEqual(prevProps, props)
);