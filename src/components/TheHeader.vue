<script setup>


</script>
<template>
    
    <header>
        <a href="../fichier html/page d'accueil.html"><img src="../assets/image/522768__majestic-white-lion_p.jpg" class="retour" alt="logo de retour à la page d'accueil"></a>
        <p> LADREZEAU XAVIER</p>
    </header>
        <nav> 
        <a href="#presentation">Présentation</a>
        <a href="#creations">Mes créations</a>
        <a href="#formulaire">Formulaire de contact</a>
    </nav>



</template>

<style scoped>

    header{
        display: flex;
        flex-direction: column;
        align-items: center;
        background-image: url(../src/assets/image/texture.jpg);
        background-repeat: repeat;
        }
    img{
        border-radius: 50%;
        box-shadow: 0px 0px 10px 10px white;
        width: 150px;
        height: 150px;
        }
    nav{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        background-color: black;
        }
    a{
        color: white;
        text-decoration: none;
    }     
    a:hover{
        text-decoration: underline;
    }      

    
</style>
