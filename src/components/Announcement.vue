<template>
    <section class="py-5 px-2 p-lg-5 d-flex justify-content-center align-items-center " :style="{ height: 'auto' }" id="announcements">
        <div class="row">
            <div class="col-12 col-lg-6">
                <div id="carouselExampleCaptions" class="carousel slide bg-primary">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0"
                             class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                            aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                            aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active w-100">
                            <img src="/university.webp" class="d-block w-100" alt="...">
                            <div class="carousel-caption d-none d-md-block">
                                <h5>First slide label</h5>
                                <p>Some representative placeholder content for the first slide.</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="/university.webp" class="d-block w-100" alt="...">
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Second slide label</h5>
                                <p>Some representative placeholder content for the second slide.</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="/university.webp" class="d-block w-100" alt="...">
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Third slide label</h5>
                                <p>Some representative placeholder content for the third slide.</p>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div class="col-12 col-lg-6 text-start text-lg-start" v-for="data in announcement">
                <h3 class=" text-start">ANNOUNCEMENT</h3>
                <p class="fs-4">
                    {{ data.title }}
                </p>
                <p class="fs-6">
                    {{ data.content }}
                </p>
            </div>
        </div>
    </section>
    
</template>
<script>
import { db } from '@/firebase/init';
import { getDocs, query, collection } from 'firebase/firestore';

export default {
    data() {
        return {
            announcement: []
        }
    },
    mounted() {
        this.getAnnouncement();
    },
    methods: {
        async getAnnouncement() {
            const querySnap = await getDocs(query(collection(db, 'announcement')));
            querySnap.forEach((doc) => {
                this.announcement.push(doc.data());
                console.log(this.announcement);
            })
        }
    }
}
</script>