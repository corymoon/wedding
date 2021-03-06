<script>
    import FormField from "../elements/FormField.svelte";
    import GroupRadio from "../elements/GroupRadio.svelte";
    import Alert from "../elements/Alert.svelte";
    import FormButton from "../elements/FormButton.svelte";
    import GuestMealInput from "../elements/GuestMealInput.svelte";

    import { lodging, rsvpUrl, guestMealsInitial } from "../../data";
    import { rsvpSubmitIsDisabled } from "../../functions";

    let name = "";
    let email = "";
    let phone = "";
    let numGuests;
    let transportation = null;
    let guestMeals = guestMealsInitial;
    let loading = false;
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

    function click() {
        loading = true;
        const form = document.forms["submit-rsvp-to-google-sheet"];

        fetch(rsvpUrl, { method: "POST", body: new FormData(form) })
            .then((response) => {
                console.log("Success!", response);
                showNotification(
                    "alert-success",
                    "Thanks! We've recieved your RSVP information."
                );
                loading = false;
                resetForm();
            })
            .catch((error) => {
                console.error("Error!", error.message);
                showNotification(
                    "alert-error",
                    "Hmm... Something went wrong. Try again later."
                );
                loading = false;
                resetForm();
            });
    }

    $: disabled =
        rsvpSubmitIsDisabled(
            name,
            email,
            phone,
            numGuests,
            guestMeals,
            transportation
        ) || loading;

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
        <FormField bind:data={numGuests} label="Guests" fieldType="number" />
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
            <GuestMealInput
                bind:name={guestMeals[index]["name"]}
                bind:meal={guestMeals[index]["meal"]}
                {index}
            />
        {/each}
    {/if}
    <FormButton {loading} {disabled} {click} />
    {#if showNotificationBox}
        <Alert
            {notificationClass}
            message={notificationMessage}
            close={() => (showNotificationBox = false)}
        />
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
