import React, { useState } from 'react';
import SliderInput, { createSliderInput } from '../vertez/SliderInput';
import { vertexThemeColors } from '../VertexStyles';

export default function SliderInputExample() {
    const [sliderVal, setSliderVal] = useState(50);

    return (
        <div style={{ marginBottom: '2rem', paddingBottom: '1rem', borderBottom: `1px solid ${vertexThemeColors.border}` }}>
            <h2 style={{ color: vertexThemeColors.primary, fontSize: '2rem', margin: '0 0 1.5rem 0' }}>Title : Custom Vertez Slider Input</h2>
            
            <div style={{ padding: '1.5rem', background: vertexThemeColors.surface, borderRadius: '8px', marginBottom: '2rem', maxWidth: '400px' }}>
                <div style={{ color: vertexThemeColors.textPrimary, marginBottom: '0.5rem' }}>Current Value: {sliderVal}</div>
                <SliderInput
                    name="volumeSlider"
                    value={sliderVal}
                    min={0}
                    max={100}
                    formValueUpdate={(e) => setSliderVal(e.target.value)}
                />
            </div>

            <div style={{ color: vertexThemeColors.textPrimary }}>
                <h3 style={{ color: vertexThemeColors.primary, fontSize: '1.25rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Description :</h3>
                <p style={{ paddingLeft: '1.5rem', fontSize: '1rem', color: vertexThemeColors.textSecondary, lineHeight: '1.5' }}>
                    A styled range slider input. Crucially, it supports logarithmic scaling, allowing fine control over small values while covering a huge total range when <code>logScaling</code> is enabled.
                </p>
                
                <h3 style={{ color: vertexThemeColors.primary, fontSize: '1.25rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Argument : value *</h3>
                <p style={{ paddingLeft: '1.5rem', fontSize: '1rem', color: vertexThemeColors.textSecondary, lineHeight: '1.5' }}>
                    <strong>Type:</strong> <code>Number</code><br />
                    The current value of the slider.
                </p>
                
                <h3 style={{ color: vertexThemeColors.primary, fontSize: '1.25rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Argument : min & max *</h3>
                <p style={{ paddingLeft: '1.5rem', fontSize: '1rem', color: vertexThemeColors.textSecondary, lineHeight: '1.5' }}>
                    <strong>Type:</strong> <code>Number</code><br />
                    The upper and lower bounds for the slider's range.
                </p>
                
                <h3 style={{ color: vertexThemeColors.primary, fontSize: '1.25rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Argument : logScaling</h3>
                <p style={{ paddingLeft: '1.5rem', fontSize: '1rem', color: vertexThemeColors.textSecondary, lineHeight: '1.5' }}>
                    <strong>Type:</strong> <code>Boolean</code><br />
                    If true, internally maps the slider's visual position to a logarithmic curve. Ideal for things like financial projections or frequencies.
                </p>
                
                <h3 style={{ color: vertexThemeColors.primary, fontSize: '1.25rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Argument : formValueUpdate *</h3>
                <p style={{ paddingLeft: '1.5rem', fontSize: '1rem', color: vertexThemeColors.textSecondary, lineHeight: '1.5' }}>
                    <strong>Type:</strong> <code>Function</code><br />
                    The callback triggered when the slider moves. If <code>logScaling</code> is true, the value returned in the event object is already exponentiated back to the actual scaled value.
                </p>
                
                <h3 style={{ color: vertexThemeColors.primary, fontSize: '1.25rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Helper Function : createSliderInput</h3>
                <p style={{ paddingLeft: '1.5rem', fontSize: '1rem', color: vertexThemeColors.textSecondary, lineHeight: '1.5' }}>
                    <strong>Arguments:</strong> <code>(inputName, value, max, min, text)</code><br />
                    Returns Form-compatible structure for the slider.
                </p>

                <h3 style={{ color: vertexThemeColors.primary, fontSize: '1.25rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Reference :</h3>
                <div style={{ paddingLeft: '1.5rem', fontSize: '0.9rem', color: vertexThemeColors.textSecondary, lineHeight: '1.6', fontFamily: 'monospace', background: vertexThemeColors.background, padding: '1rem', borderRadius: '5px' }}>
{`<SliderInput
    name={brightnessFieldName}
    value={currentBrightness}
    min={brightnessMinBound}
    max={brightnessMaxBound}
    formValueUpdate={handleBrightnessChanged}
    logScaling={useLogarithmicScale}
/>`}
                </div>
            </div>
        </div>
    );
}
