<script>
    import { scrollTop } from "svelte-scrolling";
    let showToTop = true;
</script>

<footer
    class="footer footer-center p-10 text-primary-content bg-primary bg-opacity-20 border-t border-primary"
>
    <div>
        {#if showToTop}
            <p class="-mt-20">
                <button
                    class="btn btn-white border border-primary btn-circle hover:bg-white hover:border-primary-focus"
                    on:click={() => scrollTop()}
                >
                    <span
                        class="material-symbols-rounded hover:text-primary-focus"
                        >expand_less</span
                    >
                </button>
            </p>
        {/if}
        <p class="font-light text-lg py-10">
            <span class="inline-block align-text-bottom"
                >Crafted by Cory with lots of</span
            >
            <span class="inline-block material-symbols-rounded text-raspberry-800 pulse"
                >favorite</span
            > <span class="inline-block align-text-bottom">for Joni</span>
        </p>
    </div>
</footer>

<style>
    .pulse {
        animation-name: pulse;
        animation-duration: 1s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
    }

    @keyframes pulse {
        0% {
            transform: scale(1.1);
        }
        50% {
            transform: scale(0.8);
        }
        100% {
            transform: scale(1);
        }
    }
</style>
