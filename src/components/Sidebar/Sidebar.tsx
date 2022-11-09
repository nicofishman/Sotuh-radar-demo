import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import clsx from 'clsx';
import React, { FC, PropsWithChildren, ReactNode } from 'react';

import { Sections } from '../../sections';

import SidebarGenerator from './SidebarGenerator';

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = () => {
    return (
        <Accordion.Root
            type="single"
            className="bg-navbar bg-card-gradient fixed right-0 top-0 h-screen max-w-[400px] w-1/3 md:block hidden"
        >
            {/* {Sections.map((s) => (
                <SidebarGenerator section={s} />
            ))} */}
            <Accordion.Item className="AccordionItem" value="item-1">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
            </Accordion.Item>
        </Accordion.Root>
    );
};

export default Sidebar;

const AccordionTrigger = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
    <Accordion.Header className="AccordionHeader">
        <Accordion.Trigger
            className={clsx('AccordionTrigger', className)}
            {...props}
            ref={forwardedRef}
        >
            {children}
            <ChevronDownIcon className="AccordionChevron" aria-hidden />
        </Accordion.Trigger>
    </Accordion.Header>
));

const AccordionContent = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
    <Accordion.Content className={clsx('flex', className)} {...props} ref={forwardedRef}>
        <div className="AccordionContentText">{children}</div>
    </Accordion.Content>
));
