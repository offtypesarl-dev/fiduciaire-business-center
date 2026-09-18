import type { GuidePage } from "./types";

// French informational SEO guides — high-intent keywords feeding AI Overviews.
// Every figure is grounded in FISCAL_FACTS.md (Loi de Finances 2026 / CGI 2026 /
// note circulaire DGI n°737). Each entry becomes /guides/<slug>.

export const guides: GuidePage[] = [
  {
    slug: "creer-sarl-maroc",
    keyword: "comment créer une SARL au Maroc",
    label: "Créer une SARL au Maroc",
    metaTitle: "Créer une SARL au Maroc en 2026 : étapes et délais | FBC",
    metaDescription:
      "Créer une SARL au Maroc en 2026 : certificat négatif, statuts, capital, RC, ICE, CNSS. Toutes les étapes, les délais (5 à 10 jours) et les coûts expliqués.",
    h1: "Comment créer une SARL au Maroc : le guide complet 2026",
    summary:
      "Les 8 étapes pour constituer une SARL au Maroc, du certificat négatif à la publicité légale, avec les délais et le capital requis.",
    datePublished: "2026-09-18",
    lead: "La SARL (société à responsabilité limitée) est la forme juridique la plus répandue au Maroc pour les TPE et PME. Depuis la loi 24-10, aucun capital minimum n'est imposé et les démarches sont centralisées par le Centre régional d'investissement (CRI), ce qui permet une constitution en 5 à 10 jours ouvrés avec un dossier complet. Ce guide détaille chaque étape, de la protection de la dénomination à l'affiliation CNSS.",
    sections: [
      {
        heading: "Pourquoi choisir la SARL ?",
        body: [
          "La SARL limite la responsabilité des associés au montant de leurs apports : votre patrimoine personnel est protégé des dettes de la société. C'est la structure de référence pour les projets à plusieurs associés, tandis que sa variante à associé unique, la SARL AU, convient à l'entrepreneur seul.",
          "Elle offre une crédibilité forte auprès des banques, des fournisseurs et des donneurs d'ordre, tout en restant simple à gérer. La désignation d'un commissaire aux comptes n'est obligatoire que si le chiffre d'affaires dépasse 50 millions de dirhams.",
        ],
        bullets: [
          "Responsabilité limitée aux apports des associés",
          "Aucun capital social minimum légal (loi 24-10)",
          "De 1 associé (SARL AU) à 50 associés maximum",
          "Régie par la loi 5-96 modifiée par la loi 24-10",
        ],
      },
      {
        heading: "Les 8 étapes de la création d'une SARL",
        body: [
          "Les formalités sont centralisées au CRI, en lien avec l'OMPIC, le tribunal de commerce, la Direction générale des impôts et la CNSS. Voici l'enchaînement type :",
        ],
        table: {
          caption: "Étapes de constitution d'une SARL au Maroc",
          headers: ["Étape", "Démarche", "Organisme", "Repère de coût / délai"],
          rows: [
            [
              "1",
              "Certificat négatif (protection de la dénomination)",
              "OMPIC",
              "~230 DH, 24 à 48 h, valable 3 mois",
            ],
            [
              "2",
              "Rédaction des statuts",
              "Cabinet / associés",
              "Selon le projet",
            ],
            [
              "3",
              "Blocage du capital (uniquement si capital > 100 000 DH)",
              "Banque",
              "Au moins ¼ libéré à la constitution",
            ],
            [
              "4",
              "Enregistrement des actes",
              "Direction générale des impôts",
              "Droit ~1% du capital, minimum 1 000 DH",
            ],
            [
              "5",
              "Immatriculation au registre du commerce (RC)",
              "Tribunal de commerce / CRI",
              "Attribution du numéro RC",
            ],
            [
              "6",
              "ICE, identifiant fiscal, TVA et taxe professionnelle",
              "DGI / CRI",
              "Inclus dans le parcours CRI",
            ],
            [
              "7",
              "Affiliation à la CNSS",
              "CNSS (Damancom)",
              "Dans les 30 jours",
            ],
            [
              "8",
              "Publicité légale",
              "Bulletin officiel + journal d'annonces",
              "Coût des insertions",
            ],
          ],
        },
      },
      {
        heading: "Quel capital pour votre SARL ?",
        body: [
          "Depuis la loi 24-10, il n'existe plus de capital minimum légal : les associés fixent librement le montant. En pratique, un capital d'environ 10 000 DH est recommandé pour asseoir la crédibilité de la société auprès des banques et des partenaires.",
          "Le blocage du capital en banque n'est obligatoire que lorsque le capital dépasse 100 000 DH ; dans ce cas, au moins un quart doit être libéré à la constitution. En dessous de ce seuil, le capital peut rester à la disposition de la société sans blocage préalable.",
        ],
      },
      {
        heading: "Combien de temps et combien ça coûte ?",
        body: [
          "Avec un dossier complet, la constitution d'une SARL prend généralement 5 à 10 jours ouvrés, le CRI centralisant l'essentiel des démarches. Le coût officiel et légal indicatif se situe autour de 3 000 à 6 000 DH, hors honoraires de cabinet, en fonction du capital et des publications.",
          "Pour un chiffrage précis et adapté à votre projet, consultez notre guide dédié au coût de création d'une entreprise, ou demandez un devis personnalisé.",
        ],
      },
      {
        heading: "Se faire accompagner",
        body: [
          "Fiduciaire & Business Center, cabinet comptable à El Jadida, prend en charge l'intégralité de la constitution de votre SARL et met en place, dès l'immatriculation, votre comptabilité et vos obligations déclaratives. Le premier échange est gratuit.",
          "Les montants et seuils cités suivent la Loi de Finances 2026 et le CGI. Certains barèmes évoluent chaque année : nous vous invitons à confirmer votre situation particulière avec le cabinet avant toute décision.",
        ],
      },
    ],
    faq: [
      {
        q: "Quel est le capital minimum pour créer une SARL au Maroc ?",
        a: "Il n'existe aucun capital minimum légal depuis la loi 24-10 : le capital est librement fixé par les associés. Un montant d'environ 10 000 DH est toutefois recommandé pour la crédibilité bancaire. Le blocage en banque n'est exigé que si le capital dépasse 100 000 DH.",
      },
      {
        q: "Combien de temps faut-il pour créer une SARL ?",
        a: "Avec un dossier complet, comptez 5 à 10 jours ouvrés. Le Centre régional d'investissement (CRI) centralise la plupart des démarches, ce qui accélère la procédure. Les délais peuvent varier selon la publication légale et la charge de l'administration.",
      },
      {
        q: "Quels sont les documents indispensables ?",
        a: "Il faut notamment le certificat négatif, les statuts signés, les pièces d'identité des associés et du gérant, le contrat de bail ou l'attestation de domiciliation, et le cas échéant l'attestation de blocage du capital. Le cabinet vous fournit la liste complète adaptée à votre cas.",
      },
      {
        q: "Un commissaire aux comptes est-il obligatoire ?",
        a: "Non, pas pour la plupart des SARL. La désignation d'un commissaire aux comptes n'est obligatoire que lorsque le chiffre d'affaires dépasse 50 millions de dirhams.",
      },
    ],
    related: [
      "services/creation-entreprise",
      "guides/cout-creation-entreprise-maroc",
      "guides/auto-entrepreneur-ou-sarl",
    ],
  },
  {
    slug: "cout-creation-entreprise-maroc",
    keyword: "coût création entreprise Maroc",
    label: "Coût de création d'une entreprise",
    metaTitle: "Coût de création d'une entreprise au Maroc en 2026 | FBC",
    metaDescription:
      "Coût de création d'une entreprise au Maroc : certificat négatif, enregistrement, publications, légalisations. Détail des frais officiels et total indicatif 2026.",
    h1: "Coût de création d'une entreprise au Maroc en 2026",
    summary:
      "Le détail des frais officiels et légaux pour créer une société au Maroc, avec un total indicatif de 3 000 à 6 000 DH hors honoraires.",
    datePublished: "2026-09-18",
    lead: "Combien coûte réellement la création d'une société au Maroc ? Au-delà des honoraires de cabinet, plusieurs frais officiels et légaux sont incontournables : certificat négatif, enregistrement des actes, publications et légalisations. Ce guide détaille chaque poste avec des montants indicatifs, pour un total qui se situe généralement entre 3 000 et 6 000 DH, hors honoraires.",
    sections: [
      {
        heading: "Les postes de coût officiels",
        body: [
          "Les frais de création se répartissent entre des taxes fixes (certificat négatif) et des frais proportionnels au capital (droits d'enregistrement). À cela s'ajoutent les publications légales et les légalisations de documents. Le tableau ci-dessous présente des montants indicatifs, à confirmer selon votre situation.",
        ],
        table: {
          caption:
            "Frais officiels et légaux de création (montants indicatifs, hors honoraires)",
          headers: ["Poste", "Montant indicatif", "Nature"],
          rows: [
            ["Certificat négatif (OMPIC)", "~230 DH", "Taxe fixe"],
            [
              "Enregistrement des actes",
              "~1% du capital, minimum 1 000 DH",
              "Droit proportionnel",
            ],
            [
              "Publicité légale (Bulletin officiel + journal d'annonces)",
              "Selon insertions",
              "Publications obligatoires",
            ],
            [
              "Légalisations et copies conformes",
              "Frais variables",
              "Formalités administratives",
            ],
            [
              "Immatriculation au registre du commerce",
              "Droits de greffe",
              "Tribunal de commerce",
            ],
          ],
        },
      },
      {
        heading: "Focus sur les droits d'enregistrement",
        body: [
          "L'enregistrement des actes de constitution donne lieu à un droit d'environ 1% du capital social, avec un minimum de perception de 1 000 DH. Concrètement, pour un capital jusqu'à 100 000 DH, le droit reste au plancher de 1 000 DH ; au-delà, il augmente proportionnellement au capital.",
          "C'est pourquoi le montant du capital n'a pas seulement un effet sur la crédibilité de la société, mais aussi sur le coût de sa constitution.",
        ],
      },
      {
        heading: "Total indicatif et facteurs de variation",
        body: [
          "Au total, les frais officiels et légaux d'une création de SARL se situent généralement entre 3 000 et 6 000 DH, hors honoraires de cabinet. Ce montant varie selon le capital retenu, le nombre de publications et les éventuels frais de domiciliation.",
          "Il faut présenter ces chiffres comme un point de départ : « à partir de » ou « indicatif ». Un devis précis dépend de la forme juridique, du capital et des options choisies.",
        ],
        bullets: [
          "Le capital influence le droit d'enregistrement (~1%, minimum 1 000 DH)",
          "Les publications légales s'ajoutent selon les tarifs des journaux",
          "La domiciliation peut représenter un coût mensuel à part",
          "Les honoraires du cabinet sont distincts des frais officiels",
        ],
      },
      {
        heading: "Frais officiels ou budget global ?",
        body: [
          "Les chiffres ci-dessus couvrent les frais réglés à l'administration et aux publications. À cela s'ajoutent, selon votre choix, les honoraires d'accompagnement, la domiciliation, et la mise en place de la comptabilité et des obligations déclaratives (TVA, IS ou IR, CNSS).",
          "Anticiper ces postes dès le départ évite les mauvaises surprises et permet de démarrer sur un budget réaliste.",
        ],
      },
      {
        heading: "Obtenir un chiffrage précis",
        body: [
          "Fiduciaire & Business Center, cabinet comptable à El Jadida, établit un devis clair distinguant les frais officiels des honoraires, lors d'une première consultation gratuite.",
          "Les montants indiqués sont indicatifs et suivent la réglementation en vigueur (Loi de Finances 2026 / CGI). Ils peuvent évoluer : confirmez votre cas particulier avec le cabinet avant tout engagement.",
        ],
      },
    ],
    faq: [
      {
        q: "Combien coûte la création d'une entreprise au Maroc ?",
        a: "Les frais officiels et légaux se situent généralement entre 3 000 et 6 000 DH, hors honoraires de cabinet. Ce montant comprend le certificat négatif (~230 DH), l'enregistrement des actes (~1% du capital, minimum 1 000 DH), les publications légales et les légalisations.",
      },
      {
        q: "Le coût dépend-il du capital social ?",
        a: "Oui. Le droit d'enregistrement est proportionnel au capital (environ 1%), avec un minimum de 1 000 DH. Pour un capital jusqu'à 100 000 DH, ce droit reste au plancher ; au-delà, il augmente avec le capital.",
      },
      {
        q: "Les honoraires du cabinet sont-ils inclus dans ces montants ?",
        a: "Non. Les 3 000 à 6 000 DH correspondent aux frais officiels versés à l'administration et aux publications. Les honoraires d'accompagnement sont facturés à part et vous sont communiqués dans un devis dédié.",
      },
      {
        q: "Y a-t-il des frais récurrents après la création ?",
        a: "Oui, à distinguer des frais de constitution : tenue de la comptabilité, déclarations fiscales et sociales, et éventuellement domiciliation. Nous les chiffrons dès le départ pour un budget global réaliste.",
      },
    ],
    related: [
      "services/creation-entreprise",
      "guides/creer-sarl-maroc",
      "services/conseil-fiscal",
    ],
  },
  {
    slug: "auto-entrepreneur-ou-sarl",
    keyword: "auto-entrepreneur ou SARL Maroc",
    label: "Auto-entrepreneur ou SARL ?",
    metaTitle: "Auto-entrepreneur ou SARL au Maroc en 2026 ? | Guide FBC",
    metaDescription:
      "Auto-entrepreneur ou SARL au Maroc ? Comparatif 2026 : plafonds, fiscalité (0,5%/1% vs IS 20%), responsabilité, crédibilité et règle des 80 000 DH par client.",
    h1: "Auto-entrepreneur ou SARL au Maroc : que choisir ?",
    summary:
      "Comparatif complet entre le statut d'auto-entrepreneur et la SARL au Maroc : plafonds, fiscalité, responsabilité et crédibilité.",
    datePublished: "2026-09-18",
    lead: "Auto-entrepreneur ou SARL ? C'est la première grande décision de tout créateur au Maroc. Le statut d'auto-entrepreneur séduit par sa simplicité et sa fiscalité forfaitaire, mais il est plafonné et n'offre pas de protection du patrimoine. La SARL, plus structurée, protège les associés et rassure les partenaires. Ce guide compare les deux options pour vous aider à trancher.",
    sections: [
      {
        heading: "Deux logiques différentes",
        body: [
          "L'auto-entrepreneur est une personne physique qui exerce en son nom propre : formalités allégées, comptabilité simplifiée, fiscalité forfaitaire, mais chiffre d'affaires plafonné et responsabilité illimitée sur le patrimoine personnel.",
          "La SARL est une personne morale distincte : responsabilité limitée aux apports, image plus solide, mais obligations comptables et déclaratives complètes. Le bon choix dépend de votre chiffre d'affaires prévisionnel, de vos charges et de vos ambitions.",
        ],
      },
      {
        heading: "Tableau comparatif",
        table: {
          caption: "Auto-entrepreneur vs SARL au Maroc (2026)",
          headers: ["Critère", "Auto-entrepreneur", "SARL / SARL AU"],
          rows: [
            [
              "Plafond de chiffre d'affaires",
              "500 000 DH (commerce/industrie/artisanat), 200 000 DH (services)",
              "Aucun plafond",
            ],
            [
              "Fiscalité",
              "IR libératoire : 0,5% (commerce/industrie), 1% (services) sur le CA encaissé",
              "IS : 20% jusqu'à 100 M DH de bénéfice",
            ],
            [
              "Responsabilité",
              "Illimitée (patrimoine personnel engagé)",
              "Limitée aux apports",
            ],
            [
              "Comptabilité",
              "Allégée",
              "Complète (états de synthèse)",
            ],
            [
              "TVA",
              "Hors champ",
              "Assujettie (20% / 10%)",
            ],
            [
              "Crédibilité",
              "Adaptée aux petits projets",
              "Forte auprès des banques et donneurs d'ordre",
            ],
            [
              "Registre du commerce",
              "Non (inscription au RNAE)",
              "Oui",
            ],
          ],
        },
      },
      {
        heading: "Les plafonds à ne pas dépasser",
        body: [
          "Le régime de l'auto-entrepreneur est plafonné à 500 000 DH de chiffre d'affaires pour le commerce, l'industrie et l'artisanat, et à 200 000 DH pour les prestations de services. Dépasser ces plafonds deux années consécutives entraîne la radiation du régime.",
          "Sur le plan fiscal, l'IR est libératoire et prélevé sur le chiffre d'affaires encaissé : 0,5% pour le commerce et l'industrie, 1% pour les services (à confirmer avec le guide DGI). L'auto-entrepreneur est par ailleurs hors champ de la TVA.",
        ],
      },
      {
        heading: "La règle des 80 000 DH par client",
        body: [
          "Pour les prestataires de services, une règle importante s'applique : la part du chiffre d'affaires réalisée avec un même client au-delà de 80 000 DH est exclue du régime de l'auto-entrepreneur. Ce surplus fait l'objet d'une retenue à la source libératoire de 30% opérée par le client.",
          "Cette règle vise à éviter le salariat déguisé. Si vous dépendez fortement d'un seul donneur d'ordre, la SARL devient souvent plus pertinente.",
        ],
      },
      {
        heading: "Notre recommandation",
        body: [
          "En résumé : l'auto-entrepreneur convient pour tester une activité ou pour un chiffre d'affaires modéré et diversifié. La SARL s'impose dès que vous approchez des plafonds, que vous voulez protéger votre patrimoine, travailler avec de grands comptes ou lever des financements.",
          "Fiduciaire & Business Center, cabinet comptable à El Jadida, compare les scénarios chiffrés lors d'une première consultation gratuite. Les taux et seuils cités suivent la Loi de Finances 2026 / CGI et doivent être confirmés selon votre situation.",
        ],
      },
    ],
    faq: [
      {
        q: "Quels sont les plafonds de l'auto-entrepreneur au Maroc ?",
        a: "Le chiffre d'affaires annuel est plafonné à 500 000 DH pour le commerce, l'industrie et l'artisanat, et à 200 000 DH pour les prestations de services. Le dépassement de ces plafonds pendant deux années consécutives entraîne la radiation du régime.",
      },
      {
        q: "L'auto-entrepreneur paie-t-il moins d'impôt que la SARL ?",
        a: "Pas systématiquement. L'auto-entrepreneur paie un IR libératoire de 0,5% (commerce/industrie) ou 1% (services) sur le chiffre d'affaires encaissé, alors que la SARL est soumise à l'IS (20% jusqu'à 100 M DH de bénéfice) sur le bénéfice net. La comparaison dépend de vos marges et de vos charges réelles.",
      },
      {
        q: "Qu'est-ce que la règle des 80 000 DH par client ?",
        a: "Pour les prestations de services, la fraction du chiffre d'affaires réalisée avec un même client au-delà de 80 000 DH est exclue du régime de l'auto-entrepreneur : ce surplus subit une retenue à la source libératoire de 30% par le client.",
      },
      {
        q: "Peut-on passer d'auto-entrepreneur à SARL ?",
        a: "Oui. Il est courant de démarrer en auto-entrepreneur puis de créer une SARL quand l'activité se développe ou que les plafonds approchent. Nous vous accompagnons dans cette transition et dans le choix du bon moment.",
      },
    ],
    related: [
      "guides/creer-sarl-maroc",
      "services/creation-entreprise",
      "services/conseil-fiscal",
    ],
  },
  {
    slug: "bareme-ir-maroc-2026",
    keyword: "barème IR Maroc 2026",
    label: "Barème de l'IR 2026",
    metaTitle: "Barème de l'IR au Maroc 2026 : tranches et calcul | FBC",
    metaDescription:
      "Barème de l'IR Maroc 2026 : tranches révisées, exemption jusqu'à 40 000 DH, taux maximal 37%. Formule de calcul et déduction pour charges de famille expliquées.",
    h1: "Barème de l'impôt sur le revenu (IR) au Maroc en 2026",
    summary:
      "Le barème IR 2026 révisé, avec l'exemption jusqu'à 40 000 DH, la formule de calcul et la déduction pour charges de famille.",
    datePublished: "2026-09-18",
    lead: "Le barème de l'impôt sur le revenu a été révisé par la Loi de Finances 2025 et reconduit pour 2026. Deux évolutions majeures : le seuil d'exemption passe à 40 000 DH (contre 30 000 auparavant) et le taux maximal est ramené à 37% (contre 38%). Ce guide présente le barème complet, la formule de calcul et la déduction pour charges de famille.",
    sections: [
      {
        heading: "Le barème IR 2026 par tranches",
        body: [
          "L'IR est un impôt progressif : le revenu net imposable (RNI) est découpé en tranches, chacune soumise à un taux croissant. Pour simplifier le calcul, l'administration utilise une méthode de taux marginal assorti d'une somme à déduire.",
        ],
        table: {
          caption: "Barème annuel de l'IR au Maroc (2026)",
          headers: [
            "Tranche de revenu annuel (DH)",
            "Taux",
            "Somme à déduire (DH)",
          ],
          rows: [
            ["0 – 40 000", "0%", "0"],
            ["40 001 – 60 000", "10%", "4 000"],
            ["60 001 – 80 000", "20%", "10 000"],
            ["80 001 – 100 000", "30%", "18 000"],
            ["100 001 – 180 000", "34%", "22 000"],
            ["Plus de 180 000", "37%", "27 400"],
          ],
        },
      },
      {
        heading: "La formule de calcul",
        body: [
          "Le calcul de l'IR repose sur une formule simple une fois le revenu net imposable connu :",
          "IR = (RNI × taux de la tranche) − somme à déduire correspondante.",
          "Exemple : pour un revenu net imposable de 90 000 DH, on applique le taux de 30% (tranche 80 001 – 100 000) et l'on retranche 18 000 DH. L'IR brut est donc de (90 000 × 30%) − 18 000 = 27 000 − 18 000 = 9 000 DH, avant déductions pour charges de famille.",
        ],
      },
      {
        heading: "La déduction pour charges de famille",
        body: [
          "Une réduction est accordée au titre des charges de famille. Depuis la Loi de Finances 2026, elle s'élève à 600 DH par personne à charge (contre 500 DH auparavant), dans la limite de 6 personnes, soit 3 600 DH au maximum.",
          "Cette réduction s'impute directement sur l'IR calculé. Elle concerne le conjoint et les enfants à charge, selon les conditions prévues par le CGI.",
        ],
        bullets: [
          "600 DH par personne à charge",
          "Maximum 6 personnes, soit 3 600 DH",
          "Déduction imputée sur l'IR après application du barème",
        ],
      },
      {
        heading: "Qui est concerné par l'IR ?",
        body: [
          "L'IR s'applique aux revenus des personnes physiques : salaires, revenus professionnels (BIC/BNC), revenus fonciers, revenus agricoles et de capitaux mobiliers. Les salariés sont imposés par retenue à la source, tandis que les professionnels déclarent leur revenu net.",
          "L'auto-entrepreneur relève d'un régime distinct : il paie un IR libératoire forfaitaire (0,5% ou 1% du chiffre d'affaires), et n'est donc pas soumis à ce barème progressif.",
        ],
      },
      {
        heading: "Bien appliquer le barème",
        body: [
          "Le calcul de l'IR peut se compliquer avec les revenus multiples, les déductions (retraite, assurance, intérêts de prêt logement) et les régimes particuliers. Fiduciaire & Business Center, cabinet comptable à El Jadida, sécurise votre déclaration et optimise vos déductions.",
          "Ce barème suit la Loi de Finances 2026 et le CGI. Les seuils et taux peuvent évoluer d'une année à l'autre : confirmez votre situation avec le cabinet avant toute décision.",
        ],
      },
    ],
    faq: [
      {
        q: "Jusqu'à quel revenu est-on exonéré d'IR au Maroc en 2026 ?",
        a: "Le revenu net imposable annuel jusqu'à 40 000 DH est exonéré d'IR (taux de 0%). Ce seuil d'exemption a été relevé de 30 000 à 40 000 DH par la réforme du barème.",
      },
      {
        q: "Quel est le taux maximal de l'IR en 2026 ?",
        a: "Le taux marginal maximal est de 37%, appliqué à la fraction de revenu net imposable dépassant 180 000 DH. Il a été abaissé de 38% à 37% dans le cadre de la révision du barème.",
      },
      {
        q: "Comment calcule-t-on l'IR ?",
        a: "On applique la formule IR = (RNI × taux de la tranche) − somme à déduire. Par exemple, pour un RNI de 90 000 DH : (90 000 × 30%) − 18 000 = 9 000 DH avant déduction pour charges de famille.",
      },
      {
        q: "Combien vaut la déduction pour charges de famille ?",
        a: "Elle est de 600 DH par personne à charge depuis la Loi de Finances 2026, dans la limite de 6 personnes, soit un maximum de 3 600 DH imputés sur l'IR.",
      },
    ],
    related: [
      "services/conseil-fiscal",
      "guides/auto-entrepreneur-ou-sarl",
      "services/declarations-fiscales",
    ],
  },
  {
    slug: "taux-tva-maroc-2026",
    keyword: "taux TVA Maroc 2026",
    label: "Taux de TVA 2026",
    metaTitle: "Taux de TVA au Maroc 2026 : 20% et 10% expliqués | FBC",
    metaDescription:
      "Taux de TVA Maroc 2026 : la réforme ramène à deux taux (20% et 10%), les taux 7% et 14% sont supprimés. Exemples, régime de déclaration et retenue à la source.",
    h1: "Les taux de TVA au Maroc en 2026",
    summary:
      "La réforme 2026 ramène la TVA à deux taux (20% et 10%), avec suppression des taux 7% et 14%, et une nouvelle retenue à la source sur les services.",
    datePublished: "2026-09-18",
    lead: "La réforme de la TVA menée de 2024 à 2026 a profondément simplifié le paysage marocain : il ne reste que deux taux principaux, 20% et 10%, tandis que les anciens taux réduits de 7% et 14% ont été supprimés. La Loi de Finances 2026 introduit par ailleurs une retenue à la source sur les prestations de services. Ce guide fait le point.",
    sections: [
      {
        heading: "Deux taux seulement en 2026",
        body: [
          "Depuis 2026, la TVA marocaine repose sur deux taux : le taux normal de 20% et le taux réduit de 10%. Les taux intermédiaires historiques de 7% et 14% ont été abolis dans le cadre de la convergence progressive des taux.",
          "Il ne faut donc plus présenter les taux de 7% ou 14% comme applicables : ils n'ont plus qu'une valeur historique.",
        ],
        table: {
          caption: "Taux de TVA applicables au Maroc en 2026",
          headers: ["Taux", "Application", "Exemples"],
          rows: [
            [
              "20%",
              "Taux normal (par défaut)",
              "Conseil, informatique, électronique, B2B en général",
            ],
            [
              "10%",
              "Taux réduit",
              "Hébergement et restauration, transport, banque et crédit, énergies renouvelables, eau",
            ],
            [
              "0%",
              "Exportations (avec droit à déduction)",
              "Ventes à l'export",
            ],
            [
              "Exonéré",
              "Certaines opérations (art. 92)",
              "Enseignement, actes médicaux, produits pharmaceutiques",
            ],
          ],
        },
      },
      {
        heading: "Comment savoir quel taux appliquer ?",
        body: [
          "Le taux de 20% est le taux par défaut : il s'applique à la majorité des biens et services, notamment le conseil, l'informatique, l'électronique et les prestations B2B en général.",
          "Le taux réduit de 10% vise des secteurs ciblés : l'hébergement et la restauration, le transport, les opérations de banque et de crédit, les énergies renouvelables et l'eau. Les exportations sont à 0% avec droit à déduction, et certaines opérations restent exonérées (enseignement, actes médicaux, produits pharmaceutiques au titre de l'article 92).",
        ],
      },
      {
        heading: "Le régime de déclaration",
        body: [
          "La périodicité de déclaration dépend du chiffre d'affaires. Les entreprises dont le chiffre d'affaires dépasse 1 million de dirhams déclarent mensuellement ; celles dont le chiffre d'affaires est inférieur ou égal à 1 million de dirhams déclarent trimestriellement.",
          "Dans les deux cas, la déclaration et le paiement doivent intervenir avant le 20 du mois suivant la période, via le portail SIMPL-TVA sur tax.gov.ma.",
        ],
        bullets: [
          "Déclaration mensuelle si le CA dépasse 1 M DH",
          "Déclaration trimestrielle si le CA est inférieur ou égal à 1 M DH",
          "Dépôt et paiement avant le 20 du mois suivant",
          "Télédéclaration via SIMPL-TVA sur tax.gov.ma",
        ],
      },
      {
        heading: "La retenue à la source sur les services (2026)",
        body: [
          "La Loi de Finances 2026 instaure, à compter du 1er janvier 2026, une retenue à la source de TVA sur les rémunérations de prestations de services. Le client opère cette retenue et la reverse à l'administration, un mécanisme qui vise à sécuriser la collecte.",
          "Ce changement modifie la trésorerie et les obligations déclaratives des prestataires. Il est essentiel d'adapter votre facturation et votre suivi comptable en conséquence.",
        ],
      },
      {
        heading: "Sécuriser vos déclarations de TVA",
        body: [
          "Entre la réforme des taux, la retenue à la source et le renforcement de la facturation électronique en 2026, la gestion de la TVA demande de la rigueur. Fiduciaire & Business Center, cabinet comptable à El Jadida, prend en charge vos déclarations et votre veille réglementaire.",
          "Les taux et règles cités suivent la Loi de Finances 2026 / CGI. Certaines modalités d'application se précisent par voie de circulaire : confirmez votre cas particulier avec le cabinet.",
        ],
      },
    ],
    faq: [
      {
        q: "Quels sont les taux de TVA au Maroc en 2026 ?",
        a: "Il existe deux taux principaux : le taux normal de 20% et le taux réduit de 10%. S'y ajoutent le taux de 0% pour les exportations (avec droit à déduction) et certaines exonérations. Les anciens taux de 7% et 14% ont été supprimés.",
      },
      {
        q: "Les taux de 7% et 14% existent-ils encore ?",
        a: "Non. Les taux réduits de 7% et 14% ont été abolis dans le cadre de la réforme de la TVA (2024–2026). Ils n'ont plus qu'une valeur historique et ne doivent plus être appliqués.",
      },
      {
        q: "À quelle fréquence déclarer la TVA ?",
        a: "La déclaration est mensuelle si le chiffre d'affaires dépasse 1 million de dirhams, et trimestrielle s'il est inférieur ou égal à 1 million de dirhams. Le dépôt et le paiement se font avant le 20 du mois suivant, via SIMPL-TVA.",
      },
      {
        q: "Qu'est-ce que la retenue à la source de TVA en 2026 ?",
        a: "Depuis le 1er janvier 2026, une retenue à la source de TVA s'applique sur les rémunérations de prestations de services : le client retient la TVA et la reverse à l'administration. Ce mécanisme impacte la trésorerie et le suivi des prestataires.",
      },
    ],
    related: [
      "services/declarations-fiscales",
      "guides/taux-is-maroc-2026",
      "services/conseil-fiscal",
    ],
  },
  {
    slug: "taux-is-maroc-2026",
    keyword: "taux IS Maroc 2026",
    label: "Taux de l'IS 2026",
    metaTitle: "Taux de l'IS au Maroc 2026 : 20%, 35% et 40% | FBC",
    metaDescription:
      "Taux de l'IS Maroc 2026 : barème proportionnel 20%, 35% et 40%, cotisation minimale de 0,25% (plancher 3 000 DH) et contribution sociale de solidarité expliqués.",
    h1: "Les taux de l'impôt sur les sociétés (IS) au Maroc en 2026",
    summary:
      "Le barème IS 2026 (proportionnel : 20%, 35%, 40%), la cotisation minimale de 0,25% avec plancher de 3 000 DH et la contribution sociale de solidarité.",
    datePublished: "2026-09-18",
    lead: "L'impôt sur les sociétés au Maroc suit un barème proportionnel, et non progressif : le taux dépend du niveau de bénéfice net et du secteur d'activité. Pour 2026, les taux cibles sont de 20%, 35% et 40%. À cela s'ajoutent une cotisation minimale et la contribution sociale de solidarité. Ce guide détaille l'ensemble.",
    sections: [
      {
        heading: "Un barème proportionnel, pas progressif",
        body: [
          "Contrairement à l'IR, l'IS n'est pas progressif par tranches : c'est un impôt proportionnel où un taux unique s'applique à l'ensemble du bénéfice net, en fonction de son montant et du secteur. Le tableau ci-dessous présente les taux cibles pour 2026.",
        ],
        table: {
          caption: "Taux de l'IS au Maroc (cibles 2026)",
          headers: ["Bénéfice net / secteur", "Taux"],
          rows: [
            ["Bénéfice net inférieur à 100 millions DH (majorité des PME)", "20%"],
            ["Bénéfice net supérieur ou égal à 100 millions DH", "35%"],
            ["Secteur financier (banques, assurances)", "40%"],
          ],
        },
      },
      {
        heading: "La cotisation minimale (CM)",
        body: [
          "Même en cas de bénéfice faible ou de déficit, la société reste redevable d'une cotisation minimale. Elle est égale à 0,25% du chiffre d'affaires, avec un plancher de 3 000 DH.",
          "Concrètement, l'entreprise paie le montant le plus élevé entre l'IS calculé sur le bénéfice et la cotisation minimale. Le règlement s'effectue par acomptes trimestriels.",
        ],
        bullets: [
          "0,25% du chiffre d'affaires",
          "Plancher de 3 000 DH",
          "On paie le plus élevé entre l'IS et la CM",
          "Paiement en 4 acomptes trimestriels",
        ],
      },
      {
        heading: "La contribution sociale de solidarité (CSS)",
        body: [
          "Au-delà de l'IS, une contribution sociale de solidarité (CSS) s'applique sur les bénéfices. Prorogée pour la période 2026–2028, elle constitue un prélèvement complémentaire à intégrer dans le calcul de la charge fiscale globale de la société.",
          "Son taux et son seuil d'application dépendent du niveau de bénéfice : nous vous invitons à vérifier le paramétrage exact applicable à votre société.",
        ],
      },
      {
        heading: "Comment est calculé l'IS ?",
        body: [
          "L'IS est assis sur le bénéfice net fiscal, obtenu à partir du résultat comptable après réintégrations et déductions prévues par le CGI. Le taux applicable dépend ensuite du montant de ce bénéfice net et du secteur.",
          "Une gestion comptable rigoureuse et une bonne anticipation des acomptes évitent les redressements et les tensions de trésorerie. Les acomptes trimestriels sont calculés sur l'impôt de l'exercice précédent.",
        ],
      },
      {
        heading: "Optimiser et sécuriser votre IS",
        body: [
          "Entre le choix des options fiscales, le calcul de la cotisation minimale et la CSS, l'IS mérite un accompagnement. Fiduciaire & Business Center, cabinet comptable à El Jadida, établit votre liasse fiscale et vous conseille lors d'une première consultation gratuite.",
          "Les taux indiqués sont les cibles issues de la Loi de Finances 2026 / CGI et peuvent faire l'objet de précisions par voie de circulaire (note DGI). Confirmez votre situation particulière avec le cabinet avant toute décision.",
        ],
      },
    ],
    faq: [
      {
        q: "Quels sont les taux de l'IS au Maroc en 2026 ?",
        a: "L'IS est proportionnel : 20% pour un bénéfice net inférieur à 100 millions de dirhams (majorité des PME), 35% au-delà de ce seuil, et 40% pour le secteur financier (banques et assurances).",
      },
      {
        q: "Qu'est-ce que la cotisation minimale ?",
        a: "C'est un montant minimal d'impôt dû même en cas de faible bénéfice ou de déficit : 0,25% du chiffre d'affaires, avec un plancher de 3 000 DH. La société paie le plus élevé entre l'IS et la cotisation minimale, en quatre acomptes trimestriels.",
      },
      {
        q: "L'IS est-il progressif comme l'IR ?",
        a: "Non. L'IS est un impôt proportionnel : un taux unique s'applique à tout le bénéfice net selon son montant et le secteur, contrairement à l'IR qui est progressif par tranches.",
      },
      {
        q: "Qu'est-ce que la contribution sociale de solidarité ?",
        a: "La CSS est un prélèvement complémentaire sur les bénéfices, prorogé pour 2026–2028. Elle s'ajoute à l'IS dans le calcul de la charge fiscale globale ; son taux dépend du niveau de bénéfice.",
      },
    ],
    related: [
      "services/conseil-fiscal",
      "guides/taux-tva-maroc-2026",
      "services/declarations-fiscales",
    ],
  },
  {
    slug: "calendrier-fiscal-maroc-2026",
    keyword: "calendrier fiscal Maroc 2026",
    label: "Calendrier fiscal 2026",
    metaTitle:
      "Calendrier fiscal 2026 au Maroc : toutes les échéances | FBC",
    metaDescription:
      "Calendrier fiscal 2026 au Maroc : échéances TVA, IS, acomptes, IR et CNSS mois par mois. Dates limites de déclaration et de paiement pour ne rien oublier.",
    h1: "Calendrier fiscal 2026 au Maroc : les échéances à ne pas manquer",
    summary:
      "Les principales échéances fiscales et sociales 2026 (TVA, acomptes IS, IR, CNSS) mois par mois, pour déclarer et payer dans les délais.",
    datePublished: "2026-09-18",
    lead: "Retards de déclaration et de paiement se traduisent vite par des majorations : au Maroc, une déclaration hors délai entraîne une pénalité de 10% et des majorations de retard. Ce guide récapitule les grandes échéances fiscales et sociales de l'année 2026, mois par mois, pour les entreprises et les indépendants. Il est donné à titre indicatif : les dates exactes dépendent de votre régime, de votre date de clôture et sont susceptibles de décalage lorsqu'elles tombent un week-end ou un jour férié.",
    sections: [
      {
        heading: "Les échéances récurrentes de l'année",
        body: [
          "Certaines obligations reviennent chaque mois ou chaque trimestre, indépendamment de la date de clôture de votre exercice. Ce sont elles qui rythment la vie fiscale et sociale de l'entreprise :",
        ],
        bullets: [
          "CNSS : déclaration et paiement des cotisations avant le 10 de chaque mois, par télédéclaration (Damancom) ;",
          "IR sur salaires : versement mensuel de l'impôt retenu à la source sur les rémunérations, via les téléservices SIMPL ;",
          "TVA — régime mensuel (chiffre d'affaires ≥ 1 000 000 DH) : déclaration et paiement avant le 20 du mois suivant ;",
          "TVA — régime trimestriel (chiffre d'affaires < 1 000 000 DH) : avant le 20 du mois suivant le trimestre, soit les 20 janvier, 20 avril, 20 juillet et 20 octobre ;",
          "Auto-entrepreneur : déclaration du chiffre d'affaires (mensuelle ou trimestrielle) et paiement de l'IR libératoire via le portail dédié.",
        ],
      },
      {
        heading: "Les grandes dates 2026, mois par mois",
        body: [
          "Le tableau ci-dessous synthétise les échéances les plus structurantes de 2026 pour une société dont l'exercice coïncide avec l'année civile (clôture au 31 décembre). Les déclarations et paiements se font par voie électronique, obligatoire.",
        ],
        table: {
          caption: "Principales échéances fiscales et sociales 2026 (exercice = année civile)",
          headers: ["Échéance", "Obligation", "Concernés"],
          rows: [
            ["31 janvier 2026", "Taxe sur les véhicules (TVM, ex-vignette)", "Propriétaires de véhicules"],
            ["31 mars 2026", "Déclaration du résultat fiscal (IS) + 1er acompte provisionnel", "Sociétés à l'IS (clôture au 31/12)"],
            ["30 avril 2026", "Déclaration annuelle du revenu global (IR)", "Professionnels RNR/RNS et pluri-employeurs"],
            ["30 juin 2026", "2e acompte provisionnel de l'IS", "Sociétés à l'IS"],
            ["30 septembre 2026", "3e acompte provisionnel de l'IS", "Sociétés à l'IS"],
            ["30 septembre 2026", "Taxe d'habitation et taxe de services communaux", "Propriétaires et occupants"],
            ["30 novembre 2026", "Taxe professionnelle (patente)", "Commerçants, artisans, professions libérales"],
            ["31 décembre 2026", "4e acompte provisionnel de l'IS", "Sociétés à l'IS"],
          ],
        },
      },
      {
        heading: "Les acomptes provisionnels de l'IS",
        body: [
          "L'impôt sur les sociétés se règle en quatre acomptes provisionnels, chacun égal à 25% de l'impôt de l'exercice précédent. Pour un exercice clôturé au 31 décembre, ils sont dus avant la fin des 3e, 6e, 9e et 12e mois de l'exercice, soit les 31 mars, 30 juin, 30 septembre et 31 décembre.",
          "La régularisation intervient au moment de la déclaration du résultat fiscal, dans les trois mois qui suivent la clôture. Si votre exercice ne suit pas l'année civile, décalez ces dates en conséquence : la logique des 3e, 6e, 9e et 12e mois reste la même.",
        ],
      },
      {
        heading: "Quand une échéance tombe un week-end ou un jour férié",
        body: [
          "Lorsqu'une date limite coïncide avec un samedi, un dimanche ou un jour férié, elle est automatiquement reportée au premier jour ouvrable suivant. C'est pourquoi certaines échéances de fin de mois sont communiquées par la DGI au 1er du mois suivant.",
          "En pratique, mieux vaut ne pas attendre le dernier jour : les téléservices peuvent connaître des pics de charge, et un paiement rejeté la veille de l'échéance vous expose aux majorations.",
        ],
      },
      {
        heading: "Ne plus jamais manquer une échéance",
        body: [
          "Le suivi du calendrier fiscal fait partie intégrante de notre mission. Fiduciaire & Business Center, cabinet comptable à El Jadida, tient votre échéancier, prépare et télétransmet vos déclarations, et vous alerte en amont de chaque date importante — vous vous concentrez sur votre activité, nous veillons sur les délais.",
          "Ce calendrier est fourni à titre indicatif et peut évoluer selon les communiqués de la DGI et votre situation particulière. Confirmez vos échéances avec le cabinet avant toute décision.",
        ],
      },
    ],
    faq: [
      {
        q: "Quand faut-il déclarer la TVA au Maroc en 2026 ?",
        a: "Sous le régime mensuel (chiffre d'affaires ≥ 1 000 000 DH), la déclaration et le paiement se font avant le 20 du mois suivant. Sous le régime trimestriel (chiffre d'affaires < 1 000 000 DH), avant le 20 du mois suivant le trimestre : 20 janvier, 20 avril, 20 juillet et 20 octobre.",
      },
      {
        q: "Quelles sont les dates des acomptes provisionnels de l'IS ?",
        a: "Pour une société dont l'exercice coïncide avec l'année civile, les quatre acomptes sont dus au plus tard les 31 mars, 30 juin, 30 septembre et 31 décembre. Chaque acompte est égal à 25% de l'impôt de l'exercice précédent.",
      },
      {
        q: "Quand payer les cotisations CNSS ?",
        a: "Les cotisations CNSS se déclarent et se paient avant le 10 de chaque mois, par télédéclaration via le portail Damancom.",
      },
      {
        q: "Que se passe-t-il si je dépose ma déclaration en retard ?",
        a: "Une déclaration ou un paiement hors délai entraîne une pénalité de 10% ainsi que des majorations de retard. Anticiper les échéances et confier le suivi à un cabinet évite ces coûts inutiles.",
      },
    ],
    related: [
      "services/declarations-fiscales",
      "guides/taux-tva-maroc-2026",
      "guides/taux-is-maroc-2026",
    ],
  },
  {
    slug: "cout-comptable-maroc",
    keyword: "coût comptable Maroc",
    label: "Coût d'un comptable",
    metaTitle:
      "Combien coûte un comptable au Maroc ? Prix et facteurs | FBC",
    metaDescription:
      "Combien coûte un comptable ou une fiduciaire au Maroc ? Les facteurs de prix, les modes de facturation et comment obtenir un devis juste et gratuit.",
    h1: "Combien coûte un comptable au Maroc ?",
    summary:
      "Ce qui détermine les honoraires d'un comptable ou d'une fiduciaire au Maroc, les modes de facturation et comment obtenir un devis adapté à votre activité.",
    datePublished: "2026-09-18",
    lead: "« Combien ça coûte ? » est la première question de tout entrepreneur qui cherche un comptable. La réponse honnête : cela dépend. Les honoraires d'une fiduciaire ne sont pas réglementés au Maroc — chaque cabinet fixe librement ses tarifs, en fonction de votre volume d'activité et des missions confiées. Ce guide explique ce qui fait varier le prix, comment les cabinets facturent, et comment obtenir un devis juste plutôt que le simple « prix le plus bas ».",
    sections: [
      {
        heading: "Pourquoi il n'existe pas de tarif unique",
        body: [
          "Contrairement à certaines professions, les honoraires comptables ne suivent aucun barème officiel au Maroc. Deux entreprises du même secteur peuvent payer des montants très différents selon le volume de pièces à traiter, le nombre de salariés ou l'étendue du conseil attendu. Un devis sérieux part donc toujours de votre situation réelle, jamais d'un tarif affiché à l'avance.",
          "C'est aussi pourquoi comparer deux cabinets sur le seul prix mensuel est trompeur : encore faut-il comparer ce que chaque forfait inclut réellement (déclarations, bilan, paie, conseil).",
        ],
      },
      {
        heading: "Les facteurs qui font varier vos honoraires",
        body: [
          "Le prix d'une fiduciaire dépend principalement des éléments suivants :",
        ],
        table: {
          caption: "Ce qui influence le coût d'un comptable",
          headers: ["Facteur", "Effet sur le prix"],
          rows: [
            ["Volume d'écritures (factures, ventes, achats)", "Plus le volume est élevé, plus la tenue demande de temps"],
            ["Régime fiscal et forme juridique (auto-entrepreneur, SARL, SARL AU)", "Une société à l'IS implique plus d'obligations qu'un auto-entrepreneur"],
            ["Assujettissement à la TVA et périodicité (mensuelle/trimestrielle)", "Ajoute des déclarations récurrentes"],
            ["Nombre de salariés et gestion de la paie", "La paie et les déclarations CNSS se facturent souvent au bulletin"],
            ["Étendue des missions (bilan, audit, conseil, création)", "Missions ponctuelles facturées en plus du forfait courant"],
            ["Qualité et régularité de vos pièces", "Une comptabilité bien tenue en amont réduit le temps de traitement"],
          ],
        },
      },
      {
        heading: "Comment les cabinets facturent au Maroc",
        body: [
          "La plupart des fiduciaires proposent un abonnement mensuel qui couvre la tenue comptable courante et les déclarations fiscales récurrentes. À côté de ce forfait, certaines prestations sont généralement facturées séparément :",
        ],
        bullets: [
          "Forfait mensuel : tenue de la comptabilité, TVA et suivi courant ;",
          "Bilan et liasse fiscale de fin d'exercice : souvent facturés à part ;",
          "Gestion de la paie : fréquemment tarifée au bulletin et par salarié ;",
          "Missions ponctuelles : création de société, audit, conseil, assistance en cas de contrôle.",
        ],
      },
      {
        heading: "Fiduciaire, expert-comptable : quelle différence de coût ?",
        body: [
          "Une fiduciaire gère la comptabilité, la fiscalité et le social de plusieurs entreprises clientes : c'est la solution la plus répandue et la plus économique pour les TPE, PME et indépendants. L'expert-comptable, inscrit à l'Ordre, est seul habilité à certifier des comptes et à réaliser certaines missions réglementées ; ses honoraires sont en général plus élevés.",
          "Pour la grande majorité des petites structures, une fiduciaire fiable couvre l'ensemble des besoins courants. Lorsqu'une certification est nécessaire, elle peut travailler en lien avec un expert-comptable pour les missions qui exigent sa signature.",
        ],
      },
      {
        heading: "Le vrai coût : celui des erreurs évitées",
        body: [
          "Le comptable le moins cher n'est pas toujours le plus économique. Une déclaration hors délai entraîne une pénalité de 10% et des majorations ; un mauvais choix de régime ou un redressement peuvent coûter bien davantage que l'écart d'honoraires entre deux cabinets. La valeur d'un bon accompagnement se mesure autant à ce qu'il vous fait éviter qu'à ce qu'il vous facture.",
          "Chez Fiduciaire & Business Center, cabinet comptable à El Jadida, le premier échange est gratuit : nous évaluons votre volume, vos obligations et vos besoins réels, puis nous vous remettons un devis clair et adapté — sans engagement.",
        ],
      },
    ],
    faq: [
      {
        q: "Combien coûte un comptable au Maroc ?",
        a: "Il n'existe pas de tarif unique : les honoraires ne sont pas réglementés et dépendent de votre volume d'écritures, de votre régime fiscal, du nombre de salariés et des missions confiées. Le plus fiable est de demander un devis basé sur votre situation réelle.",
      },
      {
        q: "Comment les fiduciaires facturent-elles leurs services ?",
        a: "Le plus souvent sous forme d'un abonnement mensuel couvrant la tenue comptable et les déclarations courantes, avec une facturation à part pour le bilan de fin d'exercice, la paie (au bulletin) et les missions ponctuelles comme la création ou l'audit.",
      },
      {
        q: "Vaut-il mieux choisir le cabinet le moins cher ?",
        a: "Pas nécessairement. Comparez d'abord ce que chaque forfait inclut réellement. Une comptabilité mal suivie expose à des pénalités et des redressements qui coûtent souvent plus cher que l'économie réalisée sur les honoraires.",
      },
      {
        q: "Le devis est-il gratuit ?",
        a: "Oui. Chez Fiduciaire & Business Center, le premier échange et le devis sont gratuits et sans engagement : nous partons de votre activité réelle pour vous proposer un accompagnement adapté.",
      },
    ],
    related: [
      "guides/cout-creation-entreprise-maroc",
      "services/tenue-comptabilite",
      "guides/auto-entrepreneur-ou-sarl",
    ],
  },
  {
    slug: "changer-de-comptable-maroc",
    keyword: "changer de comptable Maroc",
    label: "Changer de comptable",
    metaTitle:
      "Changer de comptable ou de fiduciaire au Maroc | FBC",
    metaDescription:
      "Changer de comptable ou de fiduciaire au Maroc : le bon moment, comment récupérer vos documents comptables et réussir la transition sans risque fiscal.",
    h1: "Changer de comptable ou de fiduciaire au Maroc",
    summary:
      "Quand et comment changer de fiduciaire au Maroc : le bon timing, la récupération de vos documents comptables et une transition sans rupture de vos obligations.",
    datePublished: "2026-09-18",
    lead: "Beaucoup d'entrepreneurs restent des années avec une fiduciaire qui ne les satisfait plus — par crainte de « tout casser ». Bonne nouvelle : au Maroc, aucune loi ne vous lie à un cabinet comptable. Vous êtes libre de changer de fiduciaire quand vous le souhaitez, à condition d'organiser proprement la transition pour ne perdre ni vos documents ni le fil de vos déclarations. Ce guide explique quand changer, comment récupérer votre dossier, et comment basculer sans interruption de vos obligations fiscales.",
    sections: [
      {
        heading: "Peut-on changer de comptable quand on veut ?",
        body: [
          "Oui. La relation avec une fiduciaire est un contrat de prestation de services librement résiliable : il n'existe aucune exclusivité réglementée ni obligation de rester. Vérifiez simplement les conditions de votre lettre de mission ou de votre contrat (préavis éventuel, facturation des travaux en cours) afin de résilier dans les règles et sans litige.",
          "Le seul vrai risque d'un changement n'est pas juridique mais organisationnel : une transition mal préparée, en pleine échéance fiscale, peut créer un trou dans le suivi. C'est ce que ce guide vous aide à éviter.",
        ],
      },
      {
        heading: "Les bons signaux pour changer",
        body: [
          "Changer de cabinet se justifie quand la relation ne vous apporte plus la sécurité ou le conseil attendus. Les motifs les plus fréquents :",
        ],
        bullets: [
          "Manque de réactivité : vos e-mails et appels restent sans réponse ;",
          "Déclarations déposées en retard, pénalités ou majorations subies ;",
          "Aucun conseil proactif : on saisit vos pièces sans jamais vous alerter ni optimiser ;",
          "Manque de transparence sur les honoraires ou factures imprévues ;",
          "Difficulté à obtenir vos propres documents (bilans, grand livre, balances) ;",
          "Croissance de votre activité que le cabinet ne suit plus (paie, TVA, filiales).",
        ],
      },
      {
        heading: "Quel est le meilleur moment pour changer ?",
        body: [
          "Le moment idéal est la clôture de l'exercice : en changeant après le dépôt du bilan et de la liasse fiscale, le nouveau cabinet démarre sur un exercice complet et net, sans reprendre une comptabilité à mi-parcours. Pour une entreprise clôturant au 31 décembre, la période qui suit le dépôt du bilan est donc la plus simple.",
          "Cela dit, un changement en cours d'année reste tout à fait possible : il suffit d'organiser la reprise des écritures depuis le début de l'exercice. Évitez seulement de basculer à quelques jours d'une échéance TVA ou IS importante, pour ne pas risquer un dépôt manqué pendant la passation.",
        ],
      },
      {
        heading: "Vos documents vous appartiennent",
        body: [
          "Point essentiel : vos documents comptables et pièces justificatives sont votre propriété. Un cabinet ne peut pas les retenir. Lors du départ, exigez la restitution complète de votre dossier, idéalement sous forme exploitable :",
        ],
        bullets: [
          "Grand livre, balances et journaux de l'exercice en cours et des exercices précédents ;",
          "Bilans, comptes de résultat et liasses fiscales déposés ;",
          "Déclarations de TVA, d'IS/IR et bordereaux CNSS transmis ;",
          "Fichiers de la comptabilité (export du logiciel) et fichier des immobilisations ;",
          "Vos pièces originales : factures d'achat et de vente, relevés bancaires, contrats.",
        ],
      },
      {
        heading: "Réussir la transition en pratique",
        body: [
          "Une passation bien menée se déroule en quelques étapes simples :",
        ],
        bullets: [
          "Choisissez d'abord votre nouveau cabinet et fixez la date de reprise ;",
          "Notifiez la résiliation à l'ancienne fiduciaire par écrit, en respectant le préavis ;",
          "Organisez le transfert du dossier complet (documents ci-dessus) au nouveau cabinet ;",
          "Faites vérifier les déclarations déjà déposées et celles à venir sur l'exercice ;",
          "Communiquez les nouveaux mandats (DGI, portail SIMPL, CNSS) au nouveau cabinet.",
        ],
      },
      {
        heading: "Changer pour Fiduciaire & Business Center",
        body: [
          "Chez Fiduciaire & Business Center, cabinet comptable à El Jadida, nous accompagnons régulièrement des entreprises qui quittent une autre fiduciaire. Nous gérons la reprise du dossier de A à Z : récupération des documents, contrôle des déclarations passées et remise à niveau si nécessaire, pour que vous n'ayez rien à gérer pendant la transition.",
          "Le premier échange est gratuit et confidentiel : nous faisons le point sur votre situation, identifions ce qui n'allait pas et vous proposons un accompagnement clair. Changer de comptable ne doit jamais être une source de stress — c'est souvent le meilleur moyen de reprendre le contrôle de votre gestion.",
        ],
      },
    ],
    faq: [
      {
        q: "Peut-on changer de comptable en cours d'année ?",
        a: "Oui. Aucune loi ne vous oblige à rester avec une fiduciaire. Un changement en cours d'exercice est possible : le nouveau cabinet reprend les écritures depuis le début de l'exercice. Le plus simple reste toutefois de changer après la clôture et le dépôt du bilan.",
      },
      {
        q: "Mon ancien comptable peut-il refuser de me rendre mes documents ?",
        a: "Non. Vos documents comptables et pièces justificatives vous appartiennent et doivent vous être restitués. Demandez par écrit la remise complète du dossier (grand livre, balances, bilans, déclarations, export du logiciel et pièces originales).",
      },
      {
        q: "Quel est le meilleur moment pour changer de fiduciaire ?",
        a: "Idéalement juste après la clôture de l'exercice et le dépôt du bilan, pour démarrer sur un exercice complet. Évitez de basculer à quelques jours d'une échéance TVA ou IS afin de ne pas risquer un dépôt manqué pendant la passation.",
      },
      {
        q: "La transition risque-t-elle d'interrompre mes déclarations ?",
        a: "Pas si elle est préparée. En fixant la date de reprise, en récupérant l'intégralité du dossier et en transférant les mandats fiscaux au nouveau cabinet, vos déclarations continuent d'être déposées sans rupture.",
      },
    ],
    related: [
      "guides/cout-comptable-maroc",
      "services/tenue-comptabilite",
      "services/conseil-fiscal",
    ],
  },
];

export const guideSlugs = () => guides.map((g) => g.slug);
export const getGuide = (slug: string) => guides.find((g) => g.slug === slug);
