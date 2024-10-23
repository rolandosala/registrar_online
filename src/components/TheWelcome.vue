<template>

  <section class="p-5 d-flex align-items-center linear-bg" >
    <div class="col-12 col-lg-6 p-4">
      <h1 class="fw-bold text-white text-shadow" >Welcome {{ firstname }} {{ lastname }}</h1>
      <p class="fs-4 text-white text-shadow">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.</p>
      <button class="btn btn-primary fs-5" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Create
        Request</button>
      <button class="btn btn-primary fs-5 mx-3" data-bs-toggle="modal" data-bs-target="#inquiryModal">Inquiry</button>
    </div>
    <img src="/building3.jpg" alt="" class="img-background">
  </section>
  
</template>
<script>
import { auth } from '@/firebase/init';
import { db } from '@/firebase/init';
import { getDoc, doc } from 'firebase/firestore';
export default {
  data() {
    return {
      firstname: '',
      lastname: '',
      emailadd: auth.currentUser.email
    }
  },
  created() {
    this.getUser();
  },
  methods: {
    async getUser() {
      /* const q = query(collection(db, 'users'), where('email', '==', 'lando@gmail.com')) */
      const docSnap = await getDoc(doc(db, 'users', auth.currentUser.email))
      /* const docSnap = await getDoc(q); */
      if(docSnap.exists()){
        this.firstname = docSnap.data().firstname;
        this.lastname = docSnap.data().lastname;
      }
    }
  }
}
</script>
<style scoped>
.linear-bg {
  background: linear-gradient(228deg, rgba(231, 237, 246, 0.3841911764705882) 22%, rgba(67, 114, 237, 0.29175420168067223) 62%, rgba(13, 51, 152, 1) 92%);
  height: 100vh;
  width: 100%;
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
}
.img-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
}
</style> 