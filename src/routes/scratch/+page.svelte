<script lang="ts">
    import layer1 from "$lib/background.gif";
    import layer2 from "$lib/Info.png";
    import Ship from "$lib/Ship-mini.png";
	import Topnav from "$lib/topnav.svelte";
    import topnav from "$lib/topnav.svelte";
    import banner from "$lib/SilverBanner.png";
    import drgametime3d from "$lib/scratchBanner.png"
    import evo from "$lib/evo_engine.png"
    import ace from "$lib/ace_engine.png"
    import pix from "$lib/PixelBrawl.png"
    import {PlayFill} from "svelte-bootstrap-icons"
</script>



<svelte:head>
    <!--favicon is applied in the base app.html-->
    <title>ShipmasterKyle - Scratch</title>    
    <meta name="description" content="ShipmasterKyle's Developer Profolio">
</svelte:head>

<!--html starts here-->
<!--Topnav is implemented in lib/topnav.svelte-->
<Topnav></Topnav>
<main class="bg-warning-subtle" style="background-image:url({drgametime3d}); background-position: center;">
    <div id="top" class="py-5 text-center">
        <h1> My Scratch Works</h1>
    </div>

    <div class="container p-5">
        <div class="row align-items-center m-0">
            <div class="bg-warning card w-25 mx-5">
                <img src={evo} class="py-3 card-img-top" alt="Evo Engine">
                <div class="card-body">
                  <h5 class="card-title">Sonic Evo Engine</h5>
                  <p class="card-text">A Sonic Physics Engine, developed off of the basis of Piggeh Engine</p>
                  <a href="https://scratch.mit.edu/projects/440415619/" class="w-100 btn btn-outline-warning"> <PlayFill /> Play </a>
                </div>
            </div>
            <div class="bg-warning card w-25 mx-5">
                <img src={ace} class="py-3 card-img-top" alt="Ace Engine">
                <div class="card-body">
                  <h5 class="card-title">Ace Engine</h5>
                  <p class="card-text">An Ace Attorney Case Maker built in scratch</p>
                  <a href="https://scratch.mit.edu/projects/568351098/" class="w-100 btn btn-outline-warning"> <PlayFill /> Play </a>
                </div>
            </div>
            <div class="bg-warning card w-25 mx-5">
                <img src={pix} class="py-3 card-img-top" alt="Ace Engine">
                <div class="card-body">
                  <h5 class="card-title">Pixel Brawl</h5>
                  <p class="card-text">A basic brawler game demo with ui developed by me</p>
                  <a href="https://scratch.mit.edu/projects/937857872/" class="w-100 btn btn-outline-warning"> <PlayFill /> Play </a>
                </div>
            </div>
        </div>
    </div>


</main>

<footer class="mt-auto text-white-50 bg-dark text-center">
    © Gabriel Thompson 2024
</footer>