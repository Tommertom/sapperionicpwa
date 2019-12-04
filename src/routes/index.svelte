<script>
  import {
    stuff,
    presentToast,
    presentPopover,
    presentIonicActionSheet,
    IonicMenuController
  } from "./../services/Ionic.js";

  import { register } from "svelte-custom-elements";

  import Test from "../components/Test.svelte";
  register("popover-message", Test, []);

  console.log("STUFF", stuff, presentIonicActionSheet);

  setTimeout(() => {
    chipClick();
  }, 3000);
  const chipClick = () => {
    console.log("CHIPclick");

    /*
   const menuCtrl = IonicMenuController();

    menuCtrl.enable(true, "first");
    menuCtrl.open("first");
   
*/
    console.log("gett toast2");

    const toast = presentToast({
      buttons: [
        {
          side: "start",
          icon: "star",
          text: "Favorite",
          handler: () => {
            console.log("Favorite clicked");
          }
        },
        {
          text: "Done",
          role: "cancel",
          handler: () => {
            console.log("Cancel clicked");
          }
        }
      ],
      header: "Header",
      position: "top"
    });

    const actionSheet = presentIonicActionSheet({
      header: "Stuff",
      buttons: [
        {
          text: "Delete",
          role: "destructive",
          icon: "trash",
          handler: () => {
            console.log("Delete clicked");
          }
        },
        {
          text: "Share",
          icon: "share",
          handler: () => {
            console.log("Share clicked");
          }
        },
        {
          text: "Play (open modal)",
          icon: "arrow-dropright-circle",
          handler: () => {
            console.log("Play clicked");
          }
        },
        {
          text: "Favorite",
          icon: "heart",
          handler: () => {
            console.log("Favorite clicked");
          }
        },
        {
          text: "Cancel",
          icon: "close",
          role: "cancel",
          handler: () => {
            console.log("Cancel clicked");
          }
        }
      ]
    });

    // const modal = presentModal({ component: "popover-message" })
    //  const popover = presentPopover({ component: "popover-message" });
  };
</script>

<style>
  h1,
  figure,
  p {
    text-align: center;
    margin: 0 auto;
  }

  h1 {
    font-size: 2.8em;
    text-transform: uppercase;
    font-weight: 700;
    margin: 0 0 0.5em 0;
  }

  figure {
    margin: 0 0 1em 0;
  }

  img {
    width: 100%;
    max-width: 400px;
    margin: 0 0 1em 0;
  }

  p {
    margin: 1em auto;
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 4em;
    }
  }
</style>

<svelte:head>
  <title>Sapper project template</title>
</svelte:head>

<ion-header>
  <ion-toolbar>
    <ion-title>Reports and downloads</ion-title>
    <ion-buttons slot="start">asdsad</ion-buttons>
  </ion-toolbar>
</ion-header>

<Test />

<ion-icon name="add" />
ss https://github.com/sveltejs/svelte-custom-elements
<h1>Great success!</h1>
<ion-chip on:click={chipClick}>sdasd</ion-chip>

<figure>
  <img alt="Borat" src="great-success.png" />
  <figcaption>HIGH FIVE!</figcaption>
</figure>

<p>
  <strong>
    Try editing this file (src/routes/index.svelte) to test live reloading.
  </strong>
</p>
