<script>
    import { fade } from "svelte/transition";

    import SuccessCheck from "../elements/icons/SuccessCheck.svelte";
    import ErrorCross from "../elements/icons/ErrorCross.svelte";
    import FormField from "../elements/FormField.svelte";
    import GroupRadio from "../elements/GroupRadio.svelte";

    import { meals, lodging, rsvpUrl, guestMealsInitial } from "../../data";
    import { emailListSubmitIsDisabled } from "../../functions";

    let name = "";
    let email = "";
    let phone = "";
    let numGuests;
    let transportation = null;
    let guestMeals = guestMealsInitial;
    let submitting = false;
    let notificationMessage = null;
    let notificationClass = null;
    let showNotificationBox = false;

    const transportationModal = "transportation-info-modal";

    function showNotification(setClass, setMessage) {
        notificationMessage = setMessage;
        notificationClass = setClass;
        showNotificationBox = true;
    }

    function resetForm() {
        name = null;
        email = null;
        phone = null;
        numGuests = undefined;
        guestMeals = guestMealsInitial;
        transportation = null;
    }

    function submitRsvpForm() {
        submitting = true;
        const form = document.forms["submit-rsvp-to-google-sheet"];

        fetch(rsvpUrl, { method: "POST", body: new FormData(form) })
            .then((response) => {
                console.log("Success!", response);
                showNotification(
                    "alert-success",
                    "Thanks! We've recieved your RSVP information."
                );
                submitting = false;
                resetForm();
            })
            .catch((error) => {
                console.error("Error!", error.message);
                showNotification(
                    "alert-error",
                    "Hmm... Something went wrong. Try again later."
                );
                submitting = false;
                resetForm();
            });
    }

    $: submitIsDisabled =
        emailListSubmitIsDisabled(
            name,
            email,
            phone,
            numGuests,
            guestMeals,
            transportation
        ) || submitting;

    $: yesRadioLabel = `Yes, ${
        numGuests == 1 || numGuests == null ? "I'd" : "We'd"
    } love to use the provided transportation.`;
</script>

<form class="w-full max-w-lg mx-auto" name="submit-rsvp-to-google-sheet">
    <div class="flex flex-wrap -mx-3 mb-4">
        <FormField bind:data={name} label="Name" fieldType="text" />
        <FormField bind:data={email} label="Email" fieldType="text" />
    </div>
    <div class="flex flex-wrap -mx-3 mb-4">
        <FormField bind:data={phone} label="Phone" fieldType="text" />
        <FormField
            bind:data={numGuests}
            label="Guests"
            fieldType="number"
            max="6"
        />
    </div>
    <!-- transportation -->
    <p class="text-center mb-6">
        Please indicate if you intend to use the complimentary shuttle service
        between our wedding hotels and Oak Hill Farm. For more information,
        <label
            for={transportationModal}
            class="text-lavender-700 cursor-pointer">click here</label
        >.
    </p>
    <!-- transportation radios -->
    <div class="flex flex-wrap -mx-3 mb-4 justify-center">
        <div class="w-full px-3">
            <GroupRadio
                bind:group={transportation}
                name="Transportation"
                value="Yes"
                label={yesRadioLabel}
            />
            <GroupRadio
                bind:group={transportation}
                name="Transportation"
                value="No"
                label="No, thanks."
            />
        </div>
    </div>
    <!-- guest meals -->
    {#if numGuests != undefined}
        <p class="text-center font-semibold font-serif text-lg mb-8">
            Your Party
        </p>
        {#each Array(numGuests) as _, index}
            <div class="flex flex-wrap -mx-3 mb-4">
                <FormField
                    bind:data={guestMeals[index]["name"]}
                    label="Guest {index + 1} name"
                    fieldType="text"
                />
                <FormField
                    fieldType="select"
                    bind:data={guestMeals[index]["meal"]}
                    label="Guest {index + 1} meal"
                >
                    {#each meals as meal}
                        <option value={meal}>{meal}</option>
                    {/each}
                </FormField>
            </div>
        {/each}
    {/if}
    <button
        class="btn btn-success rounded-full w-full text-white"
        class:loading={submitting}
        disabled={submitIsDisabled}
        on:click|preventDefault={submitRsvpForm}>Submit</button
    >
    {#if showNotificationBox}
        <div transition:fade class="alert {notificationClass} shadow-lg mt-8">
            <div>
                {#if notificationClass == "alert-success"}
                    <SuccessCheck />
                {:else}
                    <ErrorCross />
                {/if}
                <span>{notificationMessage}</span>
            </div>
            <div class="flex-none">
                <button
                    class="btn btn-sm btn-ghost"
                    on:click|preventDefault={() =>
                        (showNotificationBox = false)}>Close</button
                >
            </div>
        </div>
    {/if}
</form>

<!-- Transportation modal -->
<input type="checkbox" id={transportationModal} class="modal-toggle" />
<div class="modal modal-bottom sm:modal-middle bg-lavender bg-opacity-50">
    <div class="modal-box">
        <h3 class="font-bold text-lg">Transportation</h3>
        <p class="py-4">
            Transportation will be provided for all to the ceremony and
            reception at Oak Hill Farm on Sunday, October 8th. No hotel stay
            required for transportation. It departs from {lodging.length == 1
                ? "this"
                : "these"}
            {lodging.length}
            {lodging.length == 1 ? "location" : "locations"}:
        </p>
        <ul>
            {#each lodging as l}
                <li>{l.name}</li>
            {/each}
        </ul>
        <div class="modal-action">
            <label
                for={transportationModal}
                class="btn rounded-full hover:bg-lavender hover:text-white"
                >Close</label
            >
        </div>
    </div>
</div>
