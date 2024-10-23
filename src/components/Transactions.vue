<template>
    <section class="p-1" id="transactions">
        <div class="col-12 p-4" style="overflow: scroll;">
            <div class="card">
                <div class="card-header d-flex flex-direction-row justify-content-between">
                    <h3 class="fw-bold" style="position: sticky; left: 0;">Transactions</h3>
                    <!-- <button class="col-1 btn bg-primary rounded-pill" @click="refresh">Refresh</button> -->
                </div>
                <div class="card-body">
                    <table class="table" ref="table">
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
                                    <span class="badge text-bg-danger" v-if="request.status == 1">Pending</span> | <span
                                        class="badge text-bg-danger">Unpaid</span>
                                </td>
                                <td>{{ request.date_released }}</td>
                                <td>{{ request.released_to }}</td>
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

        }

    },
    created() {
        this.getRequest()
    },
    methods: {
        async getRequest() {
            const querySnap = await getDocs(query(collection(db, 'requests'), where('requested_by', '==', auth.currentUser.email)));
            querySnap.forEach((doc) => {
                this.user_requests.push(doc.data());
                /* console.log(this.user_requests); */
            })
        },
        refresh() {
            this.$refs.table.innerHTML = '';
            this.getRequest();
        }
    }
}
</script>