<script>
    import { showNav, toggleSections } from "./toggles";
    // layout
    import Hero from "./components/layout/Hero.svelte";
    import Navigation from "./components/layout/Navigation.svelte";
    import Footer from "./components/layout/Footer.svelte";
    // sections
    import SaveTheDate from "./components/sections/SaveTheDate.svelte";
    import OurStory from "./components/sections/OurStory.svelte";
    import Events from "./components/sections/Events.svelte";
    import Photos from "./components/sections/Photos.svelte";
    import QAndA from "./components/sections/QAndA.svelte";
    import Travel from "./components/sections/Travel.svelte";
    import Activities from "./components/sections/Activities.svelte";
    import Registry from "./components/sections/Registry.svelte";
    import Rsvp from "./components/sections/Rsvp.svelte";
</script>

{#if showNav}
    <Navigation />
{/if}
<Hero />
{#if toggleSections.saveTheDate}
    <SaveTheDate />
{/if}
{#if toggleSections.story}
    <OurStory />
{/if}
{#if toggleSections.events}
     <Events />
{/if}
{#if toggleSections.photos}
    <Photos />
{/if}
{#if toggleSections.qanda}
    <QAndA />
{/if}
{#if toggleSections.travel}
    <Travel />
{/if}
{#if toggleSections.activities}
    <Activities />
{/if}
{#if toggleSections.registry}
    <Registry />
{/if}
{#if toggleSections.rsvp}
    <Rsvp />
{/if}
<Footer />

<style global lang="postcss">
    @import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>
