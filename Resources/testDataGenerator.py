from random import randint as ri

names = [
"Lester Aten",  
"Fumiko Devinney",  
"Moira Hanney",  
"Jeannine Souliere",  
"Georgia Terranova",  
"Mark Utz",  
"Lindsey Soderlund",  
"Loni Vale",  
"Azzie Pelkey",  
"Kera Cranfill",  
"Keely Petsche",  
"Kitty Fresquez",  
"Al Baysinger",  
"Gale Haner",  
"Otilia Barsky",  
"Lorean Ludwig",  
"Bambi Mccants",  
"Jewel Poissant",  
"Evelyne Dewolfe",  
"Caren Reves",  
"Marcia Sawyers",  
"Marlo Orloff",  
"Aja Driggs",  
"Rocco Lobdell",  
"Seymour Ellard",  
"Andres Kalin",  
"Carolina Probst",  
"Audrey Babst",  
"Raguel Saur",  
"Estell Yearwood",  
"Stephany Weiskopf",  
"Juliette Vanzile",  
"Lona Brewington",  
"Camie Simmerman",  
"Stefania Lacey",  
"Warren Winkleman",  
"Seema Lewicki",  
"Eleanora Harnish",  
"Refugia Ing",
"Neomi Ahearn", 
"Yvone Sliva",
"Gregorio Bacon",
"Jackeline Bensen",  
"Emmitt Truehart",  
"Charles Miyamoto",  
"Jettie Shkreli", 
"Tillie Endsley",  
"Siobhan Haake",
"Danna Manuelito",  
"Kasi Gainey" 
]

def rdg(entries, parameterCount):
    for k in range(0, entries):
        base = "INSERT INTO `formdata` (`id`, `code`, `responsejson`) VALUES (NULL, 'abcdef', '{ \"name\" : "
        aftername = ", \"contact\" :"
        aftercontact = ", \"g\" : -1, \"c\" : -1, \"answers\" : [], \"data\" :"
        base2 = "}');"
        a = []
        name = names[ri(0, len(names) - 1)];
        for i in range(0, parameterCount):
            a.append(ri(0, 101)/100)
        print(base, "\"",name, "\"",aftername, "\"",name[0:5].replace(" ","4"),"@rpi.edu","\"", aftercontact, str(a), base2, sep = "")
