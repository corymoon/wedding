<script>
    export let icon;
    // export let className = undefined;
    let className;
    export { className as class };

    $: classes =
        className == undefined
            ? "material-symbols-rounded"
            : `${className} material-symbols-rounded`;
</script>

<span class={classes}>{icon}</span>
