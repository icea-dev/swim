package main.org.ws.controller;

import javax.jws.WebMethod;
import javax.jws.WebResult;
import javax.jws.WebService;

import javax.xml.ws.*;

import main.org.ws.service.AircraftWS;



public class HomeController {

	@SuppressWarnings("restriction")
	@WebMethod(operationName="index")
	@WebResult(name="resultado")
	public void index(){
		
		AircraftWS aircraftWS =  new AircraftWS();
		
		String urlData = "http://localhost:8080/projectWS/aircraftData";
		
		Endpoint e = Endpoint.create(aircraftWS);
		
		Endpoint.publish(urlData, aircraftWS);
		
		e.publish(urlData);
		
	}
}
