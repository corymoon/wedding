<script>
    import PageSection from "../layout/PageSection.svelte"
    import EmailListForm from "../forms/EmailListForm.svelte";
    import RsvpForm from "../forms/RsvpForm.svelte";
    import { canRsvp } from "../../toggles";
</script>

<PageSection ref="rsvp" title="You can RSVP here" lg>
    <div class="mb-8 font-light text-center">
        {#if !canRsvp}
            <p class="mb-4">
                ...but not yet. Once we send formal invitations, you'll be to
                provide us your details here.
            </p>
            <p>
                If you want to recieve updates about when to RSVP,
                transportation, lodging, etc, please fill out the form below.
            </p>
        {/if}
    </div>

    {#if !canRsvp}
        <EmailListForm />
    {:else}
        <!-- else content here -->
        <RsvpForm />
    {/if}
</PageSection>
