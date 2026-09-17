import type { CityPage } from "./types";

// French city pages — the local-SEO surface of the site.
// Each entry becomes /villes/<slug> with unique metadata + LocalBusiness/Place schema.
// Le cabinet est physiquement à El Jadida ; les autres villes sont servies par
// proximité et à distance (aucune agence hors El Jadida).

export const cities: CityPage[] = [
  {
    slug: "el-jadida",
    name: "El Jadida",
    keyword: "comptable El Jadida",
    metaTitle:
      "Comptable à El Jadida | Cabinet Fiduciaire & Business Center",
    metaDescription:
      "Cabinet comptable agréé à El Jadida, Bd Mohammed VI ang. rue Surcouf. Comptabilité, création d'entreprise, TVA, paie et conseil fiscal. Devis gratuit.",
    h1: "Cabinet comptable à El Jadida",
    summary:
      "Notre siège est à El Jadida : comptabilité, fiscalité, création de société et paie pour les TPE et PME de la ville.",
    lead: "Fiduciaire & Business Center est un cabinet comptable agréé installé au cœur d'El Jadida, Bd Mohammed VI, angle rue Surcouf. Dirigé par Adil Obbad et fondé en 2015, le cabinet accompagne au quotidien les commerçants, artisans, professions libérales et PME de la ville dans toutes leurs obligations comptables, fiscales et sociales. C'est ici, à El Jadida, que se trouve notre bureau : vous pouvez nous rencontrer, déposer vos pièces et échanger de vive voix.",
    sections: [
      {
        heading: "El Jadida, un tissu économique diversifié à deux pas de notre bureau",
        body: [
          "Chef-lieu de la province, cité portuaire et balnéaire classée au patrimoine mondial de l'UNESCO pour sa Cité portugaise, El Jadida conjugue commerce de centre-ville, tourisme, services et une activité tirée par la proximité immédiate du complexe industriel de Jorf Lasfar. Cette diversité crée un besoin réel d'accompagnement comptable de proximité, du petit commerce du boulevard Mohammed V au prestataire qui travaille pour les donneurs d'ordre industriels de la zone.",
          "Être basé dans la ville change concrètement la relation : nous connaissons le contexte local, l'administration fiscale et les CRI de rattachement, et nous restons joignables pour un rendez-vous physique quand un dossier l'exige. Notre bureau se trouve Bd Mohammed VI, à l'angle de la rue Surcouf.",
        ],
      },
      {
        heading: "Les services les plus demandés par les entreprises jdidies",
        body: [
          "Nos clients d'El Jadida sollicitent l'ensemble de notre offre, avec quelques priorités selon leur profil :",
        ],
        bullets: [
          "Tenue de comptabilité complète (saisie, états de synthèse, bilan) pour les commerces et PME de la ville ;",
          "Création d'entreprise et de société (SARL, SARL AU, statut auto-entrepreneur) pour les nouveaux projets ;",
          "Déclarations fiscales : TVA, IS et IR, dans le respect du calendrier de la Direction générale des impôts ;",
          "Gestion de paie et affiliation CNSS pour les employeurs de la ville ;",
          "Domiciliation, conseil de gestion et audit pour structurer la croissance.",
        ],
      },
      {
        heading: "Un interlocuteur unique, disponible sur place",
        body: [
          "À El Jadida plus qu'ailleurs, nous jouons pleinement la carte de la proximité : un interlocuteur dédié qui connaît votre dossier, des rendez-vous au cabinet, un dépôt de pièces papier ou numérique selon votre préférence. Vous gardez une visibilité permanente sur votre situation (marge, trésorerie, échéances) sans avoir à courir après l'information.",
          "Que vous démarriez une activité ou que vous souhaitiez changer de comptable en cours d'exercice, nous assurons une prise en charge fluide, sur place ou à distance.",
        ],
      },
    ],
    faq: [
      {
        q: "Où se trouve exactement votre cabinet à El Jadida ?",
        a: "Notre bureau est situé à El Jadida, Bd Mohammed VI, à l'angle de la rue Surcouf. Vous pouvez nous y rencontrer sur rendez-vous pour un premier échange gratuit et y déposer vos pièces comptables.",
      },
      {
        q: "Accompagnez-vous les commerces et petites structures d'El Jadida ?",
        a: "Oui. Nous suivons aussi bien les commerçants et artisans que les professions libérales, les auto-entrepreneurs et les PME de la ville, avec une offre calibrée sur votre volume et vos obligations réelles.",
      },
      {
        q: "Proposez-vous un premier rendez-vous gratuit ?",
        a: "Oui. Le premier échange est gratuit et sans engagement : nous faisons le point sur votre situation, vos obligations et le budget, puis nous vous remettons un devis clair.",
      },
      {
        q: "Puis-je vous confier ma comptabilité tout en gérant certaines tâches moi-même ?",
        a: "Bien sûr. Nous adaptons le périmètre à votre organisation : tenue complète ou révision, avec ou sans gestion de paie. Le partage des tâches est défini ensemble au démarrage.",
      },
    ],
    nearby: ["jorf-lasfar", "azemmour", "bir-jdid"],
    isHeadOffice: true,
  },
  {
    slug: "jorf-lasfar",
    name: "Jorf Lasfar",
    keyword: "comptable Jorf Lasfar",
    metaTitle:
      "Comptable à Jorf Lasfar | Cabinet Fiduciaire & Business Center",
    metaDescription:
      "Comptable pour les PME et sous-traitants de la zone industrialo-portuaire de Jorf Lasfar : comptabilité, TVA, paie CNSS et conseil. Cabinet agréé près d'El Jadida.",
    h1: "Comptable à Jorf Lasfar",
    summary:
      "Accompagnement comptable et social des PME industrielles et sous-traitants de la zone industrialo-portuaire de Jorf Lasfar.",
    lead: "Fiduciaire & Business Center accompagne les entreprises de Jorf Lasfar, l'un des principaux pôles industrialo-portuaires du Maroc. Situés à El Jadida, à quelques kilomètres de la plateforme, nous suivons les PME et sous-traitants qui gravitent autour de l'écosystème industriel de la zone, avec une comptabilité et une gestion sociale rigoureuses.",
    sections: [
      {
        heading: "Jorf Lasfar : un pôle industrialo-portuaire, un écosystème de sous-traitants",
        body: [
          "Jorf Lasfar concentre une activité industrielle lourde structurée autour du complexe chimique de l'OCP et de la centrale thermique exploitée dans le cadre de l'écosystème TAQA, adossée à un port de commerce parmi les plus importants du pays. Autour de ces grands donneurs d'ordre gravite tout un tissu de PME et de sous-traitants : maintenance industrielle, logistique, transport, BTP, prestations techniques et services aux entreprises.",
          "Ce contexte impose une comptabilité solide : facturation B2B au régime de TVA standard, gestion de la retenue à la source de TVA sur les prestations de services renforcée depuis 2026, suivi rigoureux des marchés et des délais de paiement. C'est précisément le terrain sur lequel un cabinet agréé apporte de la valeur.",
        ],
      },
      {
        heading: "Les priorités comptables des entreprises de la zone",
        body: [
          "Pour les PME et sous-traitants de Jorf Lasfar, certains besoins reviennent systématiquement :",
        ],
        bullets: [
          "Tenue de comptabilité adaptée aux marchés et à la sous-traitance industrielle, avec suivi analytique par chantier ou par client ;",
          "Déclarations de TVA (taux standard de 20 %) et gestion de la retenue à la source sur prestations de services ;",
          "Gestion de paie et déclarations CNSS pour des effectifs souvent techniques, avec heures et primes de chantier ;",
          "Audit et révision pour répondre aux exigences des donneurs d'ordre et des financeurs ;",
          "Conseil fiscal sur l'IS et les acomptes provisionnels pour les structures en croissance.",
        ],
      },
      {
        heading: "Proximité d'El Jadida, réactivité pour la zone",
        body: [
          "Notre cabinet est à El Jadida, à courte distance de Jorf Lasfar : nous combinons la réactivité d'un cabinet local et la gestion à distance des formalités courantes. Vos pièces peuvent nous parvenir sous forme numérique et nous nous déplaçons quand un dossier le justifie.",
          "Nous n'avons pas d'agence à Jorf Lasfar : nous accompagnons les entreprises de la zone depuis El Jadida, ce qui reste largement suffisant grâce à la proximité et aux échanges dématérialisés.",
        ],
      },
    ],
    faq: [
      {
        q: "Gérez-vous la comptabilité des sous-traitants industriels de Jorf Lasfar ?",
        a: "Oui. Nous tenons la comptabilité de prestataires et sous-traitants travaillant pour l'écosystème industriel de la zone (maintenance, logistique, BTP, services techniques), avec un suivi analytique par chantier ou par client si nécessaire.",
      },
      {
        q: "La retenue à la source de TVA me concerne-t-elle ?",
        a: "Si vous facturez des prestations de services, la retenue à la source de TVA renforcée depuis le 1er janvier 2026 peut vous concerner. Nous en assurons le traitement correct dans vos déclarations et votre comptabilité.",
      },
      {
        q: "Pouvez-vous gérer la paie d'effectifs techniques avec primes de chantier ?",
        a: "Oui. Nous établissons les bulletins, intégrons heures supplémentaires et primes, et produisons les déclarations CNSS via Damancom pour les employeurs de la zone.",
      },
      {
        q: "Avez-vous un bureau à Jorf Lasfar ?",
        a: "Non, notre cabinet est à El Jadida, tout proche. Nous servons les entreprises de Jorf Lasfar par proximité et à distance, avec déplacement possible lorsque le dossier l'exige.",
      },
    ],
    nearby: ["el-jadida", "azemmour", "oualidia"],
  },
  {
    slug: "azemmour",
    name: "Azemmour",
    keyword: "comptable Azemmour",
    metaTitle:
      "Comptable à Azemmour | Cabinet Fiduciaire & Business Center",
    metaDescription:
      "Comptable pour les artisans, acteurs du tourisme et exploitations agricoles d'Azemmour. Comptabilité, statut auto-entrepreneur, TVA et paie. Cabinet agréé à 15 km.",
    h1: "Comptable à Azemmour",
    summary:
      "Comptabilité et accompagnement fiscal des artisans, hébergeurs touristiques et exploitants agricoles d'Azemmour.",
    lead: "Fiduciaire & Business Center accompagne les entrepreneurs d'Azemmour, cité historique des bords de l'Oum Er-Rbia située à une quinzaine de kilomètres de notre cabinet d'El Jadida. Cette proximité nous permet d'offrir un suivi comptable réactif aux artisans, acteurs du tourisme et exploitants agricoles de la ville.",
    sections: [
      {
        heading: "Azemmour : artisanat, tourisme et agriculture au fil de l'Oum Er-Rbia",
        body: [
          "Ancienne médina fortifiée réputée pour ses ateliers d'artisanat et sa scène artistique, Azemmour vit d'un mélange de tourisme culturel, d'activités artisanales et d'une agriculture nourrie par la vallée de l'Oum Er-Rbia. Le tissu économique y est fait de petites structures : artisans, maisons d'hôtes et hébergements, commerces, exploitations agricoles familiales.",
          "Pour ces profils, l'enjeu comptable n'est pas la complexité d'un grand groupe mais la simplicité bien tenue : choisir le bon statut, respecter des obligations allégées et éviter les erreurs qui coûtent cher. C'est là qu'un accompagnement de proximité fait la différence.",
        ],
      },
      {
        heading: "Des services calibrés pour les petites structures",
        body: [
          "Nos prestations les plus utiles aux entrepreneurs d'Azemmour :",
        ],
        bullets: [
          "Statut d'auto-entrepreneur pour les artisans et prestataires : formalités allégées, fiscalité forfaitaire dans la limite des plafonds de chiffre d'affaires ;",
          "Création d'entreprise pour structurer une maison d'hôtes ou un commerce qui grandit ;",
          "Tenue de comptabilité adaptée au volume réel des artisans et petites exploitations ;",
          "Déclarations de TVA et d'IR pour les activités qui dépassent le cadre de l'auto-entrepreneur ;",
          "Conseil sur le régime le plus avantageux entre auto-entrepreneur et société.",
        ],
      },
      {
        heading: "À quinze minutes de notre bureau d'El Jadida",
        body: [
          "La proximité d'Azemmour avec El Jadida est un vrai atout : rencontre au cabinet facile, dépôt de pièces sans contrainte et suivi à distance pour les échanges courants. Nous accompagnons les entrepreneurs d'Azemmour comme s'ils étaient nos voisins immédiats — parce qu'ils le sont presque.",
          "Nous n'avons pas d'agence à Azemmour : le cabinet est à El Jadida, à une quinzaine de kilomètres, ce qui suffit largement pour un accompagnement réactif.",
        ],
      },
    ],
    faq: [
      {
        q: "Le statut d'auto-entrepreneur convient-il à un artisan d'Azemmour ?",
        a: "Souvent oui, tant que le chiffre d'affaires reste sous les plafonds (500 000 DH pour l'artisanat et le commerce, 200 000 DH pour les services). Nous vérifions votre situation et vous orientons vers le statut le plus avantageux.",
      },
      {
        q: "J'ouvre une maison d'hôtes à Azemmour, quelles démarches comptables ?",
        a: "Selon l'ampleur du projet, nous vous orientons vers l'auto-entrepreneur ou la création d'une société, puis mettons en place comptabilité, TVA le cas échéant et obligations sociales si vous employez du personnel.",
      },
      {
        q: "Êtes-vous loin d'Azemmour ?",
        a: "Non. Notre cabinet est à El Jadida, à une quinzaine de kilomètres seulement d'Azemmour. La rencontre au bureau est simple et le suivi courant se fait à distance.",
      },
    ],
    nearby: ["el-jadida", "bir-jdid", "jorf-lasfar"],
  },
  {
    slug: "sidi-bennour",
    name: "Sidi Bennour",
    keyword: "comptable Sidi Bennour",
    metaTitle:
      "Comptable à Sidi Bennour | Fiduciaire & Business Center",
    metaDescription:
      "Comptable pour l'agro-industrie et les PME de Sidi Bennour : comptabilité, TVA, paie et conseil fiscal. Cabinet agréé près d'El Jadida, à distance.",
    h1: "Comptable à Sidi Bennour",
    summary:
      "Accompagnement comptable des acteurs agro-industriels et des PME de Sidi Bennour, chef-lieu de la province voisine.",
    lead: "Fiduciaire & Business Center accompagne les entreprises de Sidi Bennour, chef-lieu de la province voisine et pôle agro-industriel de la région Casablanca-Settat. Depuis notre cabinet d'El Jadida, nous suivons les acteurs de la filière sucrière, les exploitations agricoles et les PME locales avec une gestion comptable et fiscale rigoureuse.",
    sections: [
      {
        heading: "Sidi Bennour, cœur agro-industriel de la plaine des Doukkala",
        body: [
          "Chef-lieu de province au centre de la riche plaine des Doukkala, Sidi Bennour est une capitale agricole et agro-industrielle, historiquement structurée autour de la filière sucrière (betterave à sucre) et de ses unités de transformation. Le territoire accueille aussi des projets d'énergie éolienne et une activité de services qui accompagne l'agriculture irriguée.",
          "Ce profil crée des besoins comptables spécifiques : saisonnalité des revenus agricoles, relations avec les coopératives et les unités de transformation, régime de TVA à surveiller de près sur les produits et intrants agricoles. Une comptabilité bien tenue devient un outil de pilotage face à ces cycles.",
        ],
      },
      {
        heading: "Les services clés pour l'agro-industrie et les PME locales",
        body: [
          "Nos interventions les plus fréquentes auprès des entreprises de Sidi Bennour :",
        ],
        bullets: [
          "Tenue de comptabilité tenant compte de la saisonnalité et des cycles agricoles ;",
          "Déclarations de TVA et suivi des taux applicables aux activités agricoles et de transformation ;",
          "Déclarations d'IS ou d'IR selon la forme de l'exploitation, avec optimisation des acomptes ;",
          "Gestion de paie et déclarations CNSS pour la main-d'œuvre, y compris saisonnière ;",
          "Conseil de gestion pour structurer les investissements (matériel, unités, projets énergétiques).",
        ],
      },
      {
        heading: "Un cabinet de la région, un service à distance efficace",
        body: [
          "Sidi Bennour relève de la même région économique qu'El Jadida : nous connaissons son contexte et ses acteurs. Une grande partie des formalités (déclarations, dépôts, échanges de pièces) se gère à distance, ce qui rend la distance sans conséquence sur la qualité du suivi.",
          "Nous accompagnons les entreprises de Sidi Bennour depuis notre bureau d'El Jadida, sans agence sur place : le service dématérialisé et un interlocuteur dédié suffisent à assurer une relation fluide.",
        ],
      },
    ],
    faq: [
      {
        q: "Comprenez-vous les spécificités comptables de la filière agricole ?",
        a: "Oui. Nous intégrons la saisonnalité des revenus, les relations avec les coopératives et unités de transformation, et le suivi des taux de TVA propres aux activités agricoles et agro-industrielles.",
      },
      {
        q: "Gérez-vous la paie de la main-d'œuvre saisonnière ?",
        a: "Oui. Nous établissons les bulletins et les déclarations CNSS en tenant compte des entrées et sorties saisonnières fréquentes dans le secteur agricole.",
      },
      {
        q: "Faut-il se déplacer à El Jadida pour être suivi ?",
        a: "Non, ce n'est pas nécessaire. L'essentiel des échanges se fait à distance (pièces numériques, déclarations en ligne). Un rendez-vous au cabinet reste possible quand vous le souhaitez.",
      },
    ],
    nearby: ["el-jadida", "oualidia", "settat"],
  },
  {
    slug: "settat",
    name: "Settat",
    keyword: "expert comptable Settat",
    metaTitle:
      "Expert comptable à Settat | Fiduciaire & Business Center",
    metaDescription:
      "Comptable et conseil fiscal pour les PME industrielles, agricoles et universitaires de Settat : comptabilité, IS, paie et audit. Cabinet agréé, à distance.",
    h1: "Expert comptable à Settat",
    summary:
      "Comptabilité, fiscalité et conseil pour les PME industrielles, agricoles et de services de Settat, chef-lieu de province.",
    lead: "Fiduciaire & Business Center accompagne les entreprises de Settat, chef-lieu de province et pôle industriel, agricole et universitaire de la région Casablanca-Settat. Depuis notre cabinet d'El Jadida, nous mettons notre expertise comptable et fiscale au service des PME et porteurs de projets de la ville et de sa province.",
    sections: [
      {
        heading: "Settat : industrie, agriculture et dynamisme universitaire",
        body: [
          "Chef-lieu de la province de Settat, la ville est un carrefour de la région Casablanca-Settat qui combine zones et unités industrielles, une agriculture importante ancrée dans la plaine de la Chaouia, et une vie universitaire structurante autour de l'Université Hassan Ier. Cette combinaison alimente un tissu de PME industrielles, d'entreprises de services et de projets portés par de jeunes diplômés.",
          "Cette diversité appelle un accompagnement complet : de la création d'une première société par un porteur de projet, à la comptabilité et à l'audit d'une PME industrielle en croissance. Chaque profil a des obligations et un rythme différents.",
        ],
      },
      {
        heading: "Un accompagnement du démarrage à la croissance",
        body: [
          "Nos prestations couvrent tout le cycle de vie des entreprises de Settat :",
        ],
        bullets: [
          "Création d'entreprise et de société (SARL, SARL AU) pour les porteurs de projet et jeunes diplômés ;",
          "Tenue de comptabilité et états de synthèse pour les PME industrielles et de services ;",
          "Déclarations fiscales : TVA, IS avec acomptes provisionnels et cotisation minimale, IR ;",
          "Gestion de paie et déclarations CNSS pour les entreprises employeuses ;",
          "Audit, révision et conseil de gestion pour accompagner la croissance et les financements.",
        ],
      },
      {
        heading: "Une expertise accessible à distance",
        body: [
          "Settat fait partie de notre région d'intervention naturelle. Nous accompagnons ses entreprises depuis El Jadida, en nous appuyant sur des outils dématérialisés : dépôt de pièces numérique, déclarations en ligne et points de situation réguliers avec un interlocuteur dédié.",
          "Nous n'avons pas d'agence à Settat : nous servons la ville par un accompagnement à distance efficace, avec des rendez-vous physiques au cabinet lorsqu'ils apportent une réelle valeur au dossier.",
        ],
      },
    ],
    faq: [
      {
        q: "J'ai un projet à Settat après mes études, par où commencer ?",
        a: "Nous faisons d'abord le point sur votre activité et votre prévisionnel, puis nous choisissons ensemble la forme (auto-entrepreneur ou société) et prenons en charge toutes les formalités de création jusqu'à l'immatriculation.",
      },
      {
        q: "Comment fonctionne l'IS pour une PME de Settat ?",
        a: "L'IS est proportionnel : 20 % pour un bénéfice net inférieur à 100 millions de DH, avec une cotisation minimale de 0,25 % du chiffre d'affaires (plancher 3 000 DH) et quatre acomptes trimestriels. Nous en assurons le calcul et le suivi.",
      },
      {
        q: "Réalisez-vous des missions d'audit pour les entreprises de Settat ?",
        a: "Oui. Nous menons des missions d'audit et de révision, utiles pour rassurer des financeurs, des partenaires ou répondre aux obligations légales des structures qui atteignent certains seuils.",
      },
      {
        q: "Le suivi à distance est-il fiable pour une entreprise de Settat ?",
        a: "Oui. La quasi-totalité des formalités et déclarations se traite en ligne. Vous bénéficiez d'un interlocuteur dédié et de points réguliers, avec la possibilité de nous rencontrer au cabinet d'El Jadida.",
      },
    ],
    nearby: ["el-jadida", "sidi-bennour", "casablanca"],
  },
  {
    slug: "oualidia",
    name: "Oualidia",
    keyword: "comptable Oualidia",
    metaTitle:
      "Comptable à Oualidia | Cabinet Fiduciaire & Business Center",
    metaDescription:
      "Comptable pour l'hôtellerie, l'ostréiculture et l'agriculture d'Oualidia : comptabilité, TVA 10 %, paie saisonnière et conseil. Cabinet agréé, à distance.",
    h1: "Comptable à Oualidia",
    summary:
      "Comptabilité et fiscalité pour l'hôtellerie, l'ostréiculture et l'agriculture de la station côtière d'Oualidia.",
    lead: "Fiduciaire & Business Center accompagne les entreprises d'Oualidia, station balnéaire réputée de la côte des Doukkala. Depuis notre cabinet d'El Jadida, nous suivons les hébergeurs, restaurateurs, ostréiculteurs et exploitants agricoles de la lagune avec une comptabilité adaptée à la forte saisonnalité de leur activité.",
    sections: [
      {
        heading: "Oualidia : lagune, tourisme, ostréiculture et maraîchage",
        body: [
          "Célèbre pour sa lagune, ses huîtres et ses plages, Oualidia est une station touristique dont l'économie repose sur trois piliers : l'hébergement et la restauration, l'ostréiculture et la pêche, et une agriculture maraîchère favorisée par le microclimat local. C'est une économie très saisonnière, où l'essentiel du chiffre d'affaires se concentre sur quelques mois.",
          "Cette saisonnalité impose une gestion comptable précise : lissage de la trésorerie, suivi des taux de TVA propres à l'hébergement et à la restauration (taux réduit de 10 %), et gestion d'une main-d'œuvre souvent saisonnière. Bien accompagnée, cette activité concentrée devient parfaitement pilotable.",
        ],
      },
      {
        heading: "Des services pensés pour une activité saisonnière",
        body: [
          "Ce que nous apportons le plus souvent aux entreprises d'Oualidia :",
        ],
        bullets: [
          "Tenue de comptabilité avec suivi de trésorerie adapté aux pics saisonniers ;",
          "Déclarations de TVA au taux réduit de 10 % pour l'hébergement et la restauration ;",
          "Gestion de paie et déclarations CNSS pour le personnel saisonnier (entrées/sorties) ;",
          "Création d'entreprise ou statut auto-entrepreneur pour les hébergeurs et prestataires touristiques ;",
          "Conseil fiscal pour lisser la charge sur l'année malgré une activité concentrée.",
        ],
      },
      {
        heading: "Un suivi à distance qui colle au rythme de la saison",
        body: [
          "Oualidia appartient à la région d'El Jadida : nous connaissons les réalités du littoral des Doukkala. Le suivi se fait principalement à distance, avec un dépôt de pièces numérique qui vous évite les déplacements en pleine saison, quand chaque heure compte.",
          "Nous n'avons pas d'agence à Oualidia : nous accompagnons ses entreprises depuis El Jadida, en calant nos échanges sur le rythme de leur saison touristique.",
        ],
      },
    ],
    faq: [
      {
        q: "Quel taux de TVA s'applique à mon hébergement à Oualidia ?",
        a: "L'hébergement et la restauration relèvent du taux réduit de TVA de 10 %. Nous appliquons le bon taux dans votre comptabilité et vos déclarations, et vérifions votre régime déclaratif selon votre chiffre d'affaires.",
      },
      {
        q: "Comment gérer la paie de mes saisonniers ?",
        a: "Nous établissons les bulletins et les déclarations CNSS en intégrant les entrées et sorties fréquentes du personnel saisonnier, pour rester en règle pendant les pics d'activité.",
      },
      {
        q: "Mon activité est concentrée sur l'été, est-ce un problème ?",
        a: "Non, c'est le quotidien de nombreuses entreprises d'Oualidia. Nous adaptons le suivi de trésorerie et le calendrier fiscal à cette saisonnalité pour lisser la charge sur l'année.",
      },
    ],
    nearby: ["el-jadida", "jorf-lasfar", "sidi-bennour"],
  },
  {
    slug: "bir-jdid",
    name: "Bir Jdid",
    keyword: "comptable Bir Jdid",
    metaTitle:
      "Comptable à Bir Jdid | Cabinet Fiduciaire & Business Center",
    metaDescription:
      "Comptable pour les TPE, commerces et exploitations agricoles de Bir Jdid, sur l'axe El Jadida–Casablanca. Comptabilité, création et TVA. Cabinet agréé.",
    h1: "Comptable à Bir Jdid",
    summary:
      "Comptabilité et création d'entreprise pour les TPE, commerces et exploitations agricoles périurbaines de Bir Jdid.",
    lead: "Fiduciaire & Business Center accompagne les entreprises de Bir Jdid, commune située sur l'axe reliant El Jadida à Casablanca et Berrechid. Depuis notre cabinet d'El Jadida, nous suivons les TPE, commerces et exploitations agricoles de cette zone périurbaine en plein mouvement.",
    sections: [
      {
        heading: "Bir Jdid : une commune périurbaine sur l'axe Casablanca–Berrechid",
        body: [
          "Bir Jdid occupe une position charnière entre El Jadida, Casablanca et Berrechid. Cette localisation sur un axe de circulation majeur en fait une zone périurbaine où cohabitent agriculture, petit commerce, transport et services, et qui bénéficie de la dynamique du grand corridor économique de Casablanca.",
          "Pour les TPE et exploitants de Bir Jdid, l'enjeu est double : profiter de cette position stratégique et rester parfaitement en règle sur des obligations parfois sous-estimées dans les petites structures. Un accompagnement comptable simple et fiable sécurise le développement.",
        ],
      },
      {
        heading: "Les services les plus utiles aux entreprises de Bir Jdid",
        body: [
          "Nos interventions récurrentes auprès des entrepreneurs de Bir Jdid :",
        ],
        bullets: [
          "Création d'entreprise et statut d'auto-entrepreneur pour formaliser une activité qui démarre ;",
          "Tenue de comptabilité proportionnée au volume des TPE et commerces ;",
          "Déclarations de TVA et d'IR selon le régime et le chiffre d'affaires ;",
          "Gestion de paie et CNSS pour les commerces et petites structures employeuses ;",
          "Conseil sur le statut le mieux adapté entre auto-entrepreneur et société.",
        ],
      },
      {
        heading: "La proximité d'El Jadida, la souplesse du service à distance",
        body: [
          "Bir Jdid est proche d'El Jadida et sur la route de Casablanca : nous sommes idéalement placés pour accompagner ses entreprises, entre rendez-vous au cabinet et gestion à distance des formalités courantes.",
          "Nous n'avons pas d'agence à Bir Jdid : nous servons la commune depuis El Jadida, avec un dépôt de pièces dématérialisé qui simplifie la relation au quotidien.",
        ],
      },
    ],
    faq: [
      {
        q: "Je lance un petit commerce à Bir Jdid, quel statut choisir ?",
        a: "Selon votre chiffre d'affaires prévisionnel et vos charges, l'auto-entrepreneur ou la SARL AU peuvent convenir. Nous comparons les scénarios chiffrés lors d'un premier échange gratuit pour vous orienter.",
      },
      {
        q: "Dois-je facturer la TVA sur mon activité à Bir Jdid ?",
        a: "Cela dépend de votre régime et de votre chiffre d'affaires : l'auto-entrepreneur est hors champ TVA, tandis qu'une société la facture selon les taux applicables. Nous clarifions votre situation dès le départ.",
      },
      {
        q: "Êtes-vous proches de Bir Jdid ?",
        a: "Oui. Notre cabinet est à El Jadida, à proximité de Bir Jdid et sur l'axe vers Casablanca. Le rendez-vous au bureau est simple et le suivi courant se fait à distance.",
      },
    ],
    nearby: ["el-jadida", "azemmour", "casablanca"],
  },
  {
    slug: "casablanca",
    name: "Casablanca",
    keyword: "cabinet comptable Casablanca",
    metaTitle:
      "Comptable pour Casablanca | Fiduciaire & Business Center",
    metaDescription:
      "Cabinet comptable basé à El Jadida au service des PME de la région de Casablanca : comptabilité, création de société, TVA et paie gérées à distance. Devis gratuit.",
    h1: "Cabinet comptable pour les entreprises de Casablanca",
    summary:
      "Cabinet basé à El Jadida accompagnant à distance les PME et porteurs de projet de la région de Casablanca.",
    lead: "Fiduciaire & Business Center est un cabinet comptable agréé basé à El Jadida qui accompagne aussi des entreprises de la région de Casablanca. Grâce à la gestion à distance de la plupart des formalités, nous offrons aux PME et porteurs de projet casablancais un suivi de proximité relationnelle, sans les tarifs et l'anonymat des grands cabinets de la métropole.",
    sections: [
      {
        heading: "Casablanca : la métropole économique, un marché très concurrentiel",
        body: [
          "Casablanca est le premier centre économique et financier du Maroc : services, industrie, commerce, technologies, tout y est représenté à grande échelle. La densité d'entreprises y est immense, mais l'offre comptable y est aussi très concurrentielle, souvent standardisée et parfois impersonnelle pour une petite structure.",
          "Notre positionnement est clair et honnête : nous ne prétendons pas disposer d'une agence à Casablanca. Nous sommes un cabinet d'El Jadida qui sert, à distance, les PME et entrepreneurs de la région casablancaise recherchant une relation directe avec un interlocuteur dédié plutôt qu'un dossier noyé dans la masse.",
        ],
      },
      {
        heading: "Ce que nous apportons aux PME casablancaises",
        body: [
          "Notre offre couvre les besoins courants des entreprises de la région de Casablanca :",
        ],
        bullets: [
          "Création d'entreprise et de société (SARL, SARL AU), formalités gérées en grande partie à distance ;",
          "Tenue de comptabilité et états de synthèse pour TPE, PME et professions libérales ;",
          "Déclarations fiscales : TVA, IS et IR, dans le respect du calendrier de la DGI ;",
          "Gestion de paie et déclarations CNSS via Damancom ;",
          "Domiciliation, conseil fiscal et de gestion pour structurer et développer l'activité.",
        ],
      },
      {
        heading: "Un service à distance qui remplace la proximité géographique",
        body: [
          "La dématérialisation change la donne : dépôt de pièces numérique, déclarations en ligne, échanges par téléphone et visioconférence. Une entreprise de Casablanca peut être suivie avec la même rigueur qu'un client d'El Jadida, tout en profitant d'une relation plus personnalisée.",
          "Nous sommes transparents sur ce point : notre bureau est à El Jadida, Bd Mohammed VI. Nous accompagnons les entreprises de la région de Casablanca à distance, et un déplacement reste possible lorsque le dossier le justifie vraiment.",
        ],
      },
    ],
    faq: [
      {
        q: "Avez-vous un bureau à Casablanca ?",
        a: "Non. Notre cabinet est situé à El Jadida, Bd Mohammed VI, angle rue Surcouf. Nous accompagnons les entreprises de la région de Casablanca à distance, grâce à la dématérialisation des formalités et des échanges.",
      },
      {
        q: "Pourquoi choisir un cabinet d'El Jadida quand on est à Casablanca ?",
        a: "Pour la relation : un interlocuteur unique qui connaît votre dossier, une réactivité réelle et une approche personnalisée, là où de nombreux cabinets de la métropole traitent les petites structures de façon standardisée.",
      },
      {
        q: "Comment se passe la collaboration à distance ?",
        a: "Vous nous transmettez vos pièces sous forme numérique, nous assurons la saisie, les déclarations en ligne et des points réguliers par téléphone ou visioconférence. Les formalités administratives se gèrent en grande partie sans déplacement.",
      },
      {
        q: "Pouvez-vous créer ma société si je suis à Casablanca ?",
        a: "Oui. Nous prenons en charge la création (certificat négatif, statuts, RC, ICE, identifiant fiscal, CNSS) pour des entrepreneurs de la région de Casablanca, l'essentiel des démarches se traitant à distance.",
      },
    ],
    nearby: ["el-jadida", "bir-jdid", "settat"],
  },
];

export const citySlugs = () => cities.map((c) => c.slug);
export const getCity = (slug: string) => cities.find((c) => c.slug === slug);
