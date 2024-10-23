<template>
  <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
    aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <form action="#" ref="requestForm">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="staticBackdropLabel">What would you like to request?</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="card">
              <div class="card-header">
                <h5>Request Type</h5>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-6">
                    <div class="form-check" data-bs-toggle="collapse" data-bs-target="#transcript_types"
                      aria-expanded="false" aria-controls="">
                      <input class="form-check-input" type="checkbox" value="" id="transcript">
                      <label class="form-check-label" for="transcript">
                        Transcript of Records
                      </label>
                    </div>
                    <div class="col-12 px-2 collapse" id="transcript_types">
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="Undergrad TOR"
                          id="transcript_undergrad" v-model="get_request">
                        <label class="form-check-label" for="transcript_undergrad">
                          Undergraduate/College
                        </label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="Postgrad TOR"
                          id="transcript_postgrad" v-model="get_request">
                        <label class="form-check-label" for="transcript_postgrad">
                          Post-graduate
                        </label>
                      </div>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="Diploma Re-issuance" id="diploma"
                        v-model="get_request">
                      <label class="form-check-label" for="diploma">
                        Diploma Re-issuance
                      </label>
                    </div>
                    <div class="form-check" data-bs-toggle="collapse" data-bs-target="#authentication_types"
                      aria-expanded="false" aria-controls="">
                      <input class="form-check-input" type="checkbox" value="" id="authentication">
                      <label class="form-check-label" for="authentication">
                        Authentications
                      </label>
                    </div>
                    <div class="col-12 px-2 collapse" id="authentication_types">
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="Authenticate Transcript"
                          id="auth_transcript" v-model="get_request">
                        <label class="form-check-label" for="auth_transcript">
                          Transcript of Records
                        </label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="Authenticate Certifications"
                          id="auth_cert" v-model="get_request">
                        <label class="form-check-label" for="auth_cert">
                          Certifications
                        </label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="Authenticate Diploma" id="auth_diploma"
                          v-model="get_request">
                        <label class="form-check-label" for="auth_diploma">
                          Diploma
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="form-check" data-bs-toggle="collapse" data-bs-target="#certifications"
                      aria-expanded="false" aria-controls="">
                      <input class="form-check-input" type="checkbox" value="" id="certification">
                      <label class="form-check-label" for="certification">
                        Certifications
                      </label>
                    </div>
                    <div class="col-12 px-2 collapse" id="certifications">
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="Cert. Graduation" id="cert_graduation"
                          v-model="get_request">
                        <label class="form-check-label" for="cert_graduation">
                          Graduation
                        </label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="Cert. Units Earned" id="cert_unitsearned"
                          v-model="get_request">
                        <label class="form-check-label" for="cert_unitsearned">
                          Units Earned
                        </label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="Cert. Academic Requirements"
                          id="cert_CAR" v-model="get_request">
                        <label class="form-check-label" for="cert_CAR">
                          Academic Requirement(C.A.R)
                        </label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="Cert. Proficiency" id="cert_proficiency"
                          v-model="get_request">
                        <label class="form-check-label" for="cert_proficiency">
                          Proficiency
                        </label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="Cert. Enrollment" id="cert_enrollment"
                          v-model="get_request">
                        <label class="form-check-label" for="cert_enrollment">
                          Enrollment
                        </label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="CAV" id="cert_CAV" v-model="get_request">
                        <label class="form-check-label" for="cert_CAV">
                          Certified, Authenticated and Verified (C.A.V)
                        </label>
                      </div>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="Honorable Dismissal" id="dismissal"
                        v-model="get_request">
                      <label class="form-check-label" for="dismissal">
                        Honorable Dismissal
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card mt-4">
              <div class="card-header">
                <h5>Purpose</h5>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-6">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="Local Employment" id="localemployment"
                        v-model="get_purpose">
                      <label class="form-check-label" for="localemployment">
                        Local Employment
                      </label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="Employment Abroad" id="employmentabroad"
                        v-model="get_purpose">
                      <label class="form-check-label" for="employmentabroad">
                        Employment Abroad
                      </label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="Board Examination" id="boardexam"
                        v-model="get_purpose">
                      <label class="form-check-label" for="boardexam">
                        Board Examination
                      </label>
                    </div>
                    <div class="form-check" data-bs-toggle="collapse" data-bs-target="#others_purpose"
                      aria-expanded="false" aria-controls="">
                      <input class="form-check-input" type="checkbox" value="" id="others">
                      <label class="form-check-label" for="others">
                        Others
                      </label>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="Promotion" id="promotion"
                        v-model="get_purpose">
                      <label class="form-check-label" for="promotion">
                        Promotion
                      </label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="Ranking" id="ranking"
                        v-model="get_purpose">
                      <label class="form-check-label" for="ranking">
                        Ranking
                      </label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="Transfer" id="transfer"
                        v-model="get_purpose">
                      <label class="form-check-label" for="transfer">
                        Transfer/Further Studies
                      </label>
                    </div>
                  </div>
                  <div class="col-12 collapse" id="others_purpose">
                    <div class="form-floating mt-3">
                      <input type="text" class="form-control" id="floatingInput" value="" placeholder=""
                        v-model="get_purpose">
                      <label for="floatingInput">Please Specify</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {{ get_request }}
          {{ get_purpose }}
          <div class="modal-footer">
            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
            <button type="button" class="btn btn-primary" @click="addRequest" data-bs-dismiss="modal">Confirm</button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import { auth, db } from '@/firebase/init';
import { setDoc, doc, addDoc, collection } from 'firebase/firestore';
export default {
  data() {
    return {
      get_request: [],
      set_request: [],
      get_purpose: [],
      set_purpose: [],
      request_type: '',
      id: 1,
    }
  },
  methods: {

    pushRequest() {
      this.set_request.push(this.get_request);
      this.set_purpose.push(this.get_purpose);
    },

    async addRequest() {
      this.pushRequest();

      await addDoc(collection(db, 'requests'), {

        requested_by: auth.currentUser.email,
        date_requested: new Date().toLocaleString(),
        request: this.set_request[0],
        purpose: this.set_purpose[0],
        status: '1',
        date_released: '',
        released_to: ''

      })
      console.log('Request added')
      this.$refs.requestForm.reset();
    }
  }
}
</script>