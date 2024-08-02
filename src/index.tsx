import ReactDOM from 'react-dom/client';
import Root from './Root';
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "./dev";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(<DevSupport ComponentPreviews={ComponentPreviews}
                        useInitialHook={useInitial}
>
    <Root/>
</DevSupport>);

export {};