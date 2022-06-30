<script>
    export let id;
    export let title;
    export let closeLabel = "Close";
</script>

<label for={id} class="text-lavender-700 cursor-pointer"><slot /></label>
<!-- Put this part before </body> tag -->
<input type="checkbox" {id} class="modal-toggle" />
<div class="modal modal-bottom sm:modal-middle bg-lavender bg-opacity-50">
    <div class="modal-box">
        <h3 class="font-bold text-lg">{title}</h3>
        <slot />
        <div class="modal-action">
            <label
                for={id}
                class="btn rounded-full hover:bg-lavender hover:text-white"
                >{closeLabel}</label
            >
        </div>
    </div>
</div>
