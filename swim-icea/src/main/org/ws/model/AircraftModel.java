package main.org.ws.model;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;

@XmlAccessorType(XmlAccessType.FIELD)
@Entity
public class AircraftModel {

	@Id @GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	
	private String model;
	
	private String icao;
	
	private float speed;
	
	@ManyToOne(cascade=CascadeType.ALL)
	private CompanyModel company;
	
	@ManyToOne(cascade= CascadeType.ALL,fetch=FetchType.EAGER)
	private ManufacturerModel manufacturer;
	
	@ManyToMany(cascade= CascadeType.ALL,fetch=FetchType.EAGER)
	private AirportModel goingTo;

	@ManyToMany(cascade= CascadeType.ALL,fetch=FetchType.EAGER)
	private AirportModel fromTo;
	
	public CompanyModel getCompany() {
		return company;
	}
	public void setCompany(CompanyModel company) {
		this.company = company;
	}
	public AirportModel getGoingTo() {
		return goingTo;
	}
	public void setGoingTo(AirportModel goingTo) {
		this.goingTo = goingTo;
	}
	public AirportModel getFromto() {
		return fromTo;
	}
	public void setFromto(AirportModel fromto) {
		this.fromTo = fromto;
	}
	public ManufacturerModel getManufacturer() {
		return manufacturer;
	}
	public void setManufacturer(ManufacturerModel manufacturer) {
		this.manufacturer = manufacturer;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getModel() {
		return model;
	}
	public void setModel(String model) {
		this.model = model;
	}
	public String getIcao() {
		return icao;
	}
	public void setIcao(String icao) {
		this.icao = icao;
	}
	public float getSpeed() {
		return speed;
	}
	public void setSpeed(float speed) {
		this.speed = speed;
	}
	@Override
	public String toString() {
		return "AircraftModel [id=" + id + ", model=" + model + ", icao=" + icao + ", speed=" + speed + "]";
	}
}