console.log('\n\nARRAY\n\n\n'); 
// An array of objects representing my collection:
var data = [

// Anise

    { 
        spiceName: 'Allspice ',
        flavourProfile: 'Warm and Sweet', 
        timeofOrigin: '16th century',
        subRegion: 'Caribbean', 
        culturalRespresentation: 'Caribbean, Middle Eastern, Latin American, European, North American & Indian'

    },    

    // Anise
{
    spiceName: 'Anise',
    flavourProfile: 'Sweet and Licorice-Like',
    timeofOrigin: 'Ancient times',
    subRegion: 'Mediterranean',
    culturalRespresentation: 'Mediterranean, Middle Eastern, European, Indian'
},

// Asafoetida
{
    spiceName: 'Asafoetida',
    flavourProfile: 'Pungent and Savory',
    timeofOrigin: 'Ancient times',
    subRegion: 'Central Asia',
    culturalRespresentation: 'Indian, Middle Eastern, Central Asian'
},

// Bay Leaf
{
    spiceName: 'Bay Leaf',
    flavourProfile: 'Earthy and Floral',
    timeofOrigin: 'Ancient times',
    subRegion: 'Mediterranean',
    culturalRespresentation: 'Mediterranean, European'
},

// Basil
{
    spiceName: 'Basil',
    flavourProfile: 'Sweet and Herbaceous',
    timeofOrigin: 'Ancient times',
    subRegion: 'Mediterranean',
    culturalRespresentation: 'Mediterranean, European, Southeast Asian'
},

// Black Cumin
{
    spiceName: 'Black Cumin',
    flavourProfile: 'Earthy and Nutty',
    timeofOrigin: 'Ancient times',
    subRegion: 'Middle East',
    culturalRespresentation: 'Middle Eastern, Indian, North African'
},

// Black Mustard
{
    spiceName: 'Black Mustard',
    flavourProfile: 'Bold and Pungent',
    timeofOrigin: 'Ancient times',
    subRegion: 'Mediterranean',
    culturalRespresentation: 'Mediterranean, European, Indian'
},

// Black Pepper
{
    spiceName: 'Black Pepper',
    flavourProfile: 'Pungent and Earthy',
    timeofOrigin: 'Ancient times',
    subRegion: 'South Asia',
    culturalRespresentation: 'Global, particularly in South Asian, European, and American cuisines'
},

// Brown Mustard
{
    spiceName: 'Brown Mustard',
    flavourProfile: 'Sharp and Tangy',
    timeofOrigin: 'Ancient times',
    subRegion: 'Mediterranean',
    culturalRespresentation: 'Mediterranean, European, Indian'
},

// Caraway
{
    spiceName: 'Caraway',
    flavourProfile: 'Warm and Anise-Like',
    timeofOrigin: 'Ancient times',
    subRegion: 'Europe',
    culturalRespresentation: 'European, Middle Eastern'
},

// Cardamom
{
    spiceName: 'Cardamom',
    flavourProfile: 'Citrusy and Spicy-Sweet',
    timeofOrigin: 'Ancient times',
    subRegion: 'South Asia',
    culturalRespresentation: 'South Asian, Middle Eastern, European'
},

// Cassia
{
    spiceName: 'Cassia',
    flavourProfile: 'Sweet and Woody',
    timeofOrigin: 'Ancient times',
    subRegion: 'Southeast Asia',
    culturalRespresentation: 'Asian, particularly in Chinese cuisine'
},

// Cayenne Pepper
{
    spiceName: 'Cayenne Pepper',
    flavourProfile: 'Hot and Fiery',
    timeofOrigin: 'Ancient times',
    subRegion: 'South America',
    culturalRespresentation: 'Global, particularly in American and Mexican cuisines'
},

// Cinnamon
{
    spiceName: 'Cinnamon',
    flavourProfile: 'Sweet and Warm',
    timeofOrigin: 'Ancient times',
    subRegion: 'South Asia',
    culturalRespresentation: 'Global, particularly in South Asian, Middle Eastern, and European cuisines'
},

// Clove
{
    spiceName: 'Clove',
    flavourProfile: 'Warm and Aromatic',
    timeofOrigin: 'Ancient times',
    subRegion: 'Molucca Islands',
    culturalRespresentation: 'Global, particularly in Asian, Middle Eastern, and European cuisines'
},

// Cacao
{
    spiceName: 'Cacao',
    flavourProfile: 'Bitter and Chocolatey',
    timeofOrigin: 'Ancient times',
    subRegion: 'Central and South America',
    culturalRespresentation: 'Central and South American, European'
},

// Cumin
{
    spiceName: 'Cumin',
    flavourProfile: 'Earthy and Nutty',
    timeofOrigin: 'Ancient times',
    subRegion: 'Eastern Mediterranean',
    culturalRespresentation: 'Global, particularly in Middle Eastern, Indian, and Mexican cuisines'
},

// Dill
{
    spiceName: 'Dill',
    flavourProfile: 'Fresh and Anise-Like',
    timeofOrigin: 'Ancient times',
    subRegion: 'Mediterranean',
    culturalRespresentation: 'European, Middle Eastern, Scandinavian'
},

// Fennel
{
    spiceName: 'Fennel',
    flavourProfile: 'Sweet and Licorice-Like',
    timeofOrigin: 'Ancient times',
    subRegion: 'Mediterranean',
    culturalRespresentation: 'Mediterranean, European, Indian'
},

// Fenugreek
{
    spiceName: 'Fenugreek',
    flavourProfile: 'Bitter and Nutty',
    timeofOrigin: 'Ancient times',
    subRegion: 'Eastern Mediterranean',
    culturalRespresentation: 'Indian, Middle Eastern'
},

// Holy Basil
{
    spiceName: 'Holy Basil',
    flavourProfile: 'Spicy and Peppery',
    timeofOrigin: 'Ancient times',
    subRegion: 'Southeast Asia',
    culturalRespresentation: 'Southeast Asian, Indian'
},

// Horseradish
{
    spiceName: 'Horseradish',
    flavourProfile: 'Pungent and Spicy',
    timeofOrigin: 'Ancient times',
    subRegion: 'Eastern Europe',
    culturalRespresentation: 'Eastern European, European'
},

// Lavender
{
    spiceName: 'Lavender',
    flavourProfile: 'Floral and Herbaceous',
    timeofOrigin: 'Ancient times',
    subRegion: 'Mediterranean',
    culturalRespresentation: 'Mediterranean, European'
},

// Lemon Grass
{
    spiceName: 'Lemon Grass',
    flavourProfile: 'Citrusy and Fresh',
    timeofOrigin: 'Ancient times',
    subRegion: 'Southeast Asia',
    culturalRespresentation: 'Southeast Asian, Indian'
},

// Marjoram
{
    spiceName: 'Marjoram',
    flavourProfile: 'Sweet and Woody',
    timeofOrigin: 'Ancient times',
    subRegion: 'Mediterranean',
    culturalRespresentation: 'Mediterranean, European'
},

// Nutmeg
{
    spiceName: 'Nutmeg',
    flavourProfile: 'Warm and Nutty',
    timeofOrigin: 'Ancient times',
    subRegion: 'Molucca Islands',
    culturalRespresentation: 'Global, particularly in Asian, Middle Eastern, and European cuisines'
},

// Oregano
{
    spiceName: 'Oregano',
    flavourProfile: 'Robust and Earthy',
    timeofOrigin: 'Ancient times',
    subRegion: 'Mediterranean',
    culturalRespresentation: 'Mediterranean, European, Mexican'
},

// Paprika
{
    spiceName: 'Paprika',
    flavourProfile: 'Sweet and Smoky',
    timeofOrigin: '16th century',
    subRegion: 'Central America',
    culturalRespresentation: 'Hungarian, Spanish, European'
},

// Parsley
{
    spiceName: 'Parsley',
    flavourProfile: 'Fresh and Grassy',
    timeofOrigin: 'Ancient times',
    subRegion: 'Mediterranean',
    culturalRespresentation: 'Mediterranean, European'
},

// Peppermint
{
    spiceName: 'Peppermint',
    flavourProfile: 'Cool and Minty',
    timeofOrigin: 'Ancient times',
    subRegion: 'Europe',
    culturalRespresentation: 'Global, used in various culinary and medicinal applications'
},

// Poppy Seed
{
    spiceName: 'Poppy Seed',
    flavourProfile: 'Nutty and Mellow',
    timeofOrigin: 'Ancient times',
    subRegion: 'Mediterranean',
    culturalRespresentation: 'Mediterranean, European, Asian'
},

// Rosemary
{
    spiceName: 'Rosemary',
    flavourProfile: 'Woody and Pine-Like',
    timeofOrigin: 'Ancient times',
    subRegion: 'Mediterranean',
    culturalRespresentation: 'Mediterranean, European'
},

// Saffron
{
    spiceName: 'Saffron',
    flavourProfile: 'Sweet and Earthy',
    timeofOrigin: 'Ancient times',
    subRegion: 'Mediterranean',
    culturalRespresentation: 'Mediterranean, Middle Eastern, Indian'
},

// Sage
{
    spiceName: 'Sage',
    flavourProfile: 'Earthy and Savory',
    timeofOrigin: 'Ancient times',
    subRegion: 'Mediterranean',
    culturalRespresentation: 'Mediterranean, European'
},

// Sesame
{
    spiceName: 'Sesame',
    flavourProfile: 'Nutty and Rich',
    timeofOrigin: 'Ancient times',
    subRegion: 'Africa',
    culturalRespresentation: 'Asian, Middle Eastern, African'
},

// Szechuan Pepper
{
    spiceName: 'Szechuan Pepper',
    flavourProfile: 'Citrusy and Tingly',
    timeofOrigin: 'Ancient times',
    subRegion: 'China',
    culturalRespresentation: 'Chinese, Asian'
},

// Star Anise
{
    spiceName: 'Star Anise',
    flavourProfile: 'Licorice-Like and Sweet',
    timeofOrigin: 'Ancient times',
    subRegion: 'China',
    culturalRespresentation: 'Chinese, Vietnamese'
},

// Spearmint
{
    spiceName: 'Spearmint',
    flavourProfile: 'Sweet and Minty',
    timeofOrigin: 'Ancient times',
    subRegion: 'Europe',
    culturalRespresentation: 'Global, used in various culinary and medicinal applications'
},

// Tarragon
{
    spiceName: 'Tarragon',
    flavourProfile: 'Anise-Like and Peppery',
    timeofOrigin: 'Ancient times',
    subRegion: 'Europe',
    culturalRespresentation: 'European, Russian'
},

// Thyme
{
    spiceName: 'Thyme',
    flavourProfile: 'Earthy and Floral',
    timeofOrigin: 'Ancient times',
    subRegion: 'Mediterranean',
    culturalRespresentation: 'Mediterranean, European'
},

// Turmeric
{
    spiceName: 'Turmeric',
    flavourProfile: 'Warm and Bitter',
    timeofOrigin: 'Ancient times',
    subRegion: 'South Asia',
    culturalRespresentation: 'South Asian, Middle Eastern'
},

// Vanilla
{
    spiceName: 'Vanilla',
    flavourProfile: 'Sweet and Floral',
    timeofOrigin: 'Ancient times',
    subRegion: 'Mexico',
    culturalRespresentation: 'Global, particularly in European and American desserts'
},

// Wasabi
{
    spiceName: 'Wasabi',
    flavourProfile: 'Pungent and Spicy',
    timeofOrigin: 'Ancient times',
    subRegion: 'Japan',
    culturalRespresentation: 'Japanese, Asian'
},

// White Mustard
{
    spiceName: 'White Mustard',
    flavourProfile: 'Mild and Tangy',
    timeofOrigin: 'Ancient times',
    subRegion: 'Mediterranean',
    culturalRespresentation: 'Mediterranean, European, Indian'
}

];

// * anise 
// asafoetida 
// bay leaf 
// * basil 
// * black cumin 
// * black mustard 
// * black pepper 
// * brown mustard 
// * caraway 
// * cardamom 
// * cassia 
// * cayenne pepper 
// * cinnamon 
// * clove 
// * Cacao 
// * cumin 
// * dill 
// * fennel 
// * fenugreek 
// * holy basil 
// * horseradish 
// * lavender 
// * lemon grass 
// * marjoram 
// * nutmeg 
// * oregano 
// * paprika 
// * parsley 
// * peppermint 
// * poppy seed 
// * rosemary 
// * saffron 
// * sage 
// * sesame 
// * Shezuan pepper
// * star anise 
// * spearmint
// * tarragon 
// * thyme 
// * turmeric 
// * vanilla 
// * wasabi 
// * white mustard 