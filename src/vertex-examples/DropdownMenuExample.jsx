/** DropdownMenuExample.jsx
 * @brief : This component is responsible for demonstrating how to use the DropdownMenu component.
 */

/* --=== Imports ===-- */
import React, { useState } from 'react';
import DropdownMenu, { createFormDropdownMenu } from '../vertez/DropdownMenu';
import { vertexThemeColors } from '../VertexStyles';
import ComponentArgumentDisplay from './ComponentArgumentDisplay';

export default function DropdownMenuExample() {
    const [selected, setSelected] = useState("Select a Theme");
    
    // Demonstrate items array
    const menuItems = ["Electric Lime", "Deep Ocean", "Crimson Red"];

    const handleSelect = (e) => {
        setSelected(e.event.value);
    }

    const dropdownComponentProperties = [{
        title: 'Description :',
        description: 'A collapsible dropdown menu component. When clicked, it reveals a list of options. It supports passing an array of <code>items</code> or generic React <code>children</code> for full customizability.'
    }, {
        title: 'Argument : selectedItem',
        propertyType: 'String | Array',
        required: true,
        description: 'The current item selected. If it\'s an array (for multiSelect), it displays the last element.'
    }, {
        title: 'Argument : items',
        propertyType: 'Array',
        required: true,
        description: 'Array of strings or object definitions to populate the menu. Used if <code>children</code> is not provided.'
    }, {
        title: 'Argument : multiSelect',
        propertyType: 'Boolean',
        description: 'If true, the dropdown menu will not close when an item is selected.'
    }, {
        title: 'Argument : onSelectionChange',
        propertyType: 'Function',
        required: true,
        description: 'Callback triggered when an item is clicked. It passes back the <code>event</code> object containing the selected value.'
    }, {
        title: 'Argument : styles',
        propertyType: 'object',
        description: 'Custom tailwind style overrides for the dropdown container.'
    }]
    
    return (
        <div className="mb-[2rem] pb-[1rem] border-b-[1px] border-b-[#ADADAF]">            
            <div className="p-[1.5rem] bg-[#1B1B1D] rounded-[8px] mb-[2rem] max-w-[400px]">
                <DropdownMenu 
                    selectedItem={selected} 
                    items={menuItems}
                    onSelectionChange={handleSelect}
                    styles={{ }} 
                />
            </div>
            
            <div className="text-[#cbd5e1]">
                {dropdownComponentProperties.map((dropdownDetails) =>
                    <ComponentArgumentDisplay
                        propertyTitle={dropdownDetails.title}
                        propertyType={null || dropdownDetails?.propertyType}
                        propertyRequired={null || dropdownDetails?.required}
                    >
                        {dropdownDetails.description}
                    </ComponentArgumentDisplay>
                )}

                <h3 className="text-[#769cca] text-[1.25rem] mt-[1.5rem] mb-[0.5rem]">Reference :</h3>
                <div className="pl-[1.5rem] text-[0.9rem] text-[#e2e8f0] leading-[1.6] font-mono bg-[rgb(47, 47, 68)] p-[1rem] rounded-[5px]">
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