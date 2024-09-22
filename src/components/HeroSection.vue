<script setup>
import { RouterLink } from 'vue-router';
</script>
<template>
    <!-- Hero 3 - Bootstrap Brain Component -->
    <section class="py-3 py-lg-5 py-xl-8 linear-bg d-flex justify-content-center align-items-center">
        <div class="container overflow-hidden">
            <div class="row gy-5 gy-lg-0 align-items-lg-center justify-content-lg-between">
                <div class="col-12 col-lg-6 order-1 order-lg-0 ">
                    <h4 class="display-6 fw-bold mb-3 text-white">Office of the Registrar</h4>
                    <p class="fs-4 mb-5 text-white">We work in a customized way by devising and handling entirely online
                        projects
                        with long-term partnerships.</p>
                    <div class="d-grid gap-2 d-sm-flex">
                        <button type="button" class="btn btn-outline-light bsb-btn-2xl rounded-pill">Create
                            Account</button>
                    </div>
                </div>
                <div class="col-4">
                    <div class="row justify-content-center">
                        <div class="col-12">
                            
                            <div class="card border border-light-subtle rounded-4">
                                <div class="card-body p-3 p-md-4 p-xl-5">
                                    <form action="#!">
                                        <p class="text-center mb-4">Sign in with Email</p>
                                        <div class="row gy-3 overflow-hidden">
                                            <div class="col-12">
                                                <div class="form-floating mb-3">
                                                    <input type="email" class="form-control" name="email" id="email"
                                                        placeholder="name@example.com" required>
                                                    <label for="email" class="form-label">Email</label>
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div class="form-floating mb-3">
                                                    <input type="password" class="form-control" name="password"
                                                        id="password" value="" placeholder="Password" required>
                                                    <label for="password" class="form-label">Password</label>
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value=""
                                                        name="remember_me" id="remember_me">
                                                    <label class="form-check-label text-secondary" for="remember_me">
                                                        Keep me logged in
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div class="d-grid">
                                                    <RouterLink to="/accountsetup">
                                                        <button class="btn btn-primary btn-lg form-control" type="submit">
                                                            Login</button>
                                                    </RouterLink>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>

</template>
<style>
.linear-bg {
    background: rgb(8, 54, 126);
    background: linear-gradient(90deg, rgba(8, 54, 126, 1) 2%, rgba(13, 51, 152, 0.8715861344537815) 17%, rgba(250, 254, 255, 0.20211834733893552) 54%), url('university.webp');
    height: 80vh;
    width: 100%;
    position: relative;
    background-repeat: no-repeat;
    background-size: cover;
}
</style>
