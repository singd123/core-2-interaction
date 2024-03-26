

console.log('\n\SpiceSpectrum\n\n\n'); 
// An array of objects representing my collection:
var data = [



// Asafoetida
{
    spiceName: 'Asafoetida',
    flavourProfile: ['Pungent', 'Savory'],
    timeofOrigin: ['Ancient times'],
    subRegion: 'Central Asia',
    culturalRespresentation: ['Indian', 'Middle Eastern', 'Central Asian'],
    image: 'IMG_6145.PNG',
},

// Bay Leaf
{
    spiceName: 'Bay Leaf',
    flavourProfile: ['Earthy' ,'Floral'],
    timeofOrigin: 'Ancient times',
    subRegion: 'Mediterranean',
    culturalRespresentation: ['Mediterranean', 'European'],
    image: 'IMG_6146.PNG',
},

// Basil
{
    spiceName: 'Basil',
    flavourProfile: ['Sweet' , 'Herbaceous'],
    timeofOrigin: 'Ancient times',
    subRegion: 'Mediterranean',
    culturalRespresentation: ['Mediterranean', 'European', 'Southeast Asian'], 
    image: 'Subject 130.png',
},

// Black Cumin
{
    spiceName: 'Black Cumin',
    flavourProfile: ['Earthy' , 'Nutty'],
    timeofOrigin: 'Ancient times',
    subRegion: 'Middle East',
    culturalRespresentation: ['Middle Eastern', 'Indian', 'North African'],
    image: 'IMG_6147.PNG',
},

// Black Mustard
{
    spiceName: 'Black Mustard',
    flavourProfile: ['Bold' , 'Pungent'],
    timeofOrigin: 'Ancient times',
    subRegion: 'Mediterranean',
    culturalRespresentation: ['Mediterranean', 'European', 'Indian'],
    image: 'IMG_6148.PNG',
},

// Black Pepper
{
    spiceName: 'Black Pepper',
    flavourProfile: ['Pungent' , 'Earthy'],
    timeofOrigin: 'Ancient times',
    subRegion: 'South Asia',
    culturalRespresentation: ['Global', 'South Asian', 'European', 'American cuisines'],
    image: 'IMG_6127.PNG',
},

// Caraway
{
    spiceName: 'Caraway',
    flavourProfile: ['Warm', 'anise-like'],
    timeofOrigin: 'Ancient times',
    subRegion: 'Europe',
    culturalRespresentation: ['European', 'Middle Eastern'],
    image: 'IMG_6149.PNG',

},

// Cardamom
{
    spiceName: 'Cardamom',
    flavourProfile: ['Citrusy' , 'Spicy-Sweet'],
    timeofOrigin: 'Ancient times',
    subRegion: 'South Asia',
    culturalRespresentation: ['South Asian', 'Middle Eastern', 'European'], 
    image: 'IMG_6150.PNG',

},

// Cassia
{
    spiceName: 'Cassia',
    flavourProfile: ['Sweet' , 'Woody'],
    timeofOrigin: 'Ancient times',
    subRegion: 'Southeast Asia',
    culturalRespresentation: ['Asian', 'Chinese'], 
    image: 'IMG_6154.PNG',

},

// Cayenne Pepper
{
    spiceName: 'Cayenne Pepper',
    flavourProfile: ['Hot' , 'Fiery'],
    timeofOrigin: 'Ancient times',
    subRegion: 'South America',
    culturalRespresentation: 'Global, particularly in American and Mexican cuisines',
    image: 'Subject 132.png',
},

// Cinnamon
{
    spiceName: 'Cinnamon',
    flavourProfile: ['Sweet' , 'Warm'],
    timeofOrigin: 'Ancient times',
    subRegion: 'South Asia',
    culturalRespresentation: 'Global, particularly in South Asian, Middle Eastern, and European cuisines',
    image: 'IMG_6133.PNG',


},

// Clove
{
    spiceName: 'Clove',
    flavourProfile: ['Warm' , 'Aromatic'],
    timeofOrigin: 'Ancient times',
    subRegion: 'Molucca Islands',
    culturalRespresentation: 'Global, particularly in Asian, Middle Eastern, and European cuisines',
    image: 'IMG_6153.PNG',

},

// Cacao
{
    spiceName: 'Cacao',
    flavourProfile: ['Bitter' , 'Chocolatey'],
    timeofOrigin: 'Ancient times',
    subRegion: 'Central America',
    culturalRespresentation: 'Central and South American, European',
    image: 'IMG_6155.PNG',

},

// Cumin
{
    spiceName: 'Cumin',
    flavourProfile: ['Earthy' , 'Nutty'],
    timeofOrigin: 'Ancient times',
    subRegion: 'Eastern Mediterranean',
    culturalRespresentation: 'Global, particularly in Middle Eastern, Indian, and Mexican cuisines',
    image: 'IMG_6156.PNG',

},

// Dill
{
    spiceName: 'Dill',
    flavourProfile: ['Fresh' , 'Anise-Like'],
    timeofOrigin: 'Ancient times',
    subRegion: 'Mediterranean',
    culturalRespresentation: 'European, Middle Eastern, Scandinavian',
    image: 'IMG_6157.PNG',


},

// Fennel
{
    spiceName: 'Fennel',
    flavourProfile: ['Sweet' , 'Licorice-Like'],
    timeofOrigin: 'Ancient times',
    subRegion: 'Mediterranean',
    culturalRespresentation: 'Mediterranean, European, Indian',
    image: 'IMG_6158.PNG',
},

// Fenugreek
{
    spiceName: 'Fenugreek',
    flavourProfile: ['Bitter' , 'Nutty'],
    timeofOrigin: 'Ancient times',
    subRegion: 'Eastern Mediterranean',
    culturalRespresentation: 'Indian, Middle Eastern',
    image: 'IMG_6159.PNG',

},

// Holy Basil
{
    spiceName: 'Holy Basil',
    flavourProfile: ['Spicy' , 'Peppery'],
    timeofOrigin: 'Ancient times',
    subRegion: 'Southeast Asia',
    culturalRespresentation: 'Southeast Asian, Indian',
    image: 'Subject 131.png',

    
},

// Lavender
{
    spiceName: 'Lavender',
    flavourProfile: ['Floral' , 'Herbaceous'],
    timeofOrigin: 'Ancient times',
    subRegion: 'Mediterranean',
    culturalRespresentation: 'Mediterranean, European',
    image: 'IMG_6162.PNG',

},

// Lemon Grass
{
    spiceName: 'Lemon Grass',
    flavourProfile: ['Citrusy' , 'Fresh'],
    timeofOrigin: 'Ancient times',
    subRegion: 'Southeast Asia',
    culturalRespresentation: 'Southeast Asian, Indian',
    image: 'IMG_7059.PNG',


},

// Marjoram
{
    spiceName: 'Marjoram',
    flavourProfile: ['Sweet' , 'Woody'],
    timeofOrigin: 'Ancient times',
    subRegion: 'Mediterranean',
    culturalRespresentation: 'Mediterranean, European',
    image: 'Subject 125.png',


},

// Nutmeg
{
    spiceName: 'Nutmeg',
    flavourProfile: ['Warm' , 'Nutty'],
    timeofOrigin: 'Ancient times',
    subRegion: 'Central America',
    culturalRespresentation: 'Global, particularly in Asian, Middle Eastern, and European cuisines',
    image: 'Subject 123.png',

},

// Oregano
{
    spiceName: 'Oregano',
    flavourProfile: ['Robust' , 'Earthy'],
    timeofOrigin: 'Ancient times',
    subRegion: 'Mediterranean',
    culturalRespresentation: 'Mediterranean, European, Mexican',
    image: 'Subject 126.png',

},

// Paprika
{
    spiceName: 'Paprika',
    flavourProfile: ['Sweet' , 'Smoky'],
    timeofOrigin: '16th century',
    subRegion: 'Central America',
    culturalRespresentation: 'Hungarian, Spanish, European',
    image: 'IMG_7057.PNG',

},

// Parsley
{
    spiceName: 'Parsley',
    flavourProfile: ['Fresh' , 'Grassy'],
    timeofOrigin: 'Ancient times',
    subRegion: 'Mediterranean',
    culturalRespresentation: 'Mediterranean, European',
    image: 'IMG_7058.PNG',

},

// Peppermint
{
    spiceName: 'Peppermint',
    flavourProfile: ['Cool' , 'Minty'],
    timeofOrigin: 'Ancient times',
    subRegion: 'Europe',
    culturalRespresentation: 'Global, used in various culinary and medicinal applications',
    image: 'IMG_7060.PNG',

},

// Poppy Seed
{
    spiceName: 'Poppy Seed',
    flavourProfile: ['Nutty' , 'Mellow'],
    timeofOrigin: 'Ancient times',
    subRegion: 'Mediterranean',
    culturalRespresentation: 'Mediterranean, European, Asian',
    image: 'IMG_7061.PNG',

},

// Rosemary
{
    spiceName: 'Rosemary',
    flavourProfile: ['Woody' , 'Pine-Like'],
    timeofOrigin: 'Ancient times',
    subRegion: 'Mediterranean',
    culturalRespresentation: 'Mediterranean, European',
    image: 'IMG_7062.PNG',

},

// Saffron
{
    spiceName: 'Saffron',
    flavourProfile: ['Sweet' , 'Earthy'],
    timeofOrigin: 'Ancient times',
    subRegion: 'Mediterranean',
    culturalRespresentation: 'Mediterranean, Middle Eastern, Indian',
    image: 'IMG_7063.PNG',

},

// Sage
{
    spiceName: 'Sage',
    flavourProfile: ['Earthy' , 'Savory'],
    timeofOrigin: 'Ancient times',
    subRegion: 'Mediterranean',
    culturalRespresentation: 'Mediterranean, European',
    image: 'IMG_7064.PNG',

},

// Sesame
{
    spiceName: 'Sesame',
    flavourProfile: ['Nutty' , 'Rich'],
    timeofOrigin: 'Ancient times',
    subRegion: 'Africa',
    culturalRespresentation: 'Asian, Middle Eastern, African',
    image: 'IMG_7065.PNG',

},

// Szechuan Pepper
{
    spiceName: 'Szechuan Pepper',
    flavourProfile: ['Citrusy' , 'Tingly'],
    timeofOrigin: 'Ancient times',
    subRegion: 'China',
    culturalRespresentation: 'Chinese, Asian',
    image: 'IMG_6152.png',

},

// Star Anise
{
    spiceName: 'Star Anise',
    flavourProfile: ['Licorice-Like' , 'Sweet'],
    timeofOrigin: 'Ancient times',
    subRegion: 'China',
    culturalRespresentation: 'Chinese, Vietnamese',
    image: 'IMG_6144.PNG',

},

// Spearmint
{
    spiceName: 'Spearmint',
    flavourProfile: ['Sweet' , 'Minty'],
    timeofOrigin: 'Ancient times',
    subRegion: 'Europe',
    culturalRespresentation: 'Global, used in various culinary and medicinal applications',
    image: 'IMG_7066.PNG',
    
},

// Tarragon
{
    spiceName: 'Tarragon',
    flavourProfile: ['Anise-Like' , 'Peppery'],
    timeofOrigin: 'Ancient times',
    subRegion: 'Europe',
    culturalRespresentation: 'European, Russian', 
    image: 'IMG_7067.PNG',

},

// Thyme
{
    spiceName: 'Thyme',
    flavourProfile: ['Earthy' , 'Floral'],
    timeofOrigin: 'Ancient times',
    subRegion: 'Mediterranean',
    culturalRespresentation: 'Mediterranean, European',
    image: 'IMG_7004.PNG',

},

// Turmeric
{
    spiceName: 'Turmeric',
    flavourProfile: ['Warm' , 'Bitter'],
    timeofOrigin: 'Ancient times',
    subRegion: 'South Asia',
    culturalRespresentation: 'South Asian, Middle Eastern',
    image: 'IMG_7068.PNG',

},

// Vanilla
{
    spiceName: 'Vanilla',
    flavourProfile: ['Sweet' , 'Floral'],
    timeofOrigin: 'Ancient times',
    subRegion: 'central america',
    culturalRespresentation: 'Global, particularly in European and American desserts',
    image: 'IMG_7069.PNG',

},

// Wasabi
{
    spiceName: 'Wasabi',
    flavourProfile: ['Pungent' , 'Spicy'],
    timeofOrigin: 'Ancient times',
    subRegion: 'Japan',
    culturalRespresentation: 'Japanese, Asian',
    image: 'IMG_7070.PNG',

},

// Yellow Mustard
{
    spiceName: 'White Mustard',
    flavourProfile: ['Mild' , 'Tangy'],
    timeofOrigin: 'Ancient times',
    subRegion: 'Mediterranean',
    culturalRespresentation: 'Mediterranean, European, Indian',
    image: 'IMG_7071.PNG',

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