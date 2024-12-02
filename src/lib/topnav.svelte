<!--This file creates a topnav template that we can apply to all the pages without being redudant-->
<script lang="ts">
    import logo from "$lib/favicon.png"
    import { Styles } from '@sveltestrap/sveltestrap';
    import { page } from '$app/stores'; 
    import { goto } from '$app/navigation';

    // For "active" highlights
    function currentRoute(route: String) {
        let current = $page.url.pathname.substring(0,route.length)
        if ($page.url.pathname === route) {
            return true
        } else if (current === route && route !== "/" ) {
            return true;
        }
        return false;
    }
</script>

<Styles />
<!--html starts here-->
<div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start bg-dark">
    <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
      <img class="bi" width="40" height="40" src={logo} alt="ShipmasterKyle">
    </a>

    <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 text-white">
      <li><a href="/" class="nav-link px-2" class:text-secondary={currentRoute('/')}>Home</a></li>
      <li><a href="/roblox" class="nav-link px-2" class:text-secondary={currentRoute('/roblox')}>Roblox Work</a></li>
      <li><a href="/scratch" class="nav-link px-2" class:text-secondary={currentRoute('/scratch')}>Scratch Work</a></li>
      <li><a href="/projects" class="nav-link px-2" class:text-secondary={currentRoute('/projects')}>Personal Projects</a></li>
      <li><a href="/contact" class="nav-link px-2" class:text-secondary={currentRoute('/contact')}>Contact</a></li>
    </ul>
</div>