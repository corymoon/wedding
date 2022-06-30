<script>
    import { fade } from "svelte/transition";

    import SuccessCheck from "../elements/icons/SuccessCheck.svelte";
    import ErrorCross from "../elements/icons/ErrorCross.svelte";

    import { formInputClasses, formLabelClasses } from "../../classes";
    import { meals, lodging } from "../../data";

    let guestMealsInitial = [
        { name: null, meal: null },
        { name: null, meal: null },
        { name: null, meal: null },
        { name: null, meal: null },
        { name: null, meal: null },
        { name: null, meal: null },
    ];

    let name = "";
    let email = "";
    let phone = "";
    let numGuests;
    let transportation = null;
    let guestMeals = [
        { name: null, meal: null },
        { name: null, meal: null },
        { name: null, meal: null },
        { name: null, meal: null },
        { name: null, meal: null },
        { name: null, meal: null },
    ];
    let submitting = false;
    let notificationMessage = null;
    let notificationClass = null;
    let showNotificationBox = false;

    const transportationModal = "transportation-info-modal";

    // update array based on number of guests selected
    // $: {
    //     let newObj = { name: null, meal: null };
    //     if (guestMeals.length != numGuests) {
    //         if (guestMeals.length < numGuests) {
    //             guestMeals.push(newObj);
    //         } else {
    //             guestMeals.splice(numGuests, 1);
    //         }
    //     }

    //     // guestMeals = [];
    //     // for (let n = 0; guestMeals.length < numGuests; n++) {
    //     //     guestMeals.push(newObj);
    //     // }
    // }

    let rsvpUrl =
        "https://script.google.com/macros/s/AKfycbzShgnqLPkKfJ-TCxgthCq2k-96J3ADIJcFQYoaIHaSwNRxgVnhEu1MHBHdjI8Xegqy/exec";

    function closeNotification() {
        showNotificationBox = false;
    }

    function resetForm() {
        name = null;
        email = null;
        phone = null;
        numGuests = undefined;
        guestMeals = guestMealsInitial;
        transportation = null;
    }

    function showNotification(setClass, setMessage) {
        notificationMessage = setMessage;
        notificationClass = setClass;
        showNotificationBox = true;
    }

    function emailListSubmitIsDisabled(
        name,
        email,
        phone,
        numGuests,
        guestMeals,
        transportation
    ) {
        let arrayHasNull = false;
        for (let i = 0; i < numGuests; i++) {
            if (guestMeals[i].name == null || guestMeals[i].meal == null) {
                arrayHasNull = true;
            }
        }

        let n = name == "" || name == null;
        let e = email == "" || email == null;
        let p = phone == "" || phone == null;
        let g = numGuests < 1 || numGuests == undefined;
        let t = transportation == null;
        if (n || e || p || g || t || arrayHasNull) {
            return true;
        } else {
            return false;
        }
    }

    function submitEmailListForm() {
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
</script>

<form class="w-full max-w-lg mx-auto" name="submit-rsvp-to-google-sheet">
    <div class="flex flex-wrap -mx-3 mb-4">
        <!-- name -->
        <div class="w-full md:w-1/2 px-3">
            <label class={formLabelClasses} for="Name"> Name </label>
            <input
                bind:value={name}
                class={formInputClasses}
                on:input={(e) => (name = e.target.value)}
                type="text"
                placeholder="Name"
                name="Name"
            />
        </div>
        <!-- email -->
        <div class="w-full md:w-1/2 px-3">
            <label class={formLabelClasses} for="Email"> Email </label>
            <input
                bind:value={email}
                class={formInputClasses}
                id="email-input"
                type="text"
                placeholder="Email"
                name="Email"
            />
        </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-4">
        <!-- phone -->
        <div class="w-full md:w-1/2 px-3">
            <label class={formLabelClasses} for="Phone"> Phone </label>
            <input
                bind:value={phone}
                class={formInputClasses}
                type="text"
                placeholder="Phone"
                name="Phone"
            />
        </div>
        <!-- guests -->
        <div class="w-full md:w-1/2 px-3">
            <label class={formLabelClasses} for="Phone">Guests</label>
            <input
                bind:value={numGuests}
                class={formInputClasses}
                type="number"
                placeholder="Guests"
                name="Guests"
                min="1"
                max="6"
            />
        </div>
    </div>
    <!-- transportation -->
    <!-- svelte-ignore a11y-missing-attribute -->
    <p class="text-center mb-6">
        Please indicate if you intend to use the complimentary shuttle service
        between our wedding hotels and Oak Hill Farm. For more information, <a
            class="text-lavender-700 cursor-pointer"
            on:click={() => alert("open modal")}>click here</a
        >.
        <label
            for={transportationModal}
            class="text-lavender-700 cursor-pointer">open modal</label
        >
    </p>
    <!-- transportation radios -->
    <div class="flex flex-wrap -mx-3 mb-4 justify-center">
        <div class="w-full px-3">
            <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text"
                        >Yes, {numGuests == 1 || numGuests == null
                            ? "I'd"
                            : "We'd"} love to use the provided transportation.</span
                    >
                    <input
                        type="radio"
                        name="Transportation"
                        class="radio radio-primary"
                        bind:group={transportation}
                        value={"Yes"}
                    />
                </label>
            </div>
            <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">No, thanks. </span>
                    <input
                        type="radio"
                        name="Transportation"
                        class="radio radio-primary"
                        bind:group={transportation}
                        value={"No"}
                    />
                </label>
            </div>
        </div>
    </div>
    <!-- guest meals -->
    {#if numGuests != undefined}
        <p class="text-center font-semibold font-serif text-lg mb-8">
            Your Party
        </p>
        {#each Array(numGuests) as _, index}
            <div class="flex flex-wrap -mx-3 mb-4">
                <div class="w-full md:w-1/2 px-3">
                    <label
                        class={formLabelClasses}
                        for="Guest {index + 1} name"
                    >
                        Guest {index + 1} name
                    </label>
                    <input
                        bind:value={guestMeals[index]["name"]}
                        class={formInputClasses}
                        type="text"
                        placeholder="Guest {index + 1} name"
                        name="Guest {index + 1} name"
                    />
                </div>
                <div class="w-full md:w-1/2 px-3">
                    <label
                        class={formLabelClasses}
                        for="Guest {index + 1} meal"
                    >
                        Guest {index + 1} meal
                    </label>
                    <select
                        name="Guest {index + 1} meal"
                        class="select {formInputClasses}"
                        bind:value={guestMeals[index]["meal"]}
                    >
                        <option disabled selected
                            >Select guest {index + 1} meal</option
                        >
                        {#each meals as meal}
                            <!-- content here -->
                            <option value={meal}>{meal}</option>
                        {/each}
                    </select>
                    <!-- <input
                        bind:value={guestMeals[index]["meal"]}
                        class={formInputClasses}
                        type="text"
                        placeholder="Guest {index + 1} meal"
                    /> -->
                </div>
            </div>
        {/each}
    {/if}
    <button
        class="btn btn-success rounded-full w-full text-white"
        class:loading={submitting}
        disabled={emailListSubmitIsDisabled(
            name,
            email,
            phone,
            numGuests,
            guestMeals,
            transportation
        ) || submitting}
        on:click|preventDefault={submitEmailListForm}>Submit</button
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
                    on:click|preventDefault={closeNotification}>Close</button
                >
            </div>
        </div>
    {/if}
</form>

<!-- Put this part before </body> tag -->
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

<style>
</style>
