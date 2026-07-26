/** SliderInputExample.jsx
 * @brief : This component is responsible for demonstrating how to use the SliderInput component.
 */

/* --=== Imports ===-- */
import React, { useState } from 'react';
import SliderInput, { createSliderInput } from '../vertez/SliderInput';
import { vertexThemeColors } from '../VertexStyles';
import ComponentArgumentDisplay from './ComponentArgumentDisplay';

export default function SliderInputExample() {
    const [sliderVal, setSliderVal] = useState(50);

    const sliderComponentProperties = [{
        title: 'Description :',
        description: 'A styled range slider input. Crucially, it supports logarithmic scaling, allowing fine control over small values while covering a huge total range when logScaling is enabled.'
    }, {
        title: 'Argument : value',
        propertyType: 'Number',
        required: true,
        description: 'The current value of the slider.'
    }, {
        title: 'Argument : min & max',
        propertyType: 'Number',
        description: 'The upper and lower bounds for the slider\'s range.'
    }, {
        title: 'Argument : logScaling',
        propertyType: 'Boolean',
        description: 'If true, internally maps the slider\'s visual position to a logarithmic curve. Ideal for things like financial projections or frequencies.'
    }, {
        title: 'Argument : formValueUpdate',
        required: true,
        propertyType: 'Function',
        description: 'The callback triggered when the slider moves. If logScaling is true, the value returned in the event object is already exponentiated back to the actual scaled value.'
    }, {
        title: 'Helper Function : createSliderInput',
        description: <>Returns Form-compatible structure for the slider. Takes <code>(inputName, value, max, min, text)</code> as arguments.</>
    }]

    return (
        <div className="mb-[2rem] pb-[1rem] border-b-[1px] border-b-[#ADADAF]">
            <h2 className="text-[#769cca] text-[2rem] m-0 mb-[1.5rem]">Title : Custom Vertez Slider Input</h2>
            
            <div className="p-[1.5rem] bg-[#1B1B1D] rounded-[8px] mb-[2rem] max-w-[400px]">
                <div className="text-[#cbd5e1] mb-[0.5rem]">Current Value: {sliderVal}</div>
                <SliderInput
                    name="volumeSlider"
                    value={sliderVal}
                    min={0}
                    max={100}
                    formValueUpdate={(e) => setSliderVal(e.target.value)}
                />
            </div>

            <div className="text-[#cbd5e1]">
                {sliderComponentProperties.map((sliderDetails) =>
                    <ComponentArgumentDisplay
                        propertyTitle={sliderDetails.title}
                        propertyType={null || sliderDetails?.propertyType}
                        propertyRequired={null || sliderDetails?.required}
                    >
                        {sliderDetails.description}
                    </ComponentArgumentDisplay>
                )}

                <h3 className="text-[#769cca] text-[1.25rem] mt-[1.5rem] mb-[0.5rem]">Reference :</h3>
                <div className="pl-[1.5rem] text-[0.9rem] text-[#e2e8f0] leading-[1.6] font-mono bg-[rgb(47, 47, 68)] p-[1rem] rounded-[5px]">
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