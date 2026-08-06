# ADR-006: Authentication Provider Model

## Problem

Future requirements mandate diverse login methods (Password, SAML, WebAuthn, OAuth). Coupling the core engine to passwords prevents scale.

## Decision

Abstract authentication into an IAuthenticationProvider interface (e.g., JwtTokenProvider, Argon2PasswordHasher).

## Consequences

Easy integration of new IDPs. Core domain remains oblivious to how identity was verified.

## Alternatives Considered

- Hardcoded Password Auth: Rejected.
