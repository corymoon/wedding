<script>
    import { scrollTop } from "svelte-scrolling";
    import MaterialIcon from "../elements/MaterialIcon.svelte";
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
                    <MaterialIcon
                        icon="expand_less"
                        class="hover:text-primary-focus"
                    />
                </button>
            </p>
        {/if}
        <p class="font-light text-lg py-10">
            <span class="inline-block align-text-bottom"
                >Crafted by Cory with lots of</span
            >
            <!-- <span class="inline-block material-symbols-rounded text-raspberry-800 pulse"
                >favorite</span
            > -->
            <MaterialIcon
                icon="favorite"
                class="block pulse text-raspberry-800"
            /> <span class="inline-block align-text-bottom">for Joni</span>
        </p>
    </div>
</footer>

<style>
</style>
