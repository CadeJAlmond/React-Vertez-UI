/** InputExample.jsx
 * @brief : This component is responsible for demonstrating how to use the Input component.
 */

/* --=== Imports ===-- */
import React, { useState } from 'react';
import Input, { createBasicInput } from '../vertez/Input';
import { vertexThemeColors } from '../VertexStyles';
import ComponentArgumentDisplay from './ComponentArgumentDisplay';

export default function InputExample() {
    const [text, setText] = useState("");

    const inputComponentProperties = [{
        title: 'Description :',
        description: 'A customizable standard input element with predefined baseline styles, capable of functioning as a number, text, or any valid HTML input type.'
    }, {
        title: 'Argument : children (Placeholder)',
        propertyType: 'String | React.JSX',
        description: 'The placeholder text displayed when the input is empty.'
    }, {
        title: 'Argument : formValueUpdate',
        required: true,
        propertyType: 'Function',
        description: 'Standard onChange handler receiving the event object.'
    }, {
        title: 'Argument : type',
        propertyType: 'String',
        description: 'The HTML input type (e.g., "text", "number"). Defaults to "number".'
    }, {
        title: 'Argument : value',
        propertyType: 'Any',
        required: true,
        description: 'The controlled value of the input.'
    }, {
        title: 'Argument : styles',
        propertyType: 'object',
        description: 'Custom styling properties object.'
    }]

    return (
        <div className="mb-[2rem] pb-[1rem] border-b-[1px] border-b-[#ADADAF]">
            <div className="p-[1.5rem] bg-[#1B1B1D] rounded-[8px] mb-[2rem] max-w-[300px]">
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

            <div className="text-[#cbd5e1]">
                {inputComponentProperties.map((inputDetails) =>
                    <ComponentArgumentDisplay
                        propertyTitle={inputDetails.title}
                        propertyType={null || inputDetails?.propertyType}
                        propertyRequired={null || inputDetails?.required}
                    >
                        {inputDetails.description}
                    </ComponentArgumentDisplay>
                )}

                <h3 className="text-[#769cca] text-[1.25rem] mt-[1.5rem] mb-[0.5rem]">Reference :</h3>
                <div className="pl-[1.5rem] text-[0.9rem] text-[#e2e8f0] leading-[1.6] font-mono bg-[rgb(47, 47, 68)] p-[1rem] rounded-[5px]">
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