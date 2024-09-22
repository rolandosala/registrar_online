<template>
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
    aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <form action="#">
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
                        <input class="form-check-input" type="checkbox" value="" id="transcript_undergrad">
                        <label class="form-check-label" for="transcript_undergrad">
                          Undergraduate/College
                        </label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="transcript_postgrad">
                        <label class="form-check-label" for="transcript_postgrad">
                          Post-graduate
                        </label>
                      </div>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="diploma">
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
                        <input class="form-check-input" type="checkbox" value="" id="auth_transcript">
                        <label class="form-check-label" for="auth_transcript">
                          Transcript of Records
                        </label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="auth_cert">
                        <label class="form-check-label" for="auth_cert">
                          Certifications
                        </label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="auth_diploma">
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
                        <input class="form-check-input" type="checkbox" value="" id="cert_graduation">
                        <label class="form-check-label" for="cert_graduation">
                          Graduation
                        </label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="cert_unitsearned">
                        <label class="form-check-label" for="cert_unitsearned">
                          Units Earned
                        </label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="cert_CAR">
                        <label class="form-check-label" for="cert_CAR">
                          Academic Requirement(C.A.R)
                        </label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="cert_proficiency">
                        <label class="form-check-label" for="cert_proficiency">
                          Proficiency
                        </label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="cert_enrollment">
                        <label class="form-check-label" for="cert_enrollment">
                          Enrollment
                        </label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="cert_CAV">
                        <label class="form-check-label" for="cert_CAV">
                          Certified, Authenticated and Verified (C.A.V)
                        </label>
                      </div>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="dismissal">
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
                      <input class="form-check-input" type="checkbox" value="" id="localemployment">
                      <label class="form-check-label" for="localemployment">
                        Local Employment
                      </label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="employmentabroad">
                      <label class="form-check-label" for="employmentabroad">
                        Employment Abroad
                      </label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="boardexam">
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
                      <input class="form-check-input" type="checkbox" value="" id="promotion">
                      <label class="form-check-label" for="promotion">
                        Promotion
                      </label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="ranking">
                      <label class="form-check-label" for="ranking">
                        Ranking
                      </label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="transfer">
                      <label class="form-check-label" for="transfer">
                        Transfer/Further Studies
                      </label>
                    </div>
                  </div>
                  <div class="col-12 collapse" id="others_purpose">
                    <div class="form-floating mt-3">
                      <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                      <label for="floatingInput">Please Specify</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
            <button type="button" class="btn btn-primary">Confirm</button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>