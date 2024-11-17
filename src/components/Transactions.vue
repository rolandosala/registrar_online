<template>
    <section class="p-1" id="transactions">
        <div class="col-12 p-4" style="overflow: scroll;">
            <div class="card">
                <div class="card-header d-flex justify-content-between">
                    <h3 class="fw-bold" style="position: sticky; left: 0;" v-if="!fetching">Transactions</h3>
                    <div class="d-flex align-items-center col-lg-12" v-if="fetching">
                        <h3 role="status">Fetching Transaction...</h3>
                        <div class="spinner-border ms-auto" aria-hidden="true"></div>
                    </div>
                </div>
                <div class="card-body">
                    <table class="table table-hover" ref="table">
                        <thead>
                            <tr>
                                <th scope="col">Date Requested</th>
                                <th scope="col">Request Type</th>
                                <th scope="col">Purpose</th>
                                <th scope="col">Status</th>
                                <th scope="col">Date Released</th>
                                <th scope="col">Released To</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="request in user_requests">
                                <td scope="row">{{ request.date_requested }}</td>
                                <td>
                                    <span v-for="req_type in request.request">{{ req_type }}, </span>
                                </td>
                                <td v-for="pur_type in request.purpose">{{ pur_type }}</td>
                                <td>
                                    <span class="badge text-bg-danger mx-1" v-if="request.status == 0">Pending</span>
                                    <span class="badge text-bg-danger mx-1" v-if="request.status == 0">Unpaid</span>
                                    <span class="badge text-bg-warning mx-1"
                                        v-if="request.status == 1">Processing</span>
                                    <span class="badge text-bg-secondary mx-1"
                                        v-if="request.status == 2">Completed</span>
                                    <span class="badge text-bg-success mx-1" v-if="request.status == 3">Released</span>
                                    <span class="badge text-bg-success mx-1" v-if="request.status > 0">Paid</span>

                                </td>
                                <td>{{ request.date_release }}</td>
                                <td>{{ request.release_to }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import { db, auth } from '@/firebase/init';
import { collection, query, getDocs, where } from 'firebase/firestore';

export default {
    data() {
        return {
            user_requests: [],
            fetching: false,
        }

    },
    created() {
        this.getRequest()
    },
    methods: {
        async getRequest() {
            this.fetching = true;
            const querySnap = await getDocs(query(collection(db, 'requests'), where('email', '==', auth.currentUser.email)));
            querySnap.forEach((doc) => {
                this.user_requests.push(doc.data());
            });
            this.fetching = false;
        },
        refresh() {
            this.$refs.table.innerHTML = '';
            this.getRequest();
        }
    }
}
</script>
<style>
tr:hover{
    cursor: pointer;
}
</style>