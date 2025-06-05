window.addEventListener('DOMContentLoaded', () => {
    const descriptions = {
        "CB1.jfif": 
            "Stage au sein du service Qualité, Sécurité et Environnement de l’entreprise Charcuterie du Blavet.<br>" +
            "- Refonte du document unique d’évaluation des risques professionnels.<br>" +
            "- Evaluation du risque chimique.<br>" +
            "- Mise à jour de la stratégie d’évacuation en cas d’incendie.<br>" +
            "- Sensibilisation du personnel à l’évacuation.",

        "SDIS.jpg": 
            "Alternance au sein du service Santé, Sécurité et Qualité de Vie en Service du service départemental d’incendie de secours du Morbihan.<br>" +
            "- Formalisation du processus d’évaluation des risques professionnels.<br>" +
            "- Développement de la démarche système de management de la Santé, Sécurité et Qualité de Vie en Service.<br>" +
            "- Création d’un référentiel interne SSQVS.<br>" +
            "- Analyse d’accidents.<br>" +
            "- Préparation des formations spécialisées en matière de santé, de sécurité et de conditions de travail.",

        "MN1.webp": 
            "Alternance au sein d'une unité de marins-pompiers de la marine nationale.<br>" +
            "- Rédaction de doctrines d'intervention.<br>" +
            "- Participation à des missions de secours.<br>" +
            "- Mise en place d'outils informatiques."
    };

    const photoContainers = document.querySelectorAll('.photo-container img');
    const descriptionText = document.getElementById('description-text');

    photoContainers.forEach(img => {
        img.addEventListener('click', () => {
            const src = img.getAttribute('src');
            const text = descriptions[src] || "Aucune description disponible.";
            descriptionText.innerHTML = text;
        });
    });
});