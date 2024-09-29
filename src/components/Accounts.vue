<template>
    <div class="modal fade" id="account" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">Account</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="card">
                        <div class="card-body">
                            <div class="form-floating mb-3">
                                <input type="email" class="form-control" id="floatingInput"
                                    placeholder="name@example.com" disabled>
                                <label for="floatingInput">Email address</label>
                            </div>
                            <div class="row">
                                <div class="col-12">
                                    <div class="form-floating">
                                        <input type="text" class="form-control" id="floatingPassword"
                                            placeholder="Password">
                                        <label for="floatingPassword">Firstname</label>
                                    </div>
                                </div>
                                <div class="col-12 mt-2">
                                    <div class="form-floating">
                                        <input type="text" class="form-control" id="floatingPassword"
                                            placeholder="Password">
                                        <label for="floatingPassword">Middlename</label>
                                    </div>
                                </div>
                                <div class="col-12 mt-2">
                                    <div class="form-floating">
                                        <input type="text" class="form-control" id="floatingPassword"
                                            placeholder="Password">
                                        <label for="floatingPassword">Lastname</label>
                                    </div>
                                </div>
                                <div class="col-6 mt-3">
                                    <div class="form-floating">
                                        <input type="text" class="form-control" id="floatingPassword"
                                            placeholder="Password">
                                        <label for="floatingSelect">Course/Program</label>
                                    </div>
                                </div>
                                <div class="col-6 mt-3">
                                    <div class="form-floating">
                                        <input type="text" class="form-control" id="floatingPassword"
                                            placeholder="Password">
                                        <label for="floatingSelect">Major</label>
                                    </div>
                                </div>
                                <div class="col-6 mt-3">
                                    <div class="form-floating">
                                        <input type="text" class="form-control" id="floatingPassword"
                                            placeholder="Password">
                                        <label for="floatingSelect">Status</label>
                                    </div>
                                    <div class="form-floating mt-3">
                                        <input type="text" class="form-control" id="floatingPassword"
                                            placeholder="Password">
                                        <label for="floatingPassword">Year Graduated</label>
                                    </div>
                                </div>
                                <div class="col-6 mt-3">
                                    <div class="form-floating">
                                        <input type="text" class="form-control" id="floatingPassword"
                                            placeholder="Password">
                                        <label for="floatingSelect">Transferred?</label>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-success">Update</button>
                </div>
            </div>
        </div>
    </div>
</template>