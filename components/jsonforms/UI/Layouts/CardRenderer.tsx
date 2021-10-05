import React, { ComponentType } from "react";
import { LayoutProps } from "@jsonforms/core";
import {
  areEqual,
  JsonFormsStateContext,
  ResolvedJsonFormsDispatch,
  withJsonFormsContext,
} from "@jsonforms/react";
import DeleteIcon from '@material-ui/icons/Delete';
import {
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from '@material-ui/core';
import gSchema from '../../../../assets/config/schemas';
import gUiSchema from '../../../../assets/config/uischemas';


interface DispatchPropsOfCardRenderer {
  onRemove(): () => void;
}

interface CardRendererProps extends LayoutProps, DispatchPropsOfCardRenderer {
  index: number;
}

var itemsName = [];

export const CardRenderer = (props: CardRendererProps) => {
  const { uischema, schema, path, renderers, cells, onRemove, item, index } = props;
  const elements = uischema.options?.["detail"]["elements"];
  var itemsShema = schema
  var uIitems = uischema
  itemsName.push(item)
  console.log(index, itemsName)
  if (item == "CELDA CONTADORES") {
    itemsShema = {properties: gSchema.contadores}
    uIitems = gUiSchema.contadores
  }
  const itemsToRender = elements.map((element: any, index: number) => {
    return (
      <ResolvedJsonFormsDispatch
        schema={itemsShema}
        uischema={uIitems}
        path={path}
        enabled={true}
        renderers={renderers}
        cells={cells}
        key={index}
      />
    );
  });
  return (
    <Table>
      <TableBody>
          <TableRow>
              <TableCell>{itemsToRender}</TableCell>
              <TableCell>
                <IconButton
                    aria-label='Delete'
                    onClick={onRemove}
                >
                    <DeleteIcon />
                </IconButton>
              </TableCell>
          </TableRow>
      </TableBody>
    </Table>
  );
};

const withContextToCardRenderd =
  (
    Component: ComponentType<CardRendererProps>
  ): ComponentType<CardRendererProps> =>
  ({ ctx, props }: JsonFormsStateContext & CardRendererProps) => {
    return <Component {...props}/>;
  };

const withCustomProps = (Component: ComponentType<CardRendererProps>) => {
  return withJsonFormsContext(
    withContextToCardRenderd(
      React.memo(Component, (prevProps, props) => areEqual(prevProps, props))
    )
  );
};

export default withCustomProps(CardRenderer);