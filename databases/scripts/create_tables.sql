--create m_hospital table
drop table if exists m_hospital cascade;
CREATE TABLE IF NOT EXISTS m_hospital (
    id SERIAL not NULL,
    name VARCHAR(50) NOT NULL,
    description VARCHAR(100) NULL,
    country VARCHAR(50) NULL,
    address VARCHAR(1000) NULL,
    phone VARCHAR(20) NULL,
    email VARCHAR(50) NULL,
    create_date timestamp not null DEFAULT now(),
    modify_date timestamp not null DEFAULT now(),
    constraint pk_hospital primary key (id)
);

--create M_Department table
drop table if exists m_department cascade;
CREATE TABLE IF NOT EXISTS m_department (
    id SERIAL not null,
    name VARCHAR(50) NOT NULL,
    phone VARCHAR(20) NULL,
    hosp_id int NULL,
    create_date timestamp not null DEFAULT now(),
    modify_date timestamp not null DEFAULT now(),
    constraint pk_department primary key (id),
    constraint fk_hospital_department foreign key(hosp_id) references m_hospital(id)
);

--create M_Patient table
drop table if exists m_patient cascade;
CREATE TABLE IF NOT EXISTS m_patient(
    id SERIAL not null,
	code VARCHAR(50) NOT null,
	first_name VARCHAR(50) NOT null,
	last_name VARCHAR(50) NOT null,
	dob date,
	gender varchar(2),
	address VARCHAR(1000),
	phone VARCHAR(50),
	email VARCHAR(50),
	insurance_info VARCHAR(1000),
	medical_history VARCHAR(1000),
    create_date timestamp not null DEFAULT now(),
    modify_date timestamp not null DEFAULT now(),
    constraint pk_patient primary key (id)
);

--create m_medicine table
drop table if exists m_medicine cascade;
CREATE TABLE IF NOT EXISTS m_medicine(
    id SERIAL not null,
    name VARCHAR(50) NOT null,
	type VARCHAR(50),
	price numeric(19, 6),
	input_date date not null,
	exp_date date not null,
    constraint pk_medicine primary key (id)
);

--create M_Disease table
drop table if exists m_disease;
CREATE TABLE IF NOT EXISTS m_disease(
    id SERIAL not NULL,
    name VARCHAR(50) NOT null,
    create_date timestamp not null DEFAULT now(),
    modify_date timestamp not null DEFAULT now(),
    constraint pk_disease primary key (id)
);

--create H_Appointment table
drop table if exists h_appointment;
CREATE TABLE IF NOT EXISTS h_appointment(
    id SERIAL not null,
    appoint_date date not null,
	patient_id int,
	status VARCHAR(50),
    create_date timestamp not null DEFAULT now(),
    modify_date timestamp not null DEFAULT now(),
    constraint pk_appointment primary key (id),
    constraint fk_patient_appointment foreign key(patient_id) references m_patient (id)
);

--create H_Examination table
drop table if exists h_examination;
CREATE TABLE IF NOT EXISTS h_examination(
	patient_id int not null,
	dep_id int not null,
	constraint pf_examination primary key (patient_id, dep_id),
    constraint fk_patient_examination foreign key(patient_id) references m_patient (id),
    constraint fk_department_examination foreign key(dep_id) references m_department (id)
);

--create H_Billing table
drop table if exists h_billing;
CREATE TABLE IF NOT EXISTS h_billing(
	id serial not null,
	billing_date date not null,
	patient_id int,
	medicine_id int,
	quantity int,
	amount numeric(19,6),
	duration int,
	dosage_per_day int,
    constraint pk_billing primary key (id),
    constraint fk_patient_billing foreign key(patient_id) references m_patient (id),
    constraint fk_medicine_billing foreign key(medicine_id) references m_medicine (id)
);
