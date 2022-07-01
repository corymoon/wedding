<script>
    import { navFixed, toggleSections, canRsvp } from "../../toggles";
    import { scrollTo, scrollTop } from "svelte-scrolling";

    import Menu from "../elements/icons/Menu.svelte";
    import NavItemLink from "../elements/NavItemLink.svelte";

    let items = [
        // our story
        {
            label: "Our Story",
            href: "#our-story",
            display: toggleSections.story,
        },
        // events
        {
            label: "Events",
            href: "#events",
            display: toggleSections.events,
        },
        // photos
        {
            label: "Photos",
            href: "#photos",
            display: toggleSections.photos,
        },
        // q & a
        {
            label: "Q + A",
            href: "#qa",
            display: toggleSections.qanda,
        },
        // travel
        {
            label: "Travel",
            href: "#travel",
            display: toggleSections.travel,
        },
        // things to do
        {
            label: "Things to Do",
            href: "#activities",
            display: toggleSections.activities,
        },
        // registry
        {
            label: "Registry",
            href: "#registry",
            display: toggleSections.registry,
        },
    ];

    function buttonText() {
        if (canRsvp) {
            return 'RSVP';
        } else {
            return 'Stay Updated';
        }
    }
</script>

<div class="navbar bg-base-100 {navFixed ? 'fixed mt-0 z-50 top-0' : ''}">
    <div class="navbar-start">
        {#if items.filter((e) => e.display).length != 0}
            <div class="dropdown">
                <!-- svelte-ignore a11y-label-has-associated-control -->
                <label tabindex="0" class="btn btn-ghost lg:hidden">
                    <Menu />
                </label>
                <ul
                    tabindex="0"
                    class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                >
                    {#each items as { label, href, display }}
                        {#if display}
                            <NavItemLink {label} ref={href} />
                        {/if}
                    {/each}
                </ul>
            </div>
        {/if}

        <!-- svelte-ignore a11y-missing-attribute -->
        <a on:click={() => scrollTop()} class="btn btn-ghost rounded-full opacity-70">
            <div class="rounded-full w-8">
                <img src="/moon.png" alt="Nav Logo" />
            </div>
        </a>
    </div>
    <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal p-0">
            {#each items as { label, href, display }}
                {#if display}
                    <NavItemLink {label} ref={href} />
                {/if}
            {/each}
        </ul>
    </div>
    <div class="navbar-end text-right">
        <!-- svelte-ignore a11y-missing-attribute -->
        {#if toggleSections.rsvp}
            <button
                class="btn font-serif btn-primary text-white rounded-full"
                use:scrollTo={"rsvp"}>{buttonText()}</button
            >
        {/if}
    </div>
</div>

<style>
    .text-white {
        color: #FFFFFF;
    }
</style>
