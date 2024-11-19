<template>
    <section class="p-3 p-lg-5 d-flex justify-content-center align-items-center linear-bg" :style="{ height: 'auto' }"
        id="faq">
        <div class="row">
            <div class="col-12 col-lg-6 p-4">
                <h1 class="fw-bold text-white text-shadow">FREQUENTLY ASKED QUESTIONS</h1>
                <p class="fs-4 text-white text-shadow">
                    Have a question/inquiry in mind, please don't hesitate in messaging us.
                    You may create an account and message us or follow our social media account.
                </p>
                <div class="d-sm-flex justify-content-around flex-row">
                    <RouterLink to="/readmorefaq">
                        <button class="btn btn-outline-primary rounded-pill fs-5 px-5 text-white">Read More...</button>
                    </RouterLink>
                    <button class="btn btn-outline-primary rounded-pill fs-5 px-5 text-white">Follow us on Facebook</button>
                </div>
                
            </div>
            <div class="col-12 col-lg-6 p-2 faq_container">
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
                                <p v-if="faqs.cost != null"><b>Cost</b></p>
                                <ul v-for="cost in faqs.cost">
                                    <li>{{ cost }}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>
<script>
import { db } from '@/firebase/init';
import { getDocs, query, collection, limit } from 'firebase/firestore';

export default {
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
            const querySnap = await getDocs(query(collection(db, 'faq'), limit(5)));
            querySnap.forEach((doc) => {
                this.faq.push(doc.data());
            })
        }
    }
}
</script>
<style scoped>
.linear-bg {
    background-color:  rgb(5, 40, 134);
    height: 100vh;
    width: 100%;
    position: relative;
    background-repeat: no-repeat;
    background-size: cover;
}

.text-shadow {
    text-shadow: 2px 2px 5px black;
}

.faq_container {
    height: auto;
    overflow-y: scroll;
}

</style>