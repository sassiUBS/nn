function formation(type) {
    var image;
    var texte;

    if (type == 1) {
        image = "VH.jpg";
        texte = "Baccalauréat spécialités Mathématiques et sciences de la Vie et de la Terre - Lycée Victor Hugo à Hennebont.";
    } else if (type == 2) {
        image = "HSE.jpg";
        texte = "BUT Hygiène Sécurité Environnement - IUT de Lorient.";
    } else if (type == 3) {
        image = "ENSIBS.jfif";
        texte = "Formation d'ingénieur en Génie Industriel 4.0 - ENSIBS.";
    }

    document.getElementById('monImage').src = image;
    document.getElementById('texteFormation').textContent = texte;
}