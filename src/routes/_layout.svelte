<script>
  import Nav from "../components/Nav.svelte";
  import IonTab from "../components/IonTab.svelte";

  export let segment;

  const myTabs = [
    { icon: "person", tab: "account", url: "." },
    { icon: "trash", tab: "contact", url: "about" },
    { icon: "lock", tab: "lock", url: "about" }
  ];
</script>

<style>
  main {
    position: relative;
    max-width: 56em;
    background-color: white;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>

<main>
  <slot />
</main>

<IonTab tabs={myTabs} />
