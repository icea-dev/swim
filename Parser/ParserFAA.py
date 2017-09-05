from hmac import new
from re import split

import json, sys, types , csv

json_string = open("JSON/faaServicesUp05.json").read()
parsed_json = json.loads(json_string)

with open('Output/faa_servicesUp05_001.csv', 'w', newline='') as csvfile:

    writer = csv.writer(csvfile, delimiter='|',quotechar='|', quoting=csv.QUOTE_MINIMAL)
    # writer.writerow(['Service_Name','Version','Service_Desc','Security_Desc','Impl_Name','Impl_Desc','Service_Category','Service_Critical_Lvl','Atm_Service_Category','Messaging_Mode','LifeCicleStage','InterfaceType','ServiceProviderName'])

    # writer.writerow(['Service_Name','Service_Desc', 'Impl_Name','Impl_Desc' ,'Version','Service_Category','Atm_Service_Category','Messaging_Mode','LifeCicleStage','InterfaceType','ServiceProviderName','DataName','DataModel','DataDescription','messageName','messageDescription','direction'])

    writer.writerow(['Service_Name','Service_Category','Atm_Service_Category','messageName', 'messageDescription', 'direction'])

    for i in range(0, len(parsed_json.keys())):

        try:
            serviceName = str(parsed_json[str(i)]["header"]["serviceName"][0]).replace(" ","")
        except:
            serviceName = "none"

        try:
            serviceVersion = parsed_json[str(i)]["header"]["serviceVersion"]
        except:
            serviceVersion = "none"

        try:
            serviceDescription = parsed_json[str(i)]["header"]["serviceDescription"]
        except:
            serviceDescription = "none"

        # Security
        try:
            securityDescription = parsed_json[str(i)]["security"]["securityDescription"]
        except:
            securityDescription = "none"

        #Implementation
        try:
            implementationDescrition = parsed_json[str(i)]["implementation"]["implementationDescrition"]
        except:
            implementationDescrition = "none"

        try:
            implementationName = parsed_json[str(i)]["implementation"]["implementationName"]
        except:
            implementationName = "none"

        #Header
        try:
            serviceCategory = parsed_json[str(i)]["header"]["serviceCategory"]
        except:
            serviceCategory = "none"

        try:
            atmServiceCategory = parsed_json[str(i)]["header"]["atmServiceCategory"]
        except:
            atmServiceCategory = "none"

        try:
            messagingMode = parsed_json[str(i)]["header"]["messagingMode"]
        except:
            messagingMode = "none"

        try:
            lifeCicleStage = parsed_json[str(i)]["header"]["lifeCicleStage"]
        except:
            lifeCicleStage = "none"

        try:
            interfaceType = parsed_json[str(i)]["header"]["interfaceType"]
        except:
            interfaceType = "none"

        # Provider
        try:
            serviceProviderName = parsed_json[str(i)]["provider"]["serviceProviderName"]
        except:
            serviceProviderName = "none"

        try:
            serviceCriticalLevel = parsed_json[str(i)]["header"]["serviceCriticalLevel"]
        except:
            serviceCriticalLevel = "none"

        try:
            atmServiceCategory = parsed_json[str(i)]["header"]["atmServiceCategory"]
        except:
            atmServiceCategory = "none"

        try:
            serviceCategory = parsed_json[str(i)]["header"]["serviceCategory"]
        except:
            serviceCategory = "none"

        try:
            serviceProviderName = parsed_json[str(i)]["provider"]["serviceProviderName"]
        except:
            serviceProviderName = "none"

        try:
            dataName = parsed_json[str(i)]["data"]["dataName"]
        except:
            dataName = "none"

        try:
            dataModel = parsed_json[str(i)]["data"]["exchangeModel"]
        except:
            dataModel = "none"

        try:
            dataDesc = parsed_json[str(i)]["data"]["dataDescription"]
        except:
            dataDesc = "none"

        # try:
        #     messageName = parsed_json[str(i)]["serviceInterface"]["messageName"]
        # except:
        #     messageName = "none"
        #
        # try:
        #     messageDescription = parsed_json[str(i)]["serviceInterface"]["messageDescription"]
        # except:
        #     messageDescription = "none"
        #
        # try:
        #     messageDirection = parsed_json[str(i)]["serviceInterface"]["direction"]
        # except:
        #     messageDirection = "none"

        try:
            messageNameV = parsed_json[str(i)]["serviceInterface"]["messageName"]
            messageDescriptionV = parsed_json[str(i)]["serviceInterface"]["messageDescription"]
            messageDirectionV = parsed_json[str(i)]["serviceInterface"]["direction"]

            if(len(messageNameV) > 0):
                for y in range(0, len(messageNameV)):
                    messageName = messageNameV[y]
                    messageDescription = messageDescriptionV[y]
                    messageDirection = messageDirectionV[y]
                    writer.writerow([serviceName,serviceCategory , atmServiceCategory , messageName, messageDescription, messageDirection])
            else:
                writer.writerow([serviceName,serviceCategory , atmServiceCategory, messageName, messageDescription, messageDirection])


        except:
            messageDirection = "none"


        # writer.writerow([serviceName, serviceDescription, implementationName , implementationDescrition , serviceVersion,serviceCategory,
        #                  atmServiceCategory,messagingMode,lifeCicleStage,interfaceType,serviceProviderName,dataName,dataModel,dataDesc,
        #                  messageName,messageDescription,messageDirection])
        # writer.writerow([serviceName,messageName,messageDescription,messageDirection])