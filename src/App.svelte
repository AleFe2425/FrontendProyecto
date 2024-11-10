<script>
    import { Router, Route } from "svelte-routing";
    import Index from "./pages/Index.svelte";
    import InicioAdmin from "./pages/InicioAdmin.svelte";
</script>

<Router>
    <Route path="/" component={Index} />
    <Route path="/admin" component={InicioAdmin} />
</Router>

<style>
    /* Puedes agregar estilos globales aquí si es necesario */
</style>
