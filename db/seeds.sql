use duet;

insert into Bands (band_name, instrument_seeking, band_genre, band_link,createdAt, updatedAt)
values ("Spot", "drums", "none", "lo@yahoo.com",CURDATE(), CURDATE());


insert into Musicians (musician_name, instrument_playing, musician_genre, musician_link,createdAt, updatedAt)

values ("ben", "guitar","rock", "l@gmail.com",CURDATE(), CURDATE());


insert into users (UserName, Email,Password,createdAt, updatedAt)

values ("Wendi", "Eric", "Ericishere",CURDATE(), CURDATE());


-- insert into authentication (userid, password)
-- values ("Puppies", 1234);