import crypto from "crypto";

export default function(cipher,key){
    const decrypt=crypto.createDecipheriv(
        "aes-256-gcm",
        key,
        Buffer.from(cipher.iv,"base64")
    );
    return decrypt.update(cipher.data,"base64","utf-8")
}