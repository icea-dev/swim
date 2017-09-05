# import os
# from uu import test
#
# import zeep
# from zeep import xsd
#
# #
# # for files in os.listdir("WSDL/EUR/"):
# #
# #     try:
# #         client = zeep.Client("WSDL/EUR/"+files)
# #
# #         print("Name------------------------------------------------> :",files)
# #
# #         for message in client.wsdl.messages:
# #             print (message)
# #
# #         print(client.wsdl.dump())
# #
# #
# #     except:
# #         print("Error:",files)
#
# for files in os.listdir("WSDL/FAA/"):
#
#     try:
#
#         if "wsdl" in files :
#             client = zeep.Client("WSDL/FAA/" + files)
#             print("------------------------------------------------> :", files)
#
#             # for message in client.wsdl.dump():
#             #     # print (client.wsdl.messages.values())
#             #     print (message)
#             #
#             # for operation in client.wsdl.services.values():
#             #     print ("Operation",operation)
#
#             print(client.wsdl.services.iteritems())
#
#             print("<------------------------------------------------ :", files)
#
#         # print(client.wsdl.dump())
#
#
#     except:
#         print("Error:", files)

# client = zeep.Client("WSDL/EUR/FlightServices_OPS_19.0.0.wsdl")

# for message in client.wsdl.messages:
#     print ("Message",message)
#
# for portType in client.wsdl.port_types:
#     print ("Port-type",portType)
#
# for service in client.wsdl.services:
#     print ("Service",service)
#
# for testType in client.wsdl.types.types:
#     print ("Types",testType)

# element = client.get_element('complexType')

# print(client.wsdl.dump())

from SOAPpy import WSDL
import os

for files in os.listdir("WSDL/FAA/"):

    try:

        if "wsdl" in files :
            client = WSDL.Proxy("WSDL/FAA/" + files)
            print("------------------------------------------------> :", files)

            print(client.methods.keys())

            # for message in client.wsdl.dump():
            #     # print (client.wsdl.messages.values())
            #     print (message)
            #
            # for operation in client.wsdl.services.values():
            #     print ("Operation",operation)

            # print(client.wsdl.services.iteritems())

            print("<------------------------------------------------ :", files)

        # print(client.wsdl.dump())


    except:
        print("Error:", files)


# from SOAPpy import WSDL          1
# >>> wsdlFile = 'http://www.xmethods.net/sd/2001/TemperatureService.wsdl')
# >>> server = WSDL.Proxy(wsdlFile)    2
# >>> server.methods.keys()