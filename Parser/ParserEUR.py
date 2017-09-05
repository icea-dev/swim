from hmac import new
from re import split

import json, sys, types , csv

json_string = open("JSON/eurServicesWSDL.json").read()
parsed_json = json.loads(json_string)

with open('Output/eur_services.csv', 'w', newline='') as csvfile:

    writer = csv.writer(csvfile, delimiter='|',quotechar='|', quoting=csv.QUOTE_MINIMAL)

    writer.writerow(['Service_Name', 'Version','Version_Category','Description','Implementation_Status','Regions','Flight_Phases','Data_Stakeholders','Data_Category','Activity_Category','Data_Exchange_Standards'])


    for i in range(0, len(parsed_json.keys())):

        #Service_name
        serviceName = str(parsed_json[str(i)]["header"]["nameService"]).replace(" ","")

        # Service_Version
        try:
            serviceVersion =  str(parsed_json[str(i)]["header"]["version"])
        except:
            serviceVersion = ""

        # Version_Category
        try:
            versionCategory = parsed_json[str(i)]["header"]["versionCategory"]
        except:
            versionCategory = ""

        #Service_Description
        try:
            serviceDescription = parsed_json[str(i)]["registrationProcess"]["serviceDescription"]
        except:
            serviceDescription = ""

        #Implementation_Status
        try:
            implementationDescrition = parsed_json[str(i)]["header"]["implementStatus"]
        except:
            implementationDescrition = ""

        #Regions
        try:
            regions = parsed_json[str(i)]["atm"]["regions"]
        except:
            regions =""

        # Flight_Phases
        flightPhases = parsed_json[str(i)]["atm"]["flightPhases"]
        if len(flightPhases) > 0:
            flightPhases = flightPhases[0]
        else:
            flightPhases = ""

        # Data_Stakeholders
        try:
            dataStakeholder = parsed_json[str(i)]["atm"]["dataStakeholder"]
        except:
            dataStakeholder = ""
        #
        # Data_Category
        try:
            dataCategory = parsed_json[str(i)]["atm"]["dataCategory"]
        except:
            dataCategory = ""

        # Activity_Category
        try:
            activityCategory = parsed_json[str(i)]["atm"]["actCategory"]
        except:
            activityCategory = ""

        # Data_Exchange_Standards
        try:
            dataExchangeStandard = parsed_json[str(i)]["technicalInterface"]["dataExchangeStandards"]
        except:
            dataExchangeStandard = ""


        writer.writerow([serviceName, serviceVersion,versionCategory,serviceDescription,implementationDescrition,regions,flightPhases,dataStakeholder,dataCategory,activityCategory,dataExchangeStandard])