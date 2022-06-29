<script>
    import { scrollRef } from "svelte-scrolling";
    export /**
     * @type {string}
     */
    let ref;

    export /**
     * @type {string}
     */ let classes = "";

    export /**
     * @type {undefined | string}
     */
    let title = undefined;

    export /**
     * @type {boolean}
     */
    let md = false;

    export /**
     * @type {boolean}
     */
    let lg = false;

    export /**
     * @type {boolean}
     */
    let primary = false;

    export /**
     * @type {boolean}
     */
    let raspberry = false;

    export /**
     * @type {boolean}
     */
    let eucalyptus = false;

    export /**
     * @type {boolean}
     */
    let peach = false;

    export /**
     * @type {boolean}
     */
    let bordered = false;

    // md section
    // sm -> 3rem, 1.5rem  =  my-12 mx-6
    // lg -> 9rem, 4.5rem  =  lg:my-36 lg:mx-16

    // lg section
    // sm -> 3rem, 1.5rem  =  my-12 mx-6
    // lg -> 18rem, 6rem  = lg:my-24 lg:mx-72

    function marginClasses() {
        if (md) {
            return "py-12 px-6 lg:py-36 lg:px-16";
        }
        if (lg) {
            return "py-12 px-6 lg:py-24 lg:px-72";
        }
        return "";
    }
</script>

<section
    class="{classes} {marginClasses()}"
    use:scrollRef={ref}
    class:bg-primary={primary}
    class:bg-error={raspberry}
    class:bg-success={eucalyptus}
    class:bg-warning={peach}
    class:bg-opacity-20={primary || raspberry || eucalyptus || peach}
    class:border-y={bordered}
    class:border-primary={bordered && primary}
    class:border-error={bordered && raspberry}
    class:border-success={bordered && eucalyptus}
    class:border-warning={bordered && peach}
>
    {#if title != undefined}
        <h2 class="text-center text-3xl font-serif font-semibold mb-8">
            {title}
        </h2>
    {/if}
    <slot />
</section>
