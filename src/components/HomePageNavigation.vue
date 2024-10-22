<script setup>
import { RouterLink } from 'vue-router';
</script>
<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary p-1">
        <div class="container">
            <a class="navbar-brand d-flex justify-content-center align-items-center" href="#">
                <img src="/logo.png" alt="Logo" width="60" height="60" class="d-inline-block align-text-top">
                <div class="lh-1 mx-3">
                    <span>Southern Leyte State University</span><br />
                    <span class="fs-6">Tomas Oppus Campus</span><br />
                    <!-- <span class="fs-6">Office of the Registrar</span> -->
                </div>
            </a>
            <div class="float-end col-12 col-lg-6" id="">
                <button class="navbar-toggler float-end" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse float-lg-end" id="navbarTogglerDemo01">
                    <ul class="navbar-nav me-auto mt-5 mt-lg-0 ">
                        <li class="nav-item" role="presentation">
                            <button class="btn btn-default" id="" data-bs-toggle=""
                                data-bs-target="#">Transactions</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="btn btn-default position-relative" id="" data-bs-toggle="modal"
                                data-bs-target="#notification">Notification
                                <span
                                    class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                    99+
                                    <span class="visually-hidden">unread messages</span>
                                </span>
                            </button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="btn btn-default" id="" data-bs-toggle="modal"
                                data-bs-target="#account">Account</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="btn btn-default" id="" @click="logOut">Logout</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
    <RequestModal />
    <InquiryModal />
    <Notification />
    <Accounts />
</template>
<script>
import RequestModal from './RequestModal.vue';
import InquiryModal from './InquiryModal.vue';
import Notification from './Notification.vue';
import Accounts from './Accounts.vue';
import { signOut } from 'firebase/auth';
import { auth } from '@/firebase/init';
export default {
    methods: {
        logOut() {
            signOut(auth)
                .then(() => {
                    this.$router.push('/');
                })
        }
    }
}
</script>