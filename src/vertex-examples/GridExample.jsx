import React from 'react';
import Grid, { defaultGridColumnsOptions } from '../vertez/Grid';
import { vertexThemeColors } from '../VertexStyles';

function SampleCard({ title, desc }) {
    return (
        <div style={{ background: vertexThemeColors.background, padding: '1rem', border: `1px solid ${vertexThemeColors.border}`, borderRadius: '5px' }}>
            <h4 style={{ color: vertexThemeColors.primary, margin: '0 0 0.5rem 0' }}>{title}</h4>
            <p style={{ color: vertexThemeColors.textSecondary, margin: 0 }}>{desc}</p>
        </div>
    );
}

export default function GridExample() {
    const data = [
        { id: 1, title: 'Item One', desc: 'Description for 1' },
        { id: 2, title: 'Item Two', desc: 'Description for 2' },
        { id: 3, title: 'Item Three', desc: 'Description for 3' },
    ];

    return (
        <div style={{ marginBottom: '2rem', paddingBottom: '1rem', borderBottom: `1px solid ${vertexThemeColors.border}` }}>            
            <div style={{ padding: '1.5rem', background: vertexThemeColors.surface, borderRadius: '8px', marginBottom: '2rem' }}>
                <Grid
                    gridData={data}
                    GridItemComponent={SampleCard}
                    gridDataKey="id"
                    columns={defaultGridColumnsOptions.THREE_COL}
                    customGridStyles={{ bg: `bg-[${vertexThemeColors.surfaceHover}]` }}
                />
            </div>

            <div style={{ color: vertexThemeColors.textPrimary }}>
                <h3 style={{ color: vertexThemeColors.primary, fontSize: '1.25rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Description :</h3>
                <p style={{ paddingLeft: '1.5rem', fontSize: '1rem', color: vertexThemeColors.textSecondary, lineHeight: '1.5' }}>
                    A dynamic layout grid that maps an array of data to a specific React component, arranging them into configurable columns. It comes with exported tailwind grid constants for easy column management.
                </p>
                
                <h3 style={{ color: vertexThemeColors.primary, fontSize: '1.25rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Argument : gridData *</h3>
                <p style={{ paddingLeft: '1.5rem', fontSize: '1rem', color: vertexThemeColors.textSecondary, lineHeight: '1.5' }}>
                    <strong>Type:</strong> <code>Array of Objects</code><br />
                    The data to iterate over. Each object is passed as props to the <code>GridItemComponent</code>.
                </p>
                
                <h3 style={{ color: vertexThemeColors.primary, fontSize: '1.25rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Argument : GridItemComponent *</h3>
                <p style={{ paddingLeft: '1.5rem', fontSize: '1rem', color: vertexThemeColors.textSecondary, lineHeight: '1.5' }}>
                    <strong>Type:</strong> <code>ComponentClass | FunctionComponent</code><br />
                    The React component to render for each item in <code>gridData</code>.
                </p>
                
                <h3 style={{ color: vertexThemeColors.primary, fontSize: '1.25rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Argument : columns *</h3>
                <p style={{ paddingLeft: '1.5rem', fontSize: '1rem', color: vertexThemeColors.textSecondary, lineHeight: '1.5' }}>
                    <strong>Type:</strong> <code>String (Tailwind Class)</code><br />
                    The tailwind class defining grid columns (e.g., <code>"grid-cols-3"</code> or via <code>defaultGridColumnsOptions</code>).
                </p>
                
                <h3 style={{ color: vertexThemeColors.primary, fontSize: '1.25rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Argument : gridDataKey *</h3>
                <p style={{ paddingLeft: '1.5rem', fontSize: '1rem', color: vertexThemeColors.textSecondary, lineHeight: '1.5' }}>
                    <strong>Type:</strong> <code>String</code><br />
                    The property name in your data to use as the React <code>key</code>.
                </p>
                
                <h3 style={{ color: vertexThemeColors.primary, fontSize: '1.25rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Argument : customGridStyles</h3>
                <p style={{ paddingLeft: '1.5rem', fontSize: '1rem', color: vertexThemeColors.textSecondary, lineHeight: '1.5' }}>
                    <strong>Type:</strong> <code>Object</code><br />
                    Style overrides for the grid container wrapper.
                </p>

                <h3 style={{ color: vertexThemeColors.primary, fontSize: '1.25rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Reference :</h3>
                <div style={{ paddingLeft: '1.5rem', fontSize: '0.9rem', color: vertexThemeColors.textSecondary, lineHeight: '1.6', fontFamily: 'monospace', background: vertexThemeColors.background, padding: '1rem', borderRadius: '5px' }}>
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
