<template>

  <section class="p-1 p-lg-5 d-flex align-items-center linear-bg" :style="{ height: 'auto' }">
    <div class="col-12 col-lg-6 p-4">
      <h1 class="fw-bold" >Welcome {{ firstname }} {{ lastname }}</h1>
      <p class="fs-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.</p>
      <button class="btn btn-primary fs-5" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Create
        Request</button>
      <button class="btn btn-primary fs-5 mx-3" data-bs-toggle="modal" data-bs-target="#inquiryModal">Inquiry</button>
    </div>
  </section>
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
import { auth } from '@/firebase/init';
import { db } from '@/firebase/init';
import { where, getDoc, query, collection, doc } from 'firebase/firestore';
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
      const docSnap = await getDoc(doc(db, 'users', 'l2QaQPvYzgzIUk7iyCAg'), where('email', '==', 'lando@gmail.com'))
      /* const docSnap = await getDoc(q); */
      if(docSnap.exists()){
        this.firstname = docSnap.data().firstname;
        this.lastname = docSnap.data().lastname;
      }
      console.log(docSnap.data())
    }
  }
}
</script>
<style scoped>
.linear-bg {
  background: rgb(231, 237, 246);
  background: linear-gradient(228deg, rgba(231, 237, 246, 0.3841911764705882) 22%, rgba(67, 114, 237, 0.29175420168067223) 62%, rgba(13, 51, 152, 1) 92%);
  height: 85vh;
  width: 100%;
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>