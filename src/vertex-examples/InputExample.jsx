import React, { useState } from 'react';
import Input, { createBasicInput } from '../vertez/Input';
import { vertexThemeColors } from '../VertexStyles';

export default function InputExample() {
    const [text, setText] = useState("");

    return (
        <div style={{ marginBottom: '2rem', paddingBottom: '1rem', borderBottom: `1px solid ${vertexThemeColors.border}` }}>            
            <div style={{ padding: '1.5rem', background: vertexThemeColors.surface, borderRadius: '8px', marginBottom: '2rem', maxWidth: '300px' }}>
                <Input
                    type="text"
                    name="userName"
                    value={text}
                    formValueUpdate={(e) => setText(e.target.value)}
                    styles={{ border: "rounded-[5px]", b: "border-[1.5px] border-[#333333]", bg: "bg-[#0D0D0D]", pl: "pl-2" }}
                >
                    Enter your name...
                </Input>
            </div>

            <div style={{ color: vertexThemeColors.textPrimary }}>
                <h3 style={{ color: vertexThemeColors.primary, fontSize: '1.25rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Description :</h3>
                <p style={{ paddingLeft: '1.5rem', fontSize: '1rem', color: vertexThemeColors.textSecondary, lineHeight: '1.5' }}>
                    A customizable standard input element with predefined baseline styles, capable of functioning as a number, text, or any valid HTML input type.
                </p>
                
                <h3 style={{ color: vertexThemeColors.primary, fontSize: '1.25rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Argument : children (Placeholder)</h3>
                <p style={{ paddingLeft: '1.5rem', fontSize: '1rem', color: vertexThemeColors.textSecondary, lineHeight: '1.5' }}>
                    <strong>Type:</strong> <code>String | React.JSX</code><br />
                    The placeholder text displayed when the input is empty.
                </p>
                
                <h3 style={{ color: vertexThemeColors.primary, fontSize: '1.25rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Argument : formValueUpdate *</h3>
                <p style={{ paddingLeft: '1.5rem', fontSize: '1rem', color: vertexThemeColors.textSecondary, lineHeight: '1.5' }}>
                    <strong>Type:</strong> <code>Function</code><br />
                    Standard onChange handler receiving the event object.
                </p>
                
                <h3 style={{ color: vertexThemeColors.primary, fontSize: '1.25rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Argument : type</h3>
                <p style={{ paddingLeft: '1.5rem', fontSize: '1rem', color: vertexThemeColors.textSecondary, lineHeight: '1.5' }}>
                    <strong>Type:</strong> <code>String</code><br />
                    The HTML input type (e.g., "text", "number"). Defaults to "number".
                </p>
                
                <h3 style={{ color: vertexThemeColors.primary, fontSize: '1.25rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Argument : value *</h3>
                <p style={{ paddingLeft: '1.5rem', fontSize: '1rem', color: vertexThemeColors.textSecondary, lineHeight: '1.5' }}>
                    <strong>Type:</strong> <code>Any</code><br />
                    The controlled value of the input.
                </p>
                
                <h3 style={{ color: vertexThemeColors.primary, fontSize: '1.25rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Argument : styles</h3>
                <p style={{ paddingLeft: '1.5rem', fontSize: '1rem', color: vertexThemeColors.textSecondary, lineHeight: '1.5' }}>
                    <strong>Type:</strong> <code>Object</code><br />
                    Custom styling properties object.
                </p>
                
                <h3 style={{ color: vertexThemeColors.primary, fontSize: '1.25rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Helper Function : createBasicInput</h3>
                <p style={{ paddingLeft: '1.5rem', fontSize: '1rem', color: vertexThemeColors.textSecondary, lineHeight: '1.5' }}>
                    <strong>Arguments:</strong> <code>(inputName, type, value, max, min, text, styles)</code><br />
                    Returns Form-compatible structure for the input.
                </p>

                <h3 style={{ color: vertexThemeColors.primary, fontSize: '1.25rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Reference :</h3>
                <div style={{ paddingLeft: '1.5rem', fontSize: '0.9rem', color: vertexThemeColors.textSecondary, lineHeight: '1.6', fontFamily: 'monospace', background: vertexThemeColors.background, padding: '1rem', borderRadius: '5px' }}>
{`<Input
    type={inputFieldType}
    name={searchFieldName}
    value={currentSearchQuery}
    min={minSearchLength}
    max={maxSearchLength}
    formValueUpdate={handleSearchQueryChanged}
    styles={searchInputStyles}
>
    Search for items...
</Input>`}
                </div>
            </div>
        </div>
    );
}
