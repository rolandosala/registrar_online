<template>
    <!-- Hero 3 - Bootstrap Brain Component -->
    <section class="linear-bg d-flex justify-content-center align-items-center" id="herosection">
        <div class="container overflow-hidden">
            <div class="row gy-5 gy-lg-0 align-items-lg-center justify-content-lg-between">
                <div class="col-12 col-lg-6 text-center text-lg-start">
                    <h4 class="display-6 fw-bold mb-3 text-white">Office of the Registrar</h4>
                    <p class="fs-4 mb-5 text-white">Official site of Registrar's office, you may create an account using
                        your google account/s. Make a request and inquire about a process or document/s.</p>
                    <div class="d-grid gap-2 d-sm-flex">
                        <button type="button" class="btn btn-outline-light bsb-btn-2xl rounded-pill"
                            @click="googleSignIn">
                            <img width="30" height="30" src="https://img.icons8.com/color/50/google-logo.png"
                                alt="google-logo" class="mx-2" />Sign in with Google</button>
                    </div>
                </div>
                <!-- <div class="col-4">
                    <div class="row justify-content-center">
                        <div class="col-12">
                            <div class="card border border-light-subtle rounded-4">
                                <div class="card-body p-3 p-md-4 p-xl-5">
                                    <form @submit.prevent="loginAccount">
                                        <p class="text-center mb-4">Sign in with Email</p>
                                        <div class="row gy-3 overflow-hidden">
                                            <div class="col-12">
                                                <div class="form-floating mb-3">
                                                    <input type="email" class="form-control" name="email" id="email"
                                                        placeholder="name@example.com" v-model="email" required>
                                                    <label for="email" class="form-label">Email</label>
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div class="form-floating mb-3">
                                                    <input type="password" class="form-control" name="password"
                                                        id="password" value="" placeholder="Password" v-model="password"
                                                        required>
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
                                                    <button class="btn btn-primary btn-lg form-control" type="submit">
                                                        Login</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                </div> -->
            </div>
        </div>
        <img src="/building2.jpg" alt="" class="img-background">
        <div class="loading" v-show="loading">
            <div class="spinner-border text-white" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            <h3 class="text-white">Signing In...</h3>
        </div>

    </section>

</template>
<script>
import { auth, db } from '@/firebase/init';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
const provider = new GoogleAuthProvider()
export default {
    data() {
        return {
            email: '',
            password: '',
            loading: false,
        }
    },
    methods: {
        loginAccount() {
            console.log('Email: ', this.email);
            console.log('Password: ', this.password);
        },
        googleSignIn() {
            signInWithPopup(auth, provider)
                .then((result) => {
                    const credential = GoogleAuthProvider.credentialFromResult(result);
                    const token = credential.accessToken;
                    const user = result.user;
                    this.loading = true;
                    this.checkUser(user.email);
                }).catch((error) => {
                    console.log(error)
                })
        },
        async checkUser(data) {
            const docSnap = await getDoc(doc(db, 'users', data));
           
            if (docSnap.exists()) {
                this.$router.push('/homepage');
            } else {
                this.$router.push('/accountsetup');
            }
        }
    }
}
</script>
<style scoped>
.linear-bg {
    background-image: linear-gradient(90deg, rgba(8, 54, 126, 1) 2%, rgba(13, 51, 152, 0.8715861344537815) 17%, rgba(250, 254, 255, 0.20211834733893552) 54%);
    height: 85vh;
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;
    position: relative;
}

.img-background {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
}

.loading {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(8, 42, 153, 0.521);
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
</style>
