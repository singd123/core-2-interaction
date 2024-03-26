console.log('\n\SpiceSpectrum\n\n\n'); 
// An array of objects representing my collection:
var data = [



// Asafoetida
{
    spiceName: 'Asafoetida',
    flavourProfile: 'Pungent and Savory',
    timeofOrigin: 'Ancient times',
    subRegion: 'Central Asia',
    culturalRespresentation: 'Indian, Middle Eastern, Central Asian', 
    image: 'IMG_6145.png',
},

// Bay Leaf
{
    spiceName: 'Bay Leaf',
    flavourProfile: 'Earthy and Floral',
    timeofOrigin: 'Ancient times',
    subRegion: 'Mediterranean',
    culturalRespresentation: 'Mediterranean, European',
    image: 'IMG_6146.png',
},

// Basil
{
    spiceName: 'Basil',
    flavourProfile: 'Sweet and Herbaceous',
    timeofOrigin: 'Ancient times',
    subRegion: 'Mediterranean',
    culturalRespresentation: 'Mediterranean, European, Southeast Asian', 
    image: 'Subject 130.png',
},

// Black Cumin
{
    spiceName: 'Black Cumin',
    flavourProfile: 'Earthy and Nutty',
    timeofOrigin: 'Ancient times',
    subRegion: 'Middle East',
    culturalRespresentation: 'Middle Eastern, Indian, North African',
    image: 'IMG_6147.png',
},

// Black Mustard
{
    spiceName: 'Black Mustard',
    flavourProfile: 'Bold and Pungent',
    timeofOrigin: 'Ancient times',
    subRegion: 'Mediterranean',
    culturalRespresentation: 'Mediterranean, European, Indian',
    image: 'IMG_6148.png',
},

// Black Pepper
{
    spiceName: 'Black Pepper',
    flavourProfile: 'Pungent and Earthy',
    timeofOrigin: 'Ancient times',
    subRegion: 'South Asia',
    culturalRespresentation: 'Global, particularly in South Asian, European, and American cuisines',
    image: 'IMG_6127.png',
},

// Caraway
{
    spiceName: 'Caraway',
    flavourProfile: 'Warm and Anise-Like',
    timeofOrigin: 'Ancient times',
    subRegion: 'Europe',
    culturalRespresentation: 'European, Middle Eastern',
    image: 'IMG_6149.png',

},

// Cardamom
{
    spiceName: 'Cardamom',
    flavourProfile: 'Citrusy and Spicy-Sweet',
    timeofOrigin: 'Ancient times',
    subRegion: 'South Asia',
    culturalRespresentation: 'South Asian, Middle Eastern, European', 
    image: 'IMG_6150.png',

},

// Cassia
{
    spiceName: 'Cassia',
    flavourProfile: 'Sweet and Woody',
    timeofOrigin: 'Ancient times',
    subRegion: 'Southeast Asia',
    culturalRespresentation: 'Asian, particularly in Chinese cuisine', 
    image: 'IMG_6154.png',

},

// Cayenne Pepper
{
    spiceName: 'Cayenne Pepper',
    flavourProfile: 'Hot and Fiery',
    timeofOrigin: 'Ancient times',
    subRegion: 'South America',
    culturalRespresentation: 'Global, particularly in American and Mexican cuisines',
    image: 'Subject 132.png',
},

// Cinnamon
{
    spiceName: 'Cinnamon',
    flavourProfile: 'Sweet and Warm',
    timeofOrigin: 'Ancient times',
    subRegion: 'South Asia',
    culturalRespresentation: 'Global, particularly in South Asian, Middle Eastern, and European cuisines',
    image: 'IMG_6133.png',


},

// Clove
{
    spiceName: 'Clove',
    flavourProfile: 'Warm and Aromatic',
    timeofOrigin: 'Ancient times',
    subRegion: 'Molucca Islands',
    culturalRespresentation: 'Global, particularly in Asian, Middle Eastern, and European cuisines',
    image: 'IMG_6153.png',

},

// Cacao
{
    spiceName: 'Cacao',
    flavourProfile: 'Bitter and Chocolatey',
    timeofOrigin: 'Ancient times',
    subRegion: 'Central and South America',
    culturalRespresentation: 'Central and South American, European',
    image: 'IMG_6155.png',

},

// Cumin
{
    spiceName: 'Cumin',
    flavourProfile: 'Earthy and Nutty',
    timeofOrigin: 'Ancient times',
    subRegion: 'Eastern Mediterranean',
    culturalRespresentation: 'Global, particularly in Middle Eastern, Indian, and Mexican cuisines',
    image: 'IMG_6156.png',

},

// Dill
{
    spiceName: 'Dill',
    flavourProfile: 'Fresh and Anise-Like',
    timeofOrigin: 'Ancient times',
    subRegion: 'Mediterranean',
    culturalRespresentation: 'European, Middle Eastern, Scandinavian',
    image: 'IMG_6157.png',


},

// Fennel
{
    spiceName: 'Fennel',
    flavourProfile: 'Sweet and Licorice-Like',
    timeofOrigin: 'Ancient times',
    subRegion: 'Mediterranean',
    culturalRespresentation: 'Mediterranean, European, Indian',
    image: 'IMG_6158.png',
},

// Fenugreek
{
    spiceName: 'Fenugreek',
    flavourProfile: 'Bitter and Nutty',
    timeofOrigin: 'Ancient times',
    subRegion: 'Eastern Mediterranean',
    culturalRespresentation: 'Indian, Middle Eastern',
    image: 'IMG_6159.png',

},

// Holy Basil
{
    spiceName: 'Holy Basil',
    flavourProfile: 'Spicy and Peppery',
    timeofOrigin: 'Ancient times',
    subRegion: 'Southeast Asia',
    culturalRespresentation: 'Southeast Asian, Indian',
    image: 'Subject 131.png',

    
},

// Lavender
{
    spiceName: 'Lavender',
    flavourProfile: 'Floral and Herbaceous',
    timeofOrigin: 'Ancient times',
    subRegion: 'Mediterranean',
    culturalRespresentation: 'Mediterranean, European',
    image: 'IMG_6162.png',

},

// Lemon Grass
{
    spiceName: 'Lemon Grass',
    flavourProfile: 'Citrusy and Fresh',
    timeofOrigin: 'Ancient times',
    subRegion: 'Southeast Asia',
    culturalRespresentation: 'Southeast Asian, Indian',
    image: 'IMG_7059.png',


},

// Marjoram
{
    spiceName: 'Marjoram',
    flavourProfile: 'Sweet and Woody',
    timeofOrigin: 'Ancient times',
    subRegion: 'Mediterranean',
    culturalRespresentation: 'Mediterranean, European',
    image: 'Subject 125.png',


},

// Nutmeg
{
    spiceName: 'Nutmeg',
    flavourProfile: 'Warm and Nutty',
    timeofOrigin: 'Ancient times',
    subRegion: 'Molucca Islands',
    culturalRespresentation: 'Global, particularly in Asian, Middle Eastern, and European cuisines',
    image: 'Subject 123.png',

},

// Oregano
{
    spiceName: 'Oregano',
    flavourProfile: 'Robust and Earthy',
    timeofOrigin: 'Ancient times',
    subRegion: 'Mediterranean',
    culturalRespresentation: 'Mediterranean, European, Mexican',
    image: 'Subject 126.png',

},

// Paprika
{
    spiceName: 'Paprika',
    flavourProfile: 'Sweet and Smoky',
    timeofOrigin: '16th century',
    subRegion: 'Central America',
    culturalRespresentation: 'Hungarian, Spanish, European',
    image: 'IMG_7057.png',

},

// Parsley
{
    spiceName: 'Parsley',
    flavourProfile: 'Fresh and Grassy',
    timeofOrigin: 'Ancient times',
    subRegion: 'Mediterranean',
    culturalRespresentation: 'Mediterranean, European',
    image: 'IMG_7058.png',

},

// Peppermint
{
    spiceName: 'Peppermint',
    flavourProfile: 'Cool and Minty',
    timeofOrigin: 'Ancient times',
    subRegion: 'Europe',
    culturalRespresentation: 'Global, used in various culinary and medicinal applications',
    image: 'IMG_7060.png',

},

// Poppy Seed
{
    spiceName: 'Poppy Seed',
    flavourProfile: 'Nutty and Mellow',
    timeofOrigin: 'Ancient times',
    subRegion: 'Mediterranean',
    culturalRespresentation: 'Mediterranean, European, Asian',
    image: 'IMG_7061.png',

},

// Rosemary
{
    spiceName: 'Rosemary',
    flavourProfile: 'Woody and Pine-Like',
    timeofOrigin: 'Ancient times',
    subRegion: 'Mediterranean',
    culturalRespresentation: 'Mediterranean, European',
    image: 'IMG_7062.png',

},

// Saffron
{
    spiceName: 'Saffron',
    flavourProfile: 'Sweet and Earthy',
    timeofOrigin: 'Ancient times',
    subRegion: 'Mediterranean',
    culturalRespresentation: 'Mediterranean, Middle Eastern, Indian',
    image: 'IMG_7063.png',

},

// Sage
{
    spiceName: 'Sage',
    flavourProfile: 'Earthy and Savory',
    timeofOrigin: 'Ancient times',
    subRegion: 'Mediterranean',
    culturalRespresentation: 'Mediterranean, European',
    image: 'IMG_7064.png',

},

// Sesame
{
    spiceName: 'Sesame',
    flavourProfile: 'Nutty and Rich',
    timeofOrigin: 'Ancient times',
    subRegion: 'Africa',
    culturalRespresentation: 'Asian, Middle Eastern, African',
    image: 'IMG_7065.png',

},

// Szechuan Pepper
{
    spiceName: 'Szechuan Pepper',
    flavourProfile: 'Citrusy and Tingly',
    timeofOrigin: 'Ancient times',
    subRegion: 'China',
    culturalRespresentation: 'Chinese, Asian',
    image: 'IMG_6152.png',

},

// Star Anise
{
    spiceName: 'Star Anise',
    flavourProfile: 'Licorice-Like and Sweet',
    timeofOrigin: 'Ancient times',
    subRegion: 'China',
    culturalRespresentation: 'Chinese, Vietnamese',
    image: 'IMG_6144.png',

},

// Spearmint
{
    spiceName: 'Spearmint',
    flavourProfile: 'Sweet and Minty',
    timeofOrigin: 'Ancient times',
    subRegion: 'Europe',
    culturalRespresentation: 'Global, used in various culinary and medicinal applications',
    image: 'IMG_7065.png',
    
},

// Tarragon
{
    spiceName: 'Tarragon',
    flavourProfile: 'Anise-Like and Peppery',
    timeofOrigin: 'Ancient times',
    subRegion: 'Europe',
    culturalRespresentation: 'European, Russian', 
    image: 'IMG_7067.png',

},

// Thyme
{
    spiceName: 'Thyme',
    flavourProfile: 'Earthy and Floral',
    timeofOrigin: 'Ancient times',
    subRegion: 'Mediterranean',
    culturalRespresentation: 'Mediterranean, European',
    image: 'IMG_7004.png',

},

// Turmeric
{
    spiceName: 'Turmeric',
    flavourProfile: 'Warm and Bitter',
    timeofOrigin: 'Ancient times',
    subRegion: 'South Asia',
    culturalRespresentation: 'South Asian, Middle Eastern',
    image: 'IMG_7068.png',

},

// Vanilla
{
    spiceName: 'Vanilla',
    flavourProfile: 'Sweet and Floral',
    timeofOrigin: 'Ancient times',
    subRegion: 'Mexico',
    culturalRespresentation: 'Global, particularly in European and American desserts',
    image: 'IMG_7069.png',

},

// Wasabi
{
    spiceName: 'Wasabi',
    flavourProfile: 'Pungent and Spicy',
    timeofOrigin: 'Ancient times',
    subRegion: 'Japan',
    culturalRespresentation: 'Japanese, Asian',
    image: 'IMG_7070.png',

},

// Yellow Mustard
{
    spiceName: 'White Mustard',
    flavourProfile: 'Mild and Tangy',
    timeofOrigin: 'Ancient times',
    subRegion: 'Mediterranean',
    culturalRespresentation: 'Mediterranean, European, Indian',
    image: 'IMG_7071.png',

}];

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