---
layout: post
title: Free ngrok Alternative
date: 2022-05-20 15:44
categories: [Web3, Diode Drive]
tags: [Web3, Self-Custody, Decentralization, Free ngrok Alternative, Open Source]
author: Allen M
image: free-ngrok-alternative.png
imageclass: top
---
Diode offers a free ngrok alternative.

Ngrok is a service that allows you to publish services to the Internet and to remotely access local area networks and IT assets.  It is implemented as a traditional web service – cloud servers are at the center of the service, and are responsible for authentication and routing the requests to/from the published network asset.

The Diode Network is a decentralized security network that enables E2E encrypted connections between any authenticated end points.  Diode’s Command Line Interface (CLI) tool provides a simple interface to the Diode Network – enabling many of the same use cases as does ngrok.  

Keep reading to understand how you can use the Diode CLI for free to accomplish many of the same use cases as the top ngrok paid plan.

How the Diode CLI is a free ngrok alternative

1)	Cost

Ngrok has an entry level free plan and a couple of paid plans.  The free plan is for non-commercial use, and the paid plans provide a commercial license.

The Diode CLI is free for all use cases, regardless if you are using the service for commercial or non-commercial use.  If your use case requires a higher quality of service than is available using the standard Diode fleet contract, you can create your own fleet contract and underwrite the bandwidth.  In this latter case, there is some cost associated, but the economics are designed so the cost will approximate the commodity bandwidth market.

2)	Open Source
An early version of ngrok is open source, but ngrok 2.0 and later is not.

The Diode CLI and Diode Network server applications are open source and available on Diode’s github.  We encourage you to contribute.

3)	Secure Tunnels

Ngrok secure tunnels provide HTTPS connections for all plans, but only offers TLS (encryption for all other protocols, e.g. TCP) at the highest tier.

All traffic routed via the Diode CLI is out of the box end-to-end encrypted using TLS.  This is important because many services that you may want to access cannot run on HTTPS – they must have a TLS connection to be accessible and secure.  The Diode community regularly uses the Diode CLI to secure and remotely access services such as Websockets, SSH, VNC, UDP, FTP, HTTPS, Stratum, RTMP, Livebook, and more using the Diode CLI.

4)	Always Up to Date

The ngrok agent can be remotely updated on the top paid plan.

The Diode CLI gets updates as soon as they are available – this is the default behaviour of the client (also can be disabled if desired).  Also, the Diode CLI can be made persistent on any system by using system tools – e.g. on Linux, systemd) – a paid feature with ngrok.

5)	End to End Encryption

You can contact ngrok to explore options for end to end encryption (AKA Zero Knowledge Encryption).

The Diode CLI uses end to end encryption by default for all communications.  It is also possible to use the Diode CLI to publish a service “publicly” which enables a lower security <client ID>.diode.link end-to-server encryption, which may be desirable in certain instances.

6)	Custom Domains

One custom ngrok.io subdomain or full domain is available per paid license.

The Diode CLI allows you to assign a BNS name that is a fully decentralized domain name.  All BNS names are hosted as subdomains on diode.link and can be used to access any ports/services published publicly.  Further, if you want to use a full domain name, it is easy to configure a custom domain name.

7)	Self Host

The Internet infrastructure used to supply the ngrok service requires use of ngrok server assets.

The Diode Network is a fully encrypted decentralized routing network that allows fully hosted ingress/egress points.  The Diode CLI itself can act as an “exit node” (see “gateway” option), thereby enabling a fully self-hosted environment at all TLS terminations.

8)	Ingress Routing

You can contact ngrok to specify a custom ingress domain.

Anyone can host a Diode Network relay server and configure domains for it.  The Diode CLI’s “diodeaddrs” parameters specify acceptable relay servers for each agent/client.

<hr>
The Diode Network is a powerful Web3 communications network that enables a whole host of peer-to-peer applications.  Although ngrok does have additional features that some applications may require, your application may be perfectly suited to the Diode Network/CLI as a ngrok alternative.

Please feel free to download the Diode CLI and try it out and let us know what you think
