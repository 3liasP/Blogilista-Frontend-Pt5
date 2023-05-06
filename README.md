# Web-ohjelmointi: Blogilista-frontend -projekti
## Osa 5, tehtävät 5.1 - 5.13

### Huomioitavaa
- Käyttää tätä backendinä: [Blogilista-Backend-Pt4](https://github.com/3liasP/Blogilista-Backend-Pt4)
- Toiminnallisuus rakennettu siis kyseisen API:n päälle, tämän repostitorion koodi ei toimi itsessään, kyseessä vain pelkkä frontend

### Tehtävä 5.1: blogilistan frontend, step1
- Toimii ongelmitta
- Sijainnissa: [App-5-1.js](./src/App-5-1.js)
- Kirjautuminen backendin kanssa onnistuu
- Kirjautumisen yhteydessä backendin palauttama *token* tallennetaan sovelluksen tilaan `user`
- Jos käyttäjä ei ole kirjautunut, sivulla näytetään pelkästään kirjautumislomake
- Kirjautuneelle käyttäjälle näytetään kirjautuneen käyttäjän nimi sekä blogien lista
- Ei käytetä vielä *local storagea*

### Tehtävä 5.2: blogilistan frontend, step2
- Toimii ongelmitta
- Sijainnissa: [App-5-2.js](./src/App-5-2.js)
- Tehty kirjautumisesta "pysyvä" local storagen avulla
- Tehty sovellukseen myös mahdollisuus uloskirjautumiseen
    - Uloskirjautumisen jälkeen selain ei muista kirjautunutta käyttäjää reloadauksen jälkeen.

### Tehtävä 5.3: blogilistan frontend, step3
- Toimii ongelmitta
- Sijainnissa: [App-5-3.js](./src/App-5-3.js)
- Nyt kirjautunut käyttäjä voi luoda uusia blogeja

### Tehtävä 5.4: blogilistan frontend, step4
- Toimii ongelmitta
- Sijainnissa: [App-5-4.js](./src/App-5-4.js)
- Toteutettu sovellukseen notifikaatiot, jotka kertovat sovelluksen yläosassa onnistuneista ja epäonnistuneista toimenpiteistä
    - Onnistuneet toimenpiteet ilmoitetaan *vihreällä* notifikaatiolla:
        - Onnistunut uuden blogin lisäys
        - Onnistunut uloskirjautuminen
    - Epäonnistuneet toimenpiteet ilmoitetaan *punaisella*:
        - Väärä käyttänimi tai salasana
- `blogForm`:in handlerit (esim. `handleTitleChange`) ovat redundantteja, jotka on korjattu seuraavassa tehtävässä

### Tehtävä 5.5: blogilistan frontend, step5
- Toimii ongelmitta
- Sijainnissa: [App-5-5.js](./src/App-5-5.js)
- Blogin luomiseen käytettävä lomake näytetään ainostaan tarvittaessa
    - Lomake ei ole oletusarvoisesti näkyvillä
    - Klikkaamalla nappia create new blog lomake aukeaa
    - Lomake sulkeutuu, kun uusi blogi luodaan

### Tehtävä 5.6: blogilistan frontend, step6
- Toimii ongelmitta
- Myös sijainnissa: [App-5-5.js](./src/App-5-5.js)
- Uuden blogin luomisesta huolehtiva lomake eriytetty omaan omaan komponenttiinsa [BlogForm.js](./src/components/BlogForm.js)

### Tehtävä 5.7: blogilistan frontend, step7
- Toimii ongelmitta
- Sijainnissa: [App-5-7.js](./src/App-5-7.js)
- Toteutettu like-painikkeen toiminnallisuus
    - Likejä voi antaa rajattomasti, sillä tälle ei annettu minkäänlaista rajoitusta tehtävänannossa
    - Mahdollisesti voitaisiin estää usempi like esim. `Toggleable`-komponenttia käyttämällä


### Vapaaehtoinen TODO:
- Lisää kommentteja
- Paranna erityyppisten notifikaatioiden yhteensopivuutta