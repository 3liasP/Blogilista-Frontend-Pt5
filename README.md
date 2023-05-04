# Web-ohjelmointi: Blogilista-frontend -projekti
## Osa 5, tehtävät 5.1 - 5.13

### Huomioitavaa
- Käyttää tätä backendinä: [Blogilista-Backend-Pt4](https://github.com/3liasP/Blogilista-Backend-Pt4)
- Toiminnallisuus rakennettu siis kyseisen API:n päälle, tämän repostitorion koodi ei toimi itsessään, kyseessä vain pelkkä frontend

### Tehtävä 5.1: blogilistan frontend, step1
- Toimii ongelmitta
- Sijainnissa: [App-5-1.js](/App-5-1.js)
- Kirjautuminen backendin kanssa onnistuu
- Kirjautumisen yhteydessä backendin palauttama *token* tallennetaan sovelluksen tilaan `user`
- Jos käyttäjä ei ole kirjautunut, sivulla näytetään pelkästään kirjautumislomake
- Kirjautuneelle käyttäjälle näytetään kirjautuneen käyttäjän nimi sekä blogien lista
- Ei käytetä vielä *local storagea*

### Tehtävä 5.2: blogilistan frontend, step2
- Toimii ongelmitta
- Sijainnissa: [App-5-2.js](/App-5-2.js)
- Tehty kirjautumisesta "pysyvä" local storagen avulla
- Tehty sovellukseen myös mahdollisuus uloskirjautumiseen
    - Uloskirjautumisen jälkeen selain ei muista kirjautunutta käyttäjää reloadauksen jälkeen.