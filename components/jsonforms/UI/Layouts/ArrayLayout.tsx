import React, { useCallback, useState } from "react";
import {
  ArrayLayoutProps,
  composePaths,
  createDefaultValue,
  isObjectArrayWithNesting,
  RankedTester,
  rankWith,
} from "@jsonforms/core";
import { IconButton, MenuItem, InputLabel, Grid } from '@material-ui/core';
import { areEqual, withJsonFormsArrayLayoutProps } from "@jsonforms/react";
import CardRenderer from "./CardRenderer";
import AddIcon from '@material-ui/icons/Add';
import Select from '@material-ui/core/Select';

export const ArrayLayoutRenderer = ({
  visible,
  enabled,
  id,
  uischema,
  schema,
  label,
  rootSchema,
  renderers,
  cells,
  data,
  path,
  errors,
  uischemas,
  addItem,
  removeItems,
}: ArrayLayoutProps) => {
  const addItemCb = useCallback(
    (p: string, value: any) => {
      return addItem(p, value);
    },
    [addItem]
  );

  const removeItemsCb = useCallback(
    (path: string, toDelete: number[]) => {
      return removeItems ? removeItems(path, toDelete) : () => {};
    },
    [removeItems]
  );

  const [item, setItem] = useState(schema.properties.tipo.default);
  const handleChange = function(data){
    setItem(data.target.value)
    // desde aqui, meteserse con el CardRenderer - toRender
  };

  const toRender = Array(data)
    .fill(0)
    .map((_, i) => {
      return (
        <CardRenderer
          key={i}
          item={item}
          index={i}
          schema={schema}
          uischema={uischema}
          path={composePaths(path, `${i}`)}
          renderers={renderers}
          cells={cells}
          onRemove={removeItemsCb(path, [i])}
        />
      );
    });
  return (
    <>
      {toRender}
      <Grid container direction="row">
        <Grid item>
            <InputLabel id="demo-simple-select-label">Equipo</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Equipo"
                defaultValue={schema.properties.tipo.default}
                onChange={handleChange}
            >
                {[<MenuItem value='' key={'empty'} />].concat(
                    schema.properties.tipo.enum.map(optionValue => (
                    <MenuItem value={optionValue} key={optionValue}>
                        {optionValue}
                    </MenuItem>
                    ))
                )}
            </Select>
        </Grid>
        <Grid item>
            <IconButton
                aria-label='Add'
                onClick={addItemCb(path, createDefaultValue(schema))}
                className=""
            >
                <AddIcon />
            </IconButton>
        </Grid>
      </Grid>
    </>
  );
};

export const arrayLayoutTester: RankedTester = rankWith(
  5,
  isObjectArrayWithNesting
);
export default React.memo(
  withJsonFormsArrayLayoutProps(ArrayLayoutRenderer),
  (prevProps, props) => areEqual(prevProps, props)
);