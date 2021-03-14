use heroku_e62224d990107c0;

insert into Bands (band_name, instrument_seeking, band_genre, band_link,createdAt, updatedAt)
values("Hit N Run", "drums", "none", "lo@yahoo.com",CURDATE(), CURDATE()),
      ("Josie and the Pussycats", "bass", "pop punk", "josie@aol.com",CURDATE(), CURDATE()),
      ("The Wonders", "drums", "oldies", "oneders@gmail.com",CURDATE(), CURDATE());

insert into Musicians (musician_name, instrument_playing, musician_genre, musician_link,createdAt, updatedAt)

values ("ben", "guitar","rock", "l@gmail.com",CURDATE(), CURDATE()),
        ("Flea", "bass","funk", "flea@gmail.com",CURDATE(), CURDATE()),
        ("Brendan C", "drums","punk", "BCanty@gmail.com",CURDATE(), CURDATE());


insert into users (UserName, Email,Password,createdAt, updatedAt)

values ("Wendi", "Eric@gmail.com", "Ericishere",CURDATE(), CURDATE()),
        ("Jordan", "JB@aol.com", "password1",CURDATE(), CURDATE()),
        ("Lauren L", "LL@gmail.com", "password2",CURDATE(), CURDATE());