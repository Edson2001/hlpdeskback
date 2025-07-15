http:
  routers:
    facturatudo-helpdeskback-t4zmba-router-34:
      rule: Host(`helpback.webfacil.site`)
      service: facturatudo-helpdeskback-t4zmba-service-34
      middlewares:
        - redirect-to-https
      entryPoints:
        - web
    facturatudo-helpdeskback-t4zmba-router-websecure-34:
      rule: Host(`helpback.webfacil.site`)
      service: facturatudo-helpdeskback-t4zmba-service-34
      middlewares: []
      entryPoints:
        - websecure
      tls:
        certResolver: letsencrypt
  services:
    facturatudo-helpdeskback-t4zmba-service-34:
      loadBalancer:
        servers:
          - url: http://facturatudo-helpdeskback-t4zmba:3006
        passHostHeader: true
