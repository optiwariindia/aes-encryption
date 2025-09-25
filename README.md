# aes-encryption

A library to perform AES encryption and decryption in Node JS Applications using the `crypto` module and aes-256-gcm algorithm.

## Installation

```bash
npm install aes-encryption
```

## Usage

```javascript
import {encrypt,decrypt,Key} from 'aes-encryption';

const key = Buffer.from(Key, 'base64'); // Use the predefined key from env variable. Generate for one during application setup.

const plaintext = "Hello, World!";
const ciphertext = encrypt(plaintext, key);
console.log("Ciphertext:", ciphertext);

const decryptedText = decrypt(ciphertext, key);
console.log("Decrypted Text:", decryptedText);

```