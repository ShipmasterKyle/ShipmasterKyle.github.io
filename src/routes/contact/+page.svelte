<script lang="ts">
    import layer1 from "$lib/background.gif";
    import layer2 from "$lib/Info.png";
    import Ship from "$lib/Ship-mini.png";
	import Topnav from "$lib/topnav.svelte";
    import topnav from "$lib/topnav.svelte";
    import banner from "$lib/SilverBanner.png";
    import roblox from "$lib/roblox.svg"
    import {Mailbox, Discord, Twitter, Instagram} from "svelte-bootstrap-icons"
</script>



<svelte:head>
    <!--favicon is applied in the base app.html-->
    <title>ShipmasterKyle - Home</title>    
    <meta name="description" content="ShipmasterKyle's Developer Profolio">
</svelte:head>

<!--html starts here-->
<!--Topnav is implemented in lib/topnav.svelte-->
<Topnav></Topnav>

<main>
    <div id="top" class="py-5 text-center">
        <div style="position:relative;">
            <img class="w-100" style="left:0; top:0; zindex:1;" src={layer1} alt="Background Image">
            <img class="w-100" style="position:absolute; left:0; top:0; zindex:2;" src={layer2} alt="Info Image">
        </div>
        <h1> Contact Me </h1>
        <br>
        <address>
            <a href="mailto:gabrielthomps4198@gwinnetttech.edu" class="btn btn-outline-success"> <Mailbox />  Email Me </a>
        </address>

        <Discord /> @ShipmasterKyle
        <br>
        <Twitter /> @shipmasterkyle2
        <br>
        <Instagram /> @shipmasterkyle
        <br>
        <img src={roblox} width="16" height="16" alt="Roblox"> @drgametime3d
    </div>
</main>

<footer class="mt-auto text-white-50 bg-dark text-center">
    © Gabriel Thompson 2024
</footer>