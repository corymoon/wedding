<script>
    import dayjs from 'dayjs';
    import PageSection from "../layout/PageSection.svelte";

    const weddingDay = dayjs('2023-10-08');
    let today = dayjs();
    let diff = weddingDay.diff(today, 'days') + 1;
    let dayDays = diff == 1 ? 'day' : 'days';
</script>

<PageSection ref="saveTheDate" lg primary bordered>
    <div class="text-center my-10 font-serif font-bold text-5xl">
        <span class="uppercase inline-block mb-2 tracking-widest">Save</span>
        <br />
        <span class="italic lowercase inline-block">The</span>
        <span class="uppercase inline-block tracking-wider">Date</span>
    </div>
    <div class="text-center font-serif font-semibold text-3xl uppercase mb-10">
        <span>We are getting married</span>
    </div>
    <div class="text-center text-xl">
        <span>...in {diff} {dayDays}</span>
    </div>
</PageSection>
