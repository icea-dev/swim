package main.org.ws.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;



@Entity
public class CompanyModel {


	@Id @GeneratedValue(strategy = GenerationType.AUTO)
	private int id;

	private String name;

	//@OneToMany(cascade = CascadeType.ALL,mappedBy="company",fetch=FetchType.EAGER)
	//List<AircraftModel>listAircraft;

//	public CompanyModel() {
//		listAircraft = new ArrayList<AircraftModel>();
//	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

//	public List<AircraftModel> getListAircraft() {
//		return listAircraft;
//	}
//
//	public void setListAircraft(List<AircraftModel> listAircraft) {
//		this.listAircraft = listAircraft;
//	}
//
//	public void addAircraft(AircraftModel model){
//
//		this.listAircraft.add(model);
//	}

	@Override
	public String toString() {
		return "AirCompanyModel [id=" + id + ", name=" + name + "]";
	}





}
