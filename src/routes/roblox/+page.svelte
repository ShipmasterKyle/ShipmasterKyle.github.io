<script lang="ts">
	import Topnav from "$lib/topnav.svelte";
    import roblox from "$lib/roblox.svg";
    import SE from "$lib/noFilter.webp"
</script>



<svelte:head>
    <!--favicon is applied in the base app.html-->
    <title>ShipmasterKyle - Roblox</title>    
    <meta name="description" content="ShipmasterKyle's Roblox Profolio">
</svelte:head>

<!--html starts here-->
<!--Topnav is implemented in lib/topnav.svelte-->
<Topnav></Topnav>

<main class="m-0 bg-info-subtle">
    <div class="py-5 text-center">
        <h1> Sonic Earth </h1>
        <img class="w-100" src={SE} alt="Sonic Earth">
        <br>
        <p> I worked on Sonic Earth from June 2020 to October 2023. </p>
        <a href="https://www.roblox.com/games/5534440517/Legacy-Edition-Sonic-Earth"><button type="button" class="btn btn-outline-danger btn-lg px-4 fw-bold"> <img class="bi" width="24" height="24" src={roblox}>Play Here</button></a>
    </div>
    <div class="py-5 text-center" >
        <h1> Videos </h1>
        <div class="cont">
            <iframe class="w-100" src="https://www.youtube.com/embed/JlyZNHe1bss?si=NtFPqq5LxyE9UN0W" title="Sonic Earth Video" allowfullscreen></iframe>
        </div>
        <div class="cont">
            <iframe class="w-100" src="https://www.youtube.com/embed/lYQKVmU4Q3k?si=ak4QEUr5MwouH37G" title="Sonic Earth Video" allowfullscreen></iframe>
        </div>
    </div>
</main>

<footer class="mt-auto text-white-50 bg-dark text-center">
    © Gabriel Thompson 2024
</footer>

<style lang="scss">
    .cont {
        position: relative;
        overflow: hidden;
        width: 100%;
        padding-top: 56.25%;
    }
    iframe {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 100%;
    }
</style>