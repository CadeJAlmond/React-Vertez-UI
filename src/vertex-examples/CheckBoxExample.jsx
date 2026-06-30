import React, { useState } from 'react';
import Checkbox from "../vertez/CheckBox";
import { vertexThemeColors } from '../VertexStyles';

export default function CheckBoxExample() {
    const [isChecked, setIsChecked] = useState(false);

    const handleUpdate = (e) => {
        setIsChecked(e.target.value);
    };

    return (
        <div style={{ marginBottom: '2rem', paddingBottom: '1rem', borderBottom: `1px solid ${vertexThemeColors.border}` }}>
            <div style={{ padding: '1.5rem', background: vertexThemeColors.surface, borderRadius: '8px', marginBottom: '2rem', maxWidth: '300px' }}>
                <Checkbox
                    text="Enable Electric Lime Mode"
                    name="electricLime"
                    value={isChecked}
                    formValueUpdate={handleUpdate}
                />
            </div>

            <div style={{ color: vertexThemeColors.textPrimary }}>
                <h3 style={{ color: vertexThemeColors.primary, fontSize: '1.25rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Description :</h3>
                <p style={{ paddingLeft: '1.5rem', fontSize: '1rem', color: vertexThemeColors.textSecondary, lineHeight: '1.5' }}>
                    A styled toggle switch checkbox component. It requires a label text, a value (checked state), and a callback function to handle state updates.
                </p>

                <h3 style={{ color: vertexThemeColors.primary, fontSize: '1.25rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Argument : text *</h3>
                <p style={{ paddingLeft: '1.5rem', fontSize: '1rem', color: vertexThemeColors.textSecondary, lineHeight: '1.5' }}>
                    <strong>Type:</strong> <code>String</code><br />
                    The label text to display next to the toggle switch.
                </p>

                <h3 style={{ color: vertexThemeColors.primary, fontSize: '1.25rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Argument : formValueUpdate *</h3>
                <p style={{ paddingLeft: '1.5rem', fontSize: '1rem', color: vertexThemeColors.textSecondary, lineHeight: '1.5' }}>
                    <strong>Type:</strong> <code>Function</code><br />
                    A callback function invoked when the checkbox is toggled. It receives an event-like object: <code>{`{ target: { value: boolean, name: string } }`}</code>.
                </p>

                <h3 style={{ color: vertexThemeColors.primary, fontSize: '1.25rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Argument : value</h3>
                <p style={{ paddingLeft: '1.5rem', fontSize: '1rem', color: vertexThemeColors.textSecondary, lineHeight: '1.5' }}>
                    <strong>Type:</strong> <code>Boolean</code><br />
                    The current checked state of the checkbox. Default is false.
                </p>

                <h3 style={{ color: vertexThemeColors.primary, fontSize: '1.25rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Argument : name</h3>
                <p style={{ paddingLeft: '1.5rem', fontSize: '1rem', color: vertexThemeColors.textSecondary, lineHeight: '1.5' }}>
                    <strong>Type:</strong> <code>String</code><br />
                    The name attribute assigned to the input, useful for form tracking.
                </p>

                <h3 style={{ color: vertexThemeColors.primary, fontSize: '1.25rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Argument : styles</h3>
                <p style={{ paddingLeft: '1.5rem', fontSize: '1rem', color: vertexThemeColors.textSecondary, lineHeight: '1.5' }}>
                    <strong>Type:</strong> <code>Object</code><br />
                    Custom styles to override default checkbox container classes.
                </p>

                <h3 style={{ color: vertexThemeColors.primary, fontSize: '1.25rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Reference :</h3>
                <div style={{ paddingLeft: '1.5rem', fontSize: '0.9rem', color: vertexThemeColors.textSecondary, lineHeight: '1.6', fontFamily: 'monospace', background: vertexThemeColors.background, padding: '1rem', borderRadius: '5px' }}>
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
