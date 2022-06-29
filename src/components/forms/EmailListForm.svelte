<script>
    import { fade } from "svelte/transition";

    import SuccessCheck from "../elements/icons/SuccessCheck.svelte";
    import ErrorCross from "../elements/icons/ErrorCross.svelte";

    import { formInputClasses, formLabelClasses } from "../../classes";
    let name = "";
    let nameField;
    let email = "";
    let emailField;
    let submitting = false;
    let notificationMessage = null;
    let notificationClass = null;
    let showNotificationBox = false;

    $: theName = name;

    let emailListUrl =
        "https://script.google.com/macros/s/AKfycbyJ1aYZdxB-YtPVidSqKGKi8F3WhMoX7Em0J8RUrIE1bXq92yZoEf6zsJcM6cq8jXSOPw/exec";

    function closeNotification() {
        showNotificationBox = false;
    }

    function resetForm() {
        name = null;
        email = null;
    }

    /**
     * @param {string} setClass
     * @param {string} setMessage
     */
    function showNotification(setClass, setMessage) {
        notificationMessage = setMessage;
        notificationClass = setClass;
        showNotificationBox = true;
    }

    /**
     * @param {null | string} [name]
     * @param {null | string} [email]
     */
    function emailListSubmitIsDisabled(name, email) {
        if ((name == "" || email == "") || (name == null || email == null)) {
            return true;
        } else {
            return false;
        }
    }

    function submitEmailListForm() {
        submitting = true;
        const form = document.forms["submit-email-to-google-sheet"];

        fetch(emailListUrl, { method: "POST", body: new FormData(form) })
            .then((response) => {
                console.log("Success!", response);
                showNotification(
                    "alert-success",
                    "Thanks! We'll keep you updated!"
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

<form class="w-full max-w-lg mx-auto" name="submit-email-to-google-sheet">
    <div class="flex flex-wrap -mx-3 mb-4">
        <div class="w-full md:w-1/2 px-3">
            <label class={formLabelClasses} for="Name">
                Name
              </label>
            <input
                value={name}
                class={formInputClasses}
                on:input={(e) => (name = e.target.value)}
                type="text"
                placeholder="Name"
                name="Name"
            />
            <!-- <input
                bind:value={name}
                bind:this={nameField}
                class={formInputClasses}
                id="name-input"
                type="text"
                placeholder="Name"
                name="Name"
            /> -->
        </div>
        <!-- email -->
        <div class="w-full md:w-1/2 px-3">
            <label class={formLabelClasses} for="Email">
                Email
              </label>

            <input
                bind:value={email}
                bind:this={emailField}
                class={formInputClasses}
                id="email-input"
                type="text"
                placeholder="Email"
                name="Email"
            />
        </div>
    </div>
    <button
        class="btn btn-success rounded-full w-full text-white"
        class:loading={submitting}
        disabled={emailListSubmitIsDisabled(name, email) || submitting}
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
