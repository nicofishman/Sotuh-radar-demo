import Fireteams from './components/sections/Fireteams.astro';
import Header from './components/sections/Header.astro';
import Hours from './components/sections/Hours.astro';
import MoreAbout from './components/sections/MoreAbout.astro';
import People from './components/sections/People.astro';
import Insights from './components/sections/Insights.astro';
import Radar from './components/sections/Radar.astro';

export type SectionsType = {
    id: string,
} & (
        { component: typeof Header; children?: never; }
        | { children: SectionsType[]; component?: never; }
    )

export const Sections: SectionsType[] = [
    {
        id: '',
        component: Header
    },
    {
        id: 'Radar',
        component: Radar
    },
    {
        id: 'Insights',
        component: Insights
        // children: [
        //     {
        //         id: 'Fireteams',
        //         component: Fireteams
        //     },
        //     {
        //         id: 'People',
        //         component: People
        //     },
        //     {
        //         id: 'Hours',
        //         component: Hours
        //     }
        // ]
    },
    {
        id: 'More about SOUTHWORKS',
        component: MoreAbout
    }

];
