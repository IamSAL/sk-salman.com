"use client"
import { useParams } from 'next/navigation';
import React from 'react'
import AppWindowMobile from 'app/components/app-window/AppWindowMobile';
import { apps } from 'app/misc/placeholder-data/apps';

const MobileAppView = ({ }) => {
    const { appId } = useParams()
    const app = apps.find(app => app.id === Number(appId))
    return (
        <>
            {app && <AppWindowMobile key={app.id} app={app} />}
        </>
    )
}

export default MobileAppView;
