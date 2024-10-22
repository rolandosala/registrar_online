<template>
  <section class="container-fluid ">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="top-wavy-bg">
      <path fill="#0099ff" fill-opacity="1"
        d="M0,128L30,122.7C60,117,120,107,180,128C240,149,300,203,360,234.7C420,267,480,277,540,272C600,267,660,245,720,240C780,235,840,245,900,261.3C960,277,1020,299,1080,282.7C1140,267,1200,213,1260,202.7C1320,192,1380,224,1410,240L1440,256L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z">
      </path>
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="bottom-wavy-bg">
      <path fill="#0099ff" fill-opacity="1"
        d="M0,128L30,122.7C60,117,120,107,180,128C240,149,300,203,360,234.7C420,267,480,277,540,272C600,267,660,245,720,240C780,235,840,245,900,261.3C960,277,1020,299,1080,282.7C1140,267,1200,213,1260,202.7C1320,192,1380,224,1410,240L1440,256L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z">
      </path>
    </svg>
    <div class="row d-flex justify-content-center align-items-center flex-column flex-lg-row">
      <div :class="{ 'd-flex': display }"
        class="col-12 col-lg-6 p-3 justify-content-center align-items-center flex-column" id="welcome" v-show="display">
        <h2 class="fw-bold text-uppercase" style="font-size: 3em;">Welcome!</h2>
        <div style="background-color: black; height: 2px; width: 50%;" class="mb-3"></div>
        <p class="fs-5 lh-1">Before proceeding we need some basic information about you.</p>
        <p class="fs-5 lh-1">Please fill the form accordingly.</p>
        <p class="fs-5 lh-1">Thank you!</p>
        <div class="col-6 d-block d-lg-none">
          <button class="btn btn-info rounded-pill form-control" id="btn_continue"
            @click="setupAccount">Continue</button>
        </div>
      </div>
      <div :class="{ 'd-none': dNone }"
        class="col-12 col-lg-6 p-3 mt-5 mt-lg-5 mb-5 d-lg-block d-flex justify-content-center align-items-center"
        style="height: 100vh;" id="setupForm" v-show="showForm">
        <div class="card shadow">
          <div class="card-header">
            <p class="fs-4 text-uppercase">Account Setup</p>
          </div>
          <div class="card-body">
            <div class="form-floating mb-3">
              <input type="email" v-model="email" class="form-control" id="floatingInput" placeholder="name@example.com"
                disabled>
              <label for="floatingInput">Email address</label>
            </div>
            <div class="row">
              <div class="col-12 col-lg-4">
                <div class="form-floating">
                  <input type="text" class="form-control" id="floatingPassword" placeholder="Password" v-model="firstname">
                  <label for="floatingPassword">Firstname</label>
                </div>
              </div>
              <div class="col-12 col-lg-4">
                <div class="form-floating">
                  <input type="text" class="form-control" id="floatingPassword" placeholder="Password" v-model="middlename">
                  <label for="floatingPassword">Middlename</label>
                </div>
              </div>
              <div class="col-12 col-lg-4">
                <div class="form-floating">
                  <input type="text" class="form-control" id="floatingPassword" placeholder="Password" v-model="lastname">
                  <label for="floatingPassword">Lastname</label>
                </div>
              </div>
              <div class="col-12 col-lg-6 mt-3">
                <div class="form-floating">
                  <select class="form-select" id="floatingSelect" aria-label="Floating label select example" v-model="course">
                    <option selected>Choose Course</option>
                    <option value="1">Bachelor of Arts</option>
                    <option value="2">BS in Business Administration</option>
                    <option value="3">BS in Information Technology</option>
                  </select>
                  <label for="floatingSelect">Course/Program</label>
                </div>
              </div>
              <div class="col-12 col-lg-6 mt-3">
                <div class="form-floating">
                  <select class="form-select" id="floatingSelect" aria-label="Floating label select example" v-model="major">
                    <option selected>Choose Major</option>
                    <option value="Communications">Communications</option>
                    <option value="HRM">Human Resource Management</option>
                    <option value="MM">Marketing Management</option>
                    <option value="Programming">Computer Programming</option>
                  </select>
                  <label for="floatingSelect">Major</label>
                </div>
              </div>
              <div class="col-12 col-lg-6 mt-2">
                <div class="form-floating">
                  <select class="form-select" id="floatingSelect" aria-label="Floating label select example" v-model="status">
                    <option selected>Choose</option>
                    <option value="Graduated">Graduate</option>
                    <option value="Nonegraduated">Non-Graduate</option>
                  </select>
                  <label for="floatingSelect">Status</label>
                </div>
                <div class="form-floating mt-2">
                  <input type="text" class="form-control" id="floatingPassword" placeholder="Password" v-model="yeargraduated">
                  <label for="floatingPassword">Year Graduated</label>
                </div>
              </div>
              <div class="col-12 col-lg-6 mt-2">
                <div class="form-floating">
                  <select class="form-select" id="floatingSelect" aria-label="Floating label select example" v-model="transferred">
                    <option selected>Choose</option>
                    <option value="Yes">YES</option>
                    <option value="No">NO</option>
                  </select>
                  <label for="floatingSelect">Have you already transferred?</label>
                </div>
              </div>
            </div>

          </div>
          <div class="card-footer">
            <div class="col-6 col-lg-3 float-end">
              <button class="btn btn-primary  form-control" @click="createUser">Proceed</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { auth } from '@/firebase/init';
import { db } from '@/firebase/init';
import { collection, addDoc, doc, setDoc } from 'firebase/firestore';
export default {
  data() {
    return {
      display: true,
      showForm: false,
      dNone: true,
      email: auth.currentUser.email,
      firstname: '',
      lastname: '',
      middlename: '',
      course: '',
      major: '',
      status: '',
      transferred: '',
      yeargraduated: ''
    }
  },
  methods: {
    setupAccount() {
      this.display = false;
      this.showForm = true;
      this.dNone = false;
    },
    async createUser() {
      const colRef = doc(db, 'users', this.email);
      const objData = {
        firstname: this.firstname,
        lastname: this.lastname,
        middlename: this.middlename,
        couse: this.course,
        major: this.major,
        status: this.status,
        yeargraduated: this.yeargraduated,
        transferred: this.transferred,
        email: this.email
      }
      const docRef = await setDoc(colRef, objData)
      .then(() => {
        this.$router.push('/homepage');
      });
    }
  }
}
/* $('#btn_continue').on('click', function(){
  $('#setupForm').removeClass('d-none');
  $('#welcome').addClass('d-none');
}); */
</script>
<style scoped>
.bottom-wavy-bg {
  position: fixed;
  width: 100%;
  left: 0;
  bottom: 0;
  z-index: -1;
}

.top-wavy-bg {
  position: fixed;
  width: 100%;
  left: 0;
  top: -10%;
  z-index: -1;
}
</style>