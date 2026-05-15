/** AccordionExample.jsx
 * @brief : This component is responsible for demonstrating how to use the Accordion component.
 */

/* --=== Imports ===-- */
import { useState } from 'react';
import Accordion, { AccordionItem } from '../vertez/Accordion';
import { vertexThemeColors } from '../VertexStyles';

export default function AccordionExample() {
    const accordionItems = [
        { label: "What is VertezUI?", content: "VertezUI is a custom React component library built with Tailwind CSS for rapid, consistent UI development." },
        { label: "How do I install it?", content: "Simply copy the vertez folder into your project's src directory and import the components you need." },
        { label: "Can I customize styles?", content: "Yes — every component accepts a styles prop that lets you override any default tailwind classes." },
    ];

    return (
        <div style={{ marginBottom: '2rem', paddingBottom: '1rem', borderBottom: `1px solid ${vertexThemeColors.border}` }}>
            <h2 style={{ color: vertexThemeColors.primary, fontSize: '2rem', margin: '0 0 1.5rem 0' }}>Title : Custom Vertez Accordion</h2>

            <div style={{ padding: '1.5rem', background: vertexThemeColors.surface, borderRadius: '8px', marginBottom: '2rem', maxWidth: '500px' }}>
                <Accordion items={accordionItems} />
            </div>

            <div style={{ color: vertexThemeColors.textPrimary }}>
                <h3 style={{ color: vertexThemeColors.primary, fontSize: '1.25rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Description :</h3>
                <p style={{ paddingLeft: '1.5rem', fontSize: '1rem', color: vertexThemeColors.textSecondary, lineHeight: '1.5' }}>
                    A collapsible accordion component that reveals content when a section header is clicked. Supports both single-select (one section open at a time) and multi-select modes. If children are provided, they are rendered directly; otherwise, the accordion is constructed from the items array.
                </p>

                <h3 style={{ color: vertexThemeColors.primary, fontSize: '1.25rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Argument : items</h3>
                <p style={{ paddingLeft: '1.5rem', fontSize: '1rem', color: vertexThemeColors.textSecondary, lineHeight: '1.5' }}>
                    <strong>Type:</strong> <code>Array</code><br />
                    An array of item definitions. Each item should have at least a <code>label</code> and <code>content</code>. Optionally include an <code>ItemComponent</code> to use a custom wrapper; all other props get spread into it.
                </p>

                <h3 style={{ color: vertexThemeColors.primary, fontSize: '1.25rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Argument : children</h3>
                <p style={{ paddingLeft: '1.5rem', fontSize: '1rem', color: vertexThemeColors.textSecondary, lineHeight: '1.5' }}>
                    <strong>Type:</strong> <code>React.JSX</code><br />
                    If provided, children are rendered directly and the items array is ignored.
                </p>

                <h3 style={{ color: vertexThemeColors.primary, fontSize: '1.25rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Argument : multiSelect</h3>
                <p style={{ paddingLeft: '1.5rem', fontSize: '1rem', color: vertexThemeColors.textSecondary, lineHeight: '1.5' }}>
                    <strong>Type:</strong> <code>Boolean</code><br />
                    If true, multiple sections can be open at the same time. Defaults to false.
                </p>

                <h3 style={{ color: vertexThemeColors.primary, fontSize: '1.25rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Argument : styles</h3>
                <p style={{ paddingLeft: '1.5rem', fontSize: '1rem', color: vertexThemeColors.textSecondary, lineHeight: '1.5' }}>
                    <strong>Type:</strong> <code>Object</code><br />
                    Custom tailwind style overrides for the accordion container.
                </p>

                <h3 style={{ color: vertexThemeColors.primary, fontSize: '1.25rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Reference :</h3>
                <div style={{ paddingLeft: '1.5rem', fontSize: '0.9rem', color: vertexThemeColors.textSecondary, lineHeight: '1.6', fontFamily: 'monospace', background: vertexThemeColors.background, padding: '1rem', borderRadius: '5px' }}>
{`<Accordion
    items={faqSectionData}
    multiSelect={allowMultiExpand}
    styles={accordionContainerStyles}
/>`}
                </div>
            </div>
        </div>
    );
}
