const Products = [{
  "productId": 1, "productName": "Topicware", "productOwnerName": "Maddy Beard", "Developers": [
    "Monica Mayert",
    "Allan Labadie",
    "Gretchen Abbott",
    "Tyrone Casper",
    "Valerie Wiegand"
  ], "scrumMasterName": "Dolores Sprosson", "startDate": "2022/04/18", "methodology": "Waterfall"
},
{
  "productId": 2, "productName": "Realpoint", "productOwnerName": "Leopold Tomblett", "Developers": [
    "Carrie Mitchell",
    "Yvonne Cremin",
    "Jackie Hermann",
    "Ron Kautzer",
    "Ms. Amanda Hickle"
  ], "scrumMasterName": "Deloria Hansom", "startDate": "2022/04/23", "methodology": "Agile"
},
{
  "productId": 3, "productName": "Dynazzy", "productOwnerName": "Malia Pennaman", "Developers": [
    "Monica Mayert",
    "Allan Labadie DVM",
    "Gretchen Abbott",
    "Tyrone Casper DVM",
    "Miss Valerie Wiegand"
  ], "scrumMasterName": "Othello Petr", "startDate": "2022/10/02", "methodology": "Waterfall"
},
{
  "productId": 4, "productName": "Skivee", "productOwnerName": "Birgitta Toe", "Developers": ["Jackie Hermann",
    "Ron Kautzer",
    "Ms. Amanda Hickle"], "scrumMasterName": "Rolfe Cicccitti", "startDate": "2022/08/16", "methodology": "Agile"
},
{ "productId": 5, "productName": "Skyba", "productOwnerName": "Sloan Hacard", "Developers": [{}, {}, {}, {}, {}], "scrumMasterName": "Hoebart Spurdens", "startDate": "2023/01/20", "methodology": "Waterfall" },
{ "productId": 6, "productName": "Tavu", "productOwnerName": "Carmina Riehm", "Developers": [{}], "scrumMasterName": "Devina Pentelow", "startDate": "2022/11/14", "methodology": "Agile" },
{ "productId": 7, "productName": "Jabberbean", "productOwnerName": "Karin Haverson", "Developers": [{}, {}, {}, {}], "scrumMasterName": "Lydon Pionter", "startDate": "2022/04/06", "methodology": "Waterfall" },
{ "productId": 8, "productName": "Wikido", "productOwnerName": "Walton Doumer", "Developers": [{}, {}, {}, {}, {}], "scrumMasterName": "Kelli Steptowe", "startDate": "2023/02/16", "methodology": "Waterfall" },
{ "productId": 9, "productName": "Yakijo", "productOwnerName": "Lenee Ratie", "Developers": [], "scrumMasterName": "Garwood Bezant", "startDate": "2022/08/22", "methodology": "Agile" },
{ "productId": 10, "productName": "Brainbox", "productOwnerName": "Hugo Drennan", "Developers": [{}, {}, {}, {}, {}], "scrumMasterName": "Cornie Tivnan", "startDate": "2023/01/30", "methodology": "Agile" },
{ "productId": 11, "productName": "Livefish", "productOwnerName": "Gian Ferrai", "Developers": [{}, {}, {}], "scrumMasterName": "Laurette Newson", "startDate": "2023/03/02", "methodology": "Agile" },
{ "productId": 12, "productName": "Shufflebeat", "productOwnerName": "Denyse Sheilds", "Developers": [{}, {}], "scrumMasterName": "Auberon Tinner", "startDate": "2023/01/03", "methodology": "Waterfall" },
{ "productId": 13, "productName": "Yamia", "productOwnerName": "Eddie Page", "Developers": [{}, {}, {}, {}], "scrumMasterName": "Asa Saladino", "startDate": "2022/11/26", "methodology": "Agile" },
{ "productId": 14, "productName": "Photobug", "productOwnerName": "Berget Kohen", "Developers": [{}, {}], "scrumMasterName": "Delano Brann", "startDate": "2022/07/10", "methodology": "Agile" },
{ "productId": 15, "productName": "Plajo", "productOwnerName": "Dael Chazelle", "Developers": [{}, {}, {}, {}], "scrumMasterName": "Miles Medley", "startDate": "2022/08/07", "methodology": "Agile" },
{ "productId": 16, "productName": "Zoonoodle", "productOwnerName": "Darcie Maceur", "Developers": [{}, {}], "scrumMasterName": "Dalli Rawes", "startDate": "2022/06/07", "methodology": "Waterfall" },
{ "productId": 17, "productName": "Skipstorm", "productOwnerName": "Malachi Juszkiewicz", "Developers": [{}, {}, {}], "scrumMasterName": "Brianne Riby", "startDate": "2023/02/23", "methodology": "Agile" },
{ "productId": 18, "productName": "Gabtune", "productOwnerName": "Zebadiah Pozer", "Developers": [{}, {}, {}], "scrumMasterName": "Lyn Kas", "startDate": "2022/09/26", "methodology": "Waterfall" },
{ "productId": 19, "productName": "Centidel", "productOwnerName": "Nonie Baudts", "Developers": [{}, {}], "scrumMasterName": "Rowen Daughton", "startDate": "2022/05/04", "methodology": "Waterfall" },
{ "productId": 20, "productName": "Bubbletube", "productOwnerName": "Margo Dudson", "Developers": [{}, {}, {}, {}], "scrumMasterName": "Kirsti Laverty", "startDate": "2022/11/13", "methodology": "Waterfall" },
{ "productId": 21, "productName": "Gigazoom", "productOwnerName": "Bill Huthart", "Developers": [{}, {}, {}, {}], "scrumMasterName": "Lindy Mc Comb", "startDate": "2023/02/06", "methodology": "Waterfall" },
{ "productId": 22, "productName": "Katz", "productOwnerName": "Neille MacDowall", "Developers": [{}], "scrumMasterName": "Revkah Carlson", "startDate": "2023/02/05", "methodology": "Agile" },
{ "productId": 23, "productName": "Jabberbean", "productOwnerName": "Lelah Haggerston", "Developers": [{}, {}], "scrumMasterName": "Doralynne Spensley", "startDate": "2022/05/16", "methodology": "Agile" },
{ "productId": 24, "productName": "Vidoo", "productOwnerName": "Ricki McCahey", "Developers": [{}], "scrumMasterName": "Jacquie Poynser", "startDate": "2022/11/06", "methodology": "Waterfall" },
{ "productId": 25, "productName": "Livetube", "productOwnerName": "Hercule Crankhorn", "Developers": [{}, {}, {}, {}, {}], "scrumMasterName": "Town Sell", "startDate": "2023/02/21", "methodology": "Waterfall" },
{ "productId": 26, "productName": "Demimbu", "productOwnerName": "Andriana Boggs", "Developers": [{}], "scrumMasterName": "Jeane Pahlsson", "startDate": "2023/02/03", "methodology": "Agile" },
{ "productId": 27, "productName": "Topiczoom", "productOwnerName": "Dania Frangione", "Developers": [{}], "scrumMasterName": "Clem Willerstone", "startDate": "2022/05/17", "methodology": "Agile" },
{ "productId": 28, "productName": "Divanoodle", "productOwnerName": "Taite Cornbell", "Developers": [{}, {}, {}], "scrumMasterName": "Alla Abad", "startDate": "2023/02/25", "methodology": "Agile" },
{ "productId": 29, "productName": "Oyoloo", "productOwnerName": "Gustavus Wythe", "Developers": [{}, {}, {}, {}, {}], "scrumMasterName": "Stacie Sansome", "startDate": "2022/06/10", "methodology": "Agile" },
{ "productId": 30, "productName": "Realbridge", "productOwnerName": "Rafi Rosewell", "Developers": [{}, {}, {}], "scrumMasterName": "Bondon Bentsen", "startDate": "2022/09/27", "methodology": "Agile" },
{ "productId": 31, "productName": "Jabbertype", "productOwnerName": "Lula Walch", "Developers": [{}, {}], "scrumMasterName": "Erhart Dudding", "startDate": "2022/05/14", "methodology": "Waterfall" },
{ "productId": 32, "productName": "Pixope", "productOwnerName": "Godfry Usherwood", "Developers": [{}, {}, {}], "scrumMasterName": "Seymour Scollick", "startDate": "2022/08/04", "methodology": "Agile" },
{ "productId": 33, "productName": "Shuffletag", "productOwnerName": "Earvin Ollander", "Developers": [{}, {}, {}], "scrumMasterName": "Fedora Rolfo", "startDate": "2022/05/31", "methodology": "Waterfall" },
{ "productId": 34, "productName": "Linkbuzz", "productOwnerName": "Leslie Lowdyane", "Developers": [{}], "scrumMasterName": "Murdock MacPhaden", "startDate": "2023/02/19", "methodology": "Waterfall" },
{ "productId": 35, "productName": "Abatz", "productOwnerName": "Constantia Wooler", "Developers": [{}, {}, {}, {}], "scrumMasterName": "Marshal Costigan", "startDate": "2022/09/27", "methodology": "Waterfall" },
{ "productId": 36, "productName": "Edgewire", "productOwnerName": "Marlee Isaq", "Developers": [{}, {}], "scrumMasterName": "Dael Kerslake", "startDate": "2023/03/03", "methodology": "Waterfall" },
{ "productId": 37, "productName": "Jaxspan", "productOwnerName": "Vicki Donati", "Developers": [{}, {}], "scrumMasterName": "Marlon Willcocks", "startDate": "2022/04/08", "methodology": "Waterfall" },
{ "productId": 38, "productName": "Vipe", "productOwnerName": "Arleen Feechan", "Developers": [{}, {}, {}, {}], "scrumMasterName": "Claudio Fice", "startDate": "2022/10/27", "methodology": "Agile" },
{ "productId": 39, "productName": "Myworks", "productOwnerName": "Heinrick Willoughby", "Developers": [{}, {}, {}, {}], "scrumMasterName": "Flory Bradburn", "startDate": "2022/10/22", "methodology": "Agile" },
{ "productId": 40, "productName": "Cogilith", "productOwnerName": "Reed Fleckney", "Developers": [], "scrumMasterName": "Derrick Housecroft", "startDate": "2022/05/31", "methodology": "Agile" }];

module.exports = { Products };