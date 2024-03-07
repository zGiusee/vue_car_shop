<script>
export default {
  

}
</script>

<template>
  <main>

    <div class="my-container">

      <!-- OFFERTE  -->
      <div class="offerte">
        <div class="img">
          <img src="https://www.gruppolauto.com/files/vetrina/42/gruppolauto-slider-homepage-1440x645-giulia.jpg" alt="">
        </div>
        <div class="infos">
          <h2>Super DEAL!</h2>
          <div>
            Puoi risparmiare fino al 5%!
          </div>
          <div>
            <button class="my_front_button my-2">Scopri le offerte</button>
          </div>
        </div>
      </div>

      <!-- INFO VARIE RIGA UNO -->
      <div class="row">
        <div class="p-3 my-col my-3">
          <h6>I più richiesti del momento</h6>
          <div class="icons text-center d-flex justify-content-between my-3">
            <div class="icon">
              <img src="https://www.parmatoday.it/~media/horizontal-hi/7344250437116/renault-twingo-2-2.jpg" alt=""><br>
              Auto elettriche
            </div>
            <div class="icon">
              <img src="https://www.virgilio.it/motori/wp-content/uploads/sites/4/2021/06/costi-ricarica-auto-elettrica.jpg" alt=""><br>
              Auto per la città
            </div>
            <div class="icon">
              <img src="https://thumbs.dreamstime.com/b/famiglia-felice-madre-padre-bambini-figlio-e-figlia-sul-tramonto-sulla-natura-150794881.jpg" alt=""><br>
              Auto per la famiglia
            </div>
            <div class="icon">
              <img src="https://www.autoscuolaitalia.com/wp-content/uploads/2023/06/beautiful-young-latin-woman-driving-her-brand-new-car-showing-her-thumb-up-1024x683.jpg" alt=""><br>
              Auto per neopatentati
            </div>
          </div>
        </div>

        <div class="p-4 my-col my-3">
          <h5>Vendi la tua auto: è veloce e gratis!</h5>
          Inserisci i dati dell'auto, ottieni una valutazione, trova un acquirente.<br>
          <button class="my_front_button my-2">Crea l'annuncio e vendi</button>
        </div>

        <!-- INFO VARIE RIGA DUE -->
        <div class="my-col p-3">
          <img src="https://st3.depositphotos.com/5392356/16676/i/450/depositphotos_166766834-stock-photo-software-engineers-working-on-project.jpg" alt="">
          <div class="get-infos">
            <div class="bg-purple">
              Acquista la tua auto in sicurezza con i consigli dei nostri esperti!
            </div>
            <button class="my_front_button my-2">Informati qui</button>
          </div>
        </div>

        <div class="my-col p-3">
          <img src="https://t3.ftcdn.net/jpg/04/97/57/00/360_F_497570052_nHgVaezWlVWRlO9gZLvC8KoroKsZFye5.jpg" alt="">
          <div class="get-infos">
            <div class="bg-purple">
              Dai valore al tuo usato. Calcola quanto vale la tua auto!
            </div>
            <button class="my_front_button my-2">Valuta gratis</button>
          </div>
        </div>

        <!-- INFO VARIE RIGA TRE -->
        <h4 class="mt-5">Offerte OEM</h4>

        <div class="p-4 my-col mt-1">
          <h5>MondoServizi</h5>
          Scopri l'usato garantito delle case auto<br>
          <button class="my_front_button my-2">Dettagli</button>
        </div>

        <div class="p-4 my-col mt-1">
          <h5>MondoServizi</h5>
          Maserati, scopri il mondo Maserati<br>
          <button class="my_front_button my-2">Dettagli</button>
        </div>


        <!-- INFO VARIE RIGA QUATTRO -->
        <div class="my-col-2 p-5 d-flex justify-content-between align-items-center my-3">
          <div>
            <h4>SuperDEAL: risparmi oltre il 5%!</h4>
            Trova le offerte migliori e contatta il venditore
          </div>
          <div>
            <button class="my_front_button mx-4">Scopri il superdeal</button>
            <button class="my_front_button">guarda le offerte</button>
          </div>
        </div>


        <!-- INFO VARIE RIGA CINQUE -->
        <div class="my-col-2 my-3">
          <div class="title">
            <img src="https://img.etimg.com/thumb/width-1200,height-1200,imgsize-92902,resizemode-75,msid-96559145/magazines/panache/rimac-nevera-worth-2-1-mn-is-worlds-fastest-electric-car-with-256mph-top-speed.jpg" alt="">
            <div class="text">
              Trova l’auto dei tuoi sogni con Bool3Shop, il più grande sito internet di offerta auto in Europa!
            </div>
          </div>


          Un caloroso benvenuto su Bool3Shop, la più grande piattaforma online in Europa per il mercato auto!

          Visualizza le offerte del rivenditore di auto vicino a casa, insieme a quelle di altri 43.000 rivenditori in tutta Europa. Il parco auto virtuale di Bool3Shop è enorme, tra più di 1,5 milioni di veicoli, troverai senz’altro quello che potrebbe diventare il tuo prossimo acquisto. Che si tratti di auto usate o nuove, auto eco-sostenibili o potenti vetture sportive, grazie ad Bool3Shop, troverai velocemente l’auto dei tuoi desideri a prezzi convenienti.

          Nel nostro mercato on-line di autoveicoli puoi trovare auto usate o nuove in pochi clic, proprio con le caratteristiche che cercavi e sempre con un contatto diretto con venditori o concessionari. Il nostro motto è: sei tu a decidere quello che trovi! Il dove e il come cercare, sei sempre tu a stabilirlo, grazie ai criteri di ricerca che andrai a impostare, come la marca preferita, il modello, il tipo di carburante, il colore, gli interni, naturalmente il prezzo e tanto altro.
        </div>
      </div>
    </div>
  
  </main>
</template>

<style scoped lang="scss">
@use '../styles/generals.scss' as *; 

main {
  background-color:#1d1d1d;
  min-height:100vh;
  color:rgb(218, 218, 218);

  .my-container {
    max-width:1100px;
    margin:0 auto;
  }

  .my_front_button {
    padding: 8px 23px;
    background-color: $pink;
    color: white;
    font-size: 12px;
    border: 1px solid transparent;
    text-transform: uppercase;
    text-decoration: none;
    transition: all 0.5s;

    span {
        text-decoration: none;
    }

    &:hover {
        border-radius: 15px;
        background-color: #ffffff;
        color: $pink;
        border: 1px solid $pink;
    }
  }
  
  .offerte {
    height: 500px;
    width:100%;
    position:relative;
  
    img {
      width: 100%;
      height:500px;
      object-fit:cover;
    }
  
    .infos
    {
      position:absolute;
      top:250px;
      left:70px;
      color:white;
    }
  }
  
  .my-col {
    background-color:#2f2f2f;
    border-radius:5px;
    width:calc(100% / 2 - 20px);
    margin:0px 10px;
    position:relative;
  
    .icons {
      img {
        width:70px;
        height:70px;
        object-fit:cover;
        border-radius:100%;
        margin-bottom:10px;
      }
      font-size:13px;
    }

    img {
      width:100%;
      height:300px;
      object-fit:cover;
    }

    .get-infos {
      position:absolute;
      top:220px;
      left:30px;

      .bg-purple {
        background-color:$purple;
        padding:0px 5px;
      }
    }
    
  }

  .my-col-2 {
    background-color:#2f2f2f;
    border-radius:5px;
    width:100%;
    padding:20px 130px;
    text-align:justify;
    font-size:15px;
    line-height:25px;

    .title {
      padding:10px 0px;
      margin-bottom:10px;
      position:relative;

      .text {
        position:absolute;
        top:30px;
        left:20px;
        background-color:$dark_purple;
        padding:0px 5px;
        font-size:16px;
      }

      img {
        width:100%;
        height:300px;
        object-fit:cover;
      }
    }
  }

}

</style>
