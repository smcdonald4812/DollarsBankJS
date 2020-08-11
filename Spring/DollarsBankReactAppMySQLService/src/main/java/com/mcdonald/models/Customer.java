package com.mcdonald.models;

import java.util.Calendar;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="customer")
public class Customer {
//	//@GeneratedValue(strategy = GenerationType.AUTO)
	@Id
	@Column(name="id", insertable = false)
	private int id;
	@Column(name = "firstname")
	private String firstname;
	@Column(name = "lastname")
	private String lastname;
	@Column(name = "username")
	private String username;
	@Column(name = "password")
	private String password;
	@Column(name = "country")
	private String country;
	@Column(name = "mobile")
	private String mobile;
	@Column(name = "datecreated")
	private Date datecreated = Calendar. getInstance(). getTime();
	public Date getDatecreated() {
		return datecreated;
	}
	public int getId() {
		return id;
	}
	public String getFirstname() {
		return firstname;
	}
	public String getLastname() {
		return lastname;
	}
	public String getUsername() {
		return username;
	}
	public String getPassword() {
		return password;
	}
	public String getCountry() {
		return country;
	}
	public String getMobile() {
		return mobile;
	}
	@Override
	public String toString() {
		return "Customer [id=" + id + ", firstname=" + firstname + ", lastname=" + lastname + ", username=" + username
				+ ", password=" + password + ", country=" + country + ", mobile=" + mobile + "]";
	}
}
