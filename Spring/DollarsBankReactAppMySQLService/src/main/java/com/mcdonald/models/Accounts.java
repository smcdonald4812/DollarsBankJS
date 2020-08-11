package com.mcdonald.models;

import java.util.Calendar;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Entity
@Table(name="accounts")
public class Accounts {
	@Id
	@Column(name="id", insertable = false)
	private int id;
	@Column(name = "customerid")
	private int customerid;
	@Column(name = "amount")
	private float amount;
	@Column(name = "type")
	private String type;
	@Column(name = "datecreated")
	private Date datecreated;
	public Accounts() {
		super();
	}
	public Accounts(@NotNull @NotBlank int fake, @NotNull @NotBlank int l, @NotNull @NotBlank float amount, @NotNull @ NotBlank String type) {
		this();
		this.id = fake;
		this.customerid = l;
		this.amount = amount;
		this.type = type;
		this.datecreated = Calendar. getInstance(). getTime();
	}
	public int getId() {
		return id;
	}
	public int getCustomerid() {
		return customerid;
	}
	public float getAmount() {
		return amount;
	}
	public String getType() {
		return type;
	}
	public Date getDatecreated() {
		return datecreated;
	}
	@Override
	public String toString() {
		return "Accounts [id=" + id + ", customerid=" + customerid + ", amount=" + amount + ", type=" + type
				+ ", datecreated=" + datecreated + "]";
	}
}
