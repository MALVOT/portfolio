<script setup>
    import { ref } from 'vue';
    
    const prenom = ref('');
    const nom = ref('');
    const email = ref('');
    const confirmationMessage = ref('');
    const openMessageEnvoi = ref(false);
    
    const submitForm = () => {
        // Soumettre le formulaire et construire le message de confirmation
        confirmationMessage.value = `Bonjour ${nom.value} ${prenom.value}! Votre email (${email.value}) a été envoyé avec succès.`;
    };
    
    const clearForm = () => {
        // Effacer les champs du formulaire et le message de confirmation
        prenom.value = '';
        nom.value = '';
        email.value = '';
        confirmationMessage.value = '';
    };
    </script>
<template>
    <form>
        
        <h3>Formulaire de contact:</h3>
        
        <div class="align">
            <label for="first-name" class="champs1">Nom</label>
                <input type="text" name="first-name" id="first-name" class="dimension1">
        </div>
        <div class="align">
            <label for="last-name" class="champs2">Prénom</label>
                <input type="text" name="last-name" id="last-name" class="dimension2">
        </div>
        <div class="align">
            <label for="objet" class="champs3">Objet</label>
                <input type="text" name="objet" id="objet" class="dimension3">
        </div>
        <div class="align">
            <label for="message" class="champs4">Message</label>
                <input type="text" name="message" id="message" class="dimension4">
        </div>
        
        <button type="submit">Envoyer</button>
    </form>

</template>

<style scoped>
form{
    border: 16px solid;
}

    </style>