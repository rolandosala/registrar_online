<template>
    <section class="container p-5 d-flex justify-content-center align-items-center">
        <div class="col-6">
            <div class="card">
                <div class="card-header">
                    <div class="card-title">Create Account</div>
                </div>
                <div class="card-body">
                    <form @submit.prevent="createAccount">
                        <input type="email" class="form-control mt-2" v-model="email" placeholder="Email Address">
                        <input type="username" class="form-control mt-2" v-model="username" placeholder="Username">
                        <input type="password" class="form-control mt-2" v-model="password" placeholder="Password">
                        <button class="btn btn-primary mt-3">Create</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '@/firebase/init';

export default {
    data() {
        return {
            email: '',
            username: '',
            password: ''
        }
    },
    methods: {
        createAccount() {
            /* console.log('Email: ', this.email);
            console.log('Username: ', this.username);
            console.log('Password: ', this.password); */
            createUserWithEmailAndPassword(auth, this.email, this.password)
            .then(() => {
                /* console.log(credential.user); */
                updateProfile(auth.currentUser, {
                    displayName: this.username
                })
            })
            .then(() => {
                console.log(auth.currentUser.displayName);
            })
            .catch((error) => {
                console.log(error.message);
            });
        }
    }
}
</script>