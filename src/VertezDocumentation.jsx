import React from 'react';
import { vertexThemeColors, vertexThemeText } from './VertexStyles';

// Import all example components
import FormExample from './vertex-examples/FormExample';
import ButtonExample from './vertex-examples/ButtonExample';
import CheckBoxExample from './vertex-examples/CheckBoxExample';
import DropdownMenuExample from './vertex-examples/DropdownMenuExample';
import DualInputExample from './vertex-examples/DualInputExample';
import GridExample from './vertex-examples/GridExample';
import InputExample from './vertex-examples/InputExample';
import SliderInputExample from './vertex-examples/SliderInputExample';
import AccordionExample from './vertex-examples/AccordionExample';
import Accordion from './vertez/Accordion';
import { applyCustomStyles } from './vertez/ApplyCustomStyles';

export default function VertezDocumentation() {
    const items = [{
        label: 'Custom Form',
        children: <FormExample/>,
    }, {
        label: 'Custom Button',
        children: <ButtonExample/>,
    }, {
        label: 'Custom CheckBox',
        children: <CheckBoxExample/>,
    },{
        label: 'Custom Dropdown Menu',
        children: <DropdownMenuExample/>,
    }, {
        label: 'Custom Dual Input',
        children: <DualInputExample/>,
    }, {
        label: 'Custom Grid Elements',
        children: <GridExample/>,
    }, {
        label: 'Custom Input',
        children: <InputExample/>,
    }, {
        label: 'Custom Slider',
        children: <SliderInputExample/>,
    }, {
        label: 'Custom Accordion',
        children: <AccordionExample/>,
    }]

    const titleStyling = [
        vertexThemeText.textPrimary,
        "text-[3rem]",
        "px-[4rem]",
        "border-b-[3px] border-b-[#fafafa]",
        "mb-[15px]"
    ].join(" ")

    return (
        <div className='min-h-[100vh] py-[2rem]'>
            <header className='mx-auto w-[650px] my-[4rem] text-center'>
                <h1 className={titleStyling}>VertezUI Documentation</h1>
                <p className="text-[#cbd5e1] text-[1.2rem]">
                    Interactive component library documentation
                </p>
            </header>

            <main className="flex flex-col gap-[2rem]">
                <Accordion items={items} styles={{gap: "gap-[10px]", p: "p-[20px]", text: "text-[22px]"}}/>
            </main>
        </div>
    );
}
