<script>
  export let tabs;

  const handleClick = event => {
    const link = document.createElement("a");
    link.href = event;
    document.body.appendChild(link);
    link.click();
    // todo: remove
  };
</script>

<ion-tabs>

  {#each tabs as tab}
    <ion-tab tab={tab.tab} />
  {/each}

  <ion-tab-bar slot="bottom">
    {#each tabs as tab}
      <ion-tab-button
        tab={tab.tab}
        on:click={() => {
          handleClick(tab.url);
        }}>
        <ion-icon name={tab.icon} />
      </ion-tab-button>
    {/each}

  </ion-tab-bar>
</ion-tabs>
