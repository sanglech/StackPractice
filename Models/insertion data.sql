CREATE TABLE Anime  
(  
 aID int IDENTITY(1,1),  
 aName varchar (255),  
 jName varchar(255),  
 genre varchar(255),
 watched char  
);  

INSERT INTO Anime (aName ,jName,genre,watched)
VALUES
    (
    'My Hero Acadamia',
    'Boku no hero acadamia',
    'Shonen',
    'Y'
    ),

    (
    'Wotakoi: Love is difficult for an otaku',
    'Wotakoi ni koi wa muzukashi',
    'Slice of life',
    'Y'
    ),

    (
    'Demons Slayer',
    'Kimetsu no yaiba',
    'Shonen',
    'Y'
    ),

    (
    'Haikyuu!!',
    'Haikyuu!!',
    'Shonen',
    'Y'
    ),

    (
    'Your Lie in April',
    'Shigatsu wa Kimi no Uso',
    'Slice of Life',
    'Y'
    ),
    (
    'Sailor Moon',
    'Sailor moon',
    'Magical Girl',
    'Y'
    );