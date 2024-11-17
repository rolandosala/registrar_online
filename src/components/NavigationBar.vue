<script setup>
import { RouterLink } from 'vue-router';
</script>
<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary p-lg-3" style="position: sticky; top: 0; z-index: 10;">
        <div class="container col-sm-12">
            <RouterLink to="/">
                <a class="navbar-brand d-flex justify-content-center align-items-center" href="#">
                    <img src="/logo.png" alt="Logo" width="60" height="60" class="d-inline-block align-text-top">
                    <div class="lh-1 mx-3">
                        <span>Southern Leyte State University</span><br />
                        <span class="fs-6">Tomas Oppus Campus</span><br />
                        <!-- <span>Office of the Registrar</span> -->
                    </div>
                </a>
            </RouterLink>
            <div class="float-end pt-3 pt-lg-0" id="" v-if="$route.path !== '/readmorefaq'">
                <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <a href="#herosection " class="nav-link" type="button">Home</a>
                    </li>
                    <li class="nav-item" role="presentation">
                        <a href="#announcements" class="nav-link " type="button">Announcements</a>
                        <!-- <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill"
                            data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile"
                            aria-selected="false">Announcements</button> -->
                    </li>
                    <li class="nav-item" role="presentation">
                        <a href="#faq " class="nav-link" type="button">FAQ</a>
                        <!-- <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill"
                            data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact"
                            aria-selected="false">FAQ</button> -->
                    </li>
                    <li class="nav-item" role="presentation">
                        <a href="#about" class="nav-link" type="button">About</a>
                        <!-- <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill"
                            data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact"
                            aria-selected="false">About</button> -->
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<style>
a{
    text-decoration: none;
}
</style>