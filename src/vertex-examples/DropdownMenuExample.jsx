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
        <div className="mb-[2rem] pb-[1rem] border-b-[1px] border-b-[#ADADAF]">            
            <div className="p-[1.5rem] bg-[#1B1B1D] rounded-[8px] mb-[2rem] max-w-[400px]">
                <DropdownMenu 
                    selectedItem={selected} 
                    items={menuItems}
                    onSelectionChange={handleSelect}
                    className="" 
                />
            </div>
            
            <div className="text-[#cbd5e1]">
                <h3 className="text-[#769cca] text-[1.25rem] mt-[1.5rem] mb-[0.5rem]">Description :</h3>
                <p className="pl-[1.5rem] text-[1rem] text-[#e2e8f0] leading-[1.5]">
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
