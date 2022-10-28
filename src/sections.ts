import SectionA from './components/sections/SectionA.astro';
import SectionB from './components/sections/SectionB.astro';
// import SectionC from './components/sections/SectionC.astro';
import SectionD from './components/sections/SectionD.astro';
import PokeSection from './components/sections/PokeSection.astro';

export type SectionsType = {
    id: string,
} & (
        { component: typeof SectionA; children?: never; }
        | { children: SectionsType[]; component?: never; }
    )

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
                children: [
                    {
                        id: 'PokeSection2',
                        component: PokeSection
                    },
                    {
                        id: 'PokeSection3',
                        component: PokeSection
                    }
                ]
            },
            {
                id: 'Poke',
                component: PokeSection
            }
        ]
    }
];
