package main.org.ws.data.importer;

import java.util.ArrayList;
import java.util.HashMap;

import javax.persistence.EntityManager;

import main.org.ws.config.JPAConfiguration;
import main.org.ws.daos.AircraftDao;
import main.org.ws.daos.AirportDao;
import main.org.ws.daos.CompanyDao;
import main.org.ws.model.AircraftModel;
import main.org.ws.model.AirportModel;
import main.org.ws.model.CompanyModel;
import main.org.ws.model.ManufacturerModel;
import main.org.ws.util.ReadJSON;

public class UpdaloadData {

	EntityManager entityManager;

	AircraftDao daoAircraft;

	CompanyDao daoCompany;

	AirportDao daoAirport;

	public UpdaloadData(String url) {


		entityManager = JPAConfiguration.getEntityManager("wsteste");

		daoAircraft = new AircraftDao();

		daoAircraft.setEntityManager(entityManager);

	}

	public Boolean saveAircraft(HashMap<String, Object>data){

		AircraftModel model =  new AircraftModel();

		CompanyModel comModel =  new CompanyModel();

		comModel.setName((String)data.get("Op"));

		model.setCompany(comModel);

		AirportModel portFromModel = new AirportModel();

		portFromModel.setName((String)data.get("From"));

		model.setFromto(portFromModel);

		AirportModel portToModel = new AirportModel();

		portFromModel.setName((String)data.get("To"));

		model.setGoingTo(portToModel);

		model.setIcao((String) data.get("Icao"));
		
		ManufacturerModel manufacturer = new ManufacturerModel();
		
		manufacturer.setName((String)data.get("Man"));
		
		model.setManufacturer(manufacturer);
		
		model.setModel((String)data.get("Mdl"));
		
		model.setSpeed(Float.valueOf((String)data.get("Spd")));
		
		
		return true;
	}

	public Boolean saveAirport(HashMap<String, Object>data){



		return true;
	}

	public Boolean saveCompany(HashMap<String, Object>data){


		return true;
	}


	public static void main(String[] args) throws Exception{


		String url  = "https://public-api.adsbexchange.com/VirtualRadar/AircraftList.json";

		ReadJSON reader = new ReadJSON();

		HashMap<String, Object>adsb = (HashMap<String, Object>) reader.readJSONFromUrl(url);

		System.out.println("SIZE "+adsb.size());

		ArrayList<Object>dataAdsb = (ArrayList<Object>)adsb.get("acList"); 

		System.out.println("TAMANHO "+dataAdsb.size());

		for(int i = 0; i <dataAdsb.size(); i++){

			HashMap<String, Object>air = (HashMap<String, Object>)dataAdsb.get(i);

			System.out.println(air.get("Cou"));

		}

		System.out.println("FIM");
	}


}
