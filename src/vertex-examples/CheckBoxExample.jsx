/** CheckBoxExample.jsx
 * @brief : This component is responsible for demonstrating how to use the Checkbox component.
 */

/* --=== Imports ===-- */
import React, { useState } from 'react';
import Checkbox from "../vertez/CheckBox";
import { vertexThemeColors } from '../VertexStyles';
import ComponentArgumentDisplay from './ComponentArgumentDisplay';

export default function CheckBoxExample() {
    const [isChecked, setIsChecked] = useState(false);

    const handleUpdate = (e) => {
        setIsChecked(e.target.value);
    };

    const checkboxComponentProperties = [{
        title: 'Description :',
        description: 'A styled toggle switch checkbox component. It requires a label text, a value (checked state), and a callback function to handle state updates.'
    }, {
        title: 'Argument : text',
        propertyType: 'String',
        required: true,
        description: 'The label text to display next to the toggle switch.'
    }, {
        title: 'Argument : formValueUpdate',
        propertyType: 'Function',
        required: true,
        description: <>A callback function invoked when the checkbox is toggled. It receives an event-like object: <code>{`{ target: { value: boolean, name: string } }`}</code>.</>
    }, {
        title: 'Argument : value',
        required: true,
        propertyType: 'Boolean',
        description: 'The current checked state of the checkbox. Default is false.'
    }, {
        title: 'Argument : name',
        propertyType: 'String',
        description: 'The name attribute assigned to the input, useful for form tracking.'
    }, {
        title: 'Argument : styles',
        propertyType: 'object',
        description: 'Custom styles to override default checkbox container classes.'
    }]

    return (
        <div className="mb-[2rem] pb-[1rem] border-b-[1px] border-b-[#ADADAF]">
            <div className="p-[1.5rem] bg-[#1B1B1D] rounded-[8px] mb-[2rem] max-w-[300px]">
                <Checkbox
                    text="Enable Electric Lime Mode"
                    name="electricLime"
                    value={isChecked}
                    formValueUpdate={handleUpdate}
                />
            </div>

            <div className="text-[#cbd5e1]">
                {checkboxComponentProperties.map((checkboxDetails) =>
                    <ComponentArgumentDisplay
                        propertyTitle={checkboxDetails.title}
                        propertyType={null || checkboxDetails?.propertyType}
                        propertyRequired={null || checkboxDetails?.required}
                    >
                        {checkboxDetails.description}
                    </ComponentArgumentDisplay>
                )}

                <h3 className="text-[#769cca] text-[1.25rem] mt-[1.5rem] mb-[0.5rem]">Reference :</h3>
                <div className="pl-[1.5rem] text-[0.9rem] text-[#e2e8f0] leading-[1.6] font-mono bg-[rgb(47, 47, 68)] p-[1rem] rounded-[5px]">
{`<Checkbox
    text={notificationLabel}
    name={notificationFieldName}
    value={isNotificationsEnabled}
    formValueUpdate={handleToggleNotifications}
/>`}
                </div>
            </div>
        </div>
    );
}