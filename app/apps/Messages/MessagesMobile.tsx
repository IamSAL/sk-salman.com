/* eslint-disable react/no-array-index-key */
import { ArrowUpCircleFill, CameraFill } from 'framework7-icons/react';
import {
    Icon,
    Link,
    Message,
    Messagebar,
    Messages,
    MessagesTitle,
    Navbar,
    NavbarBackLink,
    Page,
} from 'konsta/react';

import { useEffect, useRef, useState } from 'react';
import { MdCameraAlt, MdSend } from 'react-icons/md';
import { useAppContext } from 'app/components/app-window/appContext';

export default function MessagesMobile() {
    const isPreview = document.location.href.includes('examplePreview');
    const [messageText, setMessageText] = useState('');
    const { onTerminate } = useAppContext()
    const { app } = useAppContext()
    const [messagesData, setMessagesData] = useState([

        {
            name: 'Salman',
            type: 'received',
            text: 'Hi, Thanks for the visiting the website. Do you have any feedbacks or suggestions?',
            avatar: 'https://0.gravatar.com/avatar/8e89dc03190bc26af085c6d7a22c8ac992a15ecad4bac599138d8cdf5b2f6992?size=256',
        },


        {
            type: 'sent',
            text: 'How do you feel about going to the movies today?',
        },

    ]);

    const pageRef = useRef<any>(null)
    const initiallyScrolled = useRef(false);

    const scrollToBottom = () => {
        const pageElement = pageRef.current.current || pageRef.current.el;
        pageElement.scrollTo({
            top: pageElement.scrollHeight - pageElement.offsetHeight,
            behavior: initiallyScrolled.current ? 'smooth' : 'auto',
        });
    };

    useEffect(() => {
        scrollToBottom();
        initiallyScrolled.current = true;
    }, [messagesData]);

    const handleSendClick = () => {
        const text = messageText.replace(/\n/g, '<br>').trim();
        const type = 'sent';
        const messagesToSend = [];
        if (text.length) {
            messagesToSend.push({
                text,
                type,
            });
        }
        if (messagesToSend.length === 0) {
            return;
        }
        setMessagesData([...messagesData, ...messagesToSend]);
        setMessageText('');
    };

    const inputOpacity = messageText ? 1 : 0.3;
    const isClickable = messageText.trim().length > 0;

    const currentDate = new Intl.DateTimeFormat('en-US', {
        weekday: 'long',
        month: 'short',
        day: 'numeric',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
    })
        .formatToParts(new Date())
        .map((part) => {
            if (['weekday', 'month', 'day'].includes(part.type)) {
                return <b key={part.type}>{part.value}</b>;
            }
            return part.value;
        });

    return (
        //@ts-ignore
        <Page className="ios:bg-white ios:dark:bg-black" ref={pageRef}>
            <Navbar
                title="Messages"
                left={!isPreview && <NavbarBackLink onClick={() => {
                    onTerminate()
                }} />}
            />
            <Messages>
                <MessagesTitle>{currentDate}</MessagesTitle>
                {messagesData.map((message, index) => (
                    <Message
                        key={index}
                        type={message.type}
                        name={message.name}
                        text={message.text}
                        avatar={
                            message.type === 'received' && (
                                <img
                                    alt="avatar"
                                    src={message.avatar}
                                    className="w-8 h-8 rounded-full"
                                />
                            )
                        }
                    />
                ))}
            </Messages>
            <Messagebar
                placeholder="Message"
                value={messageText}
                onInput={(e) => setMessageText(e.target.value)}
                left={
                    <Link onClick={() => console.log('click')} toolbar iconOnly>
                        <Icon
                            ios={<CameraFill className="w-7 h-7" />}
                            material={
                                <MdCameraAlt className="w-6 h-6 fill-black dark:fill-md-dark-on-surface" />
                            }
                        />
                    </Link>
                }
                right={
                    <Link
                        onClick={isClickable ? handleSendClick : undefined}
                        toolbar
                        style={{
                            opacity: inputOpacity,
                            cursor: isClickable ? 'pointer' : 'default',
                        }}
                    >
                        <Icon
                            ios={<ArrowUpCircleFill className="w-7 h-7" />}
                            material={
                                <MdSend className="w-6 h-6 fill-black dark:fill-md-dark-on-surface" />
                            }
                        />
                    </Link>
                }
            />
        </Page>
    );
}

MessagesMobile.displayName = 'MessagesMobile';