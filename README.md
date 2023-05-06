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

### Tehtävä 5.8: blogilistan frontend, step8
- Toimii ongelmitta
- Sijainnissa: [App-5-8.js](./src/App-5-8.js)
- Sovellus näyttää blogit likejen mukaisessa suuruusjärjestyksessä, eniten liketty ensin

### Tehtävä 5.9: blogilistan frontend, step9
- Toimii, mutta testauksessa ilmenee kuitenkin tehtävänannossa ilmoitettu aiemman osan API:sta johtuva "bugi"
    - *"Like-painiketta tai lisättäessä uutta blogia, kyseisestä blogista häviää delete-painike. Tämä johtuu siitä, että osassa 4 /api/blogs-endpointin PUT ja POST -metodit eivät lisää lähettämäänsä dataan user-oliota."*
- Sijainnissa: [App-5-9.js](./src/App-5-9.js)
- Lisätty nappi blogin poistamiselle
    - Poistonappi näytetään ainoastaan jos kyseessä on kirjautuneen käyttäjän lisäämä blogi
- Toteutettu myös logiikka poistamiselle
    - Poistoyritys lähettää myös varmistusviestin käyttäjälle funktion `window.confirm` avulla

### Tehtävä 5.10: blogilistan frontend, step10
- Toimii ongelmitta
- Määritelty seuraaville komponenteille `PropTypet`:
    - [Blog.js](./src/components/Blog.js)
    - [BlogForm.js](./src/components/BlogForm.js)
    - [Notification.js](./src/components/Notification.js)

### Tehtävä 5.11: blogilistan testit, step1
- Toimii ongelmitta
- Luotu testi, joka varmistaa että blogin näyttävä komponentti renderöi blogin titlen ja authorin
    - Sijainnissa: [Blog.test.js](./src/components/Blog.test.js)

### Tehtävä 5.12: blogilistan testit, step2
- Toimii ongelmitta
- Luotu testi, oka varmistaa, että jos komponentin like-nappia painetaan kahdesti, komponentin propsina saamaa tapahtumankäsittelijäfunktiota kutsutaan kaksi kertaa
    - Myös sijainnissa: [Blog.test.js](./src/components/Blog.test.js)

### Vapaaehtoinen TODO:
- Lisää kommentteja
- Paranna erityyppisten notifikaatioiden yhteensopivuutta