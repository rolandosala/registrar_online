<template>
    <div class="modal fade" id="notification" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">Notifications</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" ></button>
                </div>
                <div class="modal-body">
                    <div class="accordion accordion-flush" id="accordionFlushExample">
                        <div class="accordion-item" v-for="notif in notifications">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    :data-bs-target="'#' + notif.id" aria-expanded="false"
                                    aria-controls="flush-collapseOne" @click="markReadNotification(notif.id)">
                                    <b>{{ notif.content_title }}</b>
                                    <span v-if="notif.status == 1" class="badge text-bg-danger mx-2">New Unread
                                        Notification</span>
                                </button>
                            </h2>
                            <div :id="notif.id" class="accordion-collapse collapse"
                                data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    <p>{{ notif.content_notif }}</p>
                                    <div v-if="notif.content_title == 'Request Notification'">
                                        <p>Date: {{ notif.date_notified }}</p>
                                        <p>Requested Document/s:
                                            <span v-for="request in notif.request">{{ request }}</span>
                                        </p>
                                        <p>Purpose:
                                            <span v-for="purpose in notif.purpose">{{ purpose }}</span>
                                        </p>
                                    </div>
                                    <div v-if="notif.content_title == 'Transaction Notification'">
                                        <p>Date Paid: <b>{{ notif.date_notified }}</b></p>
                                        <p>O.R Number: <b>{{ notif.or_number }}</b></p>
                                        <p>Docstamp Number: <b>{{ notif.docstamp }}</b></p>
                                    </div>
                                    <hr>
                                    <p v-if="notif.request != null"><b>Requirement/s</b></p>
                                    <div v-if="notif.request != null">
                                        <div v-if="notif.request.includes('Diploma Re-issuance')">
                                            <p>- For Diploma re-issuance</p>
                                            <ul>
                                                <li>Secure Affidavit of loss</li>
                                                <li>Php 100.00 for the payment</li>
                                                <li>1 Docstamp(You may avail in cashiers office)</li>
                                            </ul>
                                        </div>
                                        <div v-if="notif.request.includes('Undergrad TOR')">
                                            <p>- For Undergraduate Transcript of Records</p>
                                            <ul>
                                                <li>Clearance (This will be checked during transaction)</li>
                                                <li>Php 50.00 per page for the Transcript Payment </li>
                                                <li>1 Docstamp(You may avail in cashiers office)</li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Understood</button>
                </div> -->
            </div>
        </div>
    </div>
</template>
<script>
import { db, auth } from '@/firebase/init';
import { getDocs, query, collection, where, getCountFromServer, updateDoc, doc } from 'firebase/firestore';
export default {
    data() {
        return {
            notifications: [],
        }
    },
    created() {
        this.getNotifications();
    },
    methods: {
        async getNotifications() {
            const querySnap = await getDocs(query(collection(db, 'notifications'), where('notification_to', '==', auth.currentUser.email)));
            querySnap.forEach((doc) => {
                this.notifications.push(doc.data());
                /* console.log(this.notifications); */
            })
        }, 
        async markReadNotification(id) {
            await updateDoc(doc(db, 'notifications', id), {
                status: 0
            })

        },
    }
}
</script>