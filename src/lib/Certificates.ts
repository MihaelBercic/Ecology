import certificates from "$lib/assets/certificates.json";
import type {Certificate} from "$lib/types/question";

export const CERTIFICATE_MAP = new Map();
[...certificates].forEach((certificate: Certificate) => {
    CERTIFICATE_MAP.set(certificate.id, certificate);
});
