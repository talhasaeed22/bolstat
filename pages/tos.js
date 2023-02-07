import React from 'react'
import Blur from '../components/Blur'
import TextComponent from '../components/TextComponent'

const TOS = () => {
    return (
        <>
            <div className='text-center my-10'>
                <h1 className='text-3xl text-[#3051A3] font-bold'>Algemene voorwaarden</h1>
                <span className='text-[#757575] text-md'>Laatst bijgewerkt: 01-11-2022</span>
            </div>

            <div className='container sm:pl-16 pl-5 sm:pr-20 pr-5'>
                <span className='text-[#A1A1A1] font-bold text-sm'>In dit document of op onze website verwijzen de termen “wij”, “ons”, “onze” naar BolStats. BolStats heeft een webapplicatie en een mobiele applicatie die beide eigendom zijn van BolStats. Bij het bezoeken van onze site htpps://bolstats.nl gaat u akkoord met onze voorwaaden en heeft u deze gelezen. </span>

                <div className='my-10 flex flex-col'>
                    <h1 className='text-md font-bold text-[#3051A3]'>Contactgegevens:</h1>
                    <TextComponent span={['BolStats', 'KVK: 83295151', 'BTW: NL003798206B86', 'Adres: Leeuweriksweide 4, 6708LK Wageningen', 'Telefoonnummer: 0626450400', 'Email: contact@bolstats.nl']} />

                </div>

                <div className='my-10 flex flex-col'>
                    <h1 className='text-md font-bold text-[#3051A3]'>Verwachtingen van BolStats</h1>
                    <TextComponent span={['BolStats is verplicht er voor te zorgen dat alle apps en applicaties in het beheer van BolStats werken. Als er problemen ontstaan bij het gebruik van de service dienen deze gemeld te worden via contact@bolstats.nl. Bij problemen zal BolStats het zo snel mogelijk oplossen. Bij het BolStats IOS pakket betaal je maandelijks vooraf een bedrag, dit abonnement kan op ieder moment worden opgezegd. U heeft dan nog toegang tot de services tot het het einde van de betaalde periode.']} />

                </div>

                <div className='my-10 flex flex-col'>
                    <h1 className='text-md font-bold text-[#3051A3]'>Definities (1)</h1>
                    <TextComponent span={['In deze algemene voorwaarden worden de volgende definities gehanteerd:', 'BolStats: Eenmanszaak ingeschreven bij de Kamer voor Koophandel onder het KVK nummer 83295151', 'Klant: de natuurlijke persoon of rechtspersoon waarmee BolStats Overeenkomsten sluit.', 'Overeenkomst(en): de Overeenkomst die is gesloten tussen de Klant en BolStats.', 'Diensten: de Diensten die BolStats aanbiedt.', 'Website: de online website https://bolstats.nl waar klanten informatie kunnen krijgen en een abonnement kunnen afsluiten.', 'Service: de door de Klant gekozen pakketoptie.']} />


                </div>

                <div className='my-10 flex flex-col'>
                    <h1 className='text-md font-bold text-[#3051A3]'>Algemeen (2)</h1>
                    <TextComponent span={['2.1 De algemene voorwaarden zijn van toepassing op iedereen die onze website of app bezoekt.', '2.2 Afwijkingen op deze algemene voorwaarden kunnen alleen met schriftelijke toestemming van BolStats.']} />


                </div>

                <div className='my-10 flex flex-col'>
                    <h1 className='text-md font-bold text-[#3051A3]'>Overeenkomsten (3)</h1>
                    <TextComponent span={['3.1 De overeenkomst komt tot stand als de klant akkoord is gegaan met het aanbod van BolStats.', '3.2 De betaling van het gekozen pakket verloop maandelijks via onze betaal provider Mollie Payments.', '3.3 Wanneer de Klant niet of te laat betaald behoud BolStats het recht om het account meteen te beëndigen.', '3.4 De Klant heeft de optie om het abonnement direct stop te zetten, de Klant blijft toegang houden tot onze services tot het eind van de looptijd van het oorspronkelijke abonnement.', '3.5 Wanneer de Klant problemen ervaart met de Service dient de Klant dit te melden via onze mail contact@bolstats.nl.', '3.6 Bij een vermoede van onrechtmatig gebruik van onze Diensten behoud BolStats het recht om het account te beëndigen.', '3.7 BolStats heeft het recht om een Overeenkomst met de Klant te weigeren.']} />


                </div>

                <div className='my-10 flex flex-col'>
                    <h1 className='text-md font-bold text-[#3051A3]'>Uitvoering (4)</h1>
                    <TextComponent span={['4.1 BolStats is verplicht om alle diensten werkend en up-to-date te houden. ', '4.2 De Klant is verantwoordelijk dat alle gegevens correct zijn. Bij een verandering dient dit doorgegeven te worden op contact@bolstats.nl.', '4.3 De duur van de Overeenkomst is tot het einde van de looptijd van het gekozen abonnement.', '4.4 Het abonnement wordt automatisch maandelijks verlengd tenzij de Klant het abonnement minimaal 24 uur van te voren heeft opgezegd via het BolStats dashboard, of bij de betaalprovider.']} />


                </div>

                <div className='my-10 flex flex-col'>
                    <h1 className='text-md font-bold text-[#3051A3]'>Betaling (5)</h1>
                    <TextComponent span={['5.1 De Klant dient mandelijks het verschuldigde bedrag te betalen voor de gekozen Service. Als de betaling niet is gelukt dient de Klant contact op te nemen met BolStats via de mail contact@bolstats.nl. Als de Klant niet kan of wil betalen behoud BolStats het recht om het account te beëndigen.', '5.2 De betaling verloop via onze betalingsprovider Mollie Payments. Via Mollie Payments kan de Klant ook de betalling stopzetten.', '5.3 De Klant heeft de optie om het abonnement voor de Service te beëndigen via het dashboard.', '5.4 Bij prijswijzigingen door BolStats blijven huidige Klanten het zelfde per maand betalen. Nieuwe Klanten betalen de prijs na de prijswijziging. ', '5.5 Alle prijzen op de BolStats Website zijn exclusief btw.']} />
                </div>

                <div className='my-10 flex flex-col'>
                    <h1 className='text-md font-bold text-[#3051A3]'>Geheimhouding en persoonlijke informatie (6)</h1>
                    <TextComponent span={['6.1 BolStats is verplicht tot geheimhouding van de gegevens van de Klant of gegevens van de Retailer API van bol.com. BolStats zal deze gegevens nooit openbaar maken en/of delen met andere buiten onze organisatie.', '6.2 Op verzoek van de Klant kan alle persoonlijke informatie uit onze databases worden verwijderd. BolStats kan ook (op verzoek van de Klant) een heel profiel/account beëndigen. Een verzoek moet gestuurd worden naar contact@bolstats.nl.']} />
                </div>

                <div className='my-10 flex flex-col'>
                    <h1 className='text-md font-bold text-[#3051A3]'>Overmacht (7)</h1>
                    <TextComponent span={['7.1 BolStats kan niet verplicht worden tot het uitvoeren van werkzaamheden als er sprake is van overmacht. Onder overmacht wordt o.a. verstaan: weersinvloeden; internet- en stroomstoring; storing in het mailverkeer; computervredebreuk; hackaanval; persoonlijke omstandigheden; diefstal en brand.']} />
                </div>

                <div className='my-10 flex flex-col'>
                    <h1 className='text-md font-bold text-[#3051A3]'>Auteursrecht (8)</h1>
                    <TextComponent span={['8.1 Alle software, documenten, websites en mobiele applicaties mogen op geen enkele wijze zonder schrijftelijk toestemming van BolStats worden gekopieerd. ']} />
                </div>

                <div className='my-10 flex flex-col'>
                    <h1 className='text-md font-bold text-[#3051A3]'>Aansprakelijkheid (9)</h1>
                    <TextComponent span={['9.1 BolStats is niet aansprakelijk door schade die is ontstaan na het gebruik van onze software. Het gebruiken van de BolStats software is op eigen risico.', '9.2 BolStats heeft met alle nauwkeurigheid de site samengesteld maar is niet aansprakelijk voor type-fouten of andere fouten die zicht op de site bevinden. Fouten kunnen door de Klant gemeld worden via contact@bolstats.nl.']} />
                </div>


            </div>

            <Blur width={'4rem'} height={'28rem'} top={'23%'} left={'95%'} />
            <Blur width={'8rem'} height={'28rem'} top={'100%'} left={'-6%'} />
            <Blur width={'5rem'} height={'28rem'} top={'150%'} left={'94%'} />
            <Blur width={'8rem'} height={'28rem'} top={'200%'} left={'-6%'} />
        </>
    )
}

export default TOS
