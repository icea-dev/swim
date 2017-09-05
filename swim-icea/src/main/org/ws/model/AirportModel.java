package main.org.ws.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;

@Entity
public class AirportModel {
	
	@Id @GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	
	//@XmlElement(required=false)
	private String name;
	
	//@XmlElement(required=false)
	@ManyToMany(cascade=CascadeType.ALL, mappedBy="fromTo",fetch=FetchType.EAGER)
	private List<AircraftModel>aircraftsOut;
	
	//@XmlElement(required=false)
//	@ManyToMany(cascade=CascadeType.ALL,mappedBy="goingTo",fetch=FetchType.EAGER)
//	private List<AircraftModel>aircraftsIn;
	
//	public AirportModel() {
//		
//		aircraftsOut =  new ArrayList<AircraftModel>();
//		
//		aircraftsIn = new ArrayList<AircraftModel>();
//		
//		// TODO Auto-generated constructor stub
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

//	public List<AircraftModel> getAircraftsOut() {
//		return aircraftsOut;
//	}
//
//	public void setAircraftsOut(List<AircraftModel> aircraftsOut) {
//		this.aircraftsOut = aircraftsOut;
//	}
//
//	public List<AircraftModel> getAircraftsIn() {
//		return aircraftsIn;
//	}
//
//	public void setAircrafstIn(List<AircraftModel> aircraftIn) {
//		this.aircraftsIn = aircraftIn;
//	}
//	
//	public void addAircraftOut(AircraftModel model){
//		this.aircraftsOut.add(model);
//	}
//
//	public void addAircraftIn(AircraftModel model){
//		this.aircraftsIn.add(model);
//	}

	
}
