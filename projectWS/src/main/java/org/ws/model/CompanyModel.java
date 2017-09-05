package org.ws.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.xml.bind.annotation.XmlElement;



@Entity
public class CompanyModel {
	
	
	@Id @GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	
	@XmlElement(required=false)
	private String name;
	
	@XmlElement(required=false)
	@OneToMany(cascade = CascadeType.ALL,mappedBy="company")
	List<AircraftModel>listAircraft;

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

	public List<AircraftModel> getListAircraft() {
		return listAircraft;
	}

	public void setListAircraft(List<AircraftModel> listAircraft) {
		this.listAircraft = listAircraft;
	}

	@Override
	public String toString() {
		return "AirCompanyModel [id=" + id + ", name=" + name + ", listAircraft=" + listAircraft + "]";
	}
	
	
	public void addAircraft(AircraftModel model){
		
		this.listAircraft.add(model);
	}
	
	
}
