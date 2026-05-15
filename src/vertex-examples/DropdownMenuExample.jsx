import React, { useState } from 'react';
import DropdownMenu, { createFormDropdownMenu } from '../vertez/DropdownMenu';
import { vertexThemeColors } from '../VertexStyles';

export default function DropdownMenuExample() {
    const [selected, setSelected] = useState("Select a Theme");
    
    // Demonstrate items array
    const menuItems = ["Electric Lime", "Deep Ocean", "Crimson Red"];

    const handleSelect = (e) => {
        setSelected(e.event.value);
    }
    
    return (
        <div style={{ marginBottom: '2rem', paddingBottom: '1rem', borderBottom: `1px solid ${vertexThemeColors.border}` }}>
            <h2 style={{ color: vertexThemeColors.primary, fontSize: '2rem', margin: '0 0 1.5rem 0' }}>Title : Custom Vertez Dropdown Menu </h2>
            
            <div style={{ padding: '1.5rem', background: vertexThemeColors.surface, borderRadius: '8px', marginBottom: '2rem', maxWidth: '400px' }}>
                <DropdownMenu 
                    selectedItem={selected} 
                    items={menuItems}
                    onSelectionChange={handleSelect}
                    styles={{ b: "border-[2.5px] border-[#CCFF00]/65" }} 
                />
            </div>
            
            <div style={{ color: vertexThemeColors.textPrimary }}>
                <h3 style={{ color: vertexThemeColors.primary, fontSize: '1.25rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Description :</h3>
                <p style={{ paddingLeft: '1.5rem', fontSize: '1rem', color: vertexThemeColors.textSecondary, lineHeight: '1.5' }}>
                    A collapsible dropdown menu component. When clicked, it reveals a list of options. It supports passing an array of <code>items</code> or generic React <code>children</code> for full customizability.
                </p>

                <h3 style={{ color: vertexThemeColors.primary, fontSize: '1.25rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Argument : selectedItem</h3>
                <p style={{ paddingLeft: '1.5rem', fontSize: '1rem', color: vertexThemeColors.textSecondary, lineHeight: '1.5' }}>
                    <strong>Type:</strong> <code>String | Array</code><br/>
                    The current item selected. If it's an array (for multiSelect), it displays the last element.
                </p>

                <h3 style={{ color: vertexThemeColors.primary, fontSize: '1.25rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Argument : items</h3>
                <p style={{ paddingLeft: '1.5rem', fontSize: '1rem', color: vertexThemeColors.textSecondary, lineHeight: '1.5' }}>
                    <strong>Type:</strong> <code>Array</code><br/>
                    Array of strings or object definitions to populate the menu. Used if <code>children</code> is not provided.
                </p>

                <h3 style={{ color: vertexThemeColors.primary, fontSize: '1.25rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Argument : multiSelect</h3>
                <p style={{ paddingLeft: '1.5rem', fontSize: '1rem', color: vertexThemeColors.textSecondary, lineHeight: '1.5' }}>
                    <strong>Type:</strong> <code>Boolean</code><br/>
                    If true, the dropdown menu will not close when an item is selected.
                </p>

                <h3 style={{ color: vertexThemeColors.primary, fontSize: '1.25rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Argument : onSelectionChange</h3>
                <p style={{ paddingLeft: '1.5rem', fontSize: '1rem', color: vertexThemeColors.textSecondary, lineHeight: '1.5' }}>
                    <strong>Type:</strong> <code>Function</code><br/>
                    Callback triggered when an item is clicked. It passes back the <code>event</code> object containing the selected value.
                </p>

                <h3 style={{ color: vertexThemeColors.primary, fontSize: '1.25rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Helper Function : createFormDropdownMenu</h3>
                <p style={{ paddingLeft: '1.5rem', fontSize: '1rem', color: vertexThemeColors.textSecondary, lineHeight: '1.5' }}>
                    <strong>Arguments:</strong> <code>(formInputName, value, items, text)</code><br/>
                    Returns an object structured for the Vertez <code>Form</code> component.
                </p>

                <h3 style={{ color: vertexThemeColors.primary, fontSize: '1.25rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Reference :</h3>
                <div style={{ paddingLeft: '1.5rem', fontSize: '0.9rem', color: vertexThemeColors.textSecondary, lineHeight: '1.6', fontFamily: 'monospace', background: vertexThemeColors.background, padding: '1rem', borderRadius: '5px' }}>
{`<DropdownMenu
    selectedItem={activeThemeName}
    items={availableThemeOptions}
    multiSelect={allowMultiThemeSelect}
    onSelectionChange={handleThemeChanged}
    styles={themeDropdownStyles}
/>`}
                </div>
            </div>
        </div>
    );
}
