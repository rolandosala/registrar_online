<template>
    <div class="modal fade" id="account" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">Account Information</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="card">
                        <div class="card-body">
                            <div class="form-floating mb-3">
                                <input type="email" class="form-control" id="floatingInput"
                                    placeholder="name@example.com" v-model="email" disabled>
                                <label for="floatingInput">Email address</label>
                            </div>
                            <div class="row">
                                <div class="col-12">
                                    <div class="form-floating">
                                        <input type="text" class="form-control" v-model="firstname" id="floatingPassword"
                                            readonly>
                                        <label for="floatingPassword">Firstname</label>
                                    </div>
                                </div>
                                <div class="col-12 mt-2">
                                    <div class="form-floating">
                                        <input type="text" class="form-control" v-model="middlename" id="floatingPassword"
                                            readonly>
                                        <label for="floatingPassword">Middlename</label>
                                    </div>
                                </div>
                                <div class="col-12 mt-2">
                                    <div class="form-floating">
                                        <input type="text" class="form-control" v-model="lastname" id="floatingPassword"
                                            readonly>
                                        <label for="floatingPassword">Lastname</label>
                                    </div>
                                </div>
                                <div class="col-6 mt-3">
                                    <div class="form-floating">
                                        <input type="text" class="form-control" v-model="course" id="floatingPassword"
                                            readonly>
                                        <label for="floatingSelect">Course/Program</label>
                                    </div>
                                </div>
                                <div class="col-6 mt-3">
                                    <div class="form-floating">
                                        <input type="text" class="form-control" v-model="major" id="floatingPassword"
                                            readonly>
                                        <label for="floatingSelect">Major</label>
                                    </div>
                                </div>
                                <div class="col-6 mt-3">
                                    <div class="form-floating">
                                        <input type="text" class="form-control" v-model="status" id="floatingPassword"
                                            readonly>
                                        <label for="floatingSelect">Status</label>
                                    </div>
                                    <div class="form-floating mt-3">
                                        <input type="text" class="form-control" v-model="yeargrad" id="floatingPassword"
                                            readonly>
                                        <label for="floatingPassword">Year Graduated</label>
                                    </div>
                                </div>
                                <div class="col-6 mt-3">
                                    <div class="form-floating">
                                        <input type="text" class="form-control" v-model="transferred" id="floatingPassword"
                                            readonly>
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
<script>
import { auth, db } from '@/firebase/init';
import { getDoc, doc } from 'firebase/firestore';

export default{
    data() {
        return {
            email: auth.currentUser.email,
            firstname: '',
            lastname: '',
            middlename: '',
            course: '',
            major: '',
            status: '',
            transferred: '',
            yeargrad: '',
            user_data: []
        }
    },
    created() {
        this.getUserData();
    },
    methods: {
        async getUserData() {
            const docSnap = await getDoc(doc(db, 'users', this.email));
            this.user_data.push(docSnap.data());
            this.firstname = this.user_data[0].firstname;
            this.middlename = this.user_data[0].middlename;
            this.lastname = this.user_data[0].lastname;
            this.course = this.user_data[0].course;
            this.major = this.user_data[0].major;
            this.status = this.user_data[0].status;
            this.transferred = this.user_data[0].transferred;
            this.yeargrad = this.user_data[0].yeargraduated;
        }
    }
}
</script>