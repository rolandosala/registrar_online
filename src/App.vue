<template>
    <!-- <p v-for="country in countries" :key="country.name">
        Country: {{ country.name }}
    </p> -->
    <RouterView />

</template>
<script>
import { RouterView } from 'vue-router';
import { collection, addDoc, setDoc, doc, updateDoc, getDoc, query, getDocs, count, where } from 'firebase/firestore';
import db from './firebase/init';

export default {
    data() {
        return {
            name: '',
            countries: [],
        }
    },
    created() {
        /* this.createUser(); */
        /* this.createCountry(); */
        /* this.addCapital(); */
        /* this.updateCountry(); */
        /* this.getCountry(); */
        /* this.getCountries(); */
        this.getSpecificCountry();
    },
    methods: {
        /* async createUser() {
            const colRef = collection(db, 'users');
            const dataObj = {
                firstName: 'Roland',
                lastName: 'Doe',
                dob: '1990'
            };
            const docRef = await addDoc(colRef, dataObj);
            console.log('Document created with ID : ', docRef.id);

        }, */
        /* async createCountry() {
            await setDoc(doc(db, 'countries', 'ASIA'), {
                name: 'Japan'
            })
        }, */
        /* async addCapital() {
            await setDoc(doc(db, 'countries', 'ASIA'), {
                capital: 'Tokyo'
            }, { merge: true })
        } */
        /*  async updateCountry() {
          await updateDoc(doc(db, 'countries', 'ASIA'), {
              name: 'Philippines'
          })
         }, */
        /* async getCountry() {
            const docSnap = await getDoc(doc(db, 'countries', 'ASIA'))
            if (docSnap.exists()) {
                this.name = docSnap.data().capital;
            } else {
                console.log('Document does not existed');
            }
        }, */
        /* async getCountries() {
            const querySnap = await getDocs(query(collection(db, 'countries')));
            querySnap.forEach((doc) => {
                this.countries.push(doc.data())
            })
        }, */
        async getSpecificCountry() {
            const q = query(collection(db, 'countries'), where('name', '==', 'Texas'));
            const querySnap = await getDocs(q);

            querySnap.forEach((doc) => {
                this.countries.push(doc.data());
            })
        }
    }
}
</script>
