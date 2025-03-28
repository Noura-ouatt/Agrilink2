document.addEventListener("DOMContentLoaded", function () {
    const btnConnexion = document.getElementById("connexion");
    const btnInscription = document.getElementById("inscription");
    const formConnexion = document.getElementById("formulaire-connexion");
    const formInscription = document.getElementById("formulaire-inscription");
    const lienAfficherInscription = document.getElementById("afficher-inscription");
    const lienAfficherConnexion = document.getElementById("afficher-connexion");

    // Fonction pour afficher le formulaire de connexion et cacher l'inscription
    function afficherConnexion() {
        formConnexion.classList.remove("hidden");
        formInscription.classList.add("hidden");
        btnConnexion.classList.add("border-b-2", "border-green-800", "text-green-800");
        btnInscription.classList.remove("border-b-2", "border-green-800", "text-green-800");
        btnInscription.classList.add("text-gray-500");
    }

    // Fonction pour afficher le formulaire d'inscription et cacher la connexion
    function afficherInscription() {
        formConnexion.classList.add("hidden");
        formInscription.classList.remove("hidden");
        btnInscription.classList.add("border-b-2", "border-green-800", "text-green-800");
        btnConnexion.classList.remove("border-b-2", "border-green-800", "text-green-800");
        btnConnexion.classList.add("text-gray-500");
    }

    // Écouteurs d'événements pour les boutons
    btnConnexion.addEventListener("click", afficherConnexion);
    btnInscription.addEventListener("click", afficherInscription);
    lienAfficherInscription.addEventListener("click", function (e) {
        e.preventDefault();
        afficherInscription();
    });
    lienAfficherConnexion.addEventListener("click", function (e) {
        e.preventDefault();
        afficherConnexion();
    });

    // Afficher le formulaire de connexion par défaut
    afficherConnexion();
});