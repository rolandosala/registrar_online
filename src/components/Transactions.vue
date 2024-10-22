<template>
    <section class="p-1">
        <div class="col-12 p-4" style="overflow: scroll;">
            <h1 class="fw-bold" style="position: sticky; left: 0;">Transactions</h1>
            <table class="table">
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
                    <tr v-for="request in user_requests[0]">
                        <td scope="row">{{ request.date_requested }}</td>
                        <td v-for="req_type in request.request">{{ req_type }}</td>
                        <td v-for="pur_type in request.request">{{ pur_type }}</td>
                        <td>
                            <span class="badge text-bg-danger" v-if="request.status == 1">Pending</span> | <span class="badge text-bg-danger">Unpaid</span>
                        </td>
                        <td>{{ request.date_released }}</td>
                        <td>{{ request.released_to }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
</template>
<script>
import { db } from '@/firebase/init';
import { collection, query, getDocs } from 'firebase/firestore';

export default {
    data() {
        return{
            user_requests: [],
            
        }
        
    },
    created() {
        this.getRequest()
    },
    methods: {
        
        async getRequest() {
            const querySnap = await getDocs(query(collection(db, 'users')));
            querySnap.forEach((doc) => {
                this.user_requests.push(doc.data().requestInformation);
                console.log(this.user_requests[0]);
            })
        }
    }
}
</script>