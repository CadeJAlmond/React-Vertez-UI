/** GridExample.jsx
 * @brief : This component is responsible for demonstrating how to use the Grid component.
 */

/* --=== Imports ===-- */
import React from 'react';
import Grid, { defaultGridColumnsOptions } from '../vertez/Grid';
import { vertexThemeColors } from '../VertexStyles';
import ComponentArgumentDisplay from './ComponentArgumentDisplay';

function SampleCard({ title, desc }) {
    return (
        <div className="bg-[rgb(47, 47, 68)] p-[1rem] border-[1px] border-[#ADADAF] rounded-[5px]">
            <h4 className="text-[#769cca] mb-[0.5rem]">{title}</h4>
            <p className="text-[#e2e8f0] m-0">{desc}</p>
        </div>
    );
}

export default function GridExample() {
    const data = [
        { id: 1, title: 'Item One', desc: 'Description for 1' },
        { id: 2, title: 'Item Two', desc: 'Description for 2' },
        { id: 3, title: 'Item Three', desc: 'Description for 3' },
    ];

    const gridComponentProperties = [{
        title: 'Description :',
        description: 'A dynamic layout grid that maps an array of data to a specific React component, arranging them into configurable columns. It comes with exported tailwind grid constants for easy column management.'
    }, {
        title: 'Argument : gridData',
        propertyType: 'Array of Objects',
        required: true,
        description: 'The data to iterate over. Each object is passed as props to the GridItemComponent.'
    }, {
        title: 'Argument : GridItemComponent',
        propertyType: 'ComponentClass | FunctionComponent',
        description: 'The React component to render for each item in gridData.'
    }, {
        title: 'Argument : columns',
        propertyType: 'String (Tailwind Class)',
        description: 'The tailwind class defining grid columns (e.g., "grid-cols-3" or via defaultGridColumnsOptions).'
    }, {
        title: 'Argument : gridDataKey',
        propertyType: 'String',
        required: true,
        description: 'The property name in your data to use as the React key.'
    }, {
        title: 'Argument : customGridStyles',
        propertyType: 'object',
        description: 'Style overrides for the grid container wrapper.'
    }]

    return (
        <div className="mb-[2rem] pb-[1rem] border-b-[1px] border-b-[#ADADAF]">
            <div className="p-[1.5rem] bg-[#1B1B1D] rounded-[8px] mb-[2rem]">
                <Grid
                    gridData={data}
                    GridItemComponent={SampleCard}
                    gridDataKey="id"
                    columns={defaultGridColumnsOptions.THREE_COL}
                    customGridStyles={{ bg: `bg-[${vertexThemeColors.surfaceHover}]` }}
                />
            </div>

            <div className="text-[#cbd5e1]">
                {gridComponentProperties.map((gridDetails) =>
                    <ComponentArgumentDisplay
                        propertyTitle={gridDetails.title}
                        propertyType={null || gridDetails?.propertyType}
                        propertyRequired={null || gridDetails?.required}
                    >
                        {gridDetails.description}
                    </ComponentArgumentDisplay>
                )}

                <h3 className="text-[#769cca] text-[1.25rem] mt-[1.5rem] mb-[0.5rem]">Reference :</h3>
                <div className="pl-[1.5rem] text-[0.9rem] text-[#e2e8f0] leading-[1.6] font-mono bg-[rgb(47, 47, 68)] p-[1rem] rounded-[5px]">
{`<Grid
    gridData={productCatalogItems}
    GridItemComponent={ProductCard}
    gridDataKey="productId"
    columns={defaultGridColumnsOptions.THREE_COL}
    gridItemOnClick={handleProductSelected}
    customGridStyles={catalogGridStyles}
/>`}
                </div>
            </div>
        </div>
    );
}