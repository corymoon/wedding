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
                    <span class="text-xl -mb-1">&uarr;</span>
                </button>
            </p>
        {/if}
        <p class="font-light text-lg py-10">
            Crafted by Cory with lots of <span class="inline-block pulse"
                >❤️</span
            > for Joni
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
