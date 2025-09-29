// lancer en tapant dans la console :
// nod// includes() - Vérifie si un élément existe dans le tableau
const nationalites = olympians.map(p => p.nationality);
console.log("• includes() - Nationalité 'FRA' existe-t-elle?", nationalites.includes("FRA"));

// some() - Teste si au moins un élément satisfait une condition
const auMoinsUnLourd100 = olympians.some(p => p.weight != null && p.weight > 100);
console.log("• some() - Y a-t-il des athlètes > 100kg?", auMoinsUnLourd100);

// every() - Teste si tous les éléments satisfont une condition
const tousOntNom = olympians.every(p => p.name != null && p.name.length > 0);
console.log("• every() - Tous ont un nom?", tousOntNom);

import olympians from "./olympians.json" with { type: 'json' };

//** Compléter les en écrivant les parties :  */
/* TODO */
/* Désactiver COPILOT pour que vous fassiez l'effort de lire */

console.log("=== EXEMPLES DES MÉTHODES ARRAY AVEC LES DONNÉES OLYMPIANS ===\n");
console.log(`Nombre total d'athlètes olympiques: ${olympians.length}\n`);

// ===== MÉTHODES D'ACCÈS AUX ÉLÉMENTS =====

console.log("--- MÉTHODES D'ACCÈS AUX ÉLÉMENTS ---");

// at() - Accède à un élément par son indice (accepte les indices négatifs)
console.log("• at() - Premier athlète:", olympians.at(0)?.name);
console.log("• at() - Dernier athlète:", olympians.at(-1)?.name);
console.log();

// slice() - Extrait une portion du tableau
console.log("• slice() - Les 3 premiers athlètes:");
console.log(olympians.slice(0,3).map(p => `${p.name} de ${p.nationality}`));
console.log();

// ===== MÉTHODES DE RECHERCHE ET VÉRIFICATION =====

console.log("--- MÉTHODES DE RECHERCHE ET VÉRIFICATION ---");

// find() - Trouve le premier élément qui satisfait une condition
const premiereAthleteFeminine = olympians.find(d => d.sex === "female");
console.log("• find() - Première athlète féminine:", premiereAthleteFeminine?.name);

// findIndex() - Trouve l'indice du premier élément qui satisfait une condition
const indexAthleteF = olympians.findIndex(d => d.sex === "female");
console.log("• findIndex() - Index de la première athlète féminine:", indexAthleteF);

// indexOf() - Trouve l'indice d'un élément (comparaison stricte)
const sports = olympians.map(p => p.sport);
console.log("• indexOf() - Index de 'football' dans la liste des sports:", sports.indexOf("football"));

// lastIndexOf() - Trouve le dernier indice d'un élément
console.log("• lastIndexOf() - Dernier index de 'athletics':", sports.lastIndexOf("athletics"));

// includes() - Vérifie si un élément existe dans le tableau
const iles = olympians.map(p => p.nationality);
console.log("• includes() - Île 'Dream' existe-t-elle?", iles.includes("Dream"));

// some() - Teste si au moins un élément satisfait une condition
const auMoinsUnLourd6000 = olympians.some(p => p.weight != null && p.weight > 6000);
console.log("• some() - Y a-t-il des pingouins > 6000g?", auMoinsUnLourd6000);

// every() - Teste si tous les éléments satisfent une condition
const tousOntMasse = olympians.every(p => p.weight != null && p.weight > 0);
console.log("• every() - Tous ont une masse > 0?", tousOntMasse);
console.log();

// ===== MÉTHODES DE FILTRAGE =====

console.log("--- MÉTHODES DE FILTRAGE ---");

// filter() - Crée un nouveau tableau avec les éléments qui passent un test
const athletesMales = olympians.filter(d => d.sex === "male");
console.log("• filter() - Nombre d'hommes:", athletesMales.length);

const athletesLourds = olympians.filter(d => d.weight != null && d.weight > 100);
console.log("• filter() - Athlètes > 100kg:", athletesLourds.length);
console.log();

// ===== MÉTHODES DE TRANSFORMATION =====

console.log("--- MÉTHODES DE TRANSFORMATION ---");

// map() - Transforme chaque élément et crée un nouveau tableau
const descriptions = olympians.slice(0, 3).map(p => 
    `${p.name} (${p.nationality}) - ${p.weight}kg`
);
console.log("• map() - Descriptions des 3 premiers:");
descriptions.forEach(desc => console.log("  ", desc));

/* IMPORTANT : noter ce code 
 * L'usage de `map` pour n'extraire qu'une propriété.
 * Et l'usage de `[...new Set()]` sur le résultat pour ne garder que les noms uniques
 * Cela servira pour le prochain TP
 */
const nomsSports = olympians.map(d => d.sport);
console.log("• map() - Sports uniques:", [...new Set(nomsSports)].slice(0, 10));

// flatMap() - Applique une fonction puis aplatit d'un niveau
const caracteristiques = olympians.slice(0, 2).flatMap(p => 
    [p.name, p.nationality, p.sport]
);
console.log("• flatMap() - Caractéristiques aplaties:", caracteristiques);

// reduce() - Réduit le tableau à une seule valeur
const masseTotale = olympians.reduce((total, p) => 
    p.weight != null ? total + p.weight : total, 0
);
console.log("• reduce() - Masse totale:", masseTotale, "kilogrammes");

const nbrParSport = olympians.reduce((acc, p) => {
    acc[p.sport] = (acc[p.sport] || 0) + 1;
    return acc;
}, {} as Record<string, number>);
const topSports = Object.entries(nbrParSport).sort(([,a], [,b]) => b - a).slice(0, 5);
console.log("• reduce() - Top 5 sports:", Object.fromEntries(topSports));

// reduceRight() - Réduit de droite à gauche
const derniersNoms = olympians.slice(-3).reduceRight((acc, p) => 
    acc + p.name + " ", ""
);
console.log("• reduceRight() - 3 derniers noms (inversés):", derniersNoms.trim());
console.log();

// ===== MÉTHODES DE TRI =====

console.log("--- MÉTHODES DE TRI ---");

// sort() - Trie les éléments (modifie le tableau original)
const massesCopie = olympians.slice(0, 5).map(p => p.weight).filter(m => m != null);
console.log("• sort() - Masses avant tri:", massesCopie);
massesCopie.sort((a, b) => a - b); // différence pour tri
console.log("• sort() - Masses après tri croissant:", massesCopie);

// Tri par sport
const athletesParSport = olympians.slice(0, 10).sort((a, b) => 
    a.sport.localeCompare(b.sport)
);
console.log("• sort() - 10 premiers triés par sport:");
athletesParSport.forEach(p => console.log(`  ${p.sport} - ${p.name}`));
console.log();

// ===== MÉTHODES D'ITÉRATION =====

console.log("--- MÉTHODES D'ITÉRATION ---");

// forEach() - Exécute une fonction pour chaque élément
console.log("• forEach() - Affichage des 3 premiers athlètes:");
olympians.slice(0, 3).forEach((p, index) => {
    console.log(`  ${index + 1}. ${p.name} de ${p.nationality} (${p.weight}kg)`);
});


// ===== MÉTHODES DE CONVERSION =====

console.log("--- MÉTHODES DE CONVERSION ---");

// join() - Joint tous les éléments en une chaîne
const premiersNoms = olympians.slice(0, 5).map(p => p.name);
console.log("• join() - Noms séparés par ' | ':", premiersNoms.join(" | "));
console.log("• join() - Noms séparés par des virgules:", premiersNoms.join(", "));

// toString() - Convertit en chaîne (équivalent à join(','))
console.log("• toString() - Premières masses:", olympians.slice(0, 3).map(p => p.weight).toString());
console.log();

// ===== MÉTHODES DE CONCATÉNATION =====

console.log("--- MÉTHODES DE CONCATÉNATION ---");

// concat() - Joint des tableaux
const hommesBasketball = olympians.filter(p => p.sport === "basketball" && p.sex === "male").slice(0, 2);
const femmesBasketball = olympians.filter(p => p.sport === "basketball" && p.sex === "female").slice(0, 2);
const melange = hommesBasketball.concat(femmesBasketball);
console.log("• concat() - Mélange hommes + femmes basketball:");
melange.forEach(p => console.log(`  ${p.name} (${p.nationality})`));
console.log();

// ===== MÉTHODES D'APLATISSEMENT =====

console.log("--- MÉTHODES D'APLATISSEMENT ---");

// flat() - Aplatit les tableaux imbriqués
const groupesParNationalite = [
    olympians.filter(p => p.nationality === "USA").slice(0, 2).map(p => p.name),
    olympians.filter(p => p.nationality === "CHN").slice(0, 2).map(p => p.name),
    olympians.filter(p => p.nationality === "FRA").slice(0, 2).map(p => p.name)
];
console.log("• flat() - Groupes par nationalité avant aplatissement:", groupesParNationalite);
console.log("• flat() - Après aplatissement:", groupesParNationalite.flat());
console.log();

// ===== STATISTIQUES FINALES =====

console.log("--- STATISTIQUES FINALES ---");

// Calculs statistiques utilisant différentes méthodes
const masses = olympians.map(p => p.weight).filter(m => m != null);
const masseTotaleCalc = masses.reduce((sum, mass) => sum + mass, 0);
const masseMoyenne = masseTotaleCalc / masses.length;
const masseMin = Math.min(...masses);
const masseMax = Math.max(...masses);

console.log("• Statistiques des masses:");
console.log(`  - Masse moyenne: ${masseMoyenne.toFixed(1)}kg`);
console.log(`  - Masse minimale: ${masseMin}kg`);
console.log(`  - Masse maximale: ${masseMax}kg`);

// Répartition par nationalité (top 10)
const repartitionNationalites = olympians.reduce((acc, p) => {
    acc[p.nationality] = (acc[p.nationality] || 0) + 1;
    return acc;
}, {} as Record<string, number>);
const topNationalites = Object.entries(repartitionNationalites)
    .sort(([,a], [,b]) => b - a)
    .slice(0, 10);
console.log("• Top 10 nationalités:", Object.fromEntries(topNationalites));

// Répartition par sexe
const repartitionSexe = olympians.reduce((acc, p) => {
    if (p.sex != null) {
        acc[p.sex] = (acc[p.sex] || 0) + 1;
    }
    return acc;
}, {} as Record<string, number>);
console.log("• Répartition par sexe:", repartitionSexe);

// =============================================
// GROUPEMENT DES DONNÉES AVEC Object.groupBy
// =============================================

console.log("\n--- GROUPEMENT AVEC Object.groupBy ---");

// Groupement par nationalité (affichage top 10)
console.log("• Object.groupBy() - Répartition par nationalité:");
const athletesParNationalite = Object.groupBy(olympians, p => p.nationality);
const topNationalitesGroupBy = Object.entries(athletesParNationalite)
    .sort(([,a], [,b]) => (b?.length || 0) - (a?.length || 0))
    .slice(0, 10);
for (const [nationalite, athletes] of topNationalitesGroupBy) {
    console.log(`  ${nationalite}: ${athletes?.length || 0} athlètes`);
}

// Groupement par sport et sexe combinés
console.log("\n• Object.groupBy() - Répartition par sport et sexe:");
const athletesParSportEtSexe = Object.groupBy(olympians, athlete => 
    `${athlete.sport} - ${athlete.sex || 'inconnu'}`
);
const topSportsSexe = Object.entries(athletesParSportEtSexe)
    .sort(([,a], [,b]) => (b?.length || 0) - (a?.length || 0))
    .slice(0, 10);
for (const [sportSexe, athletes] of topSportsSexe) {
    console.log(`  ${sportSexe}: ${athletes?.length || 0} athlètes`);
}

// Groupement par sexe
console.log("\n• Object.groupBy() - Répartition par sexe:");
const athletesParSexe = Object.groupBy(olympians, d => d.sex || 'inconnu');
for (const [sexe, athletes] of Object.entries(athletesParSexe)) {
    console.log(`  ${sexe}: ${athletes?.length || 0} athlètes`);
}

// Groupement par catégorie de masse (léger, moyen, lourd)
console.log("\n• Object.groupBy() - Répartition par catégorie de masse:");
const athletesParCategorieMasse = Object.groupBy(olympians, athlete => {
    if (!athlete.weight) return 'masse inconnue';
    if (athlete.weight < 60) return 'léger';
    if (athlete.weight < 80) return 'moyen';
    return 'lourd';
});

Object.entries(athletesParCategorieMasse)
    .sort(([a], [b]) => a.localeCompare(b))
    .forEach(([categorie, athletes]) => {
        console.log(`  ${categorie}: ${athletes?.length || 0} athlètes`);
    });

console.log("\n=== FIN DES EXEMPLES ===");

/* TODO Faire de même pour d'autres dataset : https://observablehq.com/@observablehq/sample-datasets (Possible d'utiliser COPILOT */