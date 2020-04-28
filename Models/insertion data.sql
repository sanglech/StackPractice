CREATE TABLE Anime  
(  
 aID int IDENTITY(1,1),  
 aName varchar (255),  
 jName varchar(255),  
 genre varchar(255),
 watched char ,
 imgSrc varchar (255) 
);  

INSERT INTO Anime (aName ,jName,genre,watched)
VALUES
    (
    'My Hero Acadamia',
    'Boku no hero acadamia',
    'Shonen',
    'Y',
    'https://upload.wikimedia.org/wikipedia/en/c/cb/Mhacharacters.jpg'
    ),

    (
    'Wotakoi: Love is difficult for an otaku',
    'Wotakoi ni koi wa muzukashi',
    'Slice of life',
    'Y',
    'https://i2.wp.com/sequentialplanet.com/wp-content/uploads/2018/06/Wotaku-ni-Koi-wa-Muzukashii-Season-2-release-date-WotaKoi-Love-is-Hard-for-Otaku-manga-compared-to-the-anime-Spoilers.jpg?fit=800%2C450&ssl=1'
    ),

    (
    'Demons Slayer',
    'Kimetsu no yaiba',
    'Shonen',
    'Y',
    'https://thebuzzpaper.com/wp-content/uploads/2020/04/Demon-Slayer-Season-2-release-date-Kimetsu-no-Yaiba-manga-compared-to-the-anime-Spoilers-696x392.jpg'
    ),

    (
    'Haikyuu!!',
    'Haikyuu!!',
    'Shonen',
    'Y',
    'https://thedeadtoons.com/wp-content/uploads/2020/03/Haikyuu-Season-5-release-date-Haikyuu-To-The-Top-Season-2-Part-2-summer-2020.jpg'
    ),

    (
    'Your Lie in April',
    'Shigatsu wa Kimi no Uso',
    'Slice of Life',
    'Y',
    'https://manga.tokyo/wp-content/uploads/2016/05/1920x1280.jpg'
    ),
    (
    'Sailor Moon',
    'Sailor moon',
    'Magical Girl',
    'Y',
    'https://dw9to29mmj727.cloudfront.net/promo/2016/5257-SeriesHeaders_SMv3_2000x800.jpg'
    );