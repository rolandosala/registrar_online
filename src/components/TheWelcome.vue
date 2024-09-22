<script setup>
import RequestModal from './RequestModal.vue';
import InquiryModal from './InquiryModal.vue';
</script>
<template>

  <section class="p-5 d-flex align-items-center" :style="{ height: '100vh' }">
    <div class="col-6 p-4">
      <h1 class="fw-bold">Welcome Username!</h1>
      <p class="fs-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.</p>
      <button class="btn btn-outline-primary fs-5" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Create
        Request</button>
      <button class="btn btn-outline-primary fs-5 mx-3" data-bs-toggle="modal"
        data-bs-target="#inquiryModal">Inquiry</button>
    </div>
  </section>
  <RequestModal />
  <InquiryModal />

</template>