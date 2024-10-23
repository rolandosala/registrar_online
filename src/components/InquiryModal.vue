<template>
    <div class="modal fade" id="inquiryModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <form action="#" ref="inquiryForm">
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
                                        id="floatingTextarea2" style="height: 200px" v-model="inquiry"></textarea>
                                    <label for="floatingTextarea2">Inquiry Box</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
                        <button type="button" class="btn btn-primary" @click="sendInquiry">Send Inquiry</button>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>
<script>
import { auth, db } from '@/firebase/init';
import { addDoc, collection, doc } from 'firebase/firestore';

export default {
    data() {
        return {
            email: auth.currentUser.email,
            inquiry: ''
        }
    },
    methods: {
        async sendInquiry() {
            await addDoc(collection(db, 'inquiry'), {
                inquiry_by: this.email,
                inquiry: this.inquiry,
                inquiry_date: new Date().toLocaleString()
            })
            console.log('Inquiry Sent');
            this.$refs.inquiryForm.reset();
        }
    }
}
</script>