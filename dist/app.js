(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/app"],{

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! alpinejs */ "./node_modules/alpinejs/dist/alpine.js");

window.cv = __webpack_require__(/*! ./data.json */ "./src/data.json");

/***/ }),

/***/ "./src/data.json":
/*!***********************!*\
  !*** ./src/data.json ***!
  \***********************/
/*! exports provided: informations, jobTitle, competences, emplois, projets, formations, interets, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"informations\":{\"nom\":\"Thibault Six\",\"age\":\"14/12/1989\",\"ville\":\"Genval, Belgique\",\"telephone\":\"+32 471 99 59 25\",\"email\":\"thibsix@outlook.be\",\"site\":\"https://tsix.be\",\"github\":\"https://github.com/opmvpc\"},\"jobTitle\":\"Lead Developer‍\",\"competences\":[{\"text\":\"Créer des applications web avec PHP, MySQL, Laravel et son écosystème (5 ans d'expérience)\"},{\"text\":\"Analyser, modéliser et implémenter des schémas de base de données relationelles\"},{\"text\":\"Mettre en place le contrôle de version avec git et l'intégration continue (github actions, gitlab CI, Chipper CI)\"},{\"text\":\"Static Analysis (Psalm), Testing (phpunit, Laravel Dusk)\"},{\"text\":\"Frontend: Html, CSS (bootstrap, tailwindCSS), Javascript (vuejs, alpinejs, jquery)\"},{\"text\":\"Autres langages: Java, python, UML, LateX\"}],\"emplois\":[{\"annees\":\"2017 - ...\",\"nom\":\"Web developer\",\"employeur\":\"Gembloux Agro Bio Tech, Faculté de ULiège\",\"taches\":[\"Développements informatiques (Laravel), support aux utilisateurs, maintenance du parc, des auditoires et du réseau physique (équipe de 6 pour 2000 utilisateurs) https://www.gembloux.uliege.be/\",\"Analyser, capter les besoins du client et développer une application de gestion intégrée pour un laboratoire d'analyses chimiques (Full stack, Laravel, bootstrap, jquery) https://tsix.be/projets/beagx\",\"Concevoir une application de support pédagogique utilisée dans le cadre d'un cours et d'une publication scientifique (Full stack, Laravel, bootstrap, jquery) https://tsix.be/projets/question-dactualit-et-environnement\",\"Formation de mes collègues développeurs à Laravel et git. Développement d'une application Laravel servant de documentation et guidelines de référence dans le service\",\"Maintenance d'applications legacy Access, développement de scripts PHP, Perl, Bash ou VB, développement de modules Drupal\"]},{\"annees\":\"2014 - 2015\",\"nom\":\"Assistant Administratif & Communication\",\"employeur\":\"memovie\",\"taches\":[\"Gestion du projet de plateforme web, développement du site de distribution des films\",\"Gestion du CRM (Odoo)\",\"Support administratif\",\"Gestion du parc informatique.\"]}],\"projets\":[{\"annee\":\"2020\",\"nom\":\"Racines tactiles\",\"url\":\"https://racines.tsix.be/\",\"description\":\"Site vitrine pour un atelier de poterie. Bientôt en production.\",\"technologies\":\"Laravel, alpinejs, tailwindCSS\",\"fonction\":\"Full stack\"},{\"annee\":\"2020\",\"nom\":\"SC2 OneShot\",\"url\":\"https://sc2os.choboai.com/\",\"description\":\"Application permettant de calculer le nombre d'unité qu'il faut pour tuer une unité ennemie en un coup dans le jeu de stratégie Starcraft2\",\"technologies\":\"Laravel, vuejs, tailwindCSS\",\"fonction\":\"Full stack\"},{\"annee\":\"2020\",\"nom\":\"Outil de gestion de bibliographie\",\"url\":\"https://ids.tsix.be\",\"description\":\"Outil de gestion de bibliographie de littérature scientifique. Comporte quelques originalités comme la visualisation graphique d'un arbre des citations. Réalisé pour m'aider à rédiger un État de l'art au sujet des langages de programmation visuelle\",\"technologies\":\"Laravel, bootstrap et echarts\",\"fonction\":\"Full stack\"},{\"annee\":\"2019\",\"nom\":\"Outil de partage de tests\",\"url\":\"https://algo.choboai.com\",\"description\":\"Outil pour partager des tests lors de la réalisation d'un projet de développement dirigé par les tests pour le cours d'Algorithmique à UNamur. Génération du code java (tests junit) avec Laravel Blade\",\"technologies\":\"Laravel, bootstrap, jquery\",\"fonction\":\"Full stack\"},{\"annee\":\"2019\",\"nom\":\"Izzac Mercury\",\"url\":\"https://izaacmercury.com/\",\"description\":\"Site vitrine d'un artiste bruxellois\",\"technologies\":\"Laravel, tailwindCSS\",\"fonction\":\"Full stack\"},{\"annee\":\"2019\",\"nom\":\"tsix.be\",\"url\":\"https://tsix.be\",\"description\":\"Mon site vitrine sur lequel j'écris des articles techniques et décris mes projets de développement\",\"technologies\":\"Laravel, vuejs et tailwindCSS\",\"fonction\":\"Full stack\"},{\"annee\":\"2018\",\"nom\":\"Immunosabr\",\"url\":\"https://www.immunosabr.info/\",\"description\":\"Site informatif réalisé pour un projet de recherche médical financé par l'Union européenne\",\"technologies\":\"Laravel, vuejs, vanilla CSS\",\"fonction\":\"Développement du backend et backoffice, gestion du projet\"},{\"annee\":\"2016\",\"nom\":\"Chez Pierre et Claude, l'Hôtel de la gare\",\"url\":\"https://hoteldelagare.be\",\"description\":\"Site vitrine d'un restaurant de la banlieu Bruxelloise\",\"technologies\":\"Laravel, vanilla CSS et JS\",\"fonction\":\"Développement du backend et backoffice\"}],\"formations\":[{\"annees\":\"2018 - ...\",\"nom\":\"Sciences Informatiques, Master à horaire décalé\",\"etablissement\":\"UNamur\",\"projets\":[{\"nom\":\"Compilateur PlayPlus vers NBC\",\"url\":\"https://tsix.be/projets/compilateur\",\"description\":\"Création d'un langage de programmation inspiré du C (PlayPlus) et développement d'un compilateur PlayPlus vers le langage NBC (LEGO MINDSTORMS)\",\"technologies\":\"java, antlr, junit, jenkins\",\"fonction\":\"Chef de projet, Lead developer (groupe de 3)\"},{\"nom\":\"Projet d'algorithmique\",\"url\":\"\",\"description\":\"Résolution de problèmes algorithmiques à l'aide de la programmation par contrat et des différentes techniques d'optimisation vues aux cours\",\"technologies\":\"java, jml, junit, jenkins\",\"fonction\":\"Chef de projet, developer (groupe de 3)\"}]},{\"annees\":\"2015 - 2018\",\"nom\":\"Informatique de gestion, Bachelier à horaire décalé, La Plus Grande Distinction\",\"etablissement\":\"Ifosup Wavre\",\"projets\":[{\"nom\":\"W.FUNDING\",\"url\":\"https://tsix.be/projets/wfunding\",\"description\":\"w.funding est une application web de crowdfunding réalisée dans le cadre du cours de Projet d'intégration de développement\",\"technologies\":\"Laravel, bootstrap, jquery\",\"fonction\":\"DB Admin, Server Admin & Lead developer (groupe de 4)\"}]}],\"interets\":[{\"text\":\"Starcraft2 (rang maitre)\"},{\"text\":\"Musique électronique\"},{\"text\":\"Médias\"},{\"text\":\"Technologies\"},{\"text\":\"Sports\"}]}");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!******************************************!*\
  !*** multi ./src/app.js ./src/style.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\laragon\www\cv\src\app.js */"./src/app.js");
module.exports = __webpack_require__(/*! C:\laragon\www\cv\src\style.css */"./src/style.css");


/***/ })

},[[0,"/manifest","/vendor"]]]);