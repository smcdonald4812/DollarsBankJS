package com.mcdonald.models;

import java.util.Calendar;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Entity
@Table(name="transaction")
public class Transaction {
//	@GeneratedValue//(strategy = GenerationType.AUTO)
	@Id
	@Column(name="id", insertable = false)
	private int id;
	@Column(name = "customertransactionid")
	private int customertransactionid;
	@Column(name = "accounttransactionid")
	private int accounttransactionid;
	@Column(name = "amount")
	private float amount;
	@Column(name = "startamount")
	private float startamount;
	@Column(name = "endamount")
	private float endamount;
	@Column(name = "type")
	private String type;
	@Column(name = "datecreated")
	private Date datecreated;
	public Transaction() {
		super();
	}
	public Transaction(@NotNull @NotBlank int fake, @NotNull @NotBlank int customerTransactionId, @NotNull @NotBlank int accountTransactionId,
			@NotNull @NotBlank float amount, @NotNull @NotBlank float startAmount, @NotNull @NotBlank float endAmount,
			@NotNull @ NotBlank String type) {
		this();
		this.id = fake;
		this.customertransactionid = customerTransactionId;
		this.accounttransactionid = accountTransactionId;
		this.amount = amount;
		this.startamount = startAmount;
		this.endamount = endAmount;
		this.type = type;
		this.datecreated = Calendar. getInstance(). getTime();
	}
	public int getId() {
		return id;
	}
	public int getCustomertransactionid() {
		return customertransactionid;
	}
	public int getAccounttransactionid() {
		return accounttransactionid;
	}
	public float getAmount() {
		return amount;
	}
	public float getStartamount() {
		return startamount;
	}
	public float getEndamount() {
		return endamount;
	}
	public String getType() {
		return type;
	}
	public Date getDatecreated() {
		return datecreated;
	}
	@Override
	public String toString() {
		return "Transaction [id=" + id + ", customertransactionid=" + customertransactionid + ", accounttransactionid="
				+ accounttransactionid + ", amount=" + amount + ", startamount=" + startamount + ", endamount="
				+ endamount + ", type=" + type + ", datecreated=" + datecreated + "]";
	}
}
