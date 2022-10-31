import Header from './components/sections/Header.astro';
import Technology1 from './components/sections/Technology1.astro';
import Technology2 from './components/sections/Technology2.astro';
import Technology3 from './components/sections/Technology3.astro';
import Technology4 from './components/sections/Technology4.astro';
import Join from './components/sections/Join.astro';
import CompanyInfo from './components/sections/CompanyInfo.astro';
import PastProjects from './components/sections/PastProjects.astro';

export type SectionsType = {
    id: string,
} & (
        { component: typeof Header; children?: never; }
        | { children: SectionsType[]; component?: never; }
    )

export const Sections: SectionsType[] = [
    {
        id: 'Overview',
        component: Header
    },
    {
        id: 'Technology',
        children: [
            {
                id: 'Language',
                component: Technology1
            },
            {
                id: 'Framework',
                component: Technology2
            },
            {
                id: 'Services',
                component: Technology3
            },
            {
                id: 'Platform',
                component: Technology4
            }
        ]
    },
    {
        id: 'Work',
        children: [
            {
                id: 'Join SOUTHWORKS',
                component: Join
            },
            {
                id: 'CompanyInfo',
                component: CompanyInfo
            },
            {
                id: 'Past Projects',
                component: PastProjects
            }
        ]
    }

];
