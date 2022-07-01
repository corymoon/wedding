<script>
    import FormField from "../elements/FormField.svelte";
    import Alert from "../elements/Alert.svelte";
    import FormButton from "../elements/FormButton.svelte";

    import { emailListSubmitIsDisabled } from "../../functions";
    import { emailListUrl } from "../../data";

    let name = "";
    let email = "";
    let loading = false;
    let notificationMessage = null;
    let notificationClass = null;
    let showNotificationBox = false;

    function resetForm() {
        name = null;
        email = null;
    }

    function showNotification(setClass, setMessage) {
        notificationMessage = setMessage;
        notificationClass = setClass;
        showNotificationBox = true;
    }

    function click() {
        loading = true;
        const form = document.forms["submit-email-to-google-sheet"];

        fetch(emailListUrl, { method: "POST", body: new FormData(form) })
            .then((response) => {
                console.log("Success!", response);
                showNotification(
                    "alert-success",
                    "Thanks! We'll keep you updated!"
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

    $: disabled = emailListSubmitIsDisabled(name, email) || loading;
</script>

<form class="w-full max-w-lg mx-auto" name="submit-email-to-google-sheet">
    <div class="flex flex-wrap -mx-3 mb-4">
        <FormField bind:data={name} label="Name" fieldType="text" />
        <FormField bind:data={email} label="Email" fieldType="text" />
    </div>
    <FormButton {loading} {disabled} {click} />
    {#if showNotificationBox}
        <Alert
            {notificationClass}
            message={notificationMessage}
            close={() => (showNotificationBox = false)}
        />
    {/if}
</form>
