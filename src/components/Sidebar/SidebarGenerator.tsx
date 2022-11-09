import type { SectionsType } from '../../sections';

import { FC } from 'react';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import clsx from 'clsx';
import * as Accordion from '@radix-ui/react-accordion';

interface SidebarGeneratorProps {
	section: SectionsType;
	level?: number;
}

const fontStyle: {
	[key: number]: {
		size: string;
		opacity: string;
	};
} = {
    0: {
        size: 'text-xl',
        opacity: 'text-opacity-100'
    },
    1: {
        size: 'text-lg',
        opacity: 'text-opacity-80'
    },
    2: {
        size: 'text-base',
        opacity: 'text-opacity-60'
    },
    3: {
        size: 'text-sm',
        opacity: 'text-opacity-40'
    },
    4: {
        size: 'text-xs',
        opacity: 'text-opacity-20'
    }
};

const SidebarGenerator: FC<SidebarGeneratorProps> = ({ section, level }) => {
    const stacked = level ?? 0;

    return (
        <>
            {'children' in section
                ? (
                    section.children && (
                        <Accordion.Item value={`acc-${section.id}`}>
                            <Accordion.Header className="flex flex-row px-4 py-3 mb-2 border-b-[1px] border-b-[#5adea6]/30">
                                <Accordion.Trigger
                                    className={clsx(
                                        'group',
                                        'radix-state-open:rounded-t-lg radix-state-closed:rounded-lg',
                                        'focus:outline-none',
                                        'inline-flex w-full items-center text-white text-left'
                                    )}
                                >
                                    <span
                                        className={clsx(
                                            'dark:text-gray-100',
                                            fontStyle[stacked].opacity,
                                            fontStyle[stacked].size
                                        )}
                                    >
                                        {section.id}
                                    </span>
                                    <ChevronDownIcon
                                        className={clsx(
                                            'ml-2 h-5 w-5 shrink-0 ease-in-out dark:text-gray-400',
                                            'group-radix-state-open:rotate-180 group-radix-state-open:duration-300'
                                        )}
                                    />
                                </Accordion.Trigger>
                            </Accordion.Header>
                            <Accordion.Content className="pt-r1 w-full rounded-b-lg bg-white px-4 pb-3 dark:bg-gray-800">
                                {section.children.map((child) => (
                                    <SidebarGenerator section={child} level={stacked + 1} />
                                ))}
                            </Accordion.Content>
                        </Accordion.Item>
                    )
                )
                : (
                    <div className="block px-4 py-3 mb-2 border-b-[1px] border-b-[#5adea6]/30">
                        <span
                            className={clsx(
                                'text-white',
                                fontStyle[stacked].size,
                                fontStyle[stacked].opacity
                            )}
                        >
                            {section.id}
                        </span>
                    </div>
                )}
        </>
    );
};

export default SidebarGenerator;
