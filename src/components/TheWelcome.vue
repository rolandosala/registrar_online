<script setup>
import RequestModal from './RequestModal.vue';
import InquiryModal from './InquiryModal.vue';
import Notification from './Notification.vue';
import Accounts from './Accounts.vue';
</script>
<template>

  <section class="p-1 p-lg-5 d-flex align-items-center linear-bg" :style="{ height: 'auto' }">
    <div class="col-12 col-lg-6 p-4">
      <h1 class="fw-bold">Welcome Username!</h1>
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