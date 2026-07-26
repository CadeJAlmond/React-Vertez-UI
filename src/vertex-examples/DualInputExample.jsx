/** DualInputExample.jsx
 * @brief : This component is responsible for demonstrating how to use the DualInput component.
 */

/* --=== Imports ===-- */
import React, { useState } from 'react';
import DualInput, { createDualInputs } from '../vertez/DualInput';
import { vertexThemeColors } from '../VertexStyles';
import ComponentArgumentDisplay from './ComponentArgumentDisplay';

export default function DualInputExample() {
    const [val, setVal] = useState(50);

    const handleUpdate = (e) => {
        setVal(e.target.value);
    };

    const dualInputComponentProperties = [{
        title: 'Description :',
        description: 'A synchronized combination of a numeric text input and a range slider. Updating either element updates the shared value. It includes a label text placed intuitively above the slider alongside the text input.'
    }, {
        title: 'Argument : text',
        propertyType: 'String',
        required: true,
        description: 'The label describing the dual input.'
    }, {
        title: 'Argument : value',
        propertyType: 'Number | String',
        required: true,
        description: 'The current numeric value bound to the inputs.'
    }, {
        title: 'Argument : min & max',
        propertyType: 'Number',
        description: 'The bounds for the slider and the numeric input validation.'
    }, {
        title: 'Argument : formValueUpdate',
        propertyType: 'Function',
        required: true,
        description: 'Callback triggered on value change.'
    }, {
        title: 'Argument : logScaling',
        propertyType: 'Boolean',
        description: 'Applies logarithmic scaling to the underlying slider if set to true. Default is false.'
    }]

    return (
        <div className="mb-[2rem] pb-[1rem] border-b-[1px] border-b-[#ADADAF]">
            <div className="p-[1.5rem] bg-[#1B1B1D] rounded-[8px] mb-[2rem] max-w-[500px]">
                <DualInput
                    text="Set Battery Limit (%)"
                    name="batteryLimit"
                    value={val}
                    min={0}
                    max={100}
                    formValueUpdate={handleUpdate}
                    styles={{ text: `text-[${vertexThemeColors.primary}]` }}
                />
            </div>

            <div className="text-[#cbd5e1]">
                {dualInputComponentProperties.map((dualDetails) =>
                    <ComponentArgumentDisplay
                        propertyTitle={dualDetails.title}
                        propertyType={null || dualDetails?.propertyType}
                        propertyRequired={null || dualDetails?.required}
                    >
                        {dualDetails.description}
                    </ComponentArgumentDisplay>
                )}

                <h3 className="text-[#769cca] text-[1.25rem] mt-[1.5rem] mb-[0.5rem]">Reference :</h3>
                <div className="pl-[1.5rem] text-[0.9rem] text-[#e2e8f0] leading-[1.6] font-mono bg-[rgb(47, 47, 68)] p-[1rem] rounded-[5px]">
{`<DualInput
    text={volumeLabelText}
    name={volumeFieldName}
    value={currentVolume}
    min={volumeMinBound}
    max={volumeMaxBound}
    formValueUpdate={handleVolumeChanged}
    logScaling={useLogarithmicScale}
/>`}
                </div>
            </div>
        </div>
    );
}