<script>
    import { scrollTo } from "svelte-scrolling";
    export let ref;
    export let label;
</script>

<li>
    <!-- svelte-ignore a11y-missing-attribute -->
    <a class="hover:cursor-pointer" use:scrollTo={ref}>{label}</a>
</li>
