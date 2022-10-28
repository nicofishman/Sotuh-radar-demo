import SectionA from './components/sections/SectionA.astro';
import SectionB from './components/sections/SectionB.astro';
import PokeSection from './components/sections/PokeSection.astro';

export const Sections: {
    [key: string]: typeof SectionA;
} = {
    A: SectionA,
    Poke: PokeSection,
    B: SectionB
};
