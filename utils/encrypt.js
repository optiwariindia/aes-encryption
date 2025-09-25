import crypto from "crypto"
import Key from "./keys.js"

export default function encrypt(
    text,
    key=Key
){
    const iv=crypto.randomBytes(16)
    const cypher=crypto.createCipheriv("aes-256-gcm",key,iv);
    return {
        iv:iv.toString("base64"),
        data:cypher.update(text,"utf8","base64")
    }
}