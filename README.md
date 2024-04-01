# Offchain Verification Using PolygonID

> Any application that wants to authenticate user based on their credential must
> setup a verifier. A Verifier can be a web2 or web3 platform that is made of a
> Server an a Client.

![](./public/images/off-chain-flow.png)

## Description

At its core, every off-chain interaction between a Verifier and a user's Wallet
follows this workflow:

- A verifier set up queries based on users' existing credentials from a broad
  set of issuers. This is query encapsulates the criteria that the user must
  match to authenticate, such as "must be an HiIQ Holder".
- The request from the verifier is designed using Zero Knowledge Query Language
  and encapsulates into a QR code to be shown to the user.
- The user scans the QR code using his/her mobile polygon ID wallet and parses
  the request
- The user fetches the revocation status of the requested credential from the
  Issuer of that credential.
- The user generates a zk proof on mobile according to the request of the
  website starting from the credentials held in his/her wallet. This also
  contains the zk proof that the credential is not revoked.
- The user sends the zk proof to the Verifier.
- The Verifier verifies the zk Proof using the verification API.
- The Verifier checks that the State of the Issuer of the credential and the
  State of the user are still valid and have not been revoked (this is still
  performed using the same verification API).
- If the verification is successful, the Verifier grants access to the user (or
  activates any customized logic)

## Usage example

Assume that the request is: "Are you an HiIQ Holder?". The Verifier never gets
access to any of the user's credentials. Instead, the Verifier receives a
cryptographic proof which, on verification, provides an answer "yes" or "no" to
the previous question.

## Get Started

```sh
git clone <repo url>

cd <cloned folder>

```

```sh
yarn
yarn dev
```

### User Flow

- From the home page, click on any hyperlink to read more about any article
- You get to the aricle page
- You verify your identity using the polygon ID
- Get access to the content
