CREATE DATABASE pif;

CREATE TABLE airman
(
    amn_id SERIAL PRIMARY KEY,
    rank text,
    first_name VARCHAR(40),
    last_name VARCHAR(40)
);
CREATE TABLE pif_data
(
    id SERIAL PRIMARY KEY,
    airman_id serial references airman(amn_id),
    LOC boolean,
    LOR boolean,
    LOA boolean,
    WAPS boolean,
    last_review_date TIMESTAMP
);
CREATE TABLE WAPS
(
    id SERIAL PRIMARY KEY,
    pif_data_id serial references airman(amn_id),
    time_in_service boolean,
    time_in_grade boolean,
    EPR_data boolean

);



INSERT INTO airman(rank,first_name,last_name) VALUES ('TSgt', 'Mason', 'Brakebill');
INSERT INTO airman(rank,first_name,last_name) VALUES ('MSgt', 'Jon', 'Doe');
INSERT INTO airman(rank,first_name,last_name) VALUES ('A1C', 'Super', 'Snuffy');
INSERT INTO airman(rank,first_name,last_name) VALUES ('SrA', 'Mark', 'Jiffy');
INSERT INTO pif_data(LOC,LOR,LOA,WAPS,last_review_date) VALUES(true,true,true,true,current_timestamp);
INSERT INTO pif_data(LOC,LOR,LOA,WAPS,last_review_date) VALUES(false,true,false,true,current_timestamp);
INSERT INTO pif_data(LOC,LOR,LOA,WAPS,last_review_date) VALUES(true,false,true,false,current_timestamp);
INSERT INTO pif_data(LOC,LOR,LOA,WAPS,last_review_date) VALUES(true,true,false,false,current_timestamp);
INSERT INTO WAPS(time_in_service,time_in_grade,EPR_data)VALUES(true,true,true);
INSERT INTO WAPS(time_in_service,time_in_grade,EPR_data)VALUES(true,true,true);
INSERT INTO WAPS(time_in_service,time_in_grade,EPR_data)VALUES(true,true,true);
INSERT INTO WAPS(time_in_service,time_in_grade,EPR_data)VALUES(false,true,false);