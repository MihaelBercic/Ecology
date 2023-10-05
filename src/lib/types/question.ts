export type Question = {
    id: string,
    text: string,
    answerGroups: AnswerGroup[]
}

export type AnswerGroup = {
    title: string,
    answers: Answer[]
}

export type Answer = {
    text: string,
    points: [Certificates, number][],
    following_questions: string[]
}

export enum Certificates {
    IR_EPD = "IR - EPD",
    IR_FSC = "IR - FSC",
    IR_PEFC = "IR - PEFC",
    IR_CE = "IR - CE",
    IR_HEN = "IR - HEN",
    IR_ETA = "IR - ETA",
    IR_CradleToCradle = "IR - Cradle to Cradle",
    UF_FSC = "UF - FSC",
    UF_PEFC = "UF - PEFC",
    NordicSwan = "Nordic Swan",
    RainforestAllianceCertified = "Rainforest Alliance Certified",
    EMAS = "EMAS",
    CETEM_EU_EcoLabel = "CETEM - EU Ecolabel",
    CETEM_BLUE_Angle = "CETEM - BLUE angle",
    CETEM_OEKOTEX = "CETEM - OEKOTEX",
    ISO_14001 = "ISO14001",
    Fairtrade = "Fairtrade",
    ChinaEnvironmentalLabelling = "China Environmental Labelling",
    NaturePLUS = "natureplus",
    AustrianThingy = "Österreichische Umweltzeichen (UZ 07 und UZ 28)"
}

export type Certificate = {
    id: string,
    info: string,
    url: string
}