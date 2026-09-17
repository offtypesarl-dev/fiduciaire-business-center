import type { ServicePage } from "./types";

// French service pages — the core of the site's commercial SEO surface.
// Each entry becomes /services/<slug> with unique metadata + Service schema.

export const services: ServicePage[] = [
  {
    slug: "tenue-comptabilite",
    keyword: "tenue de comptabilité El Jadida",
    label: "Tenue de comptabilité",
    metaTitle: "Tenue de comptabilité à El Jadida | Cabinet comptable FBC",
    metaDescription:
      "Externalisez votre comptabilité à El Jadida : saisie, lettrage, états de synthèse et bilan aux normes marocaines. Cabinet agréé, interlocuteur dédié. Devis gratuit.",
    h1: "Tenue de comptabilité à El Jadida",
    summary:
      "Saisie, lettrage, états de synthèse et bilan tenus au quotidien selon le plan comptable marocain.",
    lead: "Confiez votre comptabilité à Fiduciaire & Business Center et concentrez-vous sur votre activité. Notre cabinet à El Jadida tient les comptes des TPE, PME et professions libérales dans le respect strict du Code général de normalisation comptable (CGNC) et des obligations fiscales marocaines.",
    sections: [
      {
        heading: "Une comptabilité tenue au quotidien, sans stress",
        body: [
          "La tenue de comptabilité couvre l'enregistrement de l'ensemble de vos opérations : achats, ventes, banque, caisse, immobilisations et opérations diverses. Chaque écriture est justifiée par une pièce et rattachée au bon exercice, pour une image fidèle et sincère de votre entreprise.",
          "Nous travaillons en flux régulier — mensuel ou trimestriel selon votre volume — afin que vous disposiez d'une situation à jour à tout moment, et non d'un rattrapage précipité en fin d'année.",
        ],
      },
      {
        heading: "Ce que comprend la prestation",
        bullets: [
          "Collecte et classement de vos pièces comptables (papier ou numérique)",
          "Saisie des écritures d'achats, de ventes, de trésorerie et d'opérations diverses",
          "Lettrage des comptes clients et fournisseurs",
          "Rapprochements bancaires périodiques",
          "Suivi des immobilisations et calcul des amortissements",
          "Établissement des états de synthèse : bilan, CPC, ESG, tableau de financement et ETIC",
          "Préparation du dossier de clôture et de la liasse fiscale",
        ],
      },
      {
        heading: "Conforme aux normes comptables marocaines",
        body: [
          "Nos travaux respectent le Code général de normalisation comptable et la réglementation en vigueur. Les états de synthèse produits sont directement exploitables pour vos déclarations fiscales, vos demandes de financement et vos relations avec l'administration.",
          "Selon votre régime et votre chiffre d'affaires, nous adaptons la présentation (comptabilité normale ou simplifiée) et vous alertons sur les seuils qui font évoluer vos obligations.",
        ],
      },
      {
        heading: "Un interlocuteur dédié, une visibilité permanente",
        body: [
          "Vous êtes suivi par un interlocuteur unique qui connaît votre dossier. Au-delà de la saisie, nous vous transmettons des points de situation lisibles : marge, trésorerie, postes de charges à surveiller.",
          "Cette proximité fait la différence : vous prenez vos décisions sur des chiffres à jour, pas sur des estimations.",
        ],
      },
    ],
    faq: [
      {
        q: "À quelle fréquence dois-je transmettre mes pièces ?",
        a: "Idéalement chaque mois pour une comptabilité à jour, mais nous nous adaptons à votre organisation : mensuel, trimestriel ou selon un rythme convenu ensemble. Le dépôt numérique est possible pour vous éviter les déplacements.",
      },
      {
        q: "Puis-je changer de comptable en cours d'exercice ?",
        a: "Oui. Nous récupérons votre dossier auprès de votre ancien prestataire, reprenons les à-nouveaux et assurons la continuité sans rupture. Le changement est courant et se déroule sans difficulté.",
      },
      {
        q: "Tenez-vous la comptabilité des auto-entrepreneurs et professions libérales ?",
        a: "Oui. Nous accompagnons aussi bien les auto-entrepreneurs et professions libérales que les TPE et PME, avec une offre adaptée au volume et aux obligations de chacun.",
      },
      {
        q: "Où êtes-vous situés ?",
        a: "Notre cabinet est à El Jadida, Bd Mohammed VI, angle rue Surcouf. Nous accompagnons les entreprises d'El Jadida, de la région Casablanca-Settat et de tout le Maroc.",
      },
    ],
    related: ["declarations-fiscales", "audit-revision", "conseil-gestion"],
  },
  {
    slug: "creation-entreprise",
    keyword: "création d'entreprise El Jadida",
    label: "Création d'entreprise",
    metaTitle: "Création d'entreprise & de société à El Jadida | FBC",
    metaDescription:
      "Créez votre société à El Jadida de A à Z : certificat négatif, statuts, RC, ICE, identifiant fiscal et CNSS. SARL, SARL AU ou auto-entrepreneur.",
    h1: "Création d'entreprise et de société à El Jadida",
    summary:
      "De l'idée à l'immatriculation : certificat négatif, statuts, RC, ICE et toutes les formalités.",
    lead: "Vous lancez votre activité ? Fiduciaire & Business Center vous accompagne dans la création de votre société à El Jadida, de la première réflexion jusqu'à l'immatriculation et au-delà. Nous choisissons ensemble la forme juridique adaptée, puis nous prenons en charge l'intégralité des démarches.",
    sections: [
      {
        heading: "Quelle forme juridique pour votre projet ?",
        body: [
          "Le choix de la structure conditionne votre fiscalité, votre responsabilité et votre crédibilité. Nous vous orientons vers la forme la plus pertinente selon votre activité, votre chiffre d'affaires prévisionnel et vos associés.",
        ],
        bullets: [
          "Auto-entrepreneur : idéal pour tester une activité, formalités allégées et fiscalité forfaitaire, dans la limite des plafonds de chiffre d'affaires.",
          "SARL AU (associé unique) : responsabilité limitée aux apports, structure crédible pour un entrepreneur seul.",
          "SARL (plusieurs associés) : la forme la plus répandue au Maroc pour les PME.",
          "SA, SNC, société civile : pour les projets spécifiques, nous vous conseillons au cas par cas.",
        ],
      },
      {
        heading: "Les étapes de la création d'une société",
        body: [
          "Nous prenons en charge chaque étape de la constitution, en lien avec l'OMPIC, le tribunal de commerce, la Direction générale des impôts et la CNSS :",
        ],
        bullets: [
          "Obtention du certificat négatif (protection de la dénomination auprès de l'OMPIC)",
          "Rédaction des statuts adaptés à votre projet",
          "Dépôt du capital social et attestation de blocage le cas échéant",
          "Enregistrement des actes et paiement des droits",
          "Inscription au registre du commerce (RC) et immatriculation",
          "Obtention de l'identifiant commun de l'entreprise (ICE) et de l'identifiant fiscal",
          "Affiliation à la CNSS et déclaration d'existence",
          "Publication légale et démarrage de l'activité",
        ],
      },
      {
        heading: "Un accompagnement qui ne s'arrête pas à l'immatriculation",
        body: [
          "Créer la société n'est qu'un début. Nous mettons en place votre comptabilité, vos obligations déclaratives (TVA, IS/IR, CNSS) et vous conseillons sur vos premières décisions de gestion.",
          "Vous démarrez ainsi sur des bases saines, avec un cabinet qui connaît votre dossier depuis le premier jour.",
        ],
      },
    ],
    faq: [
      {
        q: "Combien de temps faut-il pour créer une société au Maroc ?",
        a: "Une fois les pièces réunies, la constitution d'une SARL prend généralement quelques jours à deux semaines selon les délais de l'administration et de la publication. Nous vous communiquons un calendrier précis au démarrage.",
      },
      {
        q: "Quel capital minimum pour une SARL ?",
        a: "Il n'existe pas de capital minimum légal imposé pour une SARL au Maroc : le capital est librement fixé par les associés. Nous vous conseillons un montant cohérent avec votre activité et vos besoins de crédibilité.",
      },
      {
        q: "Dois-je choisir entre auto-entrepreneur et société ?",
        a: "Cela dépend de votre chiffre d'affaires prévisionnel, de vos charges et de vos ambitions. Lors du premier échange gratuit, nous comparons les scénarios chiffrés pour vous orienter vers la meilleure option.",
      },
      {
        q: "Accompagnez-vous les créateurs hors d'El Jadida ?",
        a: "Oui. Nous créons des sociétés pour des entrepreneurs d'El Jadida, de Casablanca et de toute la région. Une grande partie des démarches se gère à distance.",
      },
    ],
    related: ["conseil-fiscal", "tenue-comptabilite", "domiciliation"],
  },
  {
    slug: "conseil-fiscal",
    keyword: "conseil fiscal El Jadida",
    label: "Conseil fiscal & juridique",
    metaTitle: "Conseil fiscal & juridique à El Jadida | Cabinet FBC",
    metaDescription:
      "Optimisez votre fiscalité à El Jadida en toute légalité : IS, IR, TVA, choix de régime et accompagnement en cas de contrôle. Premier rendez-vous gratuit.",
    h1: "Conseil fiscal et juridique à El Jadida",
    summary:
      "Optimisation fiscale légale, choix de régime et sécurisation de vos décisions au regard du CGI 2026.",
    lead: "La fiscalité marocaine évolue chaque année, et la loi de finances 2026 ne fait pas exception. Fiduciaire & Business Center vous aide à décider en connaissance de cause : quel régime choisir, comment structurer une opération, comment réduire votre charge fiscale sans jamais sortir du cadre légal fixé par le Code général des impôts.",
    sections: [
      {
        heading: "Un conseil qui anticipe plutôt qu'il ne subit",
        body: [
          "Beaucoup de dirigeants découvrent l'impact fiscal d'une décision une fois qu'il est trop tard pour agir. Notre rôle est inverse : intervenir en amont, chiffrer les scénarios et vous présenter l'option la plus avantageuse avant que vous ne vous engagiez.",
          "Distribution de dividendes, acquisition de matériel, embauche, changement de forme juridique : chaque projet a une traduction fiscale que nous mettons noir sur blanc.",
        ],
      },
      {
        heading: "Impôt sur les sociétés ou impôt sur le revenu ?",
        body: [
          "Le choix du mode d'imposition est structurant. À l'IS, la plupart des PME dont le bénéfice net reste inférieur à 100 millions de dirhams sont imposées à 20 %, contre 35 % au-delà de ce seuil et 40 % pour le secteur financier. Une cotisation minimale de 0,25 % du chiffre d'affaires (plancher de 3 000 DH) reste due.",
          "À l'IR, le barème est progressif : la tranche jusqu'à 40 000 DH est exonérée, puis les taux montent par paliers jusqu'à 37 % au-delà de 180 000 DH. Nous comparons les deux régimes sur vos propres chiffres.",
        ],
        table: {
          caption: "Barème de l'IR 2026 (revenu net imposable annuel)",
          headers: ["Tranche annuelle (DH)", "Taux", "Somme à déduire (DH)"],
          rows: [
            ["0 – 40 000", "0 %", "0"],
            ["40 001 – 60 000", "10 %", "4 000"],
            ["60 001 – 80 000", "20 %", "10 000"],
            ["80 001 – 100 000", "30 %", "18 000"],
            ["100 001 – 180 000", "34 %", "22 000"],
            ["Plus de 180 000", "37 %", "27 400"],
          ],
        },
      },
      {
        heading: "Sécuriser vos opérations et vos actes",
        bullets: [
          "Analyse fiscale préalable de vos projets d'investissement ou de cession",
          "Rédaction et relecture des actes juridiques courants (PV d'assemblée, cessions de parts, baux)",
          "Suivi des nouveautés de la loi de finances 2026 : facturation électronique, TVA en retenue à la source sur les prestations de services depuis le 1er janvier 2026",
          "Veille sur les seuils et régimes applicables à votre secteur",
        ],
      },
      {
        heading: "En cas de contrôle fiscal, vous n'êtes pas seul",
        body: [
          "Un avis de vérification n'est pas une condamnation. Nous préparons votre dossier, reconstituons les justificatifs, formulons vos réponses dans les délais et vous accompagnons dans les échanges avec l'inspecteur.",
          "Cette assistance transforme un moment redouté en procédure maîtrisée, où vos droits sont défendus point par point.",
        ],
      },
    ],
    faq: [
      {
        q: "L'optimisation fiscale est-elle légale au Maroc ?",
        a: "Oui, tant qu'elle repose sur les dispositifs prévus par le Code général des impôts. Nous distinguons clairement l'optimisation légitime — choix de régime, déductions autorisées, provisions justifiées — de l'abus de droit, que nous refusons systématiquement.",
      },
      {
        q: "Combien coûte une consultation fiscale ?",
        a: "Le premier échange est gratuit. Au-delà, nous proposons soit un forfait de conseil ponctuel, soit un accompagnement annuel intégré à votre suivi comptable. Le tarif est indicatif et fixé après avoir cerné votre besoin.",
      },
      {
        q: "Que change la loi de finances 2026 pour ma PME ?",
        a: "Plusieurs mesures vous concernent : le renforcement de la facturation électronique, la TVA en retenue à la source sur les prestations de services depuis janvier 2026, et le relèvement de la déduction pour charge de famille à 600 DH par personne. Nous adaptons votre gestion à ces évolutions.",
      },
      {
        q: "Pouvez-vous m'assister pendant un contrôle fiscal à El Jadida ?",
        a: "Oui. Nous préparons votre défense, rédigeons vos réponses aux notifications et vous représentons dans les échanges avec l'administration, à El Jadida comme dans toute la région Casablanca-Settat.",
      },
    ],
    related: ["declarations-fiscales", "tenue-comptabilite", "conseil-gestion"],
  },
  {
    slug: "declarations-fiscales",
    keyword: "déclaration TVA IS IR El Jadida",
    label: "Déclarations fiscales & sociales",
    metaTitle: "Déclarations fiscales TVA, IS, IR à El Jadida | FBC",
    metaDescription:
      "Vos déclarations TVA, IS, IR et CNSS déposées dans les délais à El Jadida via SIMPL et Damancom. Zéro pénalité, échéancier maîtrisé. Contactez le cabinet FBC.",
    h1: "Déclarations fiscales et sociales à El Jadida",
    summary:
      "TVA, IS, IR, CNSS : télédéclarations et télépaiements déposés dans les délais, sans pénalité.",
    lead: "Une déclaration oubliée ou déposée en retard coûte cher : majorations, pénalités et intérêts s'accumulent vite. Fiduciaire & Business Center prend en charge l'ensemble de vos obligations déclaratives à El Jadida, en respectant chaque échéance sur les plateformes SIMPL de la DGI et Damancom de la CNSS.",
    sections: [
      {
        heading: "Toutes vos déclarations, un seul échéancier",
        body: [
          "Nous établissons un calendrier fiscal et social propre à votre entreprise, puis nous tenons chaque échéance. Vous ne courez plus après les dates : vous validez, nous déposons.",
        ],
        bullets: [
          "TVA : déclaration mensuelle si votre chiffre d'affaires dépasse 1 000 000 DH, trimestrielle en deçà, à déposer et payer avant le 20 via SIMPL-TVA",
          "IS : télépaiement de la cotisation minimale et des quatre acomptes trimestriels, puis régularisation annuelle",
          "IR professionnel et IR sur salaires (retenue à la source)",
          "Déclarations CNSS mensuelles via Damancom",
          "Déclarations annuelles récapitulatives et états 9421",
        ],
      },
      {
        heading: "La TVA : deux taux, des règles précises",
        body: [
          "Depuis l'achèvement de la réforme, la TVA marocaine ne connaît plus que deux taux principaux. Nous appliquons le bon taux à chaque opération et gérons vos droits à déduction pour n'avancer que ce qui est réellement dû.",
        ],
        table: {
          caption: "Taux de TVA applicables en 2026",
          headers: ["Taux", "Application principale"],
          rows: [
            ["20 %", "Taux normal : conseil, informatique, électronique, B2B général"],
            ["10 %", "Taux réduit : hébergement, restauration, transport, banque, énergies renouvelables, eau"],
            ["0 %", "Exportations (avec droit à déduction)"],
          ],
        },
      },
      {
        heading: "Nouveautés à intégrer en 2026",
        body: [
          "La loi de finances 2026 introduit la TVA en retenue à la source sur certaines rémunérations de prestations de services depuis le 1er janvier, et une retenue de 5 % sur les revenus locatifs versés aux personnes morales à compter du 1er juillet. Ces mécanismes changent la façon de facturer et de déclarer.",
          "Nous mettons vos process à jour et vérifions que vos factures respectent les nouvelles obligations, notamment le renforcement de la facturation électronique.",
        ],
      },
      {
        heading: "Zéro pénalité : notre engagement de rigueur",
        body: [
          "Notre valeur ajoutée est simple : aucune échéance ratée par notre faute. Nous vous alertons en amont sur les montants à provisionner et vous confirmons chaque dépôt par un accusé.",
          "Vous gardez ainsi une trésorerie prévisible et une conformité irréprochable vis-à-vis de la DGI et de la CNSS.",
        ],
      },
    ],
    faq: [
      {
        q: "Ma déclaration de TVA doit-elle être mensuelle ou trimestrielle ?",
        a: "Cela dépend de votre chiffre d'affaires : la déclaration est mensuelle au-delà de 1 000 000 DH et trimestrielle en dessous. Dans les deux cas, le dépôt et le paiement s'effectuent avant le 20 sur la plateforme SIMPL-TVA.",
      },
      {
        q: "Que se passe-t-il si je dépose en retard ?",
        a: "L'administration applique des majorations et des intérêts de retard qui alourdissent la facture. C'est précisément ce que notre échéancier permet d'éviter : nous déposons vos déclarations dans les délais légaux.",
      },
      {
        q: "Gérez-vous aussi les déclarations sociales CNSS ?",
        a: "Oui. Nous produisons vos déclarations de salaires mensuelles via Damancom et calculons les cotisations dues, en cohérence avec notre prestation de gestion de la paie.",
      },
      {
        q: "Puis-je vous confier uniquement les déclarations, sans la comptabilité complète ?",
        a: "C'est possible lorsque votre comptabilité est fiable et à jour. Nous réalisons alors un contrôle de cohérence préalable pour sécuriser les montants déclarés avant chaque dépôt.",
      },
    ],
    related: ["tenue-comptabilite", "conseil-fiscal", "gestion-paie"],
  },
  {
    slug: "gestion-paie",
    keyword: "gestion de paie El Jadida",
    label: "Gestion de la paie",
    metaTitle: "Gestion de la paie à El Jadida | Cabinet comptable FBC",
    metaDescription:
      "Externalisez la paie à El Jadida : bulletins conformes, cotisations CNSS, AMO et déclarations Damancom. Fiable et confidentiel. Devis gratuit au cabinet FBC.",
    h1: "Gestion de la paie à El Jadida",
    summary:
      "Bulletins de paie conformes, cotisations CNSS et AMO calculées, déclarations Damancom déposées.",
    lead: "La paie est un exercice sensible : une erreur de cotisation ou un bulletin non conforme génère des litiges et des redressements. Fiduciaire & Business Center gère la paie de vos salariés à El Jadida avec rigueur et confidentialité, du bulletin mensuel jusqu'aux déclarations sociales.",
    sections: [
      {
        heading: "De la variable au bulletin, chaque mois",
        body: [
          "Vous nous transmettez les éléments variables — heures, primes, absences, congés, avances — et nous produisons des bulletins de paie exacts, conformes au Code du travail marocain et à la convention applicable à votre secteur.",
          "Les bulletins vous parviennent à date fixe, prêts à être remis à vos salariés et à comptabiliser.",
        ],
      },
      {
        heading: "Le calcul des cotisations sociales",
        body: [
          "Nous calculons précisément les charges patronales et salariales dues sur chaque rémunération. Le total des cotisations avoisine 27,83 % du salaire, réparti entre l'employeur et le salarié.",
        ],
        table: {
          caption: "Cotisations sociales sur salaire (ordres de grandeur 2026)",
          headers: ["Cotisation", "Part employeur", "Part salarié"],
          rows: [
            ["CNSS + AMO (charge globale)", "≈ 21,09 %", "≈ 6,74 %"],
            ["dont AMO", "4,11 %", "2,26 %"],
            ["Allocations familiales", "6,40 %", "—"],
            ["Taxe de formation professionnelle (TFP)", "1,60 %", "—"],
          ],
        },
      },
      {
        heading: "Les prestations incluses",
        bullets: [
          "Établissement des bulletins de paie mensuels",
          "Calcul des cotisations CNSS et AMO, avec plafonnement de la branche prestations sociales à 6 000 DH par mois",
          "Retenue à la source de l'IR sur salaires et régularisation",
          "Télédéclarations sociales via Damancom et bordereaux de paiement",
          "Gestion des entrées et sorties : contrats, soldes de tout compte, attestations",
          "Journal de paie et écritures pour votre comptabilité",
        ],
      },
      {
        heading: "Confidentialité et sérénité sociale",
        body: [
          "Les salaires touchent à la confiance interne : nous traitons ces données avec une confidentialité stricte. Vous limitez le risque de contentieux prud'homal et de redressement CNSS en vous appuyant sur des calculs justes.",
          "Nouvel employeur ? L'affiliation à la CNSS doit intervenir dans les 30 jours ; nous prenons en charge cette formalité pour démarrer votre paie sans accroc.",
        ],
      },
    ],
    faq: [
      {
        q: "Combien coûte la gestion d'un bulletin de paie ?",
        a: "Le tarif est indicatif et dépend du nombre de salariés et de la complexité (primes, horaires variables, conventions). Nous proposons un forfait mensuel par bulletin, dégressif selon l'effectif, chiffré après un premier échange gratuit.",
      },
      {
        q: "Quel est le montant global des charges sociales sur un salaire ?",
        a: "L'ensemble des cotisations représente environ 27,83 % du salaire, soit près de 21,09 % à la charge de l'employeur et 6,74 % à la charge du salarié. La branche des prestations sociales est plafonnée à 6 000 DH par mois, tandis que l'AMO n'est pas plafonnée.",
      },
      {
        q: "Gérez-vous les déclarations CNSS via Damancom ?",
        a: "Oui. Nous établissons et télétransmettons vos déclarations de salaires mensuelles sur Damancom et vous fournissons les bordereaux de paiement correspondants.",
      },
      {
        q: "Pouvez-vous reprendre la paie en cours d'année ?",
        a: "Absolument. Nous récupérons les cumuls depuis le début de l'exercice pour garantir des régularisations d'IR et de cotisations exactes, sans rupture pour vos salariés.",
      },
    ],
    related: ["declarations-fiscales", "tenue-comptabilite", "creation-entreprise"],
  },
  {
    slug: "audit-revision",
    keyword: "audit comptable El Jadida",
    label: "Audit & révision comptable",
    metaTitle: "Audit & révision comptable à El Jadida | Cabinet FBC",
    metaDescription:
      "Fiabilisez vos comptes à El Jadida : révision comptable, audit contractuel et diagnostic avant clôture ou cession. Regard indépendant. Devis gratuit FBC.",
    h1: "Audit et révision comptable à El Jadida",
    summary:
      "Révision des comptes, audit contractuel et diagnostic pour fiabiliser vos chiffres avant décision.",
    lead: "Avant une clôture, une cession, une demande de financement ou tout simplement pour dormir tranquille, il est précieux de faire regarder vos comptes par un œil indépendant. Fiduciaire & Business Center réalise à El Jadida des missions d'audit et de révision comptable destinées à fiabiliser vos états financiers.",
    sections: [
      {
        heading: "Pourquoi faire réviser vos comptes ?",
        body: [
          "La révision comptable consiste à contrôler la régularité, la sincérité et la cohérence de vos écritures avant l'arrêté des comptes. Elle détecte les anomalies, les oublis et les risques fiscaux pendant qu'il est encore temps de les corriger.",
          "C'est une démarche de prévention : mieux vaut identifier une erreur en interne qu'attendre qu'un contrôle ou un partenaire la révèle.",
        ],
      },
      {
        heading: "Nos missions d'audit et de révision",
        bullets: [
          "Révision annuelle des comptes avant clôture et établissement de la liasse",
          "Audit contractuel à la demande d'un associé, d'un repreneur ou d'un financeur",
          "Diagnostic comptable et fiscal d'une entreprise que vous envisagez de racheter",
          "Contrôle des procédures et du dispositif de contrôle interne",
          "Vérification de la conformité aux normes du CGNC et du Code général des impôts",
        ],
      },
      {
        heading: "Une méthode structurée et documentée",
        body: [
          "Nous procédons par cycles — achats, ventes, trésorerie, stocks, immobilisations, social — en testant les comptes significatifs et en remontant aux pièces justificatives. Chaque constat est documenté et hiérarchisé selon son enjeu.",
          "Vous recevez un rapport clair : points de conformité, anomalies relevées, risques chiffrés et recommandations concrètes, classées par priorité.",
        ],
      },
      {
        heading: "Audit contractuel et commissariat aux comptes",
        body: [
          "Nos interventions relèvent de l'audit contractuel : elles répondent à un besoin de confiance entre associés, avec un partenaire ou avant une opération. Elles se distinguent du commissariat aux comptes, mission légale obligatoire notamment lorsque le chiffre d'affaires dépasse 50 millions de dirhams.",
          "Si votre situation requiert un commissaire aux comptes, nous vous orientons et travaillons en bonne articulation avec lui.",
        ],
      },
    ],
    faq: [
      {
        q: "Quelle différence entre audit et commissariat aux comptes ?",
        a: "L'audit contractuel est une mission volontaire, définie avec vous selon votre objectif (confiance, cession, financement). Le commissariat aux comptes est une mission légale obligatoire dans certains cas, par exemple lorsque le chiffre d'affaires dépasse 50 millions de dirhams.",
      },
      {
        q: "Quand demander une révision comptable ?",
        a: "Idéalement avant chaque clôture d'exercice, mais aussi avant une opération importante : entrée d'un associé, demande de crédit, rachat d'une société ou préparation d'un contrôle fiscal.",
      },
      {
        q: "L'audit va-t-il perturber mon activité ?",
        a: "Non. Nous organisons la mission autour de vos contraintes, travaillons en grande partie sur pièces numériques et limitons nos sollicitations aux échanges vraiment nécessaires.",
      },
      {
        q: "Combien coûte une mission d'audit ?",
        a: "Le coût est indicatif et dépend du périmètre, du volume d'opérations et du niveau d'assurance recherché. Nous établissons un devis après un cadrage gratuit de vos objectifs.",
      },
    ],
    related: ["tenue-comptabilite", "conseil-fiscal", "conseil-gestion"],
  },
  {
    slug: "domiciliation",
    keyword: "domiciliation entreprise El Jadida",
    label: "Domiciliation d'entreprise",
    metaTitle: "Domiciliation d'entreprise à El Jadida | Cabinet FBC",
    metaDescription:
      "Domiciliez le siège de votre société à El Jadida : adresse commerciale, contrat conforme, gestion du courrier. Idéal création et sociétés à distance.",
    h1: "Domiciliation d'entreprise à El Jadida",
    summary:
      "Une adresse de siège social à El Jadida avec contrat conforme et gestion de votre courrier.",
    lead: "Toute société immatriculée au Maroc doit justifier d'un siège social. La domiciliation vous permet d'établir ce siège à El Jadida sans louer de local, avec une adresse professionnelle et un contrat conforme à la réglementation. Fiduciaire & Business Center vous propose cette solution souple, particulièrement adaptée aux créateurs et aux structures gérées à distance.",
    sections: [
      {
        heading: "À qui s'adresse la domiciliation ?",
        body: [
          "La domiciliation répond au besoin de disposer d'une adresse de siège crédible sans les charges d'un bail commercial. Elle convient à de nombreux profils :",
        ],
        bullets: [
          "Créateurs qui immatriculent leur société sans avoir encore de local",
          "Entrepreneurs et consultants exerçant depuis leur domicile ou en déplacement",
          "Sociétés basées ailleurs souhaitant une présence dans la région d'El Jadida",
          "Structures en transition entre deux locaux",
        ],
      },
      {
        heading: "Ce que comprend notre offre de domiciliation",
        bullets: [
          "Adresse commerciale à El Jadida utilisable pour l'immatriculation au registre du commerce",
          "Contrat de domiciliation conforme, exigé lors des démarches OMPIC et RC",
          "Réception, tri et notification de votre courrier administratif",
          "Mise à disposition des avis et plis de l'administration fiscale et de la CNSS",
          "Possibilité de coupler la domiciliation avec la tenue de votre comptabilité",
        ],
      },
      {
        heading: "Un cadre légal respecté",
        body: [
          "La domiciliation d'entreprise est encadrée : elle repose sur un contrat écrit et une adresse réelle où votre courrier est effectivement reçu. Nous fournissons les justificatifs attendus par l'OMPIC, le tribunal de commerce et l'administration fiscale.",
          "Vous obtenez ainsi une adresse de siège parfaitement opposable, sans zone grise juridique.",
        ],
      },
      {
        heading: "La domiciliation, prolongée par nos autres services",
        body: [
          "L'intérêt de domicilier chez votre cabinet comptable est la continuité : le courrier fiscal et social arrive directement là où il sera traité. Une relance de la DGI ou de la CNSS ne se perd plus.",
          "Beaucoup de nos clients associent domiciliation, comptabilité et déclarations en une seule relation, pour une gestion sans couture depuis la création.",
        ],
      },
    ],
    faq: [
      {
        q: "Puis-je immatriculer ma société avec une adresse de domiciliation ?",
        a: "Oui. Le contrat de domiciliation fait partie des pièces acceptées pour justifier le siège social lors de l'inscription au registre du commerce et des démarches auprès de l'OMPIC.",
      },
      {
        q: "Combien coûte la domiciliation à El Jadida ?",
        a: "Le tarif est indicatif et proposé sous forme d'abonnement mensuel ou annuel, selon les services associés (gestion du courrier, comptabilité). Nous vous communiquons un devis clair dès le premier échange.",
      },
      {
        q: "Recevrai-je bien mon courrier administratif ?",
        a: "Oui. Nous réceptionnons, trions et vous notifions vos plis, en particulier les avis de la Direction générale des impôts et de la CNSS, pour que rien d'important ne vous échappe.",
      },
      {
        q: "La domiciliation est-elle compatible avec toutes les formes de société ?",
        a: "Elle convient à la plupart des structures, notamment les SARL et SARL AU. Lors de la création, nous vérifions que la domiciliation est adaptée à votre activité et à vos obligations.",
      },
    ],
    related: ["creation-entreprise", "tenue-comptabilite", "auto-entrepreneur"],
  },
  {
    slug: "conseil-gestion",
    keyword: "conseil en gestion El Jadida",
    label: "Conseil en gestion & organisation",
    metaTitle: "Conseil en gestion & organisation à El Jadida | FBC",
    metaDescription:
      "Pilotez votre entreprise à El Jadida : tableaux de bord, marges, trésorerie et business plan. Conseil en gestion sur mesure. Échange gratuit au cabinet FBC.",
    h1: "Conseil en gestion et organisation à El Jadida",
    summary:
      "Tableaux de bord, analyse de marges, trésorerie et business plan pour piloter vraiment votre activité.",
    lead: "La comptabilité raconte le passé ; la gestion prépare l'avenir. Fiduciaire & Business Center transforme vos chiffres en outils de décision : où gagnez-vous de l'argent, où en perdez-vous, quelle trésorerie disponible dans trois mois ? Nous aidons les dirigeants d'El Jadida à piloter leur entreprise avec méthode, pas à l'instinct.",
    sections: [
      {
        heading: "Des tableaux de bord qui éclairent vos décisions",
        body: [
          "Un bon tableau de bord tient sur une page et répond aux questions qui comptent. Nous construisons avec vous quelques indicateurs vraiment utiles — chiffre d'affaires, marge, point mort, trésorerie — mis à jour au rythme de votre activité.",
          "Vous cessez de subir vos chiffres une fois par an au moment du bilan : vous les lisez en continu et agissez à temps.",
        ],
      },
      {
        heading: "Nos missions de conseil en gestion",
        bullets: [
          "Mise en place de tableaux de bord et d'indicateurs de pilotage",
          "Analyse de la rentabilité par produit, service ou chantier",
          "Prévisionnel de trésorerie et suivi du besoin en fonds de roulement",
          "Élaboration de business plans pour un lancement ou une demande de financement",
          "Étude de coûts et politique de prix",
          "Organisation administrative et fluidification de vos process internes",
        ],
      },
      {
        heading: "Anticiper la trésorerie, éviter les mauvaises surprises",
        body: [
          "La première cause de difficulté des petites entreprises n'est pas le manque de bénéfice, mais le manque de trésorerie au mauvais moment. Nous établissons un plan de trésorerie glissant qui anticipe les échéances fiscales, sociales et fournisseurs.",
          "Vous voyez venir les tensions et pouvez négocier, décaler ou financer avant que la situation ne devienne critique.",
        ],
      },
      {
        heading: "Un business plan solide pour convaincre",
        body: [
          "Que ce soit pour lancer une activité, ouvrir un établissement ou solliciter un crédit, un business plan chiffré et crédible fait la différence. Nous construisons des prévisionnels réalistes, cohérents avec la fiscalité applicable et défendables face à un banquier.",
          "Ce document devient aussi votre feuille de route : nous le confrontons ensuite à vos résultats réels pour ajuster le cap.",
        ],
      },
    ],
    faq: [
      {
        q: "Le conseil en gestion est-il réservé aux grandes entreprises ?",
        a: "Non, c'est même le plus utile aux TPE et PME, qui n'ont pas de contrôleur de gestion en interne. Nos outils sont dimensionnés à votre taille et restent simples à lire au quotidien.",
      },
      {
        q: "Faut-il déjà être client pour votre comptabilité ?",
        a: "Non. Nous pouvons intervenir en conseil ponctuel, par exemple pour un business plan ou une analyse de marges. Le fait de tenir aussi votre comptabilité facilite toutefois l'accès à des données fiables.",
      },
      {
        q: "Aidez-vous à monter un dossier de financement bancaire ?",
        a: "Oui. Nous préparons le prévisionnel, le plan de financement et les états demandés par la banque, et nous vous aidons à présenter votre projet de façon convaincante.",
      },
      {
        q: "À quelle fréquence met-on à jour les tableaux de bord ?",
        a: "Le rythme dépend de votre activité : mensuel dans la plupart des cas, parfois hebdomadaire pour la trésorerie. L'objectif est un pilotage vivant, pas un rapport de plus qui dort dans un tiroir.",
      },
    ],
    related: ["tenue-comptabilite", "conseil-fiscal", "audit-revision"],
  },
  {
    slug: "auto-entrepreneur",
    keyword: "statut auto-entrepreneur Maroc",
    label: "Accompagnement auto-entrepreneur",
    metaTitle: "Statut auto-entrepreneur au Maroc | Cabinet FBC El Jadida",
    metaDescription:
      "Devenez auto-entrepreneur au Maroc : inscription RNAE, plafonds, IR libératoire de 0,5 % ou 1 %. Accompagnement clair par le cabinet FBC à El Jadida.",
    h1: "Accompagnement au statut auto-entrepreneur au Maroc",
    summary:
      "Inscription au RNAE, plafonds, fiscalité forfaitaire : lancez votre activité simplement et sans erreur.",
    lead: "Le statut d'auto-entrepreneur est la porte d'entrée la plus simple vers l'activité indépendante au Maroc : peu de formalités, une fiscalité forfaitaire et une comptabilité allégée. Fiduciaire & Business Center vous aide, depuis El Jadida, à démarrer sous ce statut sans commettre les erreurs qui coûtent cher, et à savoir quand il devient temps d'en changer.",
    sections: [
      {
        heading: "Un statut simple, mais avec des règles à connaître",
        body: [
          "L'auto-entrepreneur s'inscrit au Registre national de l'auto-entrepreneur (RNAE), n'a pas de registre du commerce et tient une comptabilité très allégée. Il est également hors champ de la TVA : il ne la facture pas et ne la récupère pas.",
          "Cette simplicité a une contrepartie : des plafonds de chiffre d'affaires à respecter et des règles précises qui, une fois dépassées, font basculer dans un autre régime.",
        ],
      },
      {
        heading: "Plafonds et fiscalité forfaitaire",
        body: [
          "L'impôt est libératoire et calculé directement sur le chiffre d'affaires encaissé, à un taux forfaitaire qui dépend de votre activité. Le chiffre d'affaires ne doit pas franchir les plafonds ci-dessous.",
        ],
        table: {
          caption: "Auto-entrepreneur : plafonds et taux d'IR libératoire (2026)",
          headers: ["Activité", "Plafond de CA annuel", "IR libératoire sur CA"],
          rows: [
            ["Commerce, industrie, artisanat", "500 000 DH", "0,5 %"],
            ["Prestations de services", "200 000 DH", "1 %"],
          ],
        },
      },
      {
        heading: "Les pièges à éviter",
        bullets: [
          "Dépasser un plafond deux années consécutives entraîne la radiation du régime",
          "Pour les prestations de services, la part de chiffre d'affaires réalisée avec un même client au-delà de 80 000 DH est exclue du régime et subit une retenue à la source libératoire de 30 % appliquée par ce client",
          "Le statut ne convient pas si vous devez récupérer la TVA sur des achats importants",
          "Confondre chiffre d'affaires encaissé et facturé fausse le calcul de l'impôt dû",
        ],
      },
      {
        heading: "Savoir quand passer en société",
        body: [
          "L'auto-entrepreneuriat est idéal pour tester une activité et lancer une clientèle. Mais dès que votre chiffre d'affaires approche des plafonds, que vos charges deviennent significatives ou que vous travaillez surtout avec un grand client, la société (SARL ou SARL AU) devient souvent plus avantageuse.",
          "Nous comparons les scénarios chiffrés et, le moment venu, nous organisons la transition vers une structure sociétaire sans rupture d'activité.",
        ],
      },
    ],
    faq: [
      {
        q: "Quels sont les plafonds de chiffre d'affaires en auto-entrepreneur ?",
        a: "Ils s'élèvent à 500 000 DH par an pour le commerce, l'industrie et l'artisanat, et à 200 000 DH pour les prestations de services. Dépasser ces seuils deux années de suite entraîne la sortie du régime.",
      },
      {
        q: "Combien d'impôt paie un auto-entrepreneur ?",
        a: "L'IR est libératoire et calculé sur le chiffre d'affaires encaissé : 0,5 % pour le commerce et l'industrie, 1 % pour les prestations de services. Il n'y a pas de barème progressif tant que vous restez dans le régime.",
      },
      {
        q: "Qu'est-ce que la règle des 80 000 DH par client ?",
        a: "Pour les prestations de services, la part du chiffre d'affaires dépassant 80 000 DH réalisée avec un seul et même client est exclue du régime. Ce client applique alors une retenue à la source libératoire de 30 % sur le surplus.",
      },
      {
        q: "L'auto-entrepreneur facture-t-il la TVA ?",
        a: "Non. Le statut est hors champ de la TVA : vous ne la facturez pas à vos clients et vous ne la récupérez pas sur vos achats. C'est un point à intégrer si vous investissez beaucoup.",
      },
      {
        q: "Pouvez-vous m'inscrire au statut d'auto-entrepreneur ?",
        a: "Oui. Nous vous accompagnons dans l'inscription au RNAE, la mise en place de votre suivi de chiffre d'affaires et le calcul de votre impôt, et nous vous alertons dès qu'un changement de statut devient pertinent.",
      },
    ],
    related: ["creation-entreprise", "conseil-fiscal", "domiciliation"],
  },
];

export const serviceSlugs = () => services.map((s) => s.slug);
export const getService = (slug: string) =>
  services.find((s) => s.slug === slug);
