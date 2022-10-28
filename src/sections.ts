import SectionA from './components/sections/SectionA.astro';
import SectionB from './components/sections/SectionB.astro';
import SectionC from './components/sections/SectionC.astro';
import SectionD from './components/sections/SectionD.astro';
import PokeSection from './components/sections/PokeSection.astro';

export type SectionsType = {
    id: string,
    children?: SectionsType[]
    component?: typeof SectionA
}

export const Sections: SectionsType[] = [
    {
        id: 'A',
        component: SectionA
    },
    {
        id: 'D',
        component: SectionD
    },
    {
        id: 'B',
        component: SectionB
    },
    {
        id: 'SectionsTest',
        children: [
            {
                id: 'C',
                component: SectionC
            },
            {
                id: 'Poke',
                component: PokeSection
            }
        ]
    }
];
