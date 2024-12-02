<script lang="ts">
    import layer1 from "$lib/background.gif";
    import layer2 from "$lib/Info.png";
    import Ship from "$lib/Ship-mini.png";
	import Topnav from "$lib/topnav.svelte";
    import topnav from "$lib/topnav.svelte";
    import banner from "$lib/SilverBanner.png";
    import roblox from "$lib/roblox.svg"
</script>



<svelte:head>
    <!--favicon is applied in the base app.html-->
    <title>ShipmasterKyle - Home</title>    
    <meta name="description" content="ShipmasterKyle's Developer Profolio">
</svelte:head>

<!--html starts here-->
<!--Topnav is implemented in lib/topnav.svelte-->
<Topnav></Topnav>

<main class="m-0">
    <div class="bg-dark text-secondary m-0">
        <div class="row text-center m-0">
            <div class="row align-items-center m-0">
                <div class="col">
                    <img class="w-100" src={Ship} alt="ShipmasterKyle">
                </div>
                <div class="col">
                    <h1>ShipmasterKyle</h1>
                    <p class="lead fs-4 text"> Often Imitated, Never Duplicated</p>
                    <a href=#my-works><button type="button" class="btn btn-outline-light">My Work</button></a>
                </div>
            </div>
        </div>
    </div>
    <div class="b-divider"></div>
    <div id="my-works" class="bg-primary-subtle text-secondary px-4 py-5 text-center" style="background-image:url({banner}); background-position: center;">
        <div class="py-5">
            <h1> My Works </h1>
            <p class="col-lg-6 mx-auto">
                I've been working as a Software Engineer since 2019. Here you can see just a few of my work!
            </p>
            <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <a href="/roblox"><button type="button" class="btn btn-outline-danger btn-lg px-4 fw-bold"> <img class="bi" width="24" height="24" src={roblox}> Roblox Works</button></a>
                <a href="/scratch"><button type="button" class="btn btn-outline-warning btn-lg px-4">Scratch Work</button></a>
                <a href="/projects"><button type="button" class="btn btn-outline-dark btn-lg px-4"> Personal Projects </button></a>
            </div>
        </div>
    </div>
    <div class="b-divider"></div>
    <div class="bg-dark-subtle py-5 text-center">
        <h1 class="fw-bold lh-1 text-body-emphasis mb-3">Contact Me</h1>
        <div class="mx-auto col-lg-5">
            <form class="p-4 p-md-5 border rounded-3 bg-body-tertiary">
                <div class="form-floating mb-3">
                  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                  <label for="floatingInput">Email address</label>
                </div>
                <a href="/contact"> <button class="w-100 btn btn-lg btn-primary" type="submit">Contact</button> </a>
                <hr class="my-4">
            </form>
        </div>
    </div>
</main>

<footer class="mt-auto text-white-50 bg-dark text-center">
    © Gabriel Thompson 2024
</footer>

<style lang="scss">
    .b-divider {
        width: 100%;
        height: 3rem;
        background-color: rgba(0, 0, 0, .1);
        border: solid rgba(0, 0, 0, .15);
        border-width: 1px 0;
        box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);
      }
</style>
