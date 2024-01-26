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

export default function ContactsMobile() {
    const isPreview = document.location.href.includes('examplePreview');
    const { onHide } = useAppContext()
    return (
        <Page>
            <Navbar

                title="Contacts List"

                left={!isPreview && <NavbarBackLink onClick={() => {
                    onHide()
                }} />}
            ></Navbar>
            <List strongIos>
                <ListGroup >
                    <ListItem title="A" groupTitle contacts />
                    <ListItem title="Aaron" contacts />
                    <ListItem title="Abbie" contacts />
                    <ListItem title="Adam" contacts />
                    <ListItem title="Adele" contacts />
                    <ListItem title="Agatha" contacts />
                    <ListItem title="Agnes" contacts />
                    <ListItem title="Albert" contacts />
                    <ListItem title="Alexander" contacts />
                </ListGroup>
                <ListGroup >
                    <ListItem title="B" groupTitle contacts />
                    <ListItem title="Bailey" contacts />
                    <ListItem title="Barclay" contacts />
                    <ListItem title="Bartolo" contacts />
                    <ListItem title="Bellamy" contacts />
                    <ListItem title="Belle" contacts />
                    <ListItem title="Benjamin" contacts />
                </ListGroup>
                <ListGroup >
                    <ListItem title="C" groupTitle contacts />
                    <ListItem title="Caiden" contacts />
                    <ListItem title="Calvin" contacts />
                    <ListItem title="Candy" contacts />
                    <ListItem title="Carl" contacts />
                    <ListItem title="Cherilyn" contacts />
                    <ListItem title="Chester" contacts />
                    <ListItem title="Chloe" contacts />
                </ListGroup>
                <ListGroup >
                    <ListItem title="V" groupTitle contacts />
                    <ListItem title="Vladimir" contacts />
                </ListGroup>
            </List>
        </Page>
    );
}
ContactsMobile.displayName = 'ContactsMobile';