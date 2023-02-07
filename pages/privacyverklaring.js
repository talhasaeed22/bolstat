import React from 'react'
import Blur from '../components/Blur'
import TextComponent from '../components/TextComponent'

const Privacyverklaring = () => {
    return (
        <>
            <div className='text-center my-10'>
                <h1 className='text-3xl text-[#3051A3] font-bold'>Privacyverklaring</h1>
                <span className='text-[#757575] text-md'>Laatst bijgewerkt: 01-11-2022</span>
            </div>

            <div className='container sm:pl-16 pl-5 sm:pr-20 pr-5'>
                <span className='text-[#A1A1A1] font-bold text-sm'>BolStats, gevestigd aan Leeuweriksweide 4, 6708LK Wageningen, is verantwoordelijk voor de verwerking van persoonsgegevens zoals weergegeven in deze privacyverklaring. </span>

                <div className='my-10 flex flex-col'>
                    <h1 className='text-md font-bold text-[#3051A3]'>Contactgegevens:</h1>
                    <TextComponent span={['BolStats', 'KVK: 83295151', 'BTW: NL003798206B86', 'Adres: Leeuweriksweide 4, 6708LK Wageningen', 'Telefoonnummer: 0626450400', 'Email: contact@bolstats.nl', 'br', 'Wouter Dijkstra is de Functionaris Gegevensbescherming van BolStats Hij/zij is te bereiken via contact@bolstats.nl']}/>
                  
                </div>

                <div className='my-10 flex flex-col'>
                    <h1 className='text-md font-bold text-[#3051A3]'>Persoonsgegevens die wij verwerken</h1>
                    <TextComponent span={['BolStats verwerkt uw persoonsgegevens doordat u gebruik maakt van onze diensten en/of omdat u deze zelf aan ons verstrekt.', 'br', 'Hieronder vindt u een overzicht van de persoonsgegevens die wij verwerken:', '- Voor- en achternaam', '- E-mailadres', '- Overige persoonsgegevens die u actief verstrekt bijvoorbeeld door een profiel op deze website aan te maken, in correspondentie en telefonisch']} />
                    
                </div>

                <div className='my-10 flex flex-col'>
                    <h1 className='text-md font-bold text-[#3051A3]'>Bijzondere en/of gevoelige persoonsgegevens die wij verwerken</h1>
                    <TextComponent span={['Onze website en/of dienst heeft niet de intentie gegevens te verzamelen over websitebezoekers die jonger zijn dan 16 jaar. Tenzij ze toestemming hebben van ouders of voogd. We kunnen echter niet controleren of een bezoeker ouder dan 16 is. Wij raden ouders dan ook aan betrokken te zijn bij de online activiteiten van hun kinderen, om zo te voorkomen dat er gegevens over kinderen verzameld worden zonder ouderlijke toestemming. Als u er van overtuigd bent dat wij zonder die toestemming persoonlijke gegevens hebben verzameld over een minderjarige, neem dan contact met ons op via contact@bolstats.nl, dan verwijderen wij deze informatie.']} />                
                </div>

                <div className='my-10 flex flex-col'>
                    <h1 className='text-md font-bold text-[#3051A3]'>Met welk doel en op basis van welke grondslag wij persoonsgegevens verwerken</h1>
                    <h1 className='text-md font-bold text-[#3051A3]'>BolStats verwerkt uw persoonsgegevens voor de volgende doelen:</h1>
                    <TextComponent span={['- Het afhandelen van uw betaling', '- U te kunnen bellen of e-mailen indien dit nodig is om onze dienstverlening uit te kunnen voeren', '- U te informeren over wijzigingen van onze diensten en producten', '- U de mogelijkheid te bieden een account aan te maken', '- Om goederen en diensten bij u af te leveren']} />                   
                </div>

                <div className='my-10 flex flex-col'>
                    <h1 className='text-md font-bold text-[#3051A3]'>Hoe lang we persoonsgegevens bewaren</h1>
                    <br />
                    <TextComponent span={['BolStats bewaart uw persoonsgegevens niet langer dan strikt nodig is om de doelen te realiseren waarvoor uw gegevens worden verzameld. Wij hanteren de volgende bewaartermijnen voor de volgende (categorieën) van persoonsgegevens:', 'br', 'Uw persoongegevens blijven beveiligd op onze servers totdat u uw account heeft beëindigd. Op verzoek kunnen wij ook gegevens veranderen of verwijderen van onze servers.']} />
                </div>

                <div className='my-10 flex flex-col'>
                    <h1 className='text-md font-bold text-[#3051A3]'>Delen van persoonsgegevens met derden</h1>
                    <TextComponent span={['BolStats verstrekt uitsluitend aan derden en alleen als dit nodig is voor de uitvoering van onze overeenkomst met u of om te voldoen aan een wettelijke verplichting.']} />
                   
                    
                </div>

                <div className='my-10 flex flex-col'>
                    <h1 className='text-md font-bold text-[#3051A3]'>Cookies, of vergelijkbare technieken, die wij gebruiken</h1>
                    <TextComponent span={['BolStats gebruikt alleen technische en functionele cookies. En analytische cookies die geen inbreuk maken op uw privacy. Een cookie is een klein tekstbestand dat bij het eerste bezoek aan deze website wordt opgeslagen op uw computer, tablet of smartphone. De cookies die wij gebruiken zijn noodzakelijk voor de technische werking van de website en uw gebruiksgemak. Ze zorgen ervoor dat de website naar behoren werkt en onthouden bijvoorbeeld uw voorkeursinstellingen. Ook kunnen wij hiermee onze website optimaliseren. U kunt zich afmelden voor cookies door uw internetbrowser zo in te stellen dat deze geen cookies meer opslaat. Daarnaast kunt u ook alle informatie die eerder is opgeslagen via de instellingen van uw browser verwijderen.']} />
                </div>

                <div className='my-10 flex flex-col'>
                    <h1 className='text-md font-bold text-[#3051A3]'>Gegevens inzien, aanpassen of verwijderen </h1>
                    <TextComponent span={['U heeft het recht om uw persoonsgegevens in te zien, te corrigeren of te verwijderen. Daarnaast heeft u het recht om uw eventuele toestemming voor de gegevensverwerking in te trekken of bezwaar te maken tegen de verwerking van uw persoonsgegevens door BolStats en heeft u het recht op gegevensoverdraagbaarheid. Dat betekent dat u bij ons een verzoek kunt indienen om de persoonsgegevens die wij van u beschikken in een computerbestand naar u of een ander, door u genoemde organisatie, te sturen.', 'br', 'U kunt een verzoek tot inzage, correctie, verwijdering, gegevensoverdraging van uw persoonsgegevens of verzoek tot intrekking van uw toestemming of bezwaar op de verwerking van uw persoonsgegevens sturen naar contact@bolstats.nl.', 'br', 'Om er zeker van te zijn dat het verzoek tot inzage door u is gedaan, vragen wij u een kopie van uw identiteitsbewijs met het verzoek mee te sturen. Maak in deze kopie uw pasfoto, MRZ (machine readable zone, de strook met nummers onderaan het paspoort), paspoortnummer en Burgerservicenummer (BSN) zwart. Dit ter bescherming van uw privacy. We reageren zo snel mogelijk, maar binnen vier weken, op uw verzoek.', 'br', 'BolStats wil u er tevens op wijzen dat u de mogelijkheid heeft om een klacht in te dienen bij de nationale toezichthouder, de Autoriteit Persoonsgegevens. Dat kan via de volgende link: https://autoriteitpersoonsgegevens.nl/nl/contact-met-de-autoriteit-persoonsgegevens/tip-ons']} />
                </div>

                <div className='my-10 flex flex-col'>
                    <h1 className='text-md font-bold text-[#3051A3]'>Hoe wij persoonsgegevens beveiligen</h1>
                    <TextComponent span={['BolStats neemt de bescherming van uw gegevens serieus en neemt passende maatregelen om misbruik, verlies, onbevoegde toegang, ongewenste openbaarmaking en ongeoorloofde wijziging tegen te gaan. Als u de indruk heeft dat uw gegevens niet goed beveiligd zijn of er aanwijzingen zijn van misbruik, neem dan contact op met onze klantenservice of via contact@bolstats.nl']} />
                </div>
                
            </div>

            <Blur width={'4rem'} height={'28rem'} top={'23%'} left={'95%'} />
            <Blur width={'5rem'} height={'28rem'} top={'150%'} left={'94%'} />
        </>
    )
}

export default Privacyverklaring
