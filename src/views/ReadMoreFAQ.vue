<template>
    <NavigationBar />
    <div class="container d-flex justify-content-center align-items-center flex-column p-4">
        <h3 class="p-lg-3">Frequently Asked Question/s</h3>
        <div class="col-12 col-lg-8 p-2">
            <div class="accordion accordion-flush shadow" id="accordionFlushExample">
                <div class="accordion-item" v-for="faqs in faq">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            :data-bs-target="'#' + faqs.id" aria-expanded="false" aria-controls="flush-collapseOne">
                            {{ faqs.question }}
                        </button>
                    </h2>
                    <div :id="faqs.id" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">
                            <p>{{ faqs.answer }}</p>
                            <p><b>Requirement/s</b></p>
                            <ul v-for="req in faqs.requirements">
                                <li>{{ req }}</li>
                            </ul>
                            <div v-if="faqs.cost != null">
                                <p><b>Cost</b></p>
                                <ul v-for="cost in faqs.cost">
                                    <li>{{ cost }}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import NavigationBar from '@/components/NavigationBar.vue';
import { db } from '@/firebase/init';
import { getDocs, query, collection } from 'firebase/firestore';
export default {
    components: {
        NavigationBar
    },
    data() {
        return {
            faq: []
        }
    },
    created() {
        this.getFAQs();
    },
    methods: {
        async getFAQs() {
            const querySnap = await getDocs(query(collection(db, 'faq')));
            querySnap.forEach((doc) => {
                this.faq.push(doc.data());
                /* console.log(this.user_requests); */
            })
        }
    }
}
</script>