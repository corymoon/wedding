<script>
    export let fieldType = "text";
    export let data;
    export let label;
    export let min = 1;
    export let max = 6;

    import { formInputClasses, formLabelClasses } from "../../classes";
</script>

<div class="w-full md:w-1/2 px-3">
    {#if fieldType == "text"}
        <label class={formLabelClasses} for={label}>{label}</label>
        <input
            bind:value={data}
            class={formInputClasses}
            on:input={(e) => (data = e.target.value)}
            type="text"
            placeholder={label}
            name={label}
        />
    {/if}
    {#if fieldType == "number"}
        <label class={formLabelClasses} for="Phone">{label}</label>
        <input
            bind:value={data}
            class={formInputClasses}
            type="number"
            placeholder={label}
            name={label}
            {min}
            {max}
        />
    {/if}
    {#if fieldType == "select"}
        <label class={formLabelClasses} for={label}>
            {label}
        </label>
        <select
            name={label}
            class="select {formInputClasses}"
            bind:value={data}
        >
            <option disabled selected>Select {label}</option>
            <slot />
        </select>
    {/if}
</div>
