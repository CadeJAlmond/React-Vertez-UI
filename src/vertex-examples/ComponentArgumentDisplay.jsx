import { vertexThemeBG, vertexThemeColors, vertexThemeText } from '../VertexStyles';

export default function ComponentArgumentDisplay({ propertyTitle, propertyDescription, propertyType, propertyRequired, children }) {
    const propertyTitleStyling = [
        vertexThemeText.textPrimary,
        "text-[1.1rem]", 
        "mt-[1.5rem]", 
        "mb-[0.5rem]", 
        "border-b-[2px]", 
        "w-[320px]"
    ].join(" ");

    const propertyDescriptionStyling = [
        vertexThemeText.textSecondary,
        "pl-[1.5rem]",
        "text-[1rem]",
        "leading-[1.5]",
        "w-[60%]"
    ].join(" ");

    const propertyRequiredStyling = [
        vertexThemeText.danger,
        "text-[22px]",
        "mr-[15px]",
        "translate-y-[15px]"
    ].join(" ");

    return (
        <>
            <h3 className={propertyTitleStyling}>
                { propertyRequired && <span className={propertyRequiredStyling}>*</span>}
                { propertyTitle }
            </h3>
            <p className={propertyDescriptionStyling}>
                { propertyType && <><strong>Type:</strong> <code>{propertyType}</code><br/></> }
                { children }
            </p>
        </>
    )
}
