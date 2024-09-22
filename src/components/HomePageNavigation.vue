<script setup>
import { RouterLink } from 'vue-router';
</script>
<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary p-3">
        <div class="container">
            <a class="navbar-brand d-flex justify-content-center align-items-center" href="#">
                <img src="/logo.png" alt="Logo" width="60" height="60" class="d-inline-block align-text-top">
                <div class="lh-1 mx-3">
                    <span>Southern Leyte State University</span><br />
                    <span class="fs-6">Tomas Oppus Campus</span><br />
                    <!-- <span>Office of the Registrar</span> -->
                </div>
            </a>
            <div class="float-end" id="">
                <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill"
                            data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home"
                            aria-selected="true">Transactions</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill"
                            data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile"
                            aria-selected="false">Notification</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill"
                            data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact"
                            aria-selected="false">Account</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <RouterLink to="/">
                            <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill"
                            data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact"
                            aria-selected="false">Logout</button>
                        </RouterLink>
                        
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>