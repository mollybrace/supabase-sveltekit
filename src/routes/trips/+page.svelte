<script>
    export let data

    $: ({ trips } = data)
</script>

<div>
    <h1>Your Trips</h1>

    <div class="grid grid-cols-2 sm:grid-cols-3">
        {#each trips as trip}
            <div>
                <h2>
                    {trip.destination}
                </h2>

                <p>
                    {trip.description}
                </p>
            </div>
        {/each}
    </div>
</div>