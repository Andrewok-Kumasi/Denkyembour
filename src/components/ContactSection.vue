<template>
    <div class="ContactSection">
        <div class="contact">
            <h3>Contact</h3>
            <p>Feel free to contact me with any questions.</p>
            <h4>Email</h4>
            <p>MyEmail.com</p>
            <h4>Phone</h4>
            <p>0123456789</p>
            <br>
        </div>
        <div class="contactForm">
            <form @submit.prevent="submitForm" class="form">
                <input type="text" v-model="formName" placeholder="Name">
                <input type="text" v-model="formEmail" placeholder="Email">
                <textarea v-model="formMessage" placeholder="Message"></textarea>
                <button type="submit">Submit</button>
            </form>
            <div v-if="submitted">
                <h3>Form Data:</h3>
                <p>Name: {{ formName }}</p>
                <p>Email: {{ formEmail }}</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "ContactSection",
    data() {
        return {
            formName: '',
            formEmail: '',
            formMessage: '',
            submit: false
        }
    },

}
</script>
<style>
.ContactSection {
    width: 100vw;
    height: 50vh;
    margin-block: 5rem;
    background-color: aquamarine;
    position: static;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}

.form {
    display: grid;
    grid-auto-rows: auto;
    width: 40vw;
    gap: 1.3rem;
}

input,
textarea {
    background-color: rgb(360, 360, 360, 0.65);
    border: 1px;
    padding-inline: 5px;
}

.contact {
    width: 40vw;
    grid-auto-rows: auto;
}

.contactForm {
    widows: 40vw;
}
</style>