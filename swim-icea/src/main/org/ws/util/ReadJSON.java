package main.org.ws.util;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.URL;
import java.net.URLConnection;
import java.util.HashMap;
import java.util.Map;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;

public class ReadJSON {


	public  Map<String, Object> readJSONFromUrl(String url) throws Exception{

		String json = readUrl(url);

		return (HashMap<String, Object>)readJSON(json);
	}

	//************************************************************************************************************************


	private  String readUrl(String urlString) throws Exception {
		BufferedReader reader = null;
		try {

			URL url = new URL(urlString);
			URLConnection urlConn = url.openConnection();
			urlConn.setRequestProperty("User-Agent", "Mozilla/5.0");
			reader = new BufferedReader(new InputStreamReader(urlConn.getInputStream()));

			StringBuffer buffer = new StringBuffer();
			int read;

			char[] chars = new char[1024];
			while ((read = reader.read(chars)) != -1)
				buffer.append(chars, 0, read); 

			return buffer.toString();
		} finally {
			if (reader != null)
				reader.close();
		}

	}

	//************************************************************************************************************************

	public HashMap<String, Object>readJSON(String value) throws JsonParseException, JsonMappingException, IOException{

		Gson gson =  new Gson();

		/*Map< String, Object > decoded =
				gson.fromJson(
						value,
						new TypeToken< HashMap< String, Object>>() {}.getType());*/
		
		HashMap<String,Object> decoded =
		        new ObjectMapper().readValue(value, HashMap.class);
		
		
		return (HashMap<String, Object>) decoded;   
	}

	//************************************************************************************************************************


}
