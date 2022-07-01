<script>
    import PageSection from "../layout/PageSection.svelte";
    import EventsItem from "../elements/EventsItem.svelte";

    const events = [
        {
            title: "Ceremony",
            time: "4:00 PM",
            description: "Seating begins ten minutes prior",
        },
        {
            title: "Cocktail Hour",
            time: "5:00 PM",
            description: "Featuring music by the yadda yadda Jazz Trio",
        },
        {
            title: "Dinner",
            time: "6:30 PM",
            description: "Catered by Hoffman House of Rockford, IL",
        },
        {
            title: "Send-off",
            time: "9:00 PM",
            description: "Our grand exit in a shower of sparklers",
        },
    ];

    function rowClasses() {
        let classes = `grid-rows-${events.length}`;

        let twoCols = Math.floor(events.length / 2);
        if ((events.length / 2) > twoCols) {
            twoCols++;
        }

        classes = `${classes} md:grid-rows-${twoCols}`;

        return classes;
    }

    const leftColClasses =
        "mx-auto md:ml-auto md:mr-0 md:border-r md:border-opacity-50 md:border-lavender text-center md:text-right";
    const rightColClasses = "mx-auto md:mr-auto md:ml-0 text-center md:text-left";
</script>

<PageSection title="Events" ref="events" lg image>
    <div class="grid {rowClasses()} grid-flow-col">
        {#each events as e, i}
            <div
                class="mx-auto {i < events.length / 2 ? leftColClasses : rightColClasses}"
            >
                <EventsItem {...e} />
            </div>
        {/each}
    </div>
</PageSection>
