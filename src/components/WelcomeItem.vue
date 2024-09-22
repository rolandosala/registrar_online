<script setup>
import { RouterLink } from 'vue-router';
</script>
<template>
  <section class="container-fluid ">
    <div class="row d-flex justify-content-center align-items-center flex-row">
      <div class="col-6 d-flex justify-content-center align-items-center flex-column">
        <h2 class="fw-bold text-uppercase" style="font-size: 3em;">Welcome!</h2>
        <div style="background-color: black; height: 2px; width: 50%;" class="mb-3"></div>
        <p class="fs-5 lh-1">Before proceeding we need some basic information about you.</p>
        <p class="fs-5 lh-1">Please fill the form accordingly.</p>
        <p class="fs-5 lh-1">Thank you!</p>
      </div>
      <div class="col-6 p-3 d-flex justify-content-center align-items-center" style="height: 100vh;">
        <div class="card">
          <div class="card-header">
            <p class="fs-4 text-uppercase">Account Setup</p>
          </div>
          <div class="card-body">
            <div class="form-floating mb-3">
              <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" disabled>
              <label for="floatingInput">Email address</label>
            </div>
            <div class="row">
              <div class="col-4">
                <div class="form-floating">
                  <input type="text" class="form-control" id="floatingPassword" placeholder="Password">
                  <label for="floatingPassword">Firstname</label>
                </div>
              </div>
              <div class="col-4">
                <div class="form-floating">
                  <input type="text" class="form-control" id="floatingPassword" placeholder="Password">
                  <label for="floatingPassword">Middlename</label>
                </div>
              </div>
              <div class="col-4">
                <div class="form-floating">
                  <input type="text" class="form-control" id="floatingPassword" placeholder="Password">
                  <label for="floatingPassword">Lastname</label>
                </div>
              </div>
              <div class="col-6 mt-3">
                <div class="form-floating">
                  <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
                    <option selected>Choose Course</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                  <label for="floatingSelect">Course/Program</label>
                </div>
              </div>
              <div class="col-6 mt-3">
                <div class="form-floating">
                  <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
                    <option selected>Choose Major</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                  <label for="floatingSelect">Major</label>
                </div>
              </div>
              <div class="col-6 mt-3">
                <div class="form-floating">
                  <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
                    <option selected>Choose</option>
                    <option value="1">Graduate</option>
                    <option value="2">Non-Graduate</option>
                  </select>
                  <label for="floatingSelect">Status</label>
                </div>
                <div class="form-floating mt-3">
                  <input type="text" class="form-control" id="floatingPassword" placeholder="Password">
                  <label for="floatingPassword">Year Graduated</label>
                </div>
              </div>
              <div class="col-6 mt-3">
                <div class="form-floating">
                  <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
                    <option selected>Choose</option>
                    <option value="1">YES</option>
                    <option value="2">NO</option>
                  </select>
                  <label for="floatingSelect">Have you already transferred?</label>
                </div>
              </div>
            </div>

          </div>
          <div class="card-footer">
            <div class="col-3 float-end">
              <RouterLink to="homepage">
                <button class="btn btn-primary  form-control">Proceed</button>
              </RouterLink>
              
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </section>
</template>