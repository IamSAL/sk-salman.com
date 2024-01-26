"use client"
import {
    List,
    ListGroup,
    ListItem,
    Navbar,
    NavbarBackLink,
    Page,
} from 'konsta/react';
import React from 'react';

import { useAppContext } from 'app/components/app-window/appContext';

//TODO: Embed hasnode react tw template
const BlogMobile = () => {
    const isPreview = document.location.href.includes('examplePreview');
    const { onTerminate } = useAppContext()
    return (
        <div className='bg-black'>
            <Navbar

                title="Salman's Blog"

                left={!isPreview && <NavbarBackLink onClick={() => {
                    onTerminate()
                }} />}
            ></Navbar>
            <iframe width="360" height="515" src="https://www.youtube.com/embed/d-Eq6x1yssU?si=G-cfXpWM858NHa-q" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />

        </div>
    );
}

export default BlogMobile