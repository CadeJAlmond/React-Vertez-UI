import React from 'react';
import { vertexThemeColors } from './VertexStyles';

// Import all example components
import FormExample from './vertex-examples/FormExample';
import ButtonExample from './vertex-examples/ButtonExample';
import CheckBoxExample from './vertex-examples/CheckBoxExample';
import DropdownMenuExample from './vertex-examples/DropdownMenuExample';
import DualInputExample from './vertex-examples/DualInputExample';
import GridExample from './vertex-examples/GridExample';
import InputExample from './vertex-examples/InputExample';
import SliderInputExample from './vertex-examples/SliderInputExample';
import AccordionExample from './vertex-examples/AccordionExample';

export default function VertezDocumentation() {
    return (
        <div style={{
            minHeight: '100vh',
            padding: '2rem 10%',
            fontFamily: 'sans-serif'
        }}>
            <header style={{ marginBottom: '3rem', textAlign: 'center' }}>
                <h1 style={{ color: vertexThemeColors.primary, fontSize: '3rem', margin: '0 0 1rem 0' }}>VertezUI Documentation</h1>
                <p style={{ color: vertexThemeColors.textSecondary, fontSize: '1.2rem' }}>
                    Interactive component library documentation
                </p>
            </header>

            <main style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <section>
                    <FormExample />
                </section>
                <section>
                    <ButtonExample />
                </section>
                <section>
                    <CheckBoxExample />
                </section>
                <section>
                    <DropdownMenuExample />
                </section>
                <section>
                    <DualInputExample />
                </section>
                <section>
                    <GridExample />
                </section>
                <section>
                    <InputExample />
                </section>
                <section>
                    <SliderInputExample />
                </section>
                <section>
                    <AccordionExample />
                </section>
            </main>
        </div>
    );
}
