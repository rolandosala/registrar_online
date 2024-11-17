<template>
  <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
    aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <form action="#" ref="requestForm">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="staticBackdropLabel">What would you like to request?</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="reloadPage"></button>
          </div>
          <div class="modal-body">
            <div class="card">
              <div class="card-header">
                <h5>Document Request Type</h5>
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
                        <input class="form-check-input" type="checkbox" value="Undergrad TOR" id="transcript_undergrad"
                          v-model="get_request">
                        <label class="form-check-label" for="transcript_undergrad">
                          Undergraduate/College
                        </label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="Postgrad TOR" id="transcript_postgrad"
                          v-model="get_request">
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
                      <input class="form-check-input" type="checkbox" value="" id="form_137" data-bs-toggle="collapse"
                        data-bs-target="#form_137_container">
                      <label class="form-check-label" for="form_137">
                        Form 137
                      </label>
                    </div>
                    <div class="col-12 px-2 collapse" id="form_137_container">
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="JHS - 137" id="JHS_137"
                          v-model="get_request">
                        <label class="form-check-label" for="JHS_137">
                          JHS - 137
                        </label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="SHS - 137" id="SHS_137"
                          v-model="get_request">
                        <label class="form-check-label" for="SHS_137">
                          SHS - 137
                        </label>
                      </div>
                    </div>
                    <div class="form-check" data-bs-toggle="collapse" data-bs-target="#others_request"
                      aria-expanded="false" aria-controls="">
                      <input class="form-check-input" type="checkbox" value="" id="others_req">
                      <label class="form-check-label" for="others_req">
                        Others
                      </label>
                    </div>
                  </div>
                  <div class="col-12 collapse" id="others_request">
                    <div class="form-floating mt-3">
                      <input type="text" class="form-control" id="floatingInput" value="" placeholder=""
                        v-model="get_request">
                      <label for="floatingInput">Please Specify</label>
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
          <div class="modal-footer">
            <button type="button" class="btn btn-danger" data-bs-dismiss="modal" @click="">Close</button>
            <button type="button" class="btn btn-primary" @click="addRequest"
              v-if="get_request != '' && get_purpose != ''" v-show="confirmbtn">Confirm</button>
            <button class="btn btn-primary" type="button" disabled v-if="sending">
              <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
              <span role="status">Sending...</span>
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import { auth, db } from '@/firebase/init';
import { setDoc, doc, addDoc, collection, getDoc } from 'firebase/firestore';
import Swal from 'sweetalert2';
export default {
  data() {
    return {
      get_request: [],
      set_request: [],
      get_purpose: [],
      set_purpose: [],
      firstname: '',
      lastname: '',
      request_type: '',
      id: 1,
      sending: false,
      confirmbtn: true
    }
  },
  created() {
    this.getUser();
  },
  methods: {
    pushRequest() {
      this.set_request.push(this.get_request);
      this.set_purpose.push(this.get_purpose);
    },
    /* reloadPage() {
      window.location.reload();
    }, */
    async getUser() {
      const docSnap = await getDoc(doc(db, 'users', auth.currentUser.email))
      if (docSnap.exists()) {
        this.firstname = docSnap.data().firstname;
        this.lastname = docSnap.data().lastname;
      }
    },
    async setIdToNotification(id) {
      await setDoc(doc(db, 'notifications', id), {
        id: id
      }, { merge: true })
    },
    async sendRequestNotification() {
      const docRef = await addDoc(collection(db, 'notifications'), {
        notification_to: auth.currentUser.email,
        date_notified: new Date().toLocaleString(),
        content_title: 'Request Notification',
        content_notif: `Good day! Your request is/are successfully sent`,
        request: this.set_request[0],
        purpose: this.set_purpose[0],
        status: '1'
      })
      this.setIdToNotification(docRef.id);
      console.log(docRef.id);

    },
    async addRequest() {
      this.sending = true;
      this.confirmbtn = false;
      this.pushRequest();
      const requestId = await addDoc(collection(db, 'requests'), {
        email: auth.currentUser.email,
        date_requested: new Date().toLocaleString(),
        request: this.set_request[0],
        purpose: this.set_purpose[0],
        status: '0',
        name: this.firstname + ' ' + this.lastname,
      })
      await setDoc(doc(db, 'requests', requestId.id), {
        id: requestId.id
      }, { merge: true })
      this.sendRequestNotification();
      this.$refs.requestForm.reset();
      this.sending = false;
      this.get_purpose = [];
      this.get_request = [];
      /* Swal.fire({
        position: "center",
        icon: "success",
        title: "Transaction Request Created",
        showConfirmButton: false,
        timer: 1500,
        width: 300,
        height: '150px',
        customClass: {
          popup: 'alert-size',
          title: 'title-size',
        }
      }); */
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "success",
        title: "Transaction request created!"
      });
    }
  }
}
</script>