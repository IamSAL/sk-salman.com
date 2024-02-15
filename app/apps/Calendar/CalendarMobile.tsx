
import {
    Navbar,
    NavbarBackLink,
    Page,
} from 'konsta/react';
import React from 'react';
import { useAppContext } from 'app/components/app-window/appContext';

import Calendly from './Calendly';



export default function CalendarMobile() {
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
            <div className="w-full h-full">
                <Calendly />
            </div>
        </Page>
    );
}


