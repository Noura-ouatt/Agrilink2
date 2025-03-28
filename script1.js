// Tableau pour stocker les produits
let produits = [];

// Fonction pour charger les produits sauvegardés lors du chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    // Récupérer les produits du localStorage
    const produitsStockes = localStorage.getItem('produits');
    if (produitsStockes) {
        produits = JSON.parse(produitsStockes);
        afficherProduits();
    }

    // Ajouter un écouteur d'événement sur le formulaire
    document.getElementById('produitForm').addEventListener('submit', ajouterProduit);
});

// Fonction pour ajouter un nouveau produit
function ajouterProduit(e) {
    e.preventDefault();
    
    const nom = document.getElementById('Nomproduit').value;
    const categorie = document.getElementById('Categorieproduit').value;
    const quantite = document.getElementById('Quantitéproduit').value;
    const prix = document.getElementById('Prixproduit').value;
    
    // Créer un objet produit
    const produit = {
        id: Date.now(),  // Utiliser timestamp comme ID unique
        nom,
        categorie,
        quantite,
        prix
    };
    
    // Ajouter le produit au tableau
    produits.push(produit);
    
    // Sauvegarder dans localStorage
    sauvegarderProduits();
    
    // Afficher les produits mis à jour
    afficherProduits();
    
    // Réinitialiser le formulaire
    document.getElementById('produitForm').reset();
    
    // Afficher une notification
    afficherNotification('Produit ajouté avec succès!');
}

// Fonction pour afficher les produits dans le tableau
function afficherProduits() {
    const tableBody = document.querySelector('#produitTable tbody');
    tableBody.innerHTML = '';
    
    produits.forEach(produit => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${produit.nom}</td>
            <td>${produit.categorie}</td>
            <td>${produit.quantite} kg</td>
            <td>${produit.prix} €/kg</td>
            <td>
                <button onclick="modifierProduit(${produit.id})" class="btn-edit">Modifier</button>
                <button onclick="supprimerProduit(${produit.id})" class="btn-delete">Supprimer</button>
            </td>
        `;
        
        tableBody.appendChild(row);
    });
}

// Fonction pour modifier un produit
function modifierProduit(id) {
    const produit = produits.find(p => p.id === id);
    
    if (produit) {
        // Remplir le formulaire avec les données du produit
        document.getElementById('Nomproduit').value = produit.nom;
        document.getElementById('Categorieproduit').value = produit.categorie;
        document.getElementById('Quantitéproduit').value = produit.quantite;
        document.getElementById('Prixproduit').value = produit.prix;
        
        // Supprimer le produit actuel
        supprimerProduit(id, false);
        
        // Faire défiler jusqu'au formulaire
        document.querySelector('.produit-form').scrollIntoView({ behavior: 'smooth' });
    }
}

// Fonction pour supprimer un produit
function supprimerProduit(id, avecNotification = true) {
    produits = produits.filter(produit => produit.id !== id);
    sauvegarderProduits();
    afficherProduits();
    
    if (avecNotification) {
        afficherNotification('Produit supprimé avec succès!');
    }
}

// Fonction pour sauvegarder les produits dans le localStorage
function sauvegarderProduits() {
    localStorage.setItem('produits', JSON.stringify(produits));
}

// Fonction pour afficher une notification
function afficherNotification(message) {
    // Créer un élément de notification
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    
    // Ajouter du style à la notification
    notification.style.position = 'fixed';
    notification.style.bottom = '20px';
    notification.style.right = '20px';
    notification.style.padding = '15px 20px';
    notification.style.backgroundColor = '#4caf50';
    notification.style.color = 'white';
    notification.style.borderRadius = '4px';
    notification.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
    notification.style.zIndex = '1000';
    notification.style.opacity = '0';
    notification.style.transform = 'translateY(20px)';
    notification.style.transition = 'opacity 0.3s, transform 0.3s';
    
    // Ajouter la notification au DOM
    document.body.appendChild(notification);
    
    // Afficher la notification avec une animation
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateY(0)';
    }, 10);
    
    // Supprimer la notification après 3 secondes
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateY(20px)';
        
        // Supprimer l'élément du DOM après la fin de l'animation
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Ajouter des effets visuels aux boutons
document.addEventListener('DOMContentLoaded', function() {
    // Ajouter des styles pour les boutons
    const style = document.createElement('style');
    style.textContent = `
        .btn-edit, .btn-delete {
            padding: 6px 10px;
            margin: 0 5px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            transition: all 0.3s;
        }
        
        .btn-edit {
            background-color: #2196F3;
            color: white;
        }
        
        .btn-delete {
            background-color: #f44336;
            color: white;
        }
        
        .btn-edit:hover {
            background-color: #0b7dda;
            transform: translateY(-2px);
        }
        
        .btn-delete:hover {
            background-color: #d32f2f;
            transform: translateY(-2px);
        }
    `;
    
    document.head.appendChild(style);
});

// Animation lors du chargement initial de la page
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('main section');
    
    sections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.5s, transform 0.5s';
        
        setTimeout(() => {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }, 300 + (index * 200));
    });
});