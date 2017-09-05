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
public class ManufacturerModel {
	
	@Id @GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	
	@XmlElement(required=false)
	private String name;
	
	@XmlElement(required=false)
	@OneToMany(cascade=CascadeType.ALL,mappedBy="manufacturer")
	private List<AircraftModel>aircrafts;

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

	public List<AircraftModel> getAircrafts() {
		return aircrafts;
	}

	public void setAircrafts(List<AircraftModel> aircrafts) {
		this.aircrafts = aircrafts;
	}

	@Override
	public String toString() {
		return "ManufacturerModel [id=" + id + ", name=" + name + ", aircrafts=" + aircrafts + "]";
	}
	
	public void AddAircraft(AircraftModel model){
		this.aircrafts.add(model);
	}	
}
