<script>
    import { scrollRef } from "svelte-scrolling";
    import { showIndicators } from "../../toggles";
    let photos = [
        // "/photos/001.jpeg",
        // "/photos/002.jpeg",
        "/photos/003.jpg",
        "/photos/004.jpg",
        "/photos/005.jpeg",
        "/photos/006.jpeg",
        "/photos/007.png",
        "/photos/008.jpeg",
        "/photos/009.png",
    ];
</script>

<div class="carousel carousel-center w-full" use:scrollRef={"photos"}>
    {#each photos as photo, index}
        <div id="wedding-photo-{index}" class="carousel-item">
            <img
                src={photo}
                class="w-full max-h-[400px] md:max-h-[600px] lg:max-h-[80vh]"
                alt="Photo #{index}"
            />
        </div>
    {/each}
</div>
{#if showIndicators}
    <div class="flex justify-center w-full py-2 gap-2">
        {#each photos as _, index}
            <a
                href="#wedding-photo-{index}"
                class="btn btn-xs btn-circle hover:btn-primary hover:text-white btn-primary bg-opacity-30"
                >{index + 1}</a
            >
        {/each}
    </div>
{/if}
