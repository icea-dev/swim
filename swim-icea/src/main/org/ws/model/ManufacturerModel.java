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
public class ManufacturerModel {
	
	@Id @GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	
	private String name;
	
//	@OneToMany(cascade=CascadeType.ALL,mappedBy="manufacturer",fetch=FetchType.EAGER)
//	private List<AircraftModel>aircrafts;
	
//	public ManufacturerModel() {
//		aircrafts =  new ArrayList<AircraftModel>();
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

//	public List<AircraftModel> getAircrafts() {
//		return aircrafts;
//	}
//
//	public void setAircrafts(List<AircraftModel> aircrafts) {
//		this.aircrafts = aircrafts;
//	}
//	public void AddAircraft(AircraftModel model){
//		this.aircrafts.add(model);
//	}	

	@Override
	public String toString() {
		return "ManufacturerModel [id=" + id + ", name=" + name + "]";
	}
	
	
}
