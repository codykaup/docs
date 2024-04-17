# User session management

To reduce the risk of unauthorized access to your account, Codacy sets automatic expiration timeouts for every session. When a session expires, Codacy invalidates the session both on the client and server side.<!--TODO PLUTO-883 Validate the behavior when there is an active session on the Git provider side, would that avoid an explicit re-login on refresh-->

## Idle session timeout

The **idle session timeout** on the Codacy app is **30 minutes**. In the absence of user activity during this period, such as typing or using the mouse, Codacy logs out the user and invalidates the session.

## Absolute session timeout

The **absolute session timeout** on the Codacy app is **8 hours**. When an active session reaches this maximum period, Codacy logs out the user and invalidates the session.