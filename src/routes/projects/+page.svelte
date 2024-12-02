<script lang="ts">
    import layer1 from "$lib/background.gif";
    import layer2 from "$lib/Info.png";
    import Ship from "$lib/Ship-mini.png";
	import Topnav from "$lib/topnav.svelte";
    import topnav from "$lib/topnav.svelte";
    import banner from "$lib/SilverBanner.png";
    import roblox from "$lib/roblox.svg"
    import chao from "$lib/ChaoGarden.jpg"
    import poke from "$lib/PokemonLegends.png"
    import {PlayFill} from "svelte-bootstrap-icons"
</script>



<svelte:head>
    <!--favicon is applied in the base app.html-->
    <title>ShipmasterKyle - Home</title>    
    <meta name="description" content="ShipmasterKyle's Developer Profolio">
</svelte:head>

<!--html starts here-->
<!--Topnav is implemented in lib/topnav.svelte-->
<Topnav></Topnav>

<main class="bg-body-secondary py-5"> 
    <div id="top" class="pb-5 text-center">
        <h1> My Personal Projects </h1>
        <p> Here are some extra projects I don't actively work on anymore but still are decent shows of my work.</p>
    </div>

    <div class="container">
        <div class="row align-center m-0">
            <div class="w-50 text-center">
                <img class="w-100" src={chao} alt="Chao Garden">
                <p> A Roblox Remake of the Sonic Adventure 2 Chao Garden</p>
                <a class="btn btn-outline-dark" href="https://github.com/ShipmasterKyle/Chao-Engine/tree/master">Contribute</a>
            </div>
            <div class="w-50 text-center">
                <img class="w-100" src={poke} alt="Pokemon Legends">
                <p> A Pokemon Based math game developed originally as a school project thats recently seen a fresh coat of paint. </p>
                <a class="btn btn-outline-dark" href="https://shipmasterkyle.github.io/Legends/"> <PlayFill /> Play</a>
            </div>
        </div>
    </div>
    
</main>

<footer class="mt-auto text-white-50 bg-dark text-center">
    © Gabriel Thompson 2024
</footer>