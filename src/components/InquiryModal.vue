<template>
    <div class="modal fade" id="inquiryModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <form action="#">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="staticBackdropLabel">What would like to inquire?</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-12">
                                <div class="form-floating">
                                    <textarea class="form-control" placeholder="Leave a comment here"
                                        id="floatingTextarea2" style="height: 200px" v-model="inquiry" @input="checkInquiry"></textarea>
                                    <label for="floatingTextarea2">Inquiry Box</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" @click="sendInquiry" v-if="sendbtn">Send
                            Inquiry</button>
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
import { addDoc, collection, doc } from 'firebase/firestore';
import Swal from 'sweetalert2';

export default {
    data() {
        return {
            email: auth.currentUser.email,
            inquiry: '',
            sending: false,
            sendbtn: false,
        }
    },
    methods: {
        checkInquiry() {
            if (this.inquiry.length <= 5) {
                this.sendbtn = true;
            }
        },
        async sendInquiry() {
            try {
                this.sending = true;
                this.sendbtn = false;
                await addDoc(collection(db, 'inquiry'), {
                    inquiry_by: this.email,
                    inquiry: this.inquiry,
                    inquiry_date: new Date().toLocaleString()
                })
                this.sending = false;
                this.inquiry = '';
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Inquiry Sent",
                    showConfirmButton: false,
                    timer: 1500,
                    width: 300,
                    height: '150px',
                    customClass: {
                        popup: 'alert-size',
                        title: 'title-size',
                    }
                });
            } catch (error) {
                console.log(error);
            }
        }
    }
}
</script>
<style>
.title-size{
    font-size: 1em;
}
</style>