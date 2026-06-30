/** FormExample.jsx
 * @brief : This component is responsible for demonstrating how to use the Form component.
 */

/* --=== Imports ===-- */
import Form from "../vertez/Form";
import Checkbox from "../vertez/CheckBox";
import DualInput from "../vertez/DualInput";
import { useState } from "react";
import { vertexThemeBG, vertexThemeColors } from '../VertexStyles';

export default function FormExample() {
    /* --=== Default Form Values ===-- */
    // These values represent the parameters / general data for the inputs
    // shown within the form.
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

    return (
        <div className="mb-[2rem] [b-[1rem]">
            <div className="mb-[2rem] ">
                <Form
                    title={"Retirement Planner"}
                    formInputsData={formValues}
                    formValueUpdate={(newState) => setFormValues(newState.state)}
                    styles={{ "w": "min-w-[480px] max-w-[480px]", "p": "p-[1.5rem]" }}
                />
            </div>

            <div style={{ padding: '1.5rem', width: "550px", background: vertexThemeColors.surface, borderRadius: '8px', marginBottom: '2rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div style={{ color: vertexThemeColors.textSecondary }}>IS ROTH IRA Form Internal Data</div>
                <div className="text-md flex " style={{ color: vertexThemeColors.primary }}>{formValues.isRothIRA.value.toString()}</div>
                <div style={{ color: vertexThemeColors.textSecondary }}>INITIAL BALANCE</div>
                <div className="text-md flex" style={{ color: vertexThemeColors.primary }}>{formValues.initialBalance.value}</div>
                <div style={{ color: vertexThemeColors.textSecondary }}>EXPECTED STOCK GROWTH</div>
                <div className="text-md flex" style={{ color: vertexThemeColors.primary }}>{formValues.expectedStockGrowth.value}</div>
                <div style={{ color: vertexThemeColors.textSecondary }}>CURRENT AGE</div>
                <div className="text-md flex" style={{ color: vertexThemeColors.primary }}>{formValues.age.value}</div>
                <div style={{ color: vertexThemeColors.textSecondary }}>AGE OF RETIREMENT</div>
                <div className="text-md flex" style={{ color: vertexThemeColors.primary }}>{formValues.retirementAge.value}</div>
                <div style={{ color: vertexThemeColors.textSecondary }}>ANNUAL INCOME</div>
                <div className="text-md flex" style={{ color: vertexThemeColors.primary }}>{formValues.annualIncome.value}</div>
                <div style={{ color: vertexThemeColors.textSecondary }}>PERCENT OF INCOME TO INVEST</div>
                <div className="text-md flex" style={{ color: vertexThemeColors.primary }}>{formValues.investing.value}</div>
            </div>

            <div style={{ color: vertexThemeColors.textPrimary }}>
                <h3 style={{ color: vertexThemeColors.primary, fontSize: '1.25rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Description :</h3>
                <p style={{ paddingLeft: '1.5rem', fontSize: '1rem', color: vertexThemeColors.textSecondary, lineHeight: '1.5' }}>
                    To create a custom form, one must pass the form data (formInputsData) into the Form.
                    formInputsData is a generic data structure which is meant to be used to construct
                    the form, and it is also what will be used to track the values of the inputs.
                    formValueUpdate is a callback function which will be invoked whenever the values
                    of the inputs are updated.
                </p>

                <h3 style={{ color: vertexThemeColors.primary, fontSize: '1.25rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Argument : Title</h3>
                <p style={{ paddingLeft: '1.5rem', fontSize: '1rem', color: vertexThemeColors.textSecondary, lineHeight: '1.5' }}>
                    The title of the form (optional argument)
                </p>

                <h3 style={{ color: vertexThemeColors.primary, fontSize: '1.25rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Argument : Form Inputs Data *</h3>
                <div style={{ paddingLeft: '1.5rem', fontSize: '1rem', color: vertexThemeColors.textSecondary, lineHeight: '1.5' }}>
                    The data structure which is used to construct the form. The arguements are:
                    <ul style={{ marginLeft: '1.5rem', marginTop: '0.5rem' }}>
                        <li><strong>InputComponent</strong> : The type of input to render (e.g., Input, Checkbox, Dropdown). Should accept the data contained in the other fields of this object as arguments.</li>
                        <li><strong>Text</strong> : The label associated with the input</li>
                        <li><strong>Value</strong> : The current value of the input</li>
                        <li><strong>Max</strong> : The maximum value of the input (for range inputs)</li>
                        <li><strong>Min</strong> : The minimum value of the input (for range inputs)</li>
                    </ul>
                </div>

                <h3 style={{ color: vertexThemeColors.primary, fontSize: '1.25rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Argument : Form Value Update *</h3>
                <p style={{ paddingLeft: '1.5rem', fontSize: '1rem', color: vertexThemeColors.textSecondary, lineHeight: '1.5' }}>
                    A callback function which will be invoked whenever the values of the inputs are updated. An updated
                    state of the form is passed as the first arguement to this function, and the label and value of
                    the updated input is passed as the second arguement to the function.
                </p>

                <h3 style={{ color: vertexThemeColors.primary, fontSize: '1.25rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Argument : Custom Form Styles</h3>
                <p style={{ paddingLeft: '1.5rem', fontSize: '1rem', color: vertexThemeColors.textSecondary, lineHeight: '1.5' }}>
                    The custom form styles are optional.
                </p>

                <h3 style={{ color: vertexThemeColors.primary, fontSize: '1.25rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Example : formInputsData</h3>
                <div style={{ paddingLeft: '1.5rem', fontSize: '1rem', color: vertexThemeColors.textSecondary, lineHeight: '1.5', fontFamily: 'monospace' }}>
                    <div>const formInputsData = [</div>
                    <div style={{ paddingLeft: '1.5rem' }}>
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

                <h3 style={{ color: vertexThemeColors.primary, fontSize: '1.25rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Reference :</h3>
                <div style={{ paddingLeft: '1.5rem', fontSize: '0.9rem', color: vertexThemeColors.textSecondary, lineHeight: '1.6', fontFamily: 'monospace', background: vertexThemeColors.background, padding: '1rem', borderRadius: '5px' }}>
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
    )
}