
// Change Main Image in product info code


let mainImage = document.querySelector('.mainImage').children[0];


let lilImages = document.querySelector('.lilImages');

lilImages.addEventListener('click',function(e){
    

    let clickedImg = e.target

    mainImage.src = clickedImg.src
})


// form input 

// let form = document.querySelector('.AddForm');
// let qty = form.querySelector('input');
// let price = parseFloat(form.querySelector('h4 span').innerText);
// let addBtn = form.querySelector('button');

// let pTotal = 0;

// addBtn.addEventListener('click',function(e){
//     e.preventDefault()
//     pTotal =  qty.value * price
//     console.log('Your total is :',pTotal)
// })





// select code 
let Wilaya = document.querySelector('#Wilaya');
let Commune = document.querySelector('#Commune');
let newOption;

let Adrar = ["ADRAR","BOUDA","OULED AHMED TIMMI","AOUGROUT","DELDOUL","METARFA","AKABLI","AOULEF","TIMEKTEN",
"TIT"," BORDJ BADJI MOKHTAR","TIMIAOUINE","CHAROUINE","OULED AISSA","TALMINE","FENOUGHIL","TAMANTIT",
"TAMEST","REGGANE","SALI","OULED SAID","TIMIMOUN","KSAR KADDOUR","TINERKOUK","SEBAA","TSABIT","IN ZGHMIR","ZAOUIET KOUNTA"];

let Chlef = [" ABOU EL HASSANE","TADJENA","TALASSA","AIN MERANE","HERENFA","BENI HAOUA","BREIRA"," OUED GOUSSINE","BOUKADIR",
"OUED SLY","SOBHA","CHLEF","OUM DROU","SENDJAS","BENI BOUATTAB","EL KARIMIA",
"HARCHOUN","EL MARSA","MOUSSADEK","BENI RACHED"," OUED FODDA","OULED ABBES",
"EL HADJADJ","OULED BEN ABDELKADER","MEDJADJA","CHETTIA","LABIOD","OULED FARES","DAHRA","TAOUGRIT","SIDI ABDERRAHMANE",
"SIDI AKKACHA","TENES","BENAIRIA","BOUZEGHAIA","ZEBOUDJA"];



let Laghouat = ["AFLOU","AIN MADHI","BRIDA","EL GHICHA","GUELTAT SIDI SAAD","HASSI R'MEL","KSAR EL HIRANE","LAGHOUAT",
"OUED MORRA",
"SIDI MAKHLOUF","AIN MADHI","EL HAOUAITA","KHENEG","TADJEMOUT","TADJROUNA","BRIDA",
"HADJ MECHRI","TAOUIALA","EL GHICHA","AIN SIDI ALI"," EL BEIDHA","GUELTAT SIDI SAAD",
"HASSI DELAA"," HASSI R'MEL","BENACER BENCHOHRA","KSAR EL HIRANE","LAGHOUAT"," OUED M'ZI","OUED MORRA","EL ASSAFIA","SIDI MAKHLOUF"];



let OumElBouaghi = ["AIN BABOUCHE","AIN DISS","AIN BEIDA","BERRICHE","ZORG"," AIN FEKROUN","EL FEDJOUDJ BOUGHRARA SA","AIN KERCHA","EL HARMILIA",
"HANCHIR TOUMGHANI","AIN M'LILA","OULED GACEM","OULED HAMLA"," DHALAA","EL DJAZIA","FKIRINA",
" OUED NINI","KSAR SBAHI","BEHIR CHERGUI","EL BELALA","MESKIANA","RAHIA",
"AIN ZITOUN","OUM EL BOUAGHI","AIN ZITOUN","OUM EL BOUAGHI","BIR CHOUHADA","OULED ZOUAI","SOUK NAAMANE"];



let Batna = ["AIN DJASSER","EL HASSI","AIN TOUTA","BENI FOUDHALA EL HAKANIA","MAAFA","OULED AOUF","ARRIS","TIGHANIMINE","BARIKA",
"BITAM","M DOUKAL","BATNA","FESDIS","OUED CHAABA","BOUZINA","LARBAA",
"BOULHILAT","CHEMORA","AZIL ABEDELKADER","DJEZZAR","OULED AMMAR","AIN YAGOUT",
"BOUMIA","DJERMA","EL MADHER","FOUM TOUB","ICHEMOUL","INOUGHISSEN","MENAA","TIGHARGHAR","HIDOUSSA",
"KSAR BELLEZMA","MEROUANA","OUED EL MA","BOUMAGUEUR"," N GAOUS","SEFIANE",
"LEMCENE"," OULED SI SLIMANE","TAXLENT","GOSBAT","GUIGBA","OULED SELLEM","RAHBAT","RAS EL AIOUN",
"TALKHAMT","SEGGANA","TILATOU","LAZROU","SERIANA","ZANET EL BEIDA","OUYOUN EL ASSAFIR","TAZOULT",
"CHIR","OUED TAGA","TENIET EL ABED","OULED FADEL","TIMGAD","GHASSIRA","KIMMEL"," T KOUT",]


let Béjaïa = ["ADEKAR","BENI K'SILA","TAOURIT IGHIL","AKBOU","CHELLATA","IGHRAM","TAMOKRA","AMIZOUR","BENI DJELLIL",
"FERAOUN","SMAOUN","AOKAS","TIZI-N'BERBER","BARBACHA","KENDIRA","BEJAIA",
"OUED GHIR","BENIMAOUCHE","AKFADOU","CHEMINI","SOUK OUFELLA","TIBANE",
"AIT-SMAIL","DARGUINA","TASKRIOUT","EL KSEUR","FENAIA IL MATEN","TOUDJA","OUZELLAGUEN","AIT R'ZINE","IGHIL-ALI",
"DRA EL CAID","KHERRATA","AMALOU","BOUHAMZA","M'CISNA","SEDDOUK","LEFLAYE"," SIDI AYAD","SIDI-AICH","TIFRA","TINEBDAR","MELBOU",
"SOUK EL TENINE","TAMRIDJET","BENI-MALLIKECHE","BOUDJELLIL","TAZMALT","BOUKHELIFA",
" TALA HAMZA","TICHY","TIMEZRIT"]



let Biskra = ["BISKRA"," EL HADJAB","BRANIS","DJEMORAH","AIN ZAATOUT","EL KANTARA","EL OUTAYA","EL GHROUS","FOUGHALA",
"M'CHOUNECHE","CHAIBA","DOUCEN"," OULED DJELLAL","LIOUA","M'LILI","MEKHADMA",
"OUMACHE","OURLAL"," BESBES","RAS EL MIAD","SIDI KHALED","AIN NAGA",
"CHETMA","EL HAOUCH","SIDI OKBA","BORDJ BEN AZZOUZ","BOUCHAKROUN","LICHANA","TOLGA","EL FEIDH","KHENGUET SIDI NADJI",
"MEZIRAA","ZERIBET EL OUED"]




let Béchar = ["ABADLA","ERG-FERRADJ","MACHRAA-HOUARI-BOUMEDIENE","BECHAR"," BENI-ABBES","TAMTERT","BENI-OUNIF","EL OUATA","IGLI",
"KENADSA","MERIDJA"," BENI-IKHLEF","KERZAZ","TIMOUDI","BOUKAIS","LAHMAR",
"MOGHEUL","KSABI","OULED-KHODEIR","TABELBALA","TAGHIT"]



let Blida = ["BLIDA","BOUARFA","BOUFARIK","GUERROUAOU","SOUMAA","BOUGARA","HAMMAM ELOUANE","OULED SLAMA","BOUINAN",
"CHEBLI","EL-AFFROUN","OUED DJER","LARBAA","SOUHANE","DJEBABRA","MEFTAH",
" AIN ROMANA","CHIFFA","MOUZAIA","BENI-TAMOU","BENKHELIL","OUED EL ALLEUG",
"BENI MERED","CHREA","OULED YAICH"]


let Bouira = ["AIN EL HADJAR","AIN LALOUI","AIN-BESSEM"," AHL EL KSAR","BECHLOUL","EL ADJIBA","EL ASNAM","OULED RACHED","BIR GHBALOU","EL KHABOUZIA",
"RAOURAOUA","BORDJ OKHRISS","HADJERA ZERGA","MEZDOUR","TAGUEDITE","AIN TURK","AIT LAAZIZ","BOUIRA","EL HACHIMIA","OUED EL BERDI","HAIZER",
"TAGHZOUT","AOMAR","DJEBAHIA","KADIRIA","BOUDERBALA","BOUKRAM","GUERROUMA","LAKHDARIA","MAALA","Z'BARBAR","AGHBALOU","ATH MANSOUR",
"CHORFA","HANIF","M CHEDALLAH","SAHARIDJ","EL-MOKRANI","SOUK EL KHEMIS","DECHMIA","DIRAH","EL-HAKIMIA","MAAMORA","RIDANE","SOUR EL GHOZLANE"]


let Tamanrasset = ["INGHAR","AIN GUEZZAM","AIN SALAH","FOGGARET EZZOUA","ABELSA","AIN AMGUEL","TAMANRASSET","IDLES","TAZROUK","TIN ZOUATINE"]



let Tébessa = ["BIR-EL-ATER","EL OGLA EL MALHA"," BIR MOKKADEM","GUORRIGUER","HAMMAMET","CHERIA","TELIDJEN","BOUKHADRA","EL-AOUINET","BEKKARIA",
"BOULHAF DYR","EL KOUIF"," EL MALABIOD","EL-HOUIDJBET","BEDJENE","EL MEZERAA","EL OGLA","STAH GUENTIS","BIR DHEHEB","MORSOTT","FERKANE",
"NEGRINE","AIN ZERGA"," EL MERIDJ","OUENZA","OUM ALI","SAF SAF EL OUESRA","TEBESSA"]


let Tlemcen = ["AIN NEHALA","AIN TELLOUT","BAB EL ASSA","SOUANI","SOUK TLETA","BENI BOUSSAID","SIDI MEDJAHED","AZAIL","BENI BAHDEL","BENI SNOUS",
"BENSEKRANE","SIDI ABDELLI","AIN FEZZA","AMIEUR","CHETOUANE","AIN FETAH","AIN KEBIRA","FELLAOUCENE","DAR YAGHMORACEN","GHAZAOUET","SOUAHLIA",
"TIANET","HENNAYA","OULED RIYAH","ZENATA","BENI KHELLAD","HONNAINE","HAMMAM BOUGHRARA","MAGHNIA","AIN GHORABA","BENI MESTER","MANSOURAH","TERNY BENI HEDIEL",
"M'SIRDA FOUAGA","MARSA BEN M'HIDI","DJEBALA","NEDROMA","BENI SMIEL","OUED LAKHDAR","OULED MIMOUN",
"AIN YOUCEF","BENI OUARSOUS"," EL FEHOUL","REMCHI","SEBBAA CHIOUKH"
,"BOUHLOU","SABRA"," EL ARICHA","EL GOR","SEBDOU",
"BOUIHI","SIDI DJILLALI","TLEMCEN"]



let Tiaret = [" AIN DEHEB","CHEHAIMA","NAIMA"," AIN KERMES","DJEBILET ROSFA","MADNA","MEDRISSA","SIDI ABDERRAHMANE","AIN BOUCHEKIF","DAHMOUNI",
"AIN EL HADID","FRENDA","TAKHEMARET","BOUGARA","HAMADIA","RECHAIGA",
"KSAR CHELLALA","SERGHINE","ZMALET EL EMIR ABDELKADER","AIN DZARIT","MAHDIA",
"NADORAH","SEBAINE","DJILLALI BEN AMAR","MECHRAA SAFA","TAGDEMPT","MEDROUSSA","MELLAKOU","SIDI BAKHTI",
"MEGHILA","SEBT","SIDI HOSNI","OUED LILLI",
"SIDI ALI MELLAL","TIDDA","GUERTOUFA","RAHOUIA","FAIDJA","SI ABDELGHANI","SOUGUEUR","TOUSNINA","TIARET"]



let TiziOuzou = ["ABI-YOUCEF","AIN-EL-HAMMAM","AIT-YAHIA","AKBIL","AZAZGA","FREHA",
"IFIGHA","YAKOURENE","ZEKRI","AGHRIBS",
" AIT-CHAFAA","AKERROU","AZEFFOUN","AIT-MAHMOUD","BENI ZMENZER","BENI-AISSI","BENI-DOUALA","BENI-YENNI","<IBOUDRARENE>",
"YATAFENE","ASSI-YOUCEF",
"BOGHNI","BOUNOUH","MECHTRAS","BENI-ZIKKI","BOUZEGUENE","IDJEUR","ILLOULA OUMALOU"," DRAA-BEN-KHEDDA","SIDI NAMANE",
"TADMAIT","TIRMITINE","AIN-ZAOUIA",
"AIT YAHIA MOUSSA","DRAA-EL-MIZAN","FRIKAT","IFERHOUNENE","ILLILTEN","IMSOUHAL",
" AIT AGGOUACHA","IRDJEN","LARBAA NATH IRATHEN","MAATKAS",
"SOUK-EL-TENINE","BOUDJIMA","MAKOUDA","AIT KHELLILI","MEKLA","SOUAMA"," AIT BOUMAHDI","AIT-TOUDERT","OUACIF",
"AGOUNI-GUEGHRANE","AIT BOUADDOU",
"OUADHIAS","TIZI N'TLETA","AIT-AISSA-MIMOUN","OUAGUENOUN","TIMIZART","IFLISSEN","MIZRANA","TIGZIRT","TIZI-OUZOU",
"AIT-OUMALOU","TIZI-RACHED","M'KIRA",
"TIZI-GHENIFF"]



let Alger = ["BAB EL OUED","BOLOGHINE IBNOU ZIRI","CASBAH","OUED KORICHE","RAIS HAMIDOU","BARAKI","LES EUCALYPTUS",
"SIDI MOUSSA","BIR MOURAD RAIS","BIRKHADEM",
"DJASR KASENTINA","HYDRA","SEHAOULA"," BIR TOUTA","OULED CHEBEL"," TESSALA EL MERDJA","BEN AKNOUN","BENI MESSOUS","BOUZAREAH","EL BIAR","AIN BENIAN",
"CHERAGA","DELY IBRAHIM","HAMMAMET","OULED FAYET","AIN TAYA"," BAB EZZOUAR"," BORDJ EL BAHRI","BORDJ EL KIFFAN","DAR EL BEIDA",
"EL MARSA","MOHAMMADIA","BABA HASSEN",
"DOUIRA","DRARIA","EL ACHOUR","KHRAISSIA","BACHEDJERAH","BOUROUBA",
"EL HARRACH","OUED SMAR","EL MAGHARIA",
"HUSSEIN DEY","KOUBA","MOHAMED BELOUZDAD","HERRAOUA","REGHAIA","ROUIBA"," ALGER CENTRE","EL MADANIA","EL MOURADIA","SIDI M'HAMED","MAALMA",
"RAHMANIA","SOUIDANIA","STAOUELI","ZERALDA"]




let Djelfa = ["AIN EL IBEL","MOUDJEBARA","TAADMIT","ZACCAR","AIN OUSSERA","GUERNINI","BENHAR","BIRINE","BENYAGOUB","CHAREF",
"EL GUEDID","DAR CHIOUKH"," M'LILIHA"," SIDI BAIZID","DJELFA","AIN CHOUHADA",
"DOUIS","EL IDRISSIA","AMOURAH","FAIDH EL BOTMA","OUM LAADHAM",
"AIN FEKKA","BOUIRA LAHDAB","HAD SAHARY","AIN MAABED","HASSI BAHBAH","HASSI EL EUCH",
"ZAAFRANE","DELDOUL","GUETTARA","MESSAAD","SED RAHAL","SELMANA",
"EL KHEMIS","HASSI FEDOUL","SIDI LAADJEL"]



let Jijel = ["BORDJ T'HAR","CHEKFA","EL KENNAR NOUCHFI","SIDI ABDELAZIZ","BOUDRIA BENIYADJIS","DJIMLA",
"BOURAOUI BELHADEF"," DJEMAA BENI HABIBI","EL ANCER","KHIRI OUED ADJOUL",
"EL AOUANA","SELMA BENZIADA"," EL MILIA","OULED YAHIA KHADROUCH","JIJEL","GHEBALA","SETTARA","OULED RABAH","SIDI MAROUF",
"BOUSSIF OULED ASKEUR","CHAHNA",
"EMIR ABDELKADER","OUDJANA","TAHER","KAOUS","TEXENNA","ERRAGUENE SOUISSI","ZIAMA MANSOURIAH"]



let Sétif = ["AIN ABESSA"," AIN ARNAT","EL OURICIA","MEZLOUG","AIN AZEL","AIN LAHDJAR","BEIDHA BORDJ",
"BIR HADDADA","AIN EL KEBIRA","DEHAMCHA",
"OULED ADDOUANE","AIN OULMENE","GUELLAL"," KASR EL ABTAL","OULED SI AHMED","AMOUCHA","OUED EL BARED",
"TIZI N'BECHAR","BABOR"," SERDJ-EL-GHOUL","AIN-SEBT",
"BENI-AZIZ","MAAOUIA","AIN-LEGRADJ","BENI CHEBANA","BENI OURTILANE","BENI-MOUHLI","BELLAA",
"BIR-EL-ARCH","EL-OULDJA","TACHOUDA","AIT NAOUAL MEZADA","AIT-TIZI",
"BOUANDAS","BOUSSELAM","AIN-ROUA","BENI OUSSINE","BOUGAA","BENI FOUDA","DJEMILA","BAZER-SAKRA",
"EL EULMA"," GUELTA ZERKA",
"GUENZET","HARBIL",
"GUIDJEL","OULED SABOR","DRAA-KEBILA"," HAMMAM GUERGOUR"," HAMAM SOUKHNA","TAYA","TELLA","MAOUAKLANE",
"TALA-IFACENE","BOUTALEB","HAMMA","OULED TEBBEN","ROSFA","SALAH BEY",
"SETIF"]



let Saïda = ["AIN EL HADJAR","MOULAY LARBI","SIDI AHMED",
" AIN SEKHOUNA","EL HASSASNA","MAAMORA","AIN SOLTANE","OULED BRAHIM","TIRCINE","SAIDA",
"HOUNET","OULED KHALED","SIDI AMAR","SIDI BOUBEKEUR"," DOUI THABET","YOUB"]



let Skikda = ["AIN KECHRA","OULDJA BOULBALOUT","AIN CHARCHAR","AZZABA",
"DJENDEL SAADI MOHAMED"," EL GHEDIR","ES SEBT","BEKKOUCHE LAKHDAR","BEN AZZOUZ","EL MARSA",
"BENI ZID","CHERAIA","COLLO","AIN ZOUIT","BOUCHETATA","EL HADAIEK"," EL ARROUCH"
," EMJEZ EDCHICH","OULED HABBABA","SALAH BOUCHAOUR","ZERDEZAS",
"KHENAG MAOUNE","OUED ZHOUR","OULED ATTIA","OUM TOUB","BENI BECHIR","RAMDANE DJAMEL","AIN BOUZIANE"
,"BENI OULBANE"," SIDI MEZGHICHE","FILFILA","HAMMADI KROUMA","SKIKDA",
"BIN EL OUIDEN","KERKARA","TAMALOUS","KANOUA","ZITOUNA"]



let SidiBelAbbès = ["AIN EL BERD","MAKEDRA","SIDI BRAHIM","SIDI HAMADOUCHE","BEDRABINE EL MOKRANI",
"BEN BADIS"," CHETOUANE BELAILA","HASSI ZAHANA","BIR EL HAMMAM","MARHOUM",
"SIDI CHAIB","MERINE"," OUED TAOURIRA","TAOUDMOUT","TEFESSOUR","BELARBI","MOSTEFA BEN BRAHIM","TILMOUNI","ZEROUALA",
"AIN TINDAMINE","EL HACAIBA",
"MOULAY SLISSEN","OUED SEBAA","RAS EL MA"," REDJEM DEMOUCHE"," AIN- ADDEN"," BOUDJEBAA EL BORDJ"," M'CID",
"SFISEF","BOUKHANEFIS","SIDI ALI BENYOUB","TABIA","AIN KADA",
"LAMTAR","SIDI ALI BOUSSIDI","SIDI DAHOU ZAIRS","SIDI BEL-ABBES","AMARNAS","SIDI KHALED",
"SIDI LAHCENE","SIDI YACOUB","DHAYA","MEZAOUROU","TEGHALIMET",
"TELAGH","BENACHIBA CHELIA","HASSI DAHOU","OUED SEFIOUN","TENIRA",
"AIN THRID","SEHALA THAOURA","TESSALA"]


let Annaba = ["AIN EL BERDA","CHEURFA","EL EULMA","ANNABA","SERAIDI","BERRAHAL","OUED EL ANEB","TREAT","CHETAIBI","EL BOUNI",
"EL HADJAR","SIDI AMAR"]


let Guelma = ["HOUARI BOUMEDIENNE","MEDJEZ AMAR"," RAS EL AGBA","SELLAOUA ANNOUNA",
"AIN LARBI"," AIN MAKHLOUF","TAMLOUKA","AIN BEN BEIDA","BOUCHEGOUF","MEDJEZ SFA",
" OUED FERRAGHA","BELKHEIR","BENI MEZLINE","BOUMAHRA AHMED","DJEBALLAH KHEMISSI","GUELAAT BOU SBAA","NECHMAYA",
"BENDJARAH","GUELMA",
"BOU HAMDANE","HAMMAM DEBAGH",
"ROKNIA","DAHOUARA"," HAMMAM N'BAIL","OUED CHEHAM","BOUATI MAHMOUD","EL FEDJOUDJ","HELIOPOLIS","AIN SANDEL","BOU HACHANA",
"KHEZARAS","AIN REGADA","BORDJ SABATH",
"OUED ZENATI"]


let Constantine = ["AIN ABID","BEN BADIS","CONSTANTINE","AIN SMARA","EL KHROUB"," OULED RAHMOUN",
"DIDOUCHE MOURAD","HAMMA BOUZIANE","IBN ZIAD","MESSAOUD BOUDJERIOU",
" BENI HAMIDANE","ZIGHOUD YOUCEF"]


let Médéa = ["AIN BOUCIF","EL OUINET","KEF LAKHDAR","OULED EMAARAF"," SIDI DEMED",
"AZIZ","DERRAG","OUM EL DJELLIL"," BENI SLIMANE","BOUSKENE",
"SIDI RABIE","BERROUAGHIA","OULED DEID","REBAIA","BOUAICHE","BOUGHZOUL","CHABOUNIA","AIN OUKSIR",
"CHELALET EL ADHAOURA","CHENIGUEL","TAFRAOUT",
"EL AZIZIA","MAGHRAOUA","MIHOUB","BAATA","EL OMARIA","OULED BRAHIM","BIR BEN LAABED","EL GUELBELKEBIR",
"SEDRAYA","KSAR EL BOUKHARI","M'FATHA","SANEG",
"DRAA ESMAR","MEDEA","TAMESGUIDA","HANNACHA","OUAMRI"," OUED HARBIL",
"BOGHAR"," OULED ANTAR","OULED HELLAL","BEN CHICAO","EL HAMDANIA",
"OUZERA","TIZI MAHDI","MEDJEBAR","SEGHOUANE","TLETAT ED DOUAIR",
"ZOUBIRIA","BOUAICHOUNE"," OULED BOUACHRA","SI MAHDJOUB","BOUCHRAHIL","KHAMS DJOUAMAA","SIDI NAAMANE","DJOUAB",
"SIDI ZAHAR","SIDI ZIANE","SOUAGUI",
"AISSAOUIA","EL HAOUDANE","MEZERANA","TABLAT"]


let Mostaganem = ["ACHAACHA" ,"KHADRA" ,"NEKMARIA" ,"OULED BOUGHALEM","AIN-NOUISSY ","FORNAKA ","HASSIANE ","AIN-TEDLES ",
" OUED EL KHEIR ","SIDI BELAATTAR "," SOUR","BOUGUIRAT "," SAFSAF"," SIRAT"," SOUAFLIA",
"HASSI MAMECHE ","MAZAGRAN ","STIDIA "," AIN-BOUDINAR","KHEIR-EDDINE "," SAYADA","CHERIF "," AIN-SIDI "," MANSOURAH",
"MESRA ","TOUAHRIA ","MOSTAGANEM ","OULED-MAALAH "," SIDI ALI"," TAZGAIT"," BENABDELMALEK RAMDANE","HADJADJ ","SIDI-LAKHDAR "] ;



let Msila = ["AIN EL HADJEL","SIDI HADJERES","AIN EL MELH","AIN FARES",
"AIN RICH"," BIR FODA","SIDI M'HAMED","BEN SROUR",
"MOHAMED BOUDIAF"," OULED SLIMANE","ZARZOUR","BOU SAADA"," EL HAMEL",
"OULTEME","CHELLAL"," KHETTOUTI SED-EL-JIR","MAARIF","OULED MADHI",
"DJEBEL MESSAAD","SLIM","HAMMAM DALAA","OUANOUGHA","OULED MANSOUR",
"TARMOUNT","EL HOUAMED","KHOUBANA"," M'CIF"," M'SILA",
"AIN KHADRA","BELAIBA","BERHOUM","DEHAHNA","MAGRA","MEDJEDEL","MENAA"," M'TARFA","MAADID",
"OULED ADDI GUEBALA","OULED DERRADJ","SOUAMAA"," BENI ILMANE","BOUTI SAYEH"," SIDI AISSA","BENI ILMANE",
" BOUTI SAYEH","SIDI AISSA",
"SIDI AMEUR","TAMSA"]



let Mascara = ["AIN FARES","EL MAMOUNIA","AIN FEKAN","AIN FRASS",
"AOUF","BENIAN","GHARROUS","BOUHANIFIA",
"EL GUEITENA","HACINE","EL BORDJ","EL MENAOUER","KHALOUIA",
"GHRISS","MAKHDA","MAOUSSA","MATEMORE","SIDI BOUSSAID",
" EL HACHEM","NESMOT","ZELAMTA","MASCARA","EL GHOMRI",
"FERRAGUIG","MOCTA-DOUZ","MOHAMMADIA","SEDJERARA","SIDI ABDELMOUMENE",
"ALAIMIA","OGGAZ","RAS EL AIN AMIROUCHE","AIN FERAH","OUED EL ABTAL",
" SIDI ABDELDJEBAR","GUERDJOUM","OUED TARIA","BOU HENNI","CHORFA",
"SIG","SEHAILIA","SIDI KADA","TIGHENNIF"," EL KEURT",
"FROHA","TIZI","EL GAADA","ZAHANA"]



let Ouargla = ["EL BORMA","EL ALIA","EL-HADJIRA","HASSI MESSAOUD",
"MEGARINE","SIDI SLIMANE","N'GOUSSA","OUARGLA",
"ROUISSAT"," AIN BEIDA","HASSI BEN ABDELLAH","SIDI KHOUILED","BENACEUR",
" M'NAGUER","TAIBET","NEZLA","TEBESBEST","TOUGGOURT",
"ZAOUIA EL ABIDIA"]


let Oran = ["AIN TURK","BOUSFER","EL ANCOR","MERS EL KEBIR",
"ARZEW","SIDI BEN YEBKA"," AIN BIYA","BETHIOUA",
"MARSAT EL HADJADJ","BIR EL DJIR","HASSI BEN OKBA"," HASSI BOUNIF","AIN KERMA",
"BOUTLELIS","MESSERGHIN"," EL KERMA","ES SENIA","SIDI CHAMI",
"BEN FREHA","GDYEL"," HASSI MEFSOUKH","ORAN","BOUFATIS",
"EL BRAYA","OUED TLELAT","TAFRAOUI"]



let ElBayadh = ["El Bayadh","Rogassa","Cheguig","Kef El Ahmar",
"Brezina","Kraakda","Ghassoul","El Abiodh Sidi Cheikh",
"Aïn El Orak","Arbaouat","El Bnoud","Bougtoub"," El Kheiter",
"Tousmouline","Chellala","El Mehara","Boussemghoun","Boualem",
"Sidi Ameur"," Sidi Slimane","Sidi Tifour","Stitten"]



let Illizi = ["BORDJ EL HAOUASS","DJANET","ILLIZI","BORDJ OMAR DRISS",
"DEBDEB","IN AMENAS"]


let BordjBouArreridj = ["AIN TAGHROUT","TIXTER","BIR KASDALI","KHELIL",
" SIDI-EMBAREK","B.B.ARRERIDJ","BELIMOUR","BORDJ GHEDIR",
"EL ANNASSEUR","GHAILASA","TAGLAIT","Bordj Zemmoura","OULED DAHMANE",
"TASSAMERT","COLLA","DJAAFRA","EL MAIN","Tefreg",
"El euch","Elhammadia","KSOUR","RABTA","BEN DAOUD",
"EL M'HIR","HARAZA","MANSOURA","OULED SIDI-BRAHIM","EL ACHIR",
"HASNAOUA","MEDJANA","TENIET EN NASR"," AIN TESRA","OULED BRAHEM","RAS EL OUED"]




let Boumerdès = ["BAGHLIA","SIDI DAOUD","TAOURGA","BORDJ MENAIEL",
"DJINET","LEGHATA","ZEMMOURI","BOUDOUAOU",
"BOUDOUAOU EL BAHRI","BOUZEGZA KEDDARA","EL KHARROUBA","OULED HEDADJ","BOUMERDES",
"CORSO","TIDJELABINE","AFIR","BEN CHOUD","DELLYS",
"CHABET EL AMEUR","ISSER","SI MUSTAPHA","TIMEZRIT","HAMMEDI",
"KHEMIS EL KHECHNA","LARBATACHE","OULED MOUSSA","NACIRIA","OULED AISSA",
"AMMAL","BENI AMRANE","SOUK EL HAD","THENIA"]



let ElTarf = ["BEN M HIDI","BERRIHANE","ECHATT","ASFOUR",
"BESBES","ZERIZER"," AIN KERMA","BOUHADJAR",
"HAMMAM BENI SALAH","OUED ZITOUN","BOUTELDJA","CHEFIA","LAC DES OISEAUX",
"CHEBAITA MOKHTAR","CHIHANI","DREAN","EL AIOUN","EL KALA",
"RAML SOUK","SOUAREKH","AIN EL ASSEL","BOUGOUS","EL TARF",
"ZITOUNA"]



let Tindouf = ["TINDOUF"]



let Tissemsilt = ["AMMARI","MAACEM","SIDI ABED","BENI CHAIB",
"BENI LAHCENE","BORDJ BOUNAAMA","SIDI SLIMANE","BORDJ EL EMIR ABDELKADER",
"YOUSSOUFIA","KHEMISTI","LAYOUNE","LARDJEM","MELAAB",
" SIDI LANTRI","TAMELLAHET","BOUCAID","LARBAA","LAZHARIA",
" SIDI BOUTOUCHENT","THENIET EL HAD","OULED BESSAM","TISSEMSILT"]



let ElOued = ["BAYADHA","DEBILA","HASSANI ABDELKRIM","DJAMAA",
"M'RARA","SIDI AMRANE","TENEDLA","EL-M'GHAIER",
" OUM TOUYOUR","SIDI KHELIL","STILL","EL-OUED","KOUININE",
"GUEMAR","OURMES","TAGHZOUT","HASSI KHALIFA","TRIFAOUI",
"MAGRANE","SIDI AOUN"," MIH OUANSA","OUED EL ALENDA","HAMRAIA",
"REGUIBA","EL OGLA","NAKHLA","ROBBAH","BEN GUECHA",
"DOUAR EL MAA","TALEB LARBI"]


let Khenchela = ["AIN TOUILA"," M'TOUSSA","BABAR","BOUHMAMA",
"CHELIA","M'SARA","YABOUS","CHECHAR",
"DJELLAL","EL OUELDJA","KHIRANE","BAGHAI"," EL HAMMA",
"ENSIGHA","TAMZA","KAIS","REMILA","TAOUZIANAT",
"KHENCHELA","EL MAHMAL","OULED RECHACHE"]



let SoukAhras = ["BIR BOUHOUCHE","SAFEL EL OUIDEN","ZOUABI","HADDADA",
"KHEDARA","OULED MOUMEN","M'DAOUROUCHE","RAGOUBA",
"TIFFECH","HANENCHA","MACHROHA","MERAHNA","OUILLEN",
"SIDI FREDJ","AIN ZANA","OULED DRISS","OUED KEBRIT","OUM EL ADHAIM",
"TERRAGUELT","AIN SOLTANE","KHEMISSA","SEDRATA","SOUK AHRAS",
"DREA","TAOURA","ZAAROURIA"]



let Tipaza = ["AHMER EL AIN","BOURKIKA","SIDI RACHED"," AIN TAGOURAIT",
"BOU HAROUN","BOU ISMAIL","KHEMISTI","CHERCHELL",
"HADJRET ENNOUS","SIDI GHILES","SIDI SEMIANE","BENI MILEUK","DAMOUS",
"LARHAT","DOUAOUDA","FOUKA","AGHBAL","GOURAYA",
"MESSELMOUN","HADJOUT","MERAD","ATTATBA","CHAIBA",
"KOLEA","MENACEUR","NADOR","SIDI-AMAR","TIPAZA",]

 


let Mila = [" AIN BEIDA HARRICHE","El Ayadi Barbes","BOUHATEM","DERRAHI BOUSSELAH",
" AIN MELLOUK","CHELGHOUM LAID","OUED ATHMENIA","FERDJIOUA",
"YAHIA BENIGUECHA","GRAREM GOUGA","HAMALA"," AIN TINE","MILA",
" SIDI KHELIFA","AHMED RACHEDI","OUED ENDJA","ZEGHAIA","ROUACHED",
"TIBERGUENT","CHIGARA","SIDI MEROUANE","BENYAHIA ABDERRAHMANE"," OULED KHALOUF",
"TADJENANET","Minar Zarza","TASSADANE HADDADA","EL MECHIRA","OUED SEGUEN",
"TELEGHMA","AMIRA ARRES","TASSALA LEMATAI","TERRAI BAINEN"]

 

let AïnDefla = ["AIN-DEFLA","AIN-LECHIAKH"," AIN-SOLTANE","OUED DJEMAA",
"BATHIA","BELAAS","HASSANIA","BIR-OULD-KHELIFA",
"BORDJ-EMIR-KHALED","TARIK-IBN-ZIAD","BOUMEDFAA","HOCEINIA","BOURACHED",
"DJELIDA"," DJEMAA OULED CHEIKH","BIRBOUCHE","DJENDEL","OUED CHORFA",
"AIN-BOUYAHIA"," EL-ABADIA","TACHETA ZEGAGHA","ARIB","EL-AMRA",
"MEKHATRIA"," EL-ATTAF","TIBERKANINE"," AIN-BENIAN"," AIN-TORKI",
"HAMMAM-RIGHA","KHEMIS-MILIANA","SIDI-LAKHDAR","BEN ALLAL","MILIANA","EL-MAINE","ROUINA","ZEDDINE"]


let Naâma = ["AIN SEFRA","TIOUT","ASLA","AIN BEN KHELIL",
"El BIODH","MECHERIA","KASDIR","MAKMEN BEN AMAR",
"DJENIENNE BOUREZG","MOGHRAR","NAAMA","SFISSIFA"]



let AïnTémouchent = ["AGHLAL","AIN KIHAL","AIN TOLBA","AOUBELLIL",
"AIN EL ARBAA","OUED SEBBAH","SIDI BOUMEDIENE","TAMZOURA",
"AIN TEMOUCHENT","SIDI BEN ADDA","BENI SAF"," EMIR ABDELKADER"," SIDI SAFI",
"BOUZEDJAR","EL AMRIA","EL MESSAID","HASSI EL GHELLA","OULED BOUDJEMAA",
"CHAABAT EL HAM","EL MALEH","OULED KIHAL","TERGA","CHENTOUF",
"HAMMAM BOU HADJAR","HASSASNA"," OUED BERKECHE","OUED BERKECHE"," OULHACA EL GHERABA",
"SIDI OURIACHE"]


let Ghardaïa = ["BERRIANE","BOUNOURA","EL ATTEUF","DHAYET BENDHAHOUA",
"EL GUERRARA","EL MENIAA","HASSI GARA","GHARDAIA",
"HASSI FEHAL","MANSOURA","METLILI","SEBSEB","ZELFANA"]



let Relizane = ["AIN-TAREK","HAD ECHKALLA","AMMI MOUSSA","EL HASSI",
"EL OULDJA","OULED AICHE","DJIDIOUIA","HAMRI",
"OULED SIDI MIHOUB","EL H'MADNA","OUED EL DJEMAA"," BELAASSEL BOUZAGZA","EL-MATMAR",
"SIDI KHETTAB","SIDI M'HAMED BENAOUDA","EL-GUETTAR","MAZOUNA","MENDES",
"OUED ESSALEM","SIDI LAZREG","LAHLEF","MERDJA SIDI ABED","OUARIZANE",
"OUED-RHIOU","RAMKA"," SOUK EL HAD","BENDAOUD","RELIZANE",
" BENI ZENTIS","MEDIOUNA","SIDI M'HAMED BENALI","AIN RAHMA","KALAA","SIDI SAADA","YELLEL"," BENI DERGOUN",
"DAR BEN ABDELAH","ZEMMOURA"]





























Wilaya.addEventListener('change',function(){
    Commune.innerHTML = '' ;
    newOption = new Option('--Commune--','none');
    Commune.append(newOption);
    

    if(Wilaya.value === "Adrar"){
        for(let i=0; i< Adrar.length; i++){
            newOption = new Option(Adrar[i],Adrar[i]);
            Commune.append(newOption);
        
        }
}else if(Wilaya.value === "Chlef"){
    for(let i=0; i< Chlef.length; i++){
        newOption = new Option(Chlef[i],Chlef[i]);
        Commune.append(newOption);
    
    }
}else if(Wilaya.value === "Laghouat"){
    for(let i=0; i< Laghouat.length; i++){
        newOption = new Option(Laghouat[i],Laghouat[i]);
        Commune.append(newOption);
    
    }
}else if(Wilaya.value === "Oum-El-Bouaghi"){
    for(let i=0; i< OumElBouaghi.length; i++){
        newOption = new Option(OumElBouaghi[i],OumElBouaghi[i]);
        Commune.append(newOption);
    
    }
}else if(Wilaya.value === "Batna"){
    for(let i=0; i< Batna.length; i++){
        newOption = new Option(Batna[i],Batna[i]);
        Commune.append(newOption);
    
    }
}else if(Wilaya.value === "Béjaïa"){
    for(let i=0; i< Béjaïa.length; i++){
        newOption = new Option(Béjaïa[i],Béjaïa[i]);
        Commune.append(newOption);
    
    }
}else if(Wilaya.value === "Biskra"){
    for(let i=0; i< Biskra.length; i++){
        newOption = new Option(Biskra[i],Biskra[i]);
        Commune.append(newOption);
    
    }
}else if(Wilaya.value === "Béchar"){
    for(let i=0; i< Béchar.length; i++){
        newOption = new Option(Béchar[i],Béchar[i]);
        Commune.append(newOption);
    
    }
}else if(Wilaya.value === "Blida"){
    for(let i=0; i< Blida.length; i++){
        newOption = new Option(Blida[i],Blida[i]);
        Commune.append(newOption);
    
    }
}else if(Wilaya.value === "Bouira"){
    for(let i=0; i< Bouira.length; i++){
        newOption = new Option(Bouira[i],Bouira[i]);
        Commune.append(newOption);
    
    }
}else if(Wilaya.value === "Tamanrasset"){
    for(let i=0; i< Tamanrasset.length; i++){
        newOption = new Option(Tamanrasset[i],Tamanrasset[i]);
        Commune.append(newOption);
    
    }
}else if(Wilaya.value === "Tébessa"){
    for(let i=0; i< Tébessa.length; i++){
        newOption = new Option(Tébessa[i],Tébessa[i]);
        Commune.append(newOption);
    
    }
}else if(Wilaya.value === "Tlemcen"){
    for(let i=0; i< Tlemcen.length; i++){
        newOption = new Option(Tlemcen[i],Tlemcen[i]);
        Commune.append(newOption);
    
    }
}else if(Wilaya.value === "Tiaret"){
    for(let i=0; i< Tiaret.length; i++){
        newOption = new Option(Tiaret[i],Tiaret[i]);
        Commune.append(newOption);
    
    }
}else if(Wilaya.value === "Tizi-Ouzou"){
    for(let i=0; i< TiziOuzou.length; i++){
        newOption = new Option(TiziOuzou[i],TiziOuzou[i]);
        Commune.append(newOption);
    
    }
}else if(Wilaya.value === "Alger"){
    for(let i=0; i< Alger.length; i++){
        newOption = new Option(Alger[i],Alger[i]);
        Commune.append(newOption);
    
    }
}else if(Wilaya.value === "Djelfa"){
    for(let i=0; i< Djelfa.length; i++){
        newOption = new Option(Djelfa[i],Djelfa[i]);
        Commune.append(newOption);
    
    }
}else if(Wilaya.value === "Jijel"){
    for(let i=0; i< Jijel.length; i++){
        newOption = new Option(Jijel[i],Jijel[i]);
        Commune.append(newOption);
    
    }
}else if(Wilaya.value === "Sétif"){
    for(let i=0; i< Sétif.length; i++){
        newOption = new Option(Sétif[i],Sétif[i]);
        Commune.append(newOption);
    
    }
}else if(Wilaya.value === "Saïda"){
    for(let i=0; i< Saïda.length; i++){
        newOption = new Option(Saïda[i],Saïda[i]);
        Commune.append(newOption);
    
    }
}else if(Wilaya.value === "Skikda"){
    for(let i=0; i< Skikda.length; i++){
        newOption = new Option(Skikda[i],Skikda[i]);
        Commune.append(newOption);
    
    }
}else if(Wilaya.value === "Sidi Bel Abbès"){
    for(let i=0; i< SidiBelAbbès.length; i++){
        newOption = new Option(SidiBelAbbès[i],SidiBelAbbès[i]);
        Commune.append(newOption);
    
    }
}else if(Wilaya.value === "Annaba"){
    for(let i=0; i< Annaba.length; i++){
        newOption = new Option(Annaba[i],Annaba[i]);
        Commune.append(newOption);
    
    }
}else if(Wilaya.value === "Guelma"){
    for(let i=0; i< Guelma.length; i++){
        newOption = new Option(Guelma[i],Guelma[i]);
        Commune.append(newOption);
    
    }
}else if(Wilaya.value === "Constantine"){
    for(let i=0; i< Constantine.length; i++){
        newOption = new Option(Constantine[i],Constantine[i]);
        Commune.append(newOption);
    
    }
}else if(Wilaya.value === "Médéa"){
    for(let i=0; i< Médéa.length; i++){
        newOption = new Option(Médéa[i],Médéa[i]);
        Commune.append(newOption);
    
    }
}else if(Wilaya.value === "Mostaganem"){
    for(let i=0; i< Mostaganem.length; i++){
        newOption = new Option(Mostaganem[i],Mostaganem[i]);
        Commune.append(newOption);
    
    }
}else if(Wilaya.value === "Mascara"){
    for(let i=0; i< Mascara.length; i++){
        newOption = new Option(Mascara[i],Mascara[i]);
        Commune.append(newOption);
    
    }
}else if(Wilaya.value === "Ouargla"){
    for(let i=0; i< Ouargla.length; i++){
        newOption = new Option(Ouargla[i],Ouargla[i]);
        Commune.append(newOption);
    
    }
}else if(Wilaya.value === "Oran"){
    for(let i=0; i< Oran.length; i++){
        newOption = new Option(Oran[i],Oran[i]);
        Commune.append(newOption);
    
    }
}else if(Wilaya.value === "El Bayadh"){
    for(let i=0; i< ElBayadh.length; i++){
        newOption = new Option(ElBayadh[i],ElBayadh[i]);
        Commune.append(newOption);
    
    }
}else if(Wilaya.value === "Illizi"){
    for(let i=0; i< Illizi.length; i++){
        newOption = new Option(Illizi[i],Illizi[i]);
        Commune.append(newOption);
    
    }
}else if(Wilaya.value === "Bordj Bou Arreridj"){
    for(let i=0; i< BordjBouArreridj.length; i++){
        newOption = new Option(BordjBouArreridj[i],BordjBouArreridj[i]);
        Commune.append(newOption);
    
    }
}else if(Wilaya.value === "Boumerdès"){
    for(let i=0; i< Boumerdès.length; i++){
        newOption = new Option(Boumerdès[i],Boumerdès[i]);
        Commune.append(newOption);
    
    }
}else if(Wilaya.value === "El-Tarf"){
    for(let i=0; i< ElTarf.length; i++){
        newOption = new Option(ElTarf[i],ElTarf[i]);
        Commune.append(newOption);
    
    }
}else if(Wilaya.value === "Tindouf"){
    for(let i=0; i< Tindouf.length; i++){
        newOption = new Option(Tindouf[i],Tindouf[i]);
        Commune.append(newOption);
    
    }
}else if(Wilaya.value === "Tissemsilt"){
    for(let i=0; i< Tissemsilt.length; i++){
        newOption = new Option(Tissemsilt[i],Tissemsilt[i]);
        Commune.append(newOption);
    
    }
}else if(Wilaya.value === "El-Oued"){
    for(let i=0; i< ElOued.length; i++){
        newOption = new Option(ElOued[i],ElOued[i]);
        Commune.append(newOption);
    
    }
}else if(Wilaya.value === "Khenchela"){
    for(let i=0; i< Khenchela.length; i++){
        newOption = new Option(Khenchela[i],Khenchela[i]);
        Commune.append(newOption);
    
    }
}else if(Wilaya.value === "Souk-Ahras"){
    for(let i=0; i< SoukAhras.length; i++){
        newOption = new Option(SoukAhras[i],SoukAhras[i]);
        Commune.append(newOption);
    
    }
}else if(Wilaya.value === "Tipaza"){
    for(let i=0; i< Tipaza.length; i++){
        newOption = new Option(Tipaza[i],Tipaza[i]);
        Commune.append(newOption);
    
    }
}else if(Wilaya.value === "Mila"){
    for(let i=0; i< Mila.length; i++){
        newOption = new Option(Mila[i],Mila[i]);
        Commune.append(newOption);
    
    }
}else if(Wilaya.value === "Aïn-Defla"){
    for(let i=0; i< AïnDefla.length; i++){
        newOption = new Option(AïnDefla[i],AïnDefla[i]);
        Commune.append(newOption);
    
    }
}else if(Wilaya.value === "Naâma"){
    for(let i=0; i< Naâma.length; i++){
        newOption = new Option(Naâma[i],Naâma[i]);
        Commune.append(newOption);
    
    }
}else if(Wilaya.value === "Aïn-Témouchent"){
    for(let i=0; i< AïnTémouchent.length; i++){
        newOption = new Option(AïnTémouchent[i],AïnTémouchent[i]);
        Commune.append(newOption);
    
    }
}else if(Wilaya.value === "Ghardaïa"){
    for(let i=0; i< Ghardaïa.length; i++){
        newOption = new Option(Ghardaïa[i],Ghardaïa[i]);
        Commune.append(newOption);
    
    }
}else if(Wilaya.value === "Relizane"){
    for(let i=0; i< Relizane.length; i++){
        newOption = new Option(Relizane[i],Relizane[i]);
        Commune.append(newOption);
    
    }
}
// Last 10 wilayas:


// else if(Wilaya.value === "Jijel"){
//     for(let i=0; i< Jijel.length; i++){
//         newOption = new Option(Jijel[i],Jijel[i]);
//         Commune.append(newOption);
    
//     }
// }else if(Wilaya.value === "Sétif"){
//     for(let i=0; i< Sétif.length; i++){
//         newOption = new Option(Sétif[i],Sétif[i]);
//         Commune.append(newOption);
    
//     }
// }else if(Wilaya.value === "Saïda"){
//     for(let i=0; i< Saïda.length; i++){
//         newOption = new Option(Saïda[i],Saïda[i]);
//         Commune.append(newOption);
    
//     }
// }else if(Wilaya.value === "Skikda"){
//     for(let i=0; i< Skikda.length; i++){
//         newOption = new Option(Skikda[i],Skikda[i]);
//         Commune.append(newOption);
    
//     }
// }else if(Wilaya.value === "Sidi Bel Abbès"){
//     for(let i=0; i< SidiBelAbbès.length; i++){
//         newOption = new Option(SidiBelAbbès[i],SidiBelAbbès[i]);
//         Commune.append(newOption);
    
//     }
// }else if(Wilaya.value === "Mostaganem"){
//     for(let i=0; i< Mostaganem.length; i++){
//         newOption = new Option(Mostaganem[i],Mostaganem[i]);
//         Commune.append(newOption);
    
//     }
// }else if(Wilaya.value === "Annaba"){
//     for(let i=0; i< Annaba.length; i++){
//         newOption = new Option(Annaba[i],Annaba[i]);
//         Commune.append(newOption);
    
//     }
// }else if(Wilaya.value === "Guelma"){
//     for(let i=0; i< Guelma.length; i++){
//         newOption = new Option(Guelma[i],Guelma[i]);
//         Commune.append(newOption);
    
//     }
// }else if(Wilaya.value === "Constantine"){
//     for(let i=0; i< Constantine.length; i++){
//         newOption = new Option(Constantine[i],Constantine[i]);
//         Commune.append(newOption);
    
//     }
// }else if(Wilaya.value === "Médéa"){
//     for(let i=0; i< Médéa.length; i++){
//         newOption = new Option(Médéa[i],Médéa[i]);
//         Commune.append(newOption);
    
//     }
// }else if(Wilaya.value === "Mostaganem"){
//     for(let i=0; i< Mostaganem.length; i++){
//         newOption = new Option(Mostaganem[i],Mostaganem[i]);
//         Commune.append(newOption);
    
//     }
// }else if(Wilaya.value === "Mascara"){
//     for(let i=0; i< Mascara.length; i++){
//         newOption = new Option(Mascara[i],Mascara[i]);
//         Commune.append(newOption);
    
//     }
// }else if(Wilaya.value === "Ouargla"){
//     for(let i=0; i< Ouargla.length; i++){
//         newOption = new Option(Ouargla[i],Ouargla[i]);
//         Commune.append(newOption);
    
//     }
// }
        

})  


// total 
let form = document.querySelector('.AddForm')
let productPrice = document.querySelector('.productPrice').innerText
let total = document.querySelector('.total span');

let livraison = document.querySelector('.livraison span');

total.innerText = parseFloat(productPrice);


form.addEventListener('input',function(){

if(Wilaya.value === "Béjaïa"){

    livraison.innerText = '300'
}else if(Wilaya.value === "Alger"){

    livraison.innerText = '400'
}else{
    livraison.innerText = '600'

}

total.innerText =  (parseFloat(productPrice) * document.querySelector('#qty').value) + parseFloat(livraison.innerText);

})




// document.querySelector('#qty').addEventListener('change',function(){

//     total.innerText =  (parseFloat(productPrice) * document.querySelector('#qty').value) + parseFloat(livraison.innerText);
    
// })






// send Email 

// function sendEmail(){
//     Email.send({
//          SecureToken : "71a6c017-5429-4e95-913c-268f78411819",
//         To : 'justzyrox03@gmail.com',
//         From : 'anisanissou2003@gmail.com',
//         Subject : "Nouvelle Commande",

//         Body : "product Name : " +  document.querySelector('.infoSide h2').innerText
//         + "<br> Nom : " + document.querySelector('#Nom').value
//         + "<br> Tel : " + document.querySelector('#Num').value
//         + "<br> Wilaya : " + document.querySelector('#Wilaya').value
//         + "<br> Commune : " + document.querySelector('#Commune').value
//         + "<br> Quantité : " + document.querySelector('#qty').value
//         + "<br> Remarque : <br><br>" + document.querySelector('#remarque').value + "<br>" 
//         + "<br> Livraison : " + document.querySelector('.livraison span').innerText
//         + "<br> Total : " + document.querySelector('.total span').innerText
        
        
//     }).then(
//       message => alert("Merci pour votre confiance, notre équipe va vous appeler pour confirmer votre commande")
//     );  
// }
