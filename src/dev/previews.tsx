
import {ComponentPreview, Previews} from "@react-buddy/ide-toolbox";
import {PaletteTree} from "./palette";
import Root from "../Root";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/Root">
                <Root/>
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;