import {
    List,
    ListGroup,
    ListItem,
    Navbar,
    NavbarBackLink,
    Page,
} from 'konsta/react';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useAppContext } from '../app-window/appContext';

export default function ComponentMobileTemp() {
    const isPreview = document.location.href.includes('examplePreview');
    const router = useRouter()
    const { app } = useAppContext()
    return (
        <Page>
            <Navbar
                title={app?.name}
                left={!isPreview && <NavbarBackLink onClick={() => {
                    router.back()
                }} />}
            />
            <div className="flex justify-center items-center w-full h-full">
                <h3 className=''>Coming soon</h3>
            </div>
        </Page>
    );
}
ComponentMobileTemp.displayName = 'ComponentMobileTemp';