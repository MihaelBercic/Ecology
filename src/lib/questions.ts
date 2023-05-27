import type {Question} from "$lib/types/question";
import {Category} from "$lib/types/question";

export const questions: Question[] = [
    {
        id: "1",
        text: "Which sector does your enterprise belong to?",
        answerGroups: [
            {
                title: "Forestry and logging",
                answers: [
                    {
                        text: "Silviculture and other forestry activities",
                        following_questions: [],
                        points: [
                            [Category.EPD_C2B, 0],
                            [Category.EPD_B2B, 1],
                            [Category.EcoLabel, 2],
                        ]
                    },
                    {
                        text: "Logging",
                        following_questions: [],
                        points: [
                            [Category.EPD_C2B, 1],
                            [Category.EPD_B2B, 2],
                            [Category.EcoLabel, 1],
                        ]
                    },
                    {
                        text: "Gathering of wild growing non-wood products",
                        following_questions: [],
                        points: [
                            [Category.EPD_C2B, -1],
                            [Category.EPD_B2B, 1],
                            [Category.EcoLabel, 1],
                        ]
                    },
                    {
                        text: "Support services to forestry",
                        following_questions: [],
                        points: [
                            [Category.EPD_C2B, -1],
                            [Category.EPD_B2B, 2],
                            [Category.EcoLabel, 1],
                        ]
                    },
                ]
            },
            {
                title: "Manufacture of wood and of products of wood and cork, except furniture; manufacture of articles of straw and plaiting materials",
                answers: [
                    {
                        text: "Sawmilling and planing of wood",
                        following_questions: [],
                        points: [
                            [Category.EPD_C2B, 1],
                            [Category.EPD_B2B, 2],
                            [Category.EcoLabel, 1],
                        ]
                    },
                    {
                        text: "Manufacture of products of wood, cork, straw and plaiting materials",
                        following_questions: [],
                        points: [
                            [Category.EPD_C2B, 1],
                            [Category.EPD_B2B, 2],
                            [Category.EcoLabel, 1],
                        ]
                    },
                    {
                        text: "Manufacture of veneer sheets and wood-based panels",
                        following_questions: [],
                        points: [
                            [Category.EPD_C2B, 1],
                            [Category.EPD_B2B, 2],
                            [Category.EcoLabel, 1],
                        ]
                    },
                    {
                        text: "Manufacture of assembled parquet floors",
                        following_questions: [],
                        points: [
                            [Category.EPD_C2B, 1],
                            [Category.EPD_B2B, 2],
                            [Category.EcoLabel, 2],
                        ]
                    },
                    {
                        text: "Manufacture of other builders' caprentry and joinery",
                        following_questions: [],
                        points: [
                            [Category.EPD_C2B, 1],
                            [Category.EPD_B2B, 2],
                            [Category.EcoLabel, 2],
                        ]
                    },
                    {
                        text: "Manufacture of wooden containers",
                        following_questions: [],
                        points: [
                            [Category.EPD_C2B, 1],
                            [Category.EPD_B2B, 2],
                            [Category.EcoLabel, 1],
                        ]
                    },
                    {
                        text: "Manufacture of other products of wood; manufacture of articles of cork, straw and plaiting materials",
                        following_questions: [],
                        points: [
                            [Category.EPD_C2B, 1],
                            [Category.EPD_B2B, 2],
                            [Category.EcoLabel, 2],
                        ]
                    },
                ]
            },
            {
                title: "Manufacture of furniture",
                answers: [
                    {
                        text: "Manufacture of office and shop furniture",
                        following_questions: ["1a"],
                        points: [
                            [Category.EPD_C2B, 1],
                            [Category.EPD_B2B, 2],
                            [Category.EcoLabel, 1],
                        ]
                    },
                    {
                        text: "Manufacture of kitchen furniture",
                        following_questions: ["1a"],
                        points: [
                            [Category.EPD_C2B, 1],
                            [Category.EPD_B2B, 2],
                            [Category.EcoLabel, 2],
                        ]
                    },
                    {
                        text: "Manufacture of mattresses",
                        following_questions: ["1a"],
                        points: [
                            [Category.EPD_C2B, 1],
                            [Category.EPD_B2B, 2],
                            [Category.EcoLabel, 2],
                        ]
                    },
                    {
                        text: "Manufacture of other furniture",
                        following_questions: ["1a"],
                        points: [
                            [Category.EPD_C2B, 1],
                            [Category.EPD_B2B, 2],
                            [Category.EcoLabel, 2],
                        ]
                    },
                ]
            },
            {
                title: "Other",
                answers: []
            },
        ]
    },
    {
        id: "1a",
        text: "Does the furniture your enterprise is manufacturing contain textiles or leather?",
        answerGroups: [
            {
                title: "",
                answers: [
                    {
                        text: "Yes",
                        following_questions: [],
                        points: [
                            [Category.EPD_C2B, 1],
                            [Category.EPD_B2B, 2],
                            [Category.EcoLabel, 2],
                        ]
                    },
                    {
                        text: "No",
                        following_questions: [],
                        points: [
                            [Category.EPD_C2B, 1],
                            [Category.EPD_B2B, 2],
                            [Category.EcoLabel, 2],
                        ]
                    }
                ]
            },
        ]
    },
    {
        id: "2",
        text: "Does your enterprise export outside the European Union (EU)?",
        answerGroups: [
            {
                title: "",
                answers: [
                    {
                        text: "Yes",
                        following_questions: [],
                        points: [
                            [Category.EPD_C2B, 1],
                            [Category.EPD_B2B, 2],
                            [Category.EcoLabel, 1],
                        ]
                    },
                    {
                        text: "No",
                        following_questions: [],
                        points: [
                            [Category.EPD_C2B, 1],
                            [Category.EPD_B2B, 2],
                            [Category.EcoLabel, 2],
                        ]
                    }
                ]
            },
        ]
    },
    {
        id: "3",
        text: "Does your enterprise operate on one or multiple sites?",
        answerGroups: [
            {
                title: "",
                answers: [
                    {
                        text: "One site",
                        following_questions: [],
                        points: [
                            [Category.EPD_C2B, 1],
                            [Category.EPD_B2B, 2],
                            [Category.EcoLabel, 2],
                        ]
                    },
                    {
                        text: "Multiple sites",
                        following_questions: [],
                        points: [
                            [Category.EPD_C2B, 1],
                            [Category.EPD_B2B, 2],
                            [Category.EcoLabel, 2],
                        ]
                    }
                ]
            },
        ]
    },
    {
        id: "4",
        text: "How would you define your enterprise’s business model? You can choose more than one answer.",
        answerGroups: [
            {
                title: "",
                answers: [
                    {
                        text: "B2B (business to business)",
                        following_questions: [],
                        points: [
                            [Category.EPD_C2B, 1],
                            [Category.EPD_B2B, 2],
                            [Category.EcoLabel, 1],
                        ]
                    },
                    {
                        text: "B2C (business to consumer)",
                        following_questions: [],
                        points: [
                            [Category.EPD_C2B, 0],
                            [Category.EPD_B2B, 1],
                            [Category.EcoLabel, 2],
                        ]
                    },
                    {
                        text: "B2G (business to government)",
                        following_questions: [],
                        points: [
                            [Category.EPD_C2B, 1],
                            [Category.EPD_B2B, 2],
                            [Category.EcoLabel, 1],
                        ]
                    },
                    {
                        text: "C2C (consumer to consumer)",
                        following_questions: [],
                        points: [
                            [Category.EPD_C2B, -1],
                            [Category.EPD_B2B, 0],
                            [Category.EcoLabel, 1],
                        ]
                    },
                ]
            },
        ]
    },
    {
        id: "5",
        text: "Do you want a certificate that is recognized:",
        answerGroups: [
            {
                title: "",
                answers: [
                    {
                        text: "Publicly",
                        following_questions: [],
                        points: [
                            [Category.EPD_C2B, 0],
                            [Category.EPD_B2B, 1],
                            [Category.EcoLabel, 2],
                        ]
                    }, {
                        text: "By the industry",
                        following_questions: [],
                        points: [
                            [Category.EPD_C2B, 1],
                            [Category.EPD_B2B, 2],
                            [Category.EcoLabel, 1],
                        ]
                    },
                ]
            },
        ]
    },
    {
        id: "6",
        text: "How would you define the size of your enterprise?",
        answerGroups: [
            {
                title: "",
                answers: [
                    {
                        text: "Micro enterprise (fewer than 10 persons employed)",
                        following_questions: [],
                        points: [
                            [Category.EPD_C2B, 1],
                            [Category.EPD_B2B, 1],
                            [Category.EcoLabel, 1],
                        ]
                    },
                    {
                        text: "Small enterprise (10 to 49 persons employed)",
                        following_questions: [],
                        points: [
                            [Category.EPD_C2B, 1],
                            [Category.EPD_B2B, 2],
                            [Category.EcoLabel, 2],
                        ]
                    },
                    {
                        text: "Medium-sized enterprise (50 to 249 persons employed)",
                        following_questions: [],
                        points: [
                            [Category.EPD_C2B, 1],
                            [Category.EPD_B2B, 2],
                            [Category.EcoLabel, 2],
                        ]
                    },
                    {
                        text: "Large enterprise (250 or more persons employed)",
                        following_questions: [],
                        points: [
                            [Category.EPD_C2B, 1],
                            [Category.EPD_B2B, 2],
                            [Category.EcoLabel, 2],
                        ]
                    },

                ]
            },
        ]
    },
    {
        id: "7",
        text: "What is the timeframe for achieving the certificate",
        answerGroups: [
            {
                title: "",
                answers: [
                    {
                        text: "Short term (e.g. in less than 2 months)",
                        following_questions: [],
                        points: [
                            [Category.EPD_C2B, 0],
                            [Category.EPD_B2B, 1],
                            [Category.EcoLabel, 1],
                        ]
                    },
                    {
                        text: "Medium term (from 2 – 6 months)",
                        following_questions: [],
                        points: [
                            [Category.EPD_C2B, 1],
                            [Category.EPD_B2B, 2],
                            [Category.EcoLabel, 2],
                        ]
                    },
                    {
                        text: "Long term (More than 6 months)",
                        following_questions: [],
                        points: [
                            [Category.EPD_C2B, 1],
                            [Category.EPD_B2B, 2],
                            [Category.EcoLabel, 2],
                        ]
                    }

                ]
            },
        ]
    },
    {
        id: "8",
        text: "What level of investment in terms of time and resources (measured in person months) could you invest to obtain the certificate?",
        answerGroups: [
            {
                title: "",
                answers: [
                    {
                        text: "Low (less than 1 person month (PM)) ",
                        following_questions: [],
                        points: [
                            [Category.EPD_C2B, -1],
                            [Category.EPD_B2B, 1],
                            [Category.EcoLabel, 2],
                        ]
                    },
                    {
                        text: "Medium (1 – 6 PM)",
                        following_questions: [],
                        points: [
                            [Category.EPD_C2B, 0],
                            [Category.EPD_B2B, 2],
                            [Category.EcoLabel, 1],
                        ]
                    },
                    {
                        text: "Large (more than 6 PM) ",
                        following_questions: [],
                        points: [
                            [Category.EPD_C2B, 1],
                            [Category.EPD_B2B, 2],
                            [Category.EcoLabel, 0],
                        ]
                    }
                ]
            },
        ]
    },
    {
        id: "9",
        text: "Are you interested into certifying your enterprise or products?",
        answerGroups: [
            {
                title: "",
                answers: [
                    {
                        text: "Enterprise",
                        following_questions: [],
                        points: [
                            [Category.EPD_C2B, -1],
                            [Category.EPD_B2B, 0],
                            [Category.EcoLabel, 0],
                        ]
                    },
                    {
                        text: "Product",
                        following_questions: [],
                        points: [
                            [Category.EPD_C2B, 1],
                            [Category.EPD_B2B, 2],
                            [Category.EcoLabel, 2],
                        ]
                    }
                ]
            },
        ]
    },
    {
        id: "10",
        text: "Would you prefer to obtain certification through:",
        answerGroups: [
            {
                title: "",
                answers: [
                    {
                        text: "an independent third party (to ensure impartiality)",
                        following_questions: [],
                        points: [
                            [Category.EPD_C2B, 1],
                            [Category.EPD_B2B, 2],
                            [Category.EcoLabel, 2],
                        ]
                    },
                    {
                        text: "a self-declaration (without any third-party verification of the declarations)",
                        following_questions: [],
                        points: [
                            [Category.EPD_C2B, -1],
                            [Category.EPD_B2B, 0],
                            [Category.EcoLabel, 0],
                        ]
                    },
                    {
                        text: "Do not know / does not matter.",
                        following_questions: [],
                        points: [
                            [Category.EPD_C2B, 1],
                            [Category.EPD_B2B, 1],
                            [Category.EcoLabel, 1],
                        ]
                    }
                ]
            },
        ]
    },
    {
        id: "11",
        text: "What environmental aspect are you trying to address with a certification? You can select more than one.",
        answerGroups: [
            {
                title: "Energy",
                answers: [
                    {
                        text: "Energy reporting",
                        following_questions: [],
                        points: [
                            [Category.EPD_C2B, 1],
                            [Category.EPD_B2B, 2],
                            [Category.EcoLabel, 0],
                        ]
                    },
                    {
                        text: "Energy performance",
                        following_questions: [],
                        points: [
                            [Category.EPD_C2B, -1],
                            [Category.EPD_B2B, 0],
                            [Category.EcoLabel, 0],
                        ]
                    },
                    {
                        text: "Energy sources",
                        following_questions: [],
                        points: [
                            [Category.EPD_C2B, 1],
                            [Category.EPD_B2B, 1],
                            [Category.EcoLabel, 0],
                        ]
                    },
                ]
            },
            {
                title: "Toxicity",
                answers: [
                    {
                        text: "Materials disclosure",
                        following_questions: [],
                        points: [
                            [Category.EPD_C2B, 0],
                            [Category.EPD_B2B, 1],
                            [Category.EcoLabel, 0],
                        ]
                    },
                    {
                        text: "Harmful elements",
                        following_questions: [],
                        points: [
                            [Category.EPD_C2B, 0],
                            [Category.EPD_B2B, 1],
                            [Category.EcoLabel, 0],
                        ]
                    },
                    {
                        text: "Banned substances",
                        following_questions: [],
                        points: [
                            [Category.EPD_C2B, 0],
                            [Category.EPD_B2B, 0],
                            [Category.EcoLabel, 0],
                        ]
                    },
                    {
                        text: "Toxicity performance",
                        following_questions: [],
                        points: [
                            [Category.EPD_C2B, 0],
                            [Category.EPD_B2B, 1],
                            [Category.EcoLabel, 0],
                        ]
                    },
                    {
                        text: "Toxicity during use",
                        following_questions: [],
                        points: [
                            [Category.EPD_C2B, 0],
                            [Category.EPD_B2B, 0],
                            [Category.EcoLabel, 0],
                        ]
                    },
                    {
                        text: "Toxicity disposal",
                        following_questions: [],
                        points: [
                            [Category.EPD_C2B, 0],
                            [Category.EPD_B2B, 1],
                            [Category.EcoLabel, 0],
                        ]
                    },
                ]
            },
            {
                title: "Resources",
                answers: [
                    {
                        text: "Sources of materials",
                        following_questions: [],
                        points: [
                            [Category.EPD_C2B, 0],
                            [Category.EPD_B2B, 1],
                            [Category.EcoLabel, 0],
                        ]
                    },
                    {
                        text: "Recycled content",
                        following_questions: [],
                        points: [
                            [Category.EPD_C2B, 0],
                            [Category.EPD_B2B, 1],
                            [Category.EcoLabel, 0],
                        ]
                    },
                    {
                        text: "Rapidly renewable resource",
                        following_questions: [],
                        points: [
                            [Category.EPD_C2B, -1],
                            [Category.EPD_B2B, 0],
                            [Category.EcoLabel, 0],
                        ]
                    },
                    {
                        text: "Waste generation",
                        following_questions: [],
                        points: [
                            [Category.EPD_C2B, 0],
                            [Category.EPD_B2B, 1],
                            [Category.EcoLabel, 0],
                        ]
                    },
                    {
                        text: "Packaging",
                        following_questions: [],
                        points: [
                            [Category.EPD_C2B, 0],
                            [Category.EPD_B2B, 1],
                            [Category.EcoLabel, 0],
                        ]
                    }
                ]
            },
            {
                title: "Water",
                answers: [
                    {
                        text: "Water reporting",
                        following_questions: [],
                        points: [
                            [Category.EPD_C2B, 0],
                            [Category.EPD_B2B, 1],
                            [Category.EcoLabel, 0],
                        ]
                    },
                    {
                        text: "Water use reduction",
                        following_questions: [],
                        points: [
                            [Category.EPD_C2B, 0],
                            [Category.EPD_B2B, 1],
                            [Category.EcoLabel, 0],
                        ]
                    },
                    {
                        text: "Water sources",
                        following_questions: [],
                        points: [
                            [Category.EPD_C2B, 0],
                            [Category.EPD_B2B, 0],
                            [Category.EcoLabel, 0],
                        ]
                    }
                ]
            },
            {
                title: "Social and environmental",
                answers: [
                    {
                        text: "EU legislation compliance required",
                        following_questions: [],
                        points: [
                            [Category.EPD_C2B, -1],
                            [Category.EPD_B2B, 0],
                            [Category.EcoLabel, 0],
                        ]
                    },
                    {
                        text: "Environmental management system (EMS) required",
                        following_questions: [],
                        points: [
                            [Category.EPD_C2B, -1],
                            [Category.EPD_B2B, 0],
                            [Category.EcoLabel, 0],
                        ]
                    },
                    {
                        text: "Social or ethical aspects",
                        following_questions: [],
                        points: [
                            [Category.EPD_C2B, -1],
                            [Category.EPD_B2B, 0],
                            [Category.EcoLabel, 0],
                        ]
                    }
                ]
            },
            {
                title: "Durability & end of life",
                answers: [
                    {
                        text: "Compliance with national standards (e.g. UNE)",
                        following_questions: [],
                        points: [
                            [Category.EPD_C2B, 0],
                            [Category.EPD_B2B, 0],
                            [Category.EcoLabel, 0],
                        ]
                    },
                    {
                        text: "Product stewardship (end-of-life options)",
                        following_questions: [],
                        points: [
                            [Category.EPD_C2B, 0],
                            [Category.EPD_B2B, 1],
                            [Category.EcoLabel, 0],
                        ]
                    },
                    {
                        text: "Recyclability",
                        following_questions: [],
                        points: [
                            [Category.EPD_C2B, 0],
                            [Category.EPD_B2B, 1],
                            [Category.EcoLabel, 0],
                        ]
                    }
                ]
            },
            {
                title: "Local content",
                answers: [
                    {
                        text: "Raw material sourcing",
                        following_questions: [],
                        points: [
                            [Category.EPD_C2B, 0],
                            [Category.EPD_B2B, 0],
                            [Category.EcoLabel, 1],
                        ]
                    },
                    {
                        text: "Local labour utilised",
                        following_questions: [],
                        points: [
                            [Category.EPD_C2B, -1],
                            [Category.EPD_B2B, 0],
                            [Category.EcoLabel, 0],
                        ]
                    },
                    {
                        text: "Local assembly and manufacture",
                        following_questions: [],
                        points: [
                            [Category.EPD_C2B, -1],
                            [Category.EPD_B2B, 0],
                            [Category.EcoLabel, 0],
                        ]
                    },
                    {
                        text: "Local shareholding",
                        following_questions: [],
                        points: [
                            [Category.EPD_C2B, -1],
                            [Category.EPD_B2B, 0],
                            [Category.EcoLabel, 0],
                        ]
                    }
                ]
            },
        ]
    },
];