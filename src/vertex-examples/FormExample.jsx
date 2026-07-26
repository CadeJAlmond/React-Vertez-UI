/** FormExample.jsx
 * @brief : This component is responsible for demonstrating how to use the Form component.
 */

/* --=== Imports ===-- */
import Form from "../vertez/Form";
import Checkbox from "../vertez/CheckBox";
import DualInput from "../vertez/DualInput";
import { useState } from "react";
import { vertexThemeBG, vertexThemeColors } from '../VertexStyles';
import ComponentArgumentDisplay from './ComponentArgumentDisplay';

export default function FormExample() {
    const defaultRetirementFormValues = {
        isRothIRA: {
            text: "IS ROTH IRA?",
            value: false,
            InputComponent: Checkbox,
            required: true,
        },
        initialBalance: {
            text: "($) INITIAL BALANCE",
            value: 0, max: 1_000_000, min: 0,
            InputComponent: DualInput,
            required: true,
        },
        expectedStockGrowth: {
            text: "(%) EXPECTED ANNUAL GROWTH",
            value: 13, max: 80, min: 1,
            InputComponent: DualInput,
            required: true,
        },
        age: {
            text: "CURRENT AGE",
            value: 22, max: 95, min: 1,
            InputComponent: DualInput,
            required: true,
        },
        retirementAge: {
            text: "AGE OF RETIREMENT",
            value: 65, max: 95, min: 20,
            InputComponent: DualInput,
            required: true,
        },
        annualIncome: {
            text: "($) ANNUAL INCOME",
            value: 65_000, max: 1_000_000, min: 5_000,
            InputComponent: DualInput,
            required: true,
        },
        investing: {
            text: "(%) PERCENT OF INCOME TO INVEST",
            value: 20, max: 100, min: 1,
            InputComponent: DualInput,
            required: true,
        },
    };

    const [formValues, setFormValues] = useState(defaultRetirementFormValues);

    const formComponentProperties = [{
        title: 'Description :',
        description: 'A flexible form component that accepts a schema-based data structure to dynamically render form inputs. Supports custom styling via the styles prop.'
    }, {
        title: 'Argument : title',
        propertyType: 'String',
        description: 'The title of the form (optional argument).'
    }, {
        title: 'Argument : formInputsData',
        propertyType: 'Array',
        required: true,
        description: (
                <ul className="ml-[1.5rem] mt-[0.5rem]">
                <li><strong>InputComponent</strong> : The type of input to render (e.g., Input, Checkbox, Dropdown). Should accept the data contained in the other fields of this object as arguments.</li>
                <li><strong>Text</strong> : The label associated with the input</li>
                <li><strong>Value</strong> : The current value of the input</li>
                <li><strong>Max</strong> : The maximum value of the input (for range inputs)</li>
                <li><strong>Min</strong> : The minimum value of the input (for range inputs)</li>
            </ul>
        )
    }, {
        title: 'Argument : formValueUpdate',
        propertyType: 'Function',
        required: true,
        description: 'A callback function which will be invoked whenever the values of the inputs are updated. An updated state of the form is passed as the first argument.'
    }, {
        title: 'Argument : styles',
        propertyType: 'object',
        description: 'Custom tailwind style overrides for the form container.'
    }, {
        title: 'Example : formInputsData',
        description: <>Each form input object should include: <code>text</code> (label), <code>value</code> (current value), <code>InputComponent</code> (the input component to render), and optional <code>max</code>, <code>min</code>, and <code>validators</code>.</>
    }]

    return (
        <div className="mb-[2rem] border-b-[1rem]">
            <div className="mb-[2rem]">
                <Form
                    title={"Retirement Planner"}
                    formInputsData={formValues}
                    formValueUpdate={(newState) => setFormValues(newState.state)}
                    styles={{ "w": "min-w-[480px] max-w-[480px]", "p": "p-[1.5rem]" }}
                />
            </div>

            <div className="p-[1.5rem] w-[550px] bg-[#1B1B1D] rounded-[8px] mb-[2rem] grid grid-cols-[1fr_1fr] gap-[1rem]">
                <div className="text-[#e2e8f0]">IS ROTH IRA Form Internal Data</div>
                <div className="text-md flex text-[#769cca]">{formValues.isRothIRA.value.toString()}</div>
                <div className="text-[#e2e8f0]">INITIAL BALANCE</div>
                <div className="text-md flex text-[#769cca]">{formValues.initialBalance.value}</div>
                <div className="text-[#e2e8f0]">EXPECTED STOCK GROWTH</div>
                <div className="text-md flex text-[#769cca]">{formValues.expectedStockGrowth.value}</div>
                <div className="text-[#e2e8f0]">CURRENT AGE</div>
                <div className="text-md flex text-[#769cca]">{formValues.age.value}</div>
                <div className="text-[#e2e8f0]">AGE OF RETIREMENT</div>
                <div className="text-md flex text-[#769cca]">{formValues.retirementAge.value}</div>
                <div className="text-[#e2e8f0]">ANNUAL INCOME</div>
                <div className="text-md flex text-[#769cca]">{formValues.annualIncome.value}</div>
                <div className="text-[#e2e8f0]">PERCENT OF INCOME TO INVEST</div>
                <div className="text-md flex text-[#769cca]">{formValues.investing.value}</div>
            </div>

            <div className="text-[#cbd5e1]">
                {formComponentProperties.map((formDetails) =>
                    <ComponentArgumentDisplay
                        propertyTitle={formDetails.title}
                        propertyType={null || formDetails?.propertyType}
                        propertyRequired={null || formDetails?.required}
                    >
                        {formDetails.description}
                    </ComponentArgumentDisplay>
                )}

                <h3 className="text-[#769cca] text-[1.25rem] mt-[1.5rem] mb-[0.5rem]">Example : formInputsData</h3>
                <div className="pl-[1.5rem] text-[1rem] text-[#e2e8f0] leading-[1.5] font-mono">
                    <div>const formInputsData = [</div>
                    <div className="pl-[1.5rem]">
                        {Object.keys(defaultRetirementFormValues).map((formInput, idx) => {
                            const { text, value, InputComponent } = defaultRetirementFormValues[formInput];
                            return (
                                <div key={idx}>
                                    {`{text: "${text}", value: ${value}, InputComponent: ${InputComponent.name}},`}
                                </div>
                            )
                        })}
                    </div>
                    <div>]</div>
                </div>

                <h3 className="text-[#769cca] text-[1.25rem] mt-[1.5rem] mb-[0.5rem]">Reference :</h3>
                <div className="pl-[1.5rem] text-[0.9rem] text-[#e2e8f0] leading-[1.6] font-mono bg-[rgb(47, 47, 68)] p-[1rem] rounded-[5px]">
{`<Form
    title={formTitleText}
    formInputsData={registrationFormSchema}
    formValueUpdate={handleRegistrationUpdated}
    styles={registrationFormStyles}
>
    <Button onClick={handleFormSubmit}>Register</Button>
</Form>`}
                </div>
            </div>
        </div>
    );
}