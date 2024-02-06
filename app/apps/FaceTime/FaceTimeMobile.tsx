import {
    Navbar,
    NavbarBackLink,
    Page,
} from 'konsta/react';
import React from 'react';
import { useAppContext } from 'app/components/app-window/appContext';
import FaceTimeBody from './FaceTimeBody';


export default function FaceTimeMobile() {
    const isPreview = document.location.href.includes('examplePreview');
    const { onTerminate } = useAppContext()
    const { app } = useAppContext()
    return (
        <Page>
            <Navbar
                title={app?.name}
                left={!isPreview && <NavbarBackLink onClick={() => {
                    onTerminate()
                }} />}
            />
            <div className="flex justify-center items-center w-full h-full">
                <FaceTimeBody />
            </div>
        </Page>
    );
}
FaceTimeMobile.displayName = 'ComponentMobileTemp';