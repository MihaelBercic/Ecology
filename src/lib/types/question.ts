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
    EPD = "EPD",
    FSC = "FSC",
    PEFC = "PEFC",
    CE = "CE",
    HEN = "HEN",
    ETA = "ETA",
    CradleToCradle = "Cradle to Cradle",
    NordicSwan = "Nordic Swan",
    EcoLabel = "EU Ecolabel",
    Blue_Angle = "BLUE angle",
    OEKOTEX = "OEKOTEX",
    RainforestAllianceCertified = "Rainforest Alliance Certified",
    ISO_14001 = "ISO14001",
    EMAS = "EMAS",
    CarbonTrustProduct = "Carbon Trust Product / Organisation Footprint Certification",
    AustrianThingy = "Österreichische Umweltzeichen (UZ 07 und UZ 28)",
    EU_PEF = "EU PEF / OEF"
}

export type Certificate = {
    id: string,
    info: string,
    url: string,
    name: string,
    logo: string
}