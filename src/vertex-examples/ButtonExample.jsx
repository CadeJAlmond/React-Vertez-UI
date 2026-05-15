import React from 'react';
import Button from '../vertez/Button';
import { vertexThemeColors } from '../VertexStyles';

export default function ButtonExample() {
    return (
        <div style={{ marginBottom: '2rem', paddingBottom: '1rem', borderBottom: `1px solid ${vertexThemeColors.border}` }}>
            <h2 style={{ color: vertexThemeColors.primary, fontSize: '2rem', margin: '0 0 1.5rem 0' }}>Title : Custom Vertez Button</h2>
            
            <div style={{ padding: '1.5rem', background: vertexThemeColors.surface, borderRadius: '8px', marginBottom: '2rem', display: 'flex', gap: '1rem' }}>
                <Button onClick={() => alert('Button Clicked!')} styles={{ bg: "bg-[#CCFF00]/80", text: "text-[#000000]", hover: "hover:bg-[#CCFF00]" }}>
                    Primary Button
                </Button>
                <Button onClick={() => alert('Secondary Clicked!')}>
                    Danger Button
                </Button>
            </div>
            
            <div style={{ color: vertexThemeColors.textPrimary }}>
                <h3 style={{ color: vertexThemeColors.primary, fontSize: '1.25rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Description :</h3>
                <p style={{ paddingLeft: '1.5rem', fontSize: '1rem', color: vertexThemeColors.textSecondary, lineHeight: '1.5' }}>
                    A customizable button element that comes with predefined styling.
                    It accepts children for the label, an onClick handler, and custom styles
                    to override or extend the default tailwind classes.
                </p>
                
                <h3 style={{ color: vertexThemeColors.primary, fontSize: '1.25rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Argument : children *</h3>
                <p style={{ paddingLeft: '1.5rem', fontSize: '1rem', color: vertexThemeColors.textSecondary, lineHeight: '1.5' }}>
                    <strong>Type:</strong> <code>React.JSX</code><br />
                    The content/text to use for the button.
                </p>
                
                <h3 style={{ color: vertexThemeColors.primary, fontSize: '1.25rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Argument : onClick *</h3>
                <p style={{ paddingLeft: '1.5rem', fontSize: '1rem', color: vertexThemeColors.textSecondary, lineHeight: '1.5' }}>
                    <strong>Type:</strong> <code>function</code><br />
                    A callback function invoked when the button is clicked.
                </p>
                
                <h3 style={{ color: vertexThemeColors.primary, fontSize: '1.25rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Argument : styles</h3>
                <p style={{ paddingLeft: '1.5rem', fontSize: '1rem', color: vertexThemeColors.textSecondary, lineHeight: '1.5' }}>
                    <strong>Type:</strong> <code>object</code><br />
                    Custom tailwind style overrides (e.g., <code>{`{ bg: "bg-[#CCFF00]", text: "text-black" }`}</code>).
                </p>

                <h3 style={{ color: vertexThemeColors.primary, fontSize: '1.25rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Reference :</h3>
                <div style={{ paddingLeft: '1.5rem', fontSize: '0.9rem', color: vertexThemeColors.textSecondary, lineHeight: '1.6', fontFamily: 'monospace', background: vertexThemeColors.background, padding: '1rem', borderRadius: '5px' }}>
{`<Button
    onClick={handleSubmitForm}
    styles={primaryButtonStyles}
>
    Submit Order
</Button>`}
                </div>
            </div>
        </div>
    );
}
