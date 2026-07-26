import React, { useState } from 'react';
import Button from '../vertez/Button';
import ComponentArgumentDisplay from './ComponentArgumentDisplay';
import { vertexThemeBG, vertexThemeColors } from '../VertexStyles';

export default function ButtonExample() {
    const [numberCount, setNumberCount] = useState(0)

    const buttonComponentProperties = [{
        title: 'Description :',
        description: 'A customizable button element that comes with predefined styling. It accepts children for the label, an onClick handler, and custom styles to override or extend the default tailwind classes.'
    }, {
        title: 'Argument : children',
        propertyType: 'React.JSX',
        required: true,
        description: 'The content/text to use for the button.'
    }, {
        title: 'Argument : onClick',
        required: true,
        propertyType: 'function',
        description: 'A callback function invoked when the button is clicked.'
    }, {
        title: 'Argument : styles',
        propertyType: 'object',
        description: <>Custom tailwind style overrides (e.g., <code>{`{ bg: "bg-[#CCFF00]", text: "text-black" }`}</code>).</>
    }]
    
    return (
        <div className="mb-[2rem] pb-[1rem] border-b-[1px] border-b-[#ADADAF]">            
            <div className="p-[1.5rem] bg-[#1B1B1D] rounded-[8px] mb-[2rem] flex gap-[1rem]">
                <Button onClick={() => setNumberCount( numberCount + 1 )}>
                    Increase Count
                </Button>
                <Button onClick={() => setNumberCount( numberCount - 1 )} styles={{ bg: vertexThemeBG.btnSecondary, bgHover: vertexThemeBG.btnSecondaryHover }}>
                    Decrease Count
                </Button>
            </div>
            
            <div className="text-[#cbd5e1]">
                <h3 className="text-[#769cca] text-[1.25rem] mt-[1.5rem] mb-[0.5rem]">Button Count : { numberCount }</h3>
            </div>

            <div className="text-[#cbd5e1]">
                {buttonComponentProperties.map((buttonDetails) => 
                    <ComponentArgumentDisplay propertyTitle={buttonDetails.title} propertyType={null || buttonDetails?.propertyType} propertyRequired={null || buttonDetails?.required}>
                        {buttonDetails.description}
                    </ComponentArgumentDisplay>
                )}

                <h3 className="text-[#769cca] text-[1.25rem] mt-[1.5rem] mb-[0.5rem]">Reference :</h3>
                <div className="pl-[1.5rem] text-[0.9rem] text-[#e2e8f0] leading-[1.6] font-mono bg-[rgb(47, 47, 68)] p-[1rem] rounded-[5px]">
{`<Button
    onClick={handleSubmitForm}
    styles={primaryButtonStyles}
>
    Submit Order
</Button>`}
                </div>
            </div>
        </div>
    );
}
