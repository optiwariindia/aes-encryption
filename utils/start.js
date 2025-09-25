// This is test script to check if encryption (AES) is working fine.

import decrypt from "./decrypt.js";
import encrypt from "./encrypt.js";
import keys from "./keys.js";


; (async () => {
    const Key=keys;
    const testMessage = "jjdaklsjdklsjkljsd";
    const encrypted=encrypt(testMessage)
    const decrypted=decrypt(encrypted,Key)
    console.log({
        testMessage,
        encrypted,
        decrypted
    })
})()